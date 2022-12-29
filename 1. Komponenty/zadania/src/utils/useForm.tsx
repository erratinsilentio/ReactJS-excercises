import { useEffect, useRef } from "react";
import { Kid } from "../components/Kids/data";

export const useForm = (initial = [], setInitial) => {
  const list = useRef<Kid[]>(initial);
  const nameInput = useRef<string>("");
  const ageInput = useRef<string>("");

  useEffect(() => {
    console.log(list);
    list.current = initial;
  }, [initial]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: Kid = {
      name: nameInput.current?.value,
      age: ageInput.current?.value,
    };
    console.log(data);

    setInitial(initial.concat(data));
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  return { nameInput, ageInput, handleSubmit };
};
