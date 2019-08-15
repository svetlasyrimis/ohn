import { api } from './api-helper';


export const searchForProjects = async (params) => {
  const resp = await api.get(`/projects/search/${params}`);
  debugger;
  return resp.data
}