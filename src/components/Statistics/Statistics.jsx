import PropTypes from 'prop-types';
import { StatisticsData } from './StatisticsData.styled';
import { StatisticItem } from './StatisticItem.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsData>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
    </StatisticsData>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
