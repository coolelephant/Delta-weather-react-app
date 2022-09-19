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
  const url = `/members`;
  return axios
    .post<IResponseAuth>(
      url,
      { ...props },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const test = () => {
  const url = `/member`;
  return axios
    .get(url, { headers: { "Access-Control-Allow-Origin": "*" } })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
