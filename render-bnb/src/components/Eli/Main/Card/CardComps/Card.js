import { useNavigate } from 'react-router-dom';
import '../../../../../css/Eli/MainPage/MainPageCard.css';
import star from '../../../../../img/Eli/Card/star.png';
import heart from '../../../../../img/Eli/Card/heart.png';
import whiteCircleImage from '../../../../../img/Eli/Card/circlewhite.png';
import grayCircleImage from '../../../../../img/Eli/Card/circlegray.png';

const Card = ({ image, rating, dateRange, price, days, isChecked, index }) => {
    const navigate = useNavigate();

    function handleclick(event) {
        if (index === 0) {  navigate("/byepage"); }
    }

    return (
        <div className="card" onClick={handleclick}>
            <img src={image} alt="Card" className="card-image" />
            <img src={heart} alt="Heart" className="heart-icon" />
            
            <div className="circles-container">
                {Array.from({ length: 5 }, (v, i) => (
                    <div key={i} className="circle" style={{ backgroundImage: `url(${i === 0 ? whiteCircleImage : grayCircleImage})` }}></div>
                ))}
            </div>
            
            <div className="card-info">
                <div className="location">
                    <span>Odesa, Ukraine</span>
                    <div className="star-ratingMain">
                        <img src={star} alt="Star" className='star-img-main' />
                        <span>{rating}</span>
                    </div>
                </div>
                <div className="description addinfo">Біля моря</div>
                <div className="addinfo">{dateRange}</div>
                <div className="price">
                    {isChecked ? `$${price} за ${days} ночей` : `$${price} за ніч`}
                </div>
            </div>
            
            <div className="circles-container">
                {Array.from({ length: 5 }, (v, i) => (
                    <div key={i} className="circle" style={{ backgroundImage: `url(${i === 0 ? whiteCircleImage : grayCircleImage})` }}></div>
                ))}
            </div>
        </div>
    );
};

export default Card;
