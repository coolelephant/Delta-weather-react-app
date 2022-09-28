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

export const signUp = ({ email, password, name }: ISignUpProps) => {
  const url = `/members`;
  return axios
    .post<IResponseAuth>(url, { email, password, name })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const test = () => {
  const url = `/member`;
  return axios.get(url).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
