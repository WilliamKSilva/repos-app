declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  RepositoryDetails: {
    name: string;
    login: string | undefined;
  };
};
