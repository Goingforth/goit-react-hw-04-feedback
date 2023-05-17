import React, { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

function App() {
  const [countGood, setCountGood] = useState(0);
  const [countNeutral, setCountNeutral] = useState(0);
  const [countBad, setCountBad] = useState(0);

  function incrementGood() {
    setCountGood(countGood + 1);
  }
  function incrementNeutral() {
    setCountNeutral(countNeutral + 1);
  }
  function incrementBad() {
    setCountBad(countBad + 1);
  }

  const incFeedback = name => {
    switch (name) {
      case 'Good':
        incrementGood();
        break;
      case 'Neutral':
        incrementNeutral();
        break;
      case 'Bad':
        incrementBad();
        break;
      default:
        return;
    }
  };

  function countTotal() {
    return countGood + countNeutral + countBad;
  }

  const countPositivePercentage = () => {
    return Math.round((countGood / countTotal()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onClick={incFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotal() > 0 ? (
          <Statistics
            good={countGood}
            neutral={countNeutral}
            bad={countBad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
