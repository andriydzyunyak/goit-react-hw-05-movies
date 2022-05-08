import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieInfoContainer = styled.div`
  display: block;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const Title = styled.p`
  margin-bottom: 20px;
`;

export const LinkList = styled.ul`
  margin-left: 20px;
`;

export const LinkItem = styled(Link)`
  color: #0000ff;
`;
