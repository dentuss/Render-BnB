import "../../../../../css/DeNt/GuestPage/GuestPage.css"
import pfp from "./Ellipse682.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


function GLeftMain() {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('render-bnb/src/components/DeNt/ProfEditPage/ProjEditPage.js')
    }

    return(

        <div className="left-main-wrapper">
            <div className="left-main-top-section-container">
                <div className="left-main-top-section-box">
                    <div className="left-main-top-section-pfp-container">
                        <img src={pfp} alt = 'pfp'/>
                    </div>
                    <div className="left-main-top-section-name-container">
                        <div className="left-main-top-section-name-text">
                            Ірина
                        </div>
                        <div className="left-main-top-section-guest-text">
                            Гість
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-main-bottom-section-container">
                <div className="left-main-bottom-section-box">
                    <div className="left-main-bottom-box-section">
                        <div className="left-section-bottom-box-text">
                            <b>Підтверджена інормація про користувача Ірина</b>
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div className="left-section-bottom-box-text">
                            <FontAwesomeIcon icon={faCheck} /> Електронная адреса
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <hr />
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div className="left-section-bottom-box-text">
                            <b>Веріфікація особи</b>
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div style={{fontSize: 13}} className="left-section-bottom-box-text">
                            Перш ніж бронювати або приймати гостей на HomeFU, потрібно виконати цей крок.
                        </div>
                    </div>
                    <div className="left-main-bottom-box-section">
                        <div className="left-main-bottom-section-button">
                                <div style={{marginLeft: 15}} className="left-section-bottom-box-text" onClick={handleClick}>
                                    Пройти Веріфікація
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GLeftMain;