import React from 'react';
import '../../../../css/Eli/MainPage/MainPageCard.css';
import Card from './CardComps/Card';

const imagesContext = require.context('../../../../img/Eli/Card', false, /\.(png|jpe?g|svg)$/);
const images = imagesContext.keys().map((key) => 
{
    return { path: imagesContext(key), name: key };
});

const sortedImages = images
    .map(image => 
    {
        const match = image.name.match(/card(\d+)/);
        if (match) 
        {
            return { ...image, number: parseInt(match[1], 10) };
        }
        return null;
    })
    .filter(image => image !== null)
    .sort((a, b) => a.number - b.number);

const defaultData = 
[
    { rating: 4.88, dateRange: '1-10 лист.', price: 70 },
    { rating: 4.72, dateRange: '5-12 лист.', price: 80 },
    { rating: 4.65, dateRange: '7-15 лист.', price: 65 },
    { rating: 4.95, dateRange: '10-20 лист.', price: 90 },
    { rating: 4.55, dateRange: '2-8 лист.', price: 60 },
    { rating: 4.78, dateRange: '9-17 лист.', price: 75 },
    { rating: 4.84, dateRange: '11-19 лист.', price: 85 },
    { rating: 4.62, dateRange: '4-14 лист.', price: 50 },
    { rating: 4.90, dateRange: '6-13 лист.', price: 95 },
    { rating: 4.75, dateRange: '8-16 лист.', price: 77 },
    { rating: 4.80, dateRange: '3-9 лист.', price: 68 },
    { rating: 4.85, dateRange: '12-20 лист.', price: 83 }
];

const calculateDays = (dateRange) => 
{
    const [start, end] = dateRange.split(' ')[0].split('-').map(day => parseInt(day, 10));
    return end - start + 1;
};

const CardsList = ({ isChecked }) => 
{
    return (
        <div className="card-container">
            {sortedImages.slice(0, 12).map((image, index) => {
                const days = calculateDays(defaultData[index].dateRange);
                const pricePerNight = defaultData[index].price;
                let totalPrice = pricePerNight;

                if (isChecked) { totalPrice = pricePerNight * days; }

                return (
                    <Card
                        key={index}
                        image={image.path}
                        rating={defaultData[index].rating}
                        dateRange={defaultData[index].dateRange}
                        price={totalPrice}
                        days={days}
                        isChecked={isChecked}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default CardsList;
