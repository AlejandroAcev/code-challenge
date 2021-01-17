// Map all the project urls

export const usersURL = '/users';

const PROJECT_URLS = [
  usersURL,
] as const;
type ProjectURLValues = typeof PROJECT_URLS;
export type ProjectEndpoint = ProjectURLValues[number];
