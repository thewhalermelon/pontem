import { apiRequest } from '@/app/utils/apiUtils';

export interface Feature {
  date: string;
  title: string;
  version: string;
  feature: [string, string, string];
  image: string;
}

export interface Features {
  record: {
    features: Feature[];
  };
  metadata: {
    id: string;
    private: Boolean;
    createdAt: string;
  };
}

const featureService = {
  async getFeatures(): Promise<Features> {
    const response = await apiRequest.get<Features>('/6582a65d1f5677401f10b572');
    return response.data;
  },
  async getUserById(id: number): Promise<Features> {
    const response = await apiRequest.get<Features>(`/users/${id}`);
    return response.data;
  },
  async createUser(userData: Features): Promise<Features> {
    const response = await apiRequest.post<Features>('/users', userData);
    return response.data;
  },
  async updateUser(id: number, userData: Features): Promise<Features> {
    const response = await apiRequest.put<Features>(`/users/${id}`, userData);
    return response.data;
  },
  async deleteUser(id: number): Promise<void> {
    const response = await apiRequest.delete<void>(`/users/${id}`);
    return response.data;
  },
};

export default featureService;
