import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="bg-red-600  text-sm text-white p-2 my-2 rounded-lg text-center">
      {children}
    </p>
  );
}
