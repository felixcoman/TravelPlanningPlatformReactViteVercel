import { AttributionsSection } from "./Attributions.style";
function Attributions({ attributions, variant }) {
  console.log("attributions", attributions);
  const { source, linkImage, linkAuthor, text } = attributions;
  console.log("source", source);

  let outputAttrib;

  switch (source) {
    case "Freepik":
      outputAttrib = (
        <a href={linkImage} target="_blank">
          Copyright: {text}
        </a>
      );
      break;
    case "Unsplash":
      outputAttrib = (
        <small>
          Copyright: Image by{" "}
          <a href={linkAuthor} target="_blank">
            {text}
          </a>{" "}
          on{" "}
          <a href={linkImage} target="_blank">
            {" "}
            Unsplash
          </a>
        </small>
      );
      break;
    case "personal collection":
      outputAttrib = <p>Copyright: {text}</p>;
      break;
    default:
      outputAttrib = (
        <small>
          Copyright information failed to load! Please contact administrator!
        </small>
      );
      break;
  }

  return (
    <AttributionsSection loc="AttributionsSection" variant={variant}>
      {outputAttrib}
    </AttributionsSection>
  );
}
export default Attributions;
