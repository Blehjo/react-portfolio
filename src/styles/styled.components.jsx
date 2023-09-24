import styled from "styled-components";

export const GeneralContainer = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const NavContainer = styled.a`
  text-decoration: none;
  padding: .5rem .5rem .5rem .5rem;
  margin: .5rem;
  color: white;
  &:hover {
    background: black;
    borderRadius: .2rem;
    cursor: pointer;
    color: gray;
  }
`;