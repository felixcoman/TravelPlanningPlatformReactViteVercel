import { ContactTextarea, Error, ContactLabel } from "./Contact.style";

const ContactFormTextarea = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactLabel loc="ContactLabel">Feedback :</ContactLabel>
      <ContactTextarea
        loc="ContactTextarea"
        placeholder="Please write here your opinion!"
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <Error loc="Error">{error}</Error>}
    </>
  );
};

export default ContactFormTextarea;
