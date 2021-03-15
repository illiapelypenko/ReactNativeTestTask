import { BASE_URL } from './constants/api';

export const fetchData = async (pathname: string) => {
  const response = await fetch(BASE_URL + pathname);

  return response;
};
