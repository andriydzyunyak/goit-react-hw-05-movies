import { useLocation } from 'react-router-dom';
import {
  MovieInfoContainer,
  Title,
  LinkList,
  LinkItem,
} from 'components/MovieAdditionalInfo/MovieAdditionalInfo.styled';

export const MovieAdditionalInfo = () => {
  const location = useLocation();
  return (
    <MovieInfoContainer>
      <Title>Additional information</Title>
      <LinkList>
        <li>
          <LinkItem to="cast" state={location.state}>
            Cast
          </LinkItem>
        </li>
        <li>
          <LinkItem to="reviews">Reviews</LinkItem>
        </li>
      </LinkList>
    </MovieInfoContainer>
  );
};
