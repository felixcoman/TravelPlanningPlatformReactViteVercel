import { AttributionsSection } from "./Attributions.style";
function Attributions({ attributions }) {
  console.log("attributions", attributions);
  const { source, linkImage, linkAuthor, text } = attributions;
  console.log("source", source);
  let outputAttrib;

  switch (source) {
    case "Freepik":
      outputAttrib = (
        <a href={linkImage} target="_blank">
          {text}
        </a>
      );
      break;
    case "Unsplash":
      outputAttrib = (
        <small>
          Photo by{" "}
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
    default:
      outputAttrib = (
        <small>
          Copyright information failed to load! Please contact administrator!
        </small>
      );
      break;
  }

  return (
    <AttributionsSection loc="AttributionsSection">
      {outputAttrib}
    </AttributionsSection>
  );
}
export default Attributions;
