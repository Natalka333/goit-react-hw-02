
import { useState, useEffect } from 'react';

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from './components/Notification/Notification';


const App = () => {

  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('feedbackState')
    return savedState ? JSON.parse(savedState) : { good: 0, neutral: 0, bad: 0 }
  })

  const updateFeedback = (option) => {
    setState((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,

    }))
  }


  useEffect(() => {
    window.localStorage.setItem('feedbackState', JSON.stringify(state));

  }, [state]);


  const resetFeedback = () =>
    setState({
      good: 0,
      neutral: 0,
      bad: 0
    })



  const options = Object.keys(state);

  const { good, neutral, bad } = state;

  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round((good / totalFeedback) * 100)



  return (
    <>
      <Description title='Sip Happens Café'>Please leave your feedback about our service by selecting one of the options below.
      </Description>

      <Options
        options={options}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback !== 0 ? (<Feedback

        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positiveFeedback={positiveFeedback}

      />) : (<Notification message="No feedback yet" />)}
    </>
  )
}


export default App;