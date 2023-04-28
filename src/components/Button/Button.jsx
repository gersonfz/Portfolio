import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, type = 'button', className }) => {
    const classNames = `${styles.button} ${className || ''}`;

    console.log(classNames);
    return (
        <button className={`styles.${classNames}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;