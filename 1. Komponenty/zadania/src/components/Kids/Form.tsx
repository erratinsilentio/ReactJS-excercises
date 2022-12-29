import style from "./kids.module.css";
import { useForm } from "../../utils/useForm";
import { Kid } from "./data";

interface FormProps {
  list: Kid[];
  setList: React.Dispatch<React.SetStateAction<Kid[]>>;
}
export const KidsForm: React.FC<FormProps> = ({ list, setList }) => {
  const { nameInput, ageInput, handleSubmit } = useForm(list, setList);

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
      <input
        name="age"
        type="number"
        min={1}
        max={17}
        ref={ageInput}
        className={style.kidAge}
      />
      <button type="submit" className={style.addKidButton}>
        Add
      </button>
    </form>
  );
};
