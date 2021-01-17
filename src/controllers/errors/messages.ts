const DEFAULT_ERROR_CODE: number = 1;
const DEFAULT_ERROR_MESSAGE: string = 'ERROR: Something went wrong';

interface ErrorMessage {
  code: number;
  message: string;
}

export const DEFAULT_ERROR: ErrorMessage = {
  code: DEFAULT_ERROR_CODE,
  message: DEFAULT_ERROR_MESSAGE,
};

export const ENV_ERROR: ErrorMessage = {
  code: 2,
  message: 'ERROR: Some key is missing in the .env file',
};

export const REQUEST_ERROR: ErrorMessage = {
  code: 3,
  message: 'ERROR: Something went wrong in the request',
};
