import logoImg from '../../../assets/logo.png';
import coinLogo from '../../../assets/download.png';
import PropTypes from 'prop-types';
const Header = ({price}) => {
    return (
        <div className="sticky top-0 z-10 bg-white flex justify-between items-center w-11/12 mt-12 mx-auto shadow-lg">
            <div>
                <img src={logoImg} alt="Logo" />
            </div>
            <div className="flex gap-12 justify-center items-center text-gray-500 font-bold">
                <a href="/">Home</a>
                <a href="/fixture">Fixture</a>
                <a href="/teams">Teams</a>
                <a href="/schedules">Schedules</a>
                <div>
                    <button className="border border-solid rounded-xl px-5 flex items-center gap-2">
                        {price} Coin <img className="w-8" src={coinLogo} alt=" Coin icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    price: PropTypes.number.isRequired,
};
export default Header;
