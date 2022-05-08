import styled from '@emotion/styled';

export const MovieReviewsContainer = styled.div`
  display: inline-block;
  margin-left: 35px;
`;

export const MovieReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const AuthorReview = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;
