import '../../../css/Eli/ByePage/ByePageHeader.css';

import Header from './Header/HeaderBye';
import Gallery from './Gallery/GalleryBye';

const ByePage = () => 
{
    return (
        <div className="ByePage-wrap">
            <Header/>
            <Gallery/>
        </div>
    );
};

export default ByePage;
