import NavLinks from "./NavLinks";
import { routes } from "./Navbar";
import { DropdownContainer, LinkContainer } from "./Navbar.style";

function MobileDropdown({ handleDisplayDropdown }) {
  return (
    <DropdownContainer loc="DropdownContainer">
      <LinkContainer loc="LinkContainer">
        {routes.map((el, index) => (
          <NavLinks
            key={index}
            title={el.title}
            href={el.href}
            handleDisplayDropdown={handleDisplayDropdown}
          />
        ))}
      </LinkContainer>
    </DropdownContainer>
  );
}

export default MobileDropdown;
