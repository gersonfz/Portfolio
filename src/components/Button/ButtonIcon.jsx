import styles from './Button.module.css'

const ButtonIcon = ({ icon: Icon }) => {
    return (
        <span className={styles.ButtonIcon}>
            <Icon /> 
        </span>
  )
}

export default ButtonIcon;