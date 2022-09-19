import axios from "axios";

interface IResponseAuth {
  statusCode: number;
  message: string;
  data: any;
}

interface ISignUpProps {
  email: string;
  password: string;
  name: string;
}

export const signUp = (props: ISignUpProps) => {
  const url = `http://localhost:8080/members`;
  return axios
    .post<IResponseAuth>(url, { ...props })
    .then((res) => console.log(res.data));
};
