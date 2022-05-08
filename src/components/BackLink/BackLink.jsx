import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { GoBack } from 'components/BackLink/BackLink.styled';

export const BackLink = ({ href, label }) => {
  return (
    <GoBack>
      <HiArrowNarrowLeft size="20" />
      <Link to={href}>{label}</Link>
    </GoBack>
  );
};
