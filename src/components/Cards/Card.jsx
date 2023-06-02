import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, content, subtitle, subcontent}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div className={styles.subcontent}> 
                <h3>{subtitle}</h3>
                {console.log(subcontent)}
                <ul>{subcontent.map(item => 
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Card;
