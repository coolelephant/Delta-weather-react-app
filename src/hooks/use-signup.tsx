import { useMutation } from "react-query";

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

export const useSignup = (
  signupFunc: (props: ISignUpProps) => Promise<IResponseAuth>,
  props: ISignUpProps
) => {
  const { mutate: signup, data } = useMutation("signup", signupFunc, {
    onSuccess: () => {
      console.log(data);
    },
    onError: () => {
      console.log("error");
    },
  });

  const signupHandler = () => {
    signup(props);
  };

  return { signupHandler, data };
};
