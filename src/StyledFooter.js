import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './sign.svg';

export const Container = styled.footer`
width: 100%;
padding:
height: 100px;
margin: 0 auto;
  padding: 0 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(ReactComponent)`
  margin-top:2px;
  margin-left:45px;
`;

export const PageLinks = styled(Link)`
  font-size:14px;
  line-height:17.07px;
  text-decoration: none;
  color: #636363;
`;

export const NavContainer = styled.section`
display:flex;

`;
