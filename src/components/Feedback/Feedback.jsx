import css from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <div className={css.feedback}>
            <p className={css.paragraph}>Good: {good}</p>
            <p className={css.paragraph}>Neutral: {neutral}</p>
            <p className={css.paragraph}>Bad: {bad}</p>
            <p className={css.paragraph}>Total: {total}</p>
            <p className={css.paragraph}>Positive: {positiveFeedback} %</p>
        </div>
    )
}

export default Feedback
