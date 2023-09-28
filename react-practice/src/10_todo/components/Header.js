import styled from 'styled-components';
import { primaryColor } from '../styles/utils';

const Header = styled.header`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  background-color: ${primaryColor};
  font-weight: 600;
  color: white;
`;

export default Header;
