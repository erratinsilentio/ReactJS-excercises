import style from "./kids.module.css";

interface FormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ageInput: number | string;
  nameInput: string;
  addKid: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const KidsForm: React.FC<FormProps> = ({ handleChange, ageInput, nameInput, addKid }) => {
  return (
    <form className={style.kidForm}>
      <input
        name="name"
        type="text"
        placeholder="name..."
        maxLength={15}
        value={nameInput}
        onChange={handleChange}
        className={style.kidName}
      />
      <input
        name="age"
        type="number"
        value={ageInput}
        min={1}
        max={17}
        onChange={handleChange}
        className={style.kidAge}
      />
      <button onClick={addKid} className={style.addKidButton}>
        Add
      </button>
    </form>
  );
};
