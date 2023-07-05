import axios from "axios";

interface IErrorCustom extends Error {
  mockData?;
  config?;
  code?;
}

let mockingEnabled = false;

const mocks = {};

export function addMock(url, data) {
  mocks[url] = data;
}

export function enableMocking(state) {
  mockingEnabled = state;
}

const isUrlMocked = (url) => url in mocks;

const getMockError = (config) => {
  const mockError: IErrorCustom = new Error();
  mockError.mockData = mocks[config.url];
  mockError.config = config;
  return Promise.reject(mockError);
};

const isMockError = (error) => Boolean(error.mockData);

const getMockResponse = (mockError) => {
  const { mockData, config } = mockError;
  // Handle mocked error (any non-2xx status code)
  if (mockData.status && String(mockData.status)[0] !== "2") {
    const err: IErrorCustom = new Error(mockData.message || "mock error");
    err.code = mockData.status;
    return Promise.reject(err);
  }
  // Handle mocked success
  return Promise.resolve(
    Object.assign(
      {
        data: {},
        status: 200,
        statusText: "OK",
        headers: {},
        config,
        isMock: true,
      },
      mockData
    )
  );
};

/* Intercepting the request and if the request is mocked, it will return a mock error. */
axios.interceptors.request.use(
  (config) => {
    if (mockingEnabled && isUrlMocked(config.url)) {
      // Is necessary this log for compare with #38 in communicationServices.trait.ts both print should be the same url.
      // console.log('axios mocking ' + config.url);
      return getMockError(config);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* Intercepting the response and if the response is mocked, it will return a mock response. */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isMockError(error)) {
      return getMockResponse(error);
    }
    return Promise.reject(error);
  }
);
