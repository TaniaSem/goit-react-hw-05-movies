import { NavBox, NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <NavBox>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="movies">Movies</NavItem>
    </NavBox>
  );
};
