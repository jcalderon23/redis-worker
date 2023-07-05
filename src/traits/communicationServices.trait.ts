import { addMock, enableMocking } from "@helpers/mockAxios.helper";
import axios from "axios";
import * as dotenv from "dotenv";

import { responseServicesMock } from "../mocks/responseServices.mock";
import { IGenericRecord } from "../models/genericRecord.model";

dotenv.config();

export enum HttpMethods {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export enum Services {
  EMPLOYER = "employer",
  EMPLOYEE = "employee",
  NOVELTY = "novelty",
  UTILS = "utils",
  PAYSLIP = "payslip",
}

export class CommunicationServicesClass {
  private configMocks = (url) => {
    addMock(url, { data: responseServicesMock(url) });

    enableMocking(process.env.NODE_ENV === "test");
  };

  async makeRequest(
    method: HttpMethods,
    service: Services,
    resource: string,
    data: IGenericRecord | IGenericRecord[] = [],
    headers: IGenericRecord = {}
  ) {
    try {
      const url = `${process.env.URL_GATEWAY}/${service}/${resource}`;
      this.configMocks(url);
      const response = await axios({
        method,
        url,
        data,
        headers,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
