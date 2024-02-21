export interface UserInterface{
  id: number;
  login: string;
  email: string;
  password: string;
  firstname: string;
  secondname: string;
  patronymic: string;
  date?: string;
  about?: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegistrationInterface{
  login: string;
  email: string;
  password: string;
  firstname: string;
  secondname: string;
  patronymic: string;
  date?: string;
}

export interface EditInterface{
  firstname?: string;
  login?: string;
  about?: string;
}

