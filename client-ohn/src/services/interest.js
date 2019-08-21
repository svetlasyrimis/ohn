import { api } from './api-helper';

export const createInterest = async (userId, data) => {
  const resp = await api.post(`/users/${userId}/interests`, { ...data, user_id: userId });
  // debugger
  console.log(resp.data)
  return resp.data;
};

export const getInterests = async (userId) => {
  const resp = await api.get(`/users/${userId}/interests`);
  return resp.data
}

export const destroyInterest = async(userId, id) => {
  const resp = await api.delete(`/users/${userId}/interests/${id}`);
  return resp.data
} 