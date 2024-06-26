import "../../../../../../css/DeNt/PayPage/PayPage.css"

export const PPLeftMain = () => {

    return(

        <div className = "pp-left-main-container">
            <div className = "pp-left-main-content-container">
                <div className = "pp-l-top-txt-c">
                    &lt; Підтвердження й оплата
                </div>
                <div className = "ad-cont">
                    <div style = {{fontSize: 20, fontWeight: 700}}className = "ad-cont-text">
                        Це рідкісна знахідка
                    </div>
                    <div className = "ad-cont-text">
                        Помешкання господаря Марія зазвичай заброньоване.
                    </div>
                </div>
                <div className = "trip-container">
                    Ваша подорож
                    <div className = "trip-text-container">
                        <div className = "t-txt-top">
                            <span>Дати</span>
                            <span style = {{textDecoration: "underline"}}>Редагувати</span>
                        </div>
                        <div style = {{fontWeight: 400}}className = "t-txt-top">
                            4-9 січ.2024
                        </div>
                    </div>
                    <div className = "trip-text-container">
                        <div className = "t-txt-top">
                            <span>Гості</span>
                            <span style = {{textDecoration: "underline"}}>Редагувати</span>
                        </div>
                        <div style = {{fontWeight: 400}}className = "t-txt-top">
                            1 гість
                        </div>
                    </div>
                </div>
                <div className = "pay-container">
                    Виберіть варіант оплати
                    <div className = "pay-opt-container">
                        <div className = "pay-opt-var-cont">
                            <div style = {{marginTop: 20, marginLeft: 20, fontWeight: 700}}>
                                Оплатити в повному обсязі
                            </div>
                            <div style = {{marginLeft: 20}}>
                                Сплатіть усю суму ($335,00) одразу.
                            </div>
                        </div>
                        <div style = {{borderBottom: "none"}}className = "pay-opt-var-cont">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}