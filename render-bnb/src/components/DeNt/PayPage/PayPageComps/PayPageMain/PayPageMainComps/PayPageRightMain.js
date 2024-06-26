import "../../../../../../css/DeNt/PayPage/PayPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const PPRightMain = () => {

    return(

        <div className = "pp-right-main-container">
            <div className = "pp-right-main-content-container">
                <div className = "top-sec">
                    <div className = "top-sec-pic-cont" />
                    <div className = "top-sec-txt-container">
                        <div style = {{fontSize: 14}}>
                            Помешкання для оренди цілком
                        </div>
                        <div>
                            Студія та спальня з панорамою моря!<br />Аркадія!
                        </div>
                        <div style={{marginTop: 30}}>
                            <FontAwesomeIcon icon={faStar} style={{marginRight: 10}} />
                            <span style={{marginRight: 10}}>4,95</span>
                            <span style={{textDecoration: "underline"}}><b>35</b> відгуків</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}