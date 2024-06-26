import '../../../../../css/Eli/ByePage/ByePageHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons";

function User() 
{
    return(

        <div className = 'userByePage-wrap'>
            <div className = 'burgerByePage-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className = 'usericonByePage-container'>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
}

export default User;