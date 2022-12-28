import { useRef } from "react";

export const useForm = () => {
  const nameInput = useRef("");
  const ageInput = useRef("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = {
      name: nameInput.current?.value,
      age: ageInput.current?.value,
    };
    console.log(data);
    return data;
  };

  return { nameInput, ageInput, handleSubmit };
};
