import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, content}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;
