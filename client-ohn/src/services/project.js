import { api } from './api-helper';

export const createProject = async (data) => {
  const resp = await api.post(`/projects`, data);
  return resp.data
};

export const getProjects = async () => {
  const resp = await api.get(`/projects`);
  return resp.data
}

export const deleteProject = async (id) => {
  const resp = await api.delete(`/projects/${id}`);
  return resp.data
}

export const showProject = async (id) => {
  const resp = await api.get(`/projects/${id}`)
  return resp.data
}