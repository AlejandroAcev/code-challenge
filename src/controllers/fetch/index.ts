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

export const fetchRequest = async <T>(
  endpoint: ProjectEndpoint,
  method?: Method,
  bodyContent?: {},
): Promise<T | null> => {
  const apiUrl = process.env.REACT_APP_API_URL;
  
  if (!apiUrl) {
    console.log(apiUrl)
    console.error(getErrorMessage(ENV_ERROR));
    return null;
  }

  const url = apiUrl + endpoint;
  const headers = getHeaders(method);
  const body = bodyContent && parseBody(bodyContent);

  const request = await fetch(url, { headers, body });
  const requestStatus = request.ok;

  if (requestStatus) {
    return await request.json();
  }

  console.error(getErrorMessage(REQUEST_ERROR));
  return null;
  
}