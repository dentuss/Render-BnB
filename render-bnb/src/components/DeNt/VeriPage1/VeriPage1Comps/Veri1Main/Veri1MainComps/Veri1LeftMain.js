import "../../../../../../css/DeNt/VeriPage1/VeriPage1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-regular-svg-icons"

export const Veri1LeftMain = () => {

    return(

        <div className = "v-1-left-main-container">
            <div className = "v-1-left-main-content-c">
                <div className = "v-1-l-main-content-top">
                    <div style = {{fontSize: 20, fontWeight: 700}} className = "v-1-l-main-content-top-text">
                        Додайте посвідчення особи державного зразка
                    </div>
                    <div className = "v-1-l-main-content-top-text">
                        Вам потрібно буде додати посвідчення особи державного зразка. Цей крок допоможе переконатися, що це справді ви.
                    </div>
                </div>
                <div className = "v-1-l-main-content-bot">
                    <div style = {{fontSize: 17, fontWeight: 700}}>
                        Завантажити наявну фотографію <FontAwesomeIcon style = {{marginLeft: 131.5}} icon={faCircle} />
                    </div>
                    <div>
                        Рекомендовано
                    </div>
                    <hr />
                    <div style = {{fontSize: 17, fontWeight: 700}}>
                        Зробіть фотографію за допомогою вебкамери <FontAwesomeIcon style = {{marginLeft: 30}} icon={faCircle} />
                    </div>
                    <div>
                        
                    </div>
                    <hr />

                    <div className="v-1-l-main-content-button">
                        Продовжити
                    </div>
                </div>
            </div>
        </div>
    );
}