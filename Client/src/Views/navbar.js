import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  padding: 0.7rem;
  background-color: black;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style: none;
  margin: 0.6rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`;
