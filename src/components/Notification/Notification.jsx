import css from './Notification.module.css'


const Notification = ({ message }) => {
    return (
        <div>
            <p className={css.notification}>{message}</p>
        </div>
    )
}

export default Notification
