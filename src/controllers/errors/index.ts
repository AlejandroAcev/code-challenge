import { DEFAULT_ERROR } from "./messages";

interface ErrorMessage {
  code: number;
  message: string;
}

export const getErrorMessage = (errorMessage?: ErrorMessage): string => {
  const errorValue = errorMessage ? errorMessage : DEFAULT_ERROR;
  return JSON.stringify(errorValue);
}

 