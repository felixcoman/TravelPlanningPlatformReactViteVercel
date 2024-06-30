import { ContactInput, ContactLabel } from "./Account.style";
import { Error } from "../Contact/Contact.style";

const AccountForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactLabel loc="ContactLabel">{name} :</ContactLabel>
      <ContactInput
        loc="ContactInput"
        placeholder={name}
        defaultValue={value}
        onChange={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <Error loc="Error">{error}</Error>}
    </>
  );
};

export default AccountForm;
