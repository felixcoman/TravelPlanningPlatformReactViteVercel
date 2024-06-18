import { ContactInput, ErrorP, ContactLabel } from "./Account.style";

const AccountForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactLabel>{name} :</ContactLabel>
      <ContactInput
        placeholder={name}
        defaultValue={value}
        onChange={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default AccountForm;
