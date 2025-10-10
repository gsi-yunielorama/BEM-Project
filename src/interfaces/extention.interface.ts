export interface Extention {
  _id: string;
  name?: string;
  description?: string;
  logo?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateExtention = Omit<
  Extention,
  "_id" | "createdAt" | "updatedAt" | "isActive"
>;

export type UpdateExtention = Omit<
  Extention,
  "_id" | "createdAt" | "updatedAt"
>;

