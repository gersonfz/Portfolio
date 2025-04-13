import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, content, subtitle, subcontent, skills, date }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            {(subtitle && subcontent) && (
                <div className={styles.subcontent}>
                    <h3>{subtitle}</h3>
                    <ul>{subcontent.map(item =>
                        <li key={item}>{item}</li>
                    )}
                    </ul>
                </div>
            )}
            {skills && (
                <div className={styles.subcontent}>
                    <h3>Skills</h3>
                    <ul>{skills.map(skill =>
                        <li key={skill}>{skill}</li>
                    )}
                    </ul>
                </div>
            )}
            <span>{date}</span>
        </div>
    );
};

export default Card;