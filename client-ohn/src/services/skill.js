import { api } from './api-helper';

export const createSkill = async (userId, data) => {
  const resp = await api.post(`/users/${userId}/skills`, {...data, user_id: userId});
  return resp.data;
};

export const getSkills = async (userId) => {
  const resp = await api.get(`/users/${userId}/skills`);
  return resp.data
}

export const destroySkill = async(userId, id) => {
  await api.delete(`/users/${userId}/skills/${id}`);
} 