import '../App.css';
import flagImage from '../images/flag.jpg';
import { FaSearch } from 'react-icons/fa';
const Header = () => {
    return (
        <div className="header">
            <div className='main'>
                <div className='header-main'>
                    <div className='flag-container'>
                        <img src={flagImage} alt="tunisian flag" className='flag' />
                    </div>
                    <h3 className='header-txt'>Tunisian Professional League 1</h3>
                </div>
                <div className='search-space'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                    <button className="search-button">
                        <FaSearch />
                    </button>
                </div>
            </div>

           

        </div>
    )
}
export default Header;