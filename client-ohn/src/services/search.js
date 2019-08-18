import { api } from './api-helper';


export const searchForProjects = async (params) => {
  const resp = await api.get(`/projects/search/${params}`);
  
  return resp.data
}

export const becomeCollaborator = async (projectId) => {
  const resp = await api.post(`/collaborator/${projectId}`);
  console.log(resp)
  return resp.data
};