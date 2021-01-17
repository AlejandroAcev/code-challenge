// Fetch controller

import { getErrorMessage } from "../errors";
import { ENV_ERROR, REQUEST_ERROR } from "../errors/messages";
import { ProjectEndpoint } from "../url";

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const getHeaders = (methodType?: Method) => {
  const method = methodType ? methodType : 'GET';
  return { 
    'method': method,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
}

const parseBody = (content: {}) => JSON.stringify(content);

export interface FetchRequest {
  url: ProjectEndpoint;
  method?: Method;
  body?: {};
}

export const fetchRequest = async (endpoint: ProjectEndpoint, method?: Method, bodyContent?: {}) => {
  const apiUrl = process.env.API_URL;
  
  if (!apiUrl) {
    throw getErrorMessage(ENV_ERROR);
  }

  const url = apiUrl + endpoint;
  const headers = getHeaders(method);
  const body = bodyContent && parseBody(bodyContent);

  const request = await fetch(url, { headers, body });
  const requestStatus = request.ok;

  if (requestStatus) {
    return request.json();
  }

  throw getErrorMessage(REQUEST_ERROR);
  
}