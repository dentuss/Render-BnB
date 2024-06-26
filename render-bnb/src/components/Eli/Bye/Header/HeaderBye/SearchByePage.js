import '../../../../../css/Eli/ByePage/ByePageHeader.css';
import search from '../../../../../img/Eli/Category/search.png';

const SearchByePage = () => 
{
        return (
            <div className="searchByePage">
                <div className="search">
                    <div className="search-item, first-item">
                        <div className="search-label">Почніть пошук</div>
                    </div>
                    
                    <div className="search-icon">
                        <img src={search} alt="Heart" className="search-img" />
                    </div>
                </div>
 
            </div>);
};
    
export default SearchByePage;
    