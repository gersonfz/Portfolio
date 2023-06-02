import Card from "./Card";
import styles from './Card.module.css'

const CardList = ({ cards }) => {
    return (
        <div className={styles.cardList}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    content={card.content}
                    subtitle={card.subtitle}
                    subcontent={card.subcontent}
                />
            ))}
        </div>
    );
};


export default CardList