import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Card from './Card';

const CardList = ({ cards }) => {
    const [index, setIndex] = useState(0);


    const transitions = useTransition(cards[index], {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    const handleClick = () => {
        setIndex((index + 1) % cards.length);
    };

    useEffect(() => {
        const intervalId = setInterval(handleClick, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="slideshow-container" onClick={handleClick}>
            {transitions((style, card) => (
                <animated.div key={card.id} style={style}>
                    <Card
                        image={card.image}
                        title={card.title}
                        content={card.content}
                    />
                </animated.div>
            ))}
        </div>
    );
};

export default CardList