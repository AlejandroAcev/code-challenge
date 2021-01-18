// Map all the project urls

export const USERS_ENDPOINT = '/users';

const PROJECT_URLS = [
  USERS_ENDPOINT,
] as const;
type ProjectURLValues = typeof PROJECT_URLS;
export type ProjectEndpoint = ProjectURLValues[number];
