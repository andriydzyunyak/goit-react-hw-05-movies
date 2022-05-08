import styled from '@emotion/styled';

export const MovieCastList = styled.ul`
  display: inline-block;
  margin-left: 30px;
`;

export const MovieCastItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const NoImageActor = styled.div`
  padding-top: 55px;
  width: 92px;
  height: 138px;
  border: 1px solid #000000;
  text-align: center;
`;

export const ActorName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 15px;
`;
