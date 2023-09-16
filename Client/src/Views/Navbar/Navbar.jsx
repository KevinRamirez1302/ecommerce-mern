import { Nav, Ul, Li, A, Title } from '../navbar.js';

export const Navbar = () => {
  return (
    <>
      <Nav>
        <Title href="">SellAll</Title>
        <Ul>
          <Li>
            <A href="">Home</A>
          </Li>
          <Li>
            <A href="">Shop</A>
          </Li>
          <Li>
            <A href="">Promotion</A>
          </Li>
          <Li>
            <A href="">Contact</A>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};
