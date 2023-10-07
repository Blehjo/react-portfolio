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
    border-radius: .2rem;
    cursor: pointer;
    color: gray;
  }
`;

export const TabContainer = styled.div`
  .tabscolor > li {
    justify-content: space-evenly;
    margin: 0rem .01rem 0rem .01rem;
  }
  .tabscolor .nav-link {
    background-color: #212529;
    color: white;
    &:hover {
      background-color: darkgray;
      color: gray;
    }
  }
  .tabscolor .nav-link.active {
    background-color: darkgray;
  }
  .tabscolor {
    background: #212529;
    // margin: 0rem .2rem 0rem .2rem;
    border-radius: .6rem;
  }
`;