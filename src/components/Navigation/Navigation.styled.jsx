import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: #2196f3;
  }
`;
