import '../../../../../css/Eli/MainPage/MainPageHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons";

function User() 
{
    return(

        <div className = 'user-wrap'>
            <div className = 'burger-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className = 'usericon-container'>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
}

export default User;