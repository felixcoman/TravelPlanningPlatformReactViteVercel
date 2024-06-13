import { ContactInput, ErrorP, ContactLabel } from "./Account.style";

const ContactForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactLabel>{name} :</ContactLabel>
      <ContactInput
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default ContactForm;
