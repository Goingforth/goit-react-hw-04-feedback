import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackButtons.styled';
import { Button } from './Button.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      {Object.keys(options).map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </FeedbackButtons>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};
