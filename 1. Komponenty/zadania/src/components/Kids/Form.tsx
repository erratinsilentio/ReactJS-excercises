import style from "./kids.module.css";
import { useForm } from "../../utils/useForm";

interface FormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ageInput: number | string;
  nameInput: string;
  addKid: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const KidsForm: React.FC = ({ setList }) => {
  const { nameInput, ageInput, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit} className={style.kidForm}>
      <input
        name="name"
        type="text"
        placeholder="name..."
        maxLength={15}
        className={style.kidName}
        ref={nameInput}
      />
      <input name="age" type="number" min={1} max={17} ref={ageInput} className={style.kidAge} />
      <button type="submit" className={style.addKidButton}>
        Add
      </button>
    </form>
  );
};
