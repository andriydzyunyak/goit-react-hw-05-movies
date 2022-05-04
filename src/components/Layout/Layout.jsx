import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Container.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
