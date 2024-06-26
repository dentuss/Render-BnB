import "../../../../css/DeNt/VeriPage2/VeriPage2.css"
import "../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { Route, useNavigate } from "react-router-dom"

export const VeriPage2Main = () => {

    const navigate = useNavigate();

    function handleClick(event) {

    }

    return(

        <div className="veri-page-2-main-container">
            <div className = "veri-p-2-main-content-c">
                <div className = "vp-2-main-content-box">
                    <div style = {{fontSize: 20, fontWeight: 700}}>
                        Виберіть відповідний тип посвідчення особи
                    </div>
                    <div className = "vp-2-main-content-smth">

                    </div>
                </div>
                <div style = {{gap: 35}} className = "vp-2-main-content-box">
                    <div>
                        Посвідчення водія <FontAwesomeIcon style = {{marginLeft: 310}} icon={faCircle} />
                    </div>
                    <hr />
                    <div>
                        Паспорт <FontAwesomeIcon style = {{marginLeft: 368}} icon={faCircle} />
                    </div>
                    <hr />
                    <div>
                        Посвідчення особи <FontAwesomeIcon style = {{marginLeft: 307.5}} icon={faCircle} />
                    </div>
                </div>
                <div style = {{padding: 10, fontSize: 15}} className = "vp-2-main-content-box">
                    Ваше посвідчення особи оброблятиметься відповідно до нашої Політики конфіденційності та не надаватиметься господарю або гостям.
                </div>
                <div className = "vp-2-main-content-box">
                    <hr />
                </div>
                <div className="last-row">
                    <div>
                        &lt; Назад
                    </div>
                    <div style = {{justifySelf: 'right'}}className="v-1-l-main-content-button">
                        Продовжити
                    </div>
                </div>
            </div>
        </div>
    );
}