import { apiClient } from "./api";

export function getUserList() {
  return apiClient.get('/user')
}