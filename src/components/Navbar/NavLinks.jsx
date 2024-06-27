import { LinkNavStyle } from "./Navbar.style";

function NavLinks({ href, title, handleDisplayDropdown }) {
  return (
    <>
      <LinkNavStyle
        loc="LinkNavStyle"
        to={href}
        onClick={() => handleDisplayDropdown()}
      >
        {title ? title : "Link"}
      </LinkNavStyle>
    </>
  );
}

export default NavLinks;
