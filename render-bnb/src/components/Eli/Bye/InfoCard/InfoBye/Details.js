import '../../../../../css/Eli/ByePage/ByePageInfo.css';

import ilona from '../../../../../img/Eli/Gallery/Ilona.png';
import star from '../../../../../img/Eli/Card/star.png';

import { useNavigate } from 'react-router-dom';

const Details = () => 
{

    const navigate = useNavigate();
    function handleClickPay(event) {

        navigate('/paypage');
    }
    return (
        <div className="info-wrap">
            <div className="info-container">
                <div className="title-details"> 
                    Помешкання для оренди, господар - Ілона 
                    <img src={ilona} alt="ilona" className= "ilona-img"/>
                    
                </div>
                <div className= "add-details"> 4 гостя, 1 спальня, 2 ліжка, 1 ванна кімната </div>
               
               <div className= "conditions">
                <div className="title-conditions">Окреме робоче місце</div>
                <div className= "add-conditions">Зона спільного користування з Wi-Fi, яка добре підходить для роботи.</div>

                <div className="title-conditions">Самостіне прибуття</div>
                <div className= "add-conditions">Самостійне прибуття за допомогою ключа в сейфі.</div>

                <div className="title-conditions">Безкоштовне скасування бронювання до 30 грудня</div>
              
              
               </div>
               <div className="more-info">
                Вона оснащена кондиціонером і безкоштовним Wi-Fi. Ви можете відпочити на затишній терасі, насолоджуючись видом на море. Квартира розміром 24 метри з повністю обладнаною кухнею з мікрохвильовою пічю, вітальнею , телевізором з плоским екраном, власною ванною кімнатою з пральною машиною, феном. Є холодильник, плита, чайник. Спальне місце - двоспальне ліжко. На території комплексу розташовані магазин, аптека, кав 'ярня та інші сервіси, поруч...
               </div>
            </div>



            <div className="absol-container">
                <div className= "abcol-block">
                    <div className= "price-details">
                        <div className= "price-for-absol">$70 ніч</div>
                        <div className= "reting-fot-absol">
                            <img src={star} alt="Star" className= "star-reting"/>
                            4,88 . 35 відкуів
                        </div>
                    </div>


                    <div className= "table-details">
                        <div className= "first-row">
                            <div className="col1">
                                ПРИБУТТЯ 
                                <div className= "data1">04.01.2024</div>
                            </div>
                            <div className="col2">
                                ВИЇЗД
                                <div className= "data1">09.01.2024</div>
                            </div>
                        </div>
                        <div className= "second-row">
                            ГОСТІ
                            <div className= "data1">1 гостя</div>
                            
                        </div>
                    </div>

                    <div className= "but-bye" onClick={handleClickPay}>Заюронювати</div>
                    <div className= "nobye">Поки що ви нічого не платите</div>

                    <div className= "bye">
                        <div className= "how-much">$70 х 10 ночей</div>
                        <div className= "result">$ 700</div>

                        
                    </div>
                    <div className= "bye">
                        <div className= "how-much">Плата за прибирання</div>
                        <div className= "result">$ 20</div>
                    </div>

                    <div className= "bye-result">
                        <div className= "text-result">Усього до спалти податків</div>
                        <div className= "result">$ 720</div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Details;
