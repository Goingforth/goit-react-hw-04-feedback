import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackButtons.styled';
import { Button } from './Button.styled';
const FeedbackOptions = ({ options, onClick }) => {
  return (
    <FeedbackButtons>
      {options.map(option => (
        <Button key={option} onClick={() => onClick(option)}>
          {option}
        </Button>
      ))}
    </FeedbackButtons>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};
