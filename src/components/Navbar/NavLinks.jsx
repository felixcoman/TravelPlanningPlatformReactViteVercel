import { LinkNavStyle } from "./Navbar.style";

function NavLinks({ href, title, handleDisplayDropdown }) {
  const handleClick = () => {
    if (handleDisplayDropdown) {
      handleDisplayDropdown();
    }
  };
  return (
    <>
      <LinkNavStyle loc="LinkNavStyle" to={href} onClick={handleClick}>
        {title ? title : "Link"}
      </LinkNavStyle>
    </>
  );
}

export default NavLinks;
