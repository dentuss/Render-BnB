import "../../../../../css/DeNt/ProfEditPage/ProfEditPage.css";
import { useNavigate } from "react-router-dom";         

export const PRightMain = () => {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/guestpage');
    }

    return(

        <div className="p-right-main-container"> 
            <div className="p-r-main-text">
                <div>
                    <b style={{fontSize: 30}}>Ваш Профіль</b>
                </div>
                <div>
                    Інформацію, яку ви надаєте, буде використовано на HomeFU, щоб інші гості й господарі мали змогу познайомитися з вами. Докладніше
                </div>
            </div>
            <div className="p-r-main-form-c">
                    <div style = {{paddingRight:40}} className="p-r-main-form-l-r">
                        <div className="p-r-main-form-box">
                            <input id = 'uni' type="text" placeholder = "Навчальний Заклад" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'living' type="text" placeholder = "Місце проживання" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'bd' type="text" placeholder = "Десятиліття, коли я народився/-лась" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'interest' type="text" placeholder = "Найбільше захоплення" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'skill' type="text" placeholder = "Найбільш марні навички" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'time' type="text" placeholder = "На що я витрачаю багато часу" />
                            <hr></hr>
                        </div>
                    </div>
                    <div style = {{paddingLeft:40}}className="p-r-main-form-l-r">
                        <div className="p-r-main-form-box">
                            <input id = 'job' type="text" placeholder = "Моя професія" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'lang' type="text" placeholder = "Мови, якими я володію" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'song' type="text" placeholder = "Улюблена пісня в старших класах" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'fact' type="text" placeholder = "Цікавий факт про мене" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'bio' type="text" placeholder = "Бажаний заголовок біографії" />
                            <hr></hr>
                        </div>
                        <div className="p-r-main-form-box">
                            <input id = 'pets' type="text" placeholder = "Домашні тварини" />
                            <hr></hr>
                        </div>
                    </div>
               </div>
               <div className= 'form-button' onClick={handleClick}>
                    Підтвердити
               </div>
        </div>
        
    );
}