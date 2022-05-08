import { Link } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};
