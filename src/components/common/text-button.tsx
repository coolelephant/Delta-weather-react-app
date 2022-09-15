import { Button } from "@mui/material";

interface ITextButtonProps {
  text: string;
  onClick: () => void;
}
export const TextButton = ({ text, onClick }: ITextButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};
