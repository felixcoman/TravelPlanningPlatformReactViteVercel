import { Error } from "../Contact/Contact.style";
import { AccountInput, AccountLabel } from "./Account.style";

const AccountForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <AccountLabel loc="AccountLabel">{name} :</AccountLabel>
      <AccountInput
        loc="AccountInput"
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
