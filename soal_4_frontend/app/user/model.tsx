export interface GetAllUserResponse {
  results: Result[];
  info: Info;
}

export interface Result {
  name: string;
  location: string;
  email: string;
  age: number;
  phone: string;
  cell: string;
  picture: string[];
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
