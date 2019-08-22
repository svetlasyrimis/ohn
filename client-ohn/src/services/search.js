import { api } from './api-helper';


export const searchForProjects = async (params) => {
  const resp = await api.get(`/projects/search/${params}`);
  
  return resp.data
}

export const becomeCollaborator = async (projectId) => {
  const resp = await api.post(`/collaborator/${projectId}`);
  return resp.data
};

export const removeCollaborator = async (projectId) => {
  const resp = await api.delete(`/collaborators/${projectId}`);
  return resp.data
}