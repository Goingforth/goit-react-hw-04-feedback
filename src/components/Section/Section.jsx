import PropTypes from 'prop-types';
import { SectionTitle } from './SectionTitle.styled';
const Section = ({ title, children }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};
