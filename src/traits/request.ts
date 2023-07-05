import { addMock, enableMocking } from "@helpers/mockAxios.helper";
import axios from "axios";
import * as dotenv from "dotenv";

import { responseServicesMock } from "../mocks/responseServices.mock";

dotenv.config();

export enum HttpMethods {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export class RequestClass {
  private configMocks = (url) => {
    addMock(url, { data: responseServicesMock(url) });

    enableMocking(process.env.NODE_ENV === "test");
  };

  async makeRequest(
    service: string,
    method: HttpMethods,
    resource: string,
    data,
    headers
  ) {
    try {
      const urlReports = process.env.URL_REPORTES_PILA;

      const getUrl: { [key: string]: string } = {
        [urlReports]: urlReports,
      };

      const baseUrl = process.env.URL_PILA;

      const url = [urlReports].some((url) => url === service)
        ? `${getUrl[service]}/${resource}`
        : `${baseUrl}/${service}/api/${resource}`;
      this.configMocks(url);
      const response = await axios({
        method,
        url,
        data,
        headers,
      });
      return response.data;
    } catch (e) {
      return e.response;
    }
  }
}
