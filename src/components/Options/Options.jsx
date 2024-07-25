
import css from './Options.module.css'
const Options = ({ options, updateFeedback, totalFeedback, resetFeedback }) => {

    return (
        <div className={css.option}>
            {options.map(option => (
                <button
                    className={css.button}
                    key={option}
                    type="button"
                    onClick={() => updateFeedback(option)}
                >{option}</button>
            ))}
            {totalFeedback > 0 && (
                <button className={css.button} type="button" onClick={resetFeedback}>
                    Reset
                </button>
            )}
        </div>
    )
}




export default Options
