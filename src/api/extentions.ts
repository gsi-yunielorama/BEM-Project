import type {
  CreateExtention,
  UpdateExtention,
} from "../interfaces/extention.interface";

const API = "http://localhost:3000/api";

export const createExtentionRequest = (
  extention: CreateExtention
): Promise<Response> => {
  return fetch(`${API}/extentions`, {
    method: "POST",
    body: JSON.stringify(extention),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllExtentionsRequest = (): Promise<Response> => {
  return fetch(`${API}/extentions`);
};

export const deleteExtentionRequest = (id: string): Promise<Response> => {
  return fetch(`${API}/extentions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateExtentionRequest = (
  id: string,
  activeToUpdate: UpdateExtention
): Promise<Response> => {
  return fetch(`${API}/extentions/${id}`, {
    method: "PATCH",
    body: JSON.stringify(activeToUpdate),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
