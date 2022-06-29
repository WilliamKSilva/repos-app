interface UserReposData {
  id: number;
  name: string;
  description: string;
  owner?: {
    login: string;
    avatar_url: string;
  };
  forks?: number;
  language?: string;
  created_at?: string;
  url?: string;
}

export { UserReposData }