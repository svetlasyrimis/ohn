import { api } from './api-helper';

export const createTask = async (projectId, data) => {
  const resp = await api.post(`/projects/${projectId}/tasks`, { ...data, project_id: projectId });
  
  return resp.data;
};

export const getTasks = async (projectId) => {
  const resp = await api.get(`/projects/${projectId}/tasks`);
  
  return resp.data
}

export const destroyTask = async (projectId, id) => {
  const resp = await api.delete(`/projects/${projectId}/tasks/${id}`);
  return resp.data
}

export const updateTask = async(projectId, id, data) => {
  const resp = await api.put(`/projects/${projectId}/tasks/${id}`, data);
  // debugger;
  return resp.data;
}