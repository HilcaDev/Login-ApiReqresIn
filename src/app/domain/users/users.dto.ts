export interface IResponseListUsers {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUser[],
  support: any
}

export interface IUser {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface ICreateUser {
  name: string,
  job: string,
  id?: number,
  createAt?: Date
}
