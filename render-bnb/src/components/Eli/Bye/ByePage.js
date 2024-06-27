import '../../../css/Eli/ByePage/ByePageHeader.css';

import Header from './Header/HeaderBye';
import Gallery from './Gallery/GalleryBye';
import Info from './InfoCard/InfoBye';

import Footer from '../Main/Footer/FooterComp'

const ByePage = () => 
{
    return (
        <div className="ByePage-wrap">
            <Header/>
            <Gallery/>
            <Info/>
            <Footer/>
        </div>
    );
};

export default ByePage;
