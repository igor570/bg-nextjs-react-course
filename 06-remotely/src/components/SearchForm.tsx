type SearchFormProps = {
  formValue: string;
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({
  formValue,
  setFormValue,
}: SearchFormProps) {
  const handleFormInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue(e.currentTarget.value);
    console.log(formValue);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={formValue}
        onChange={handleFormInput}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
