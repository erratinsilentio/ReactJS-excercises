import { useEffect, useRef } from "react";
import { Kid } from "../components/Kids/data";

export const useForm = (
  initial: Kid[],
  setInitial: React.Dispatch<React.SetStateAction<Kid[]>>
) => {
  const list = useRef<Kid[]>(initial);
  const nameInput = useRef<HTMLInputElement | null>(null);
  const ageInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(list);
    list.current = initial;
  }, [initial]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Kid = {
      name: nameInput.current?.value || "",
      age: ageInput.current?.value || "",
    };
    console.log(data);

    setInitial((prev) => [...prev, data]);
    if (nameInput && nameInput.current) {
      nameInput.current.value = "";
    }
    if (ageInput && ageInput.current) {
      ageInput.current.value = "";
    }
  };

  return { nameInput, ageInput, handleSubmit };
};
