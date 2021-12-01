import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  height: 70px;
  background: #13131F;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 10rem;

  h2 {
    color: #8257E6;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    width: 100%;

    a {
      cursor: pointer;
    }

    li + li {
      margin-left: 3.75rem;
    }

    .active:after {
      content: '';
      display: flex;
      height: 2px;
      background-color: #8257E6;
      width: 100%;
    }

    a {
      color: #FFF;
      text-decoration: none;
    }
  }
`;