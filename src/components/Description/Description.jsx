import css from './Description.module.css'

const Description = ({ title, children }) => {


    return (
        <div className={css.container}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.description}>{children}</p>
        </div>
    )
}

export default Description
