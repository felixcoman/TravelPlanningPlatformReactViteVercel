import { LinkNavStyle } from "./Navbar.style";

function NavLinks({ href, title }) {
  return (
    <>
      <LinkNavStyle loc="LinkNavStyle" to={href}>
        {title ? title : "Link"}
      </LinkNavStyle>
    </>
  );
}

export default NavLinks;
