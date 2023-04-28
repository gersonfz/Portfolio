import React from 'react'
import styles from './Button.module.css'
import { AiOutlineCheck } from 'react-icons/ai'
import ButtonIcon from './ButtonIcon'

const CheckedButton = () => {
    return (
        <div className={styles.checkedButton}>
            <h2>Descarga exitosa</h2>
            <ButtonIcon icon={AiOutlineCheck}/>
        </div>
    )
}

export default CheckedButton