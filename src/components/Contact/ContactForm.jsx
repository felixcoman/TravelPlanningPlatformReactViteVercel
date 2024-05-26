import { ContactInput, ErrorP, ContactLabel } from "./Contact.style";

const ContactForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactLabel loc="ContactLabel">{name} :</ContactLabel>
      <ContactInput
        loc="ContactInput"
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP loc="ErrorP">{error}</ErrorP>}
    </>
  );
};

export default ContactForm;
