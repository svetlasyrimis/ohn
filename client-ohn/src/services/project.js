import { api } from './api-helper';

export const createProject = async (data) => {
  const resp = await api.post(`/projects`, data);
  console.log(resp)
  return resp.data
};

export const getProjects = async () => {
  const resp = await api.get(`/projects`);
  console.log(resp.data)
  return resp.data
}

export const deleteProject = async (id) => {
  const resp = await api.delete(`/projects/${id}`);
  return resp.data
}