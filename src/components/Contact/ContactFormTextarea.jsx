import { ContactTextarea, Error, ContactLabel } from "./Contact.style";

const ContactFormTextarea = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactLabel loc="ContactLabel">{name} :</ContactLabel>
      <ContactTextarea
        loc="ContactTextarea"
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <Error loc="Error">{error}</Error>}
    </>
  );
};

export default ContactFormTextarea;
