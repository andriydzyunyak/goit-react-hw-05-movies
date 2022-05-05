import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const BackLink = ({ href, label }) => {
  return (
    <div>
      <HiArrowNarrowLeft />
      <Link to={href}>{label}</Link>
    </div>
  );
};
