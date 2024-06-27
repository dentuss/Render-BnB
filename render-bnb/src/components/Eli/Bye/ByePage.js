import '../../../css/Eli/ByePage/ByePageHeader.css';

import Header from './Header/HeaderBye';
import Gallery from './Gallery/GalleryBye';
import Info from './InfoCard/InfoBye';

const ByePage = () => 
{
    return (
        <div className="ByePage-wrap">
            <Header/>
            <Gallery/>
            <Info/>
        </div>
    );
};

export default ByePage;
