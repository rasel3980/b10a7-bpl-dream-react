import './CartContainer.css'
import PropTypes from 'prop-types';
const CartContainer = ({handleIsActiveState,isActive,choosePlayer}) => {
    return (
        <>
        
        <div className="flex gap-3">
            <div onClick={()=>handleIsActiveState("Available")} className={`${isActive.cart?"btn active":"btn"}`}>
                <button>Available</button>
            </div>
            <div onClick={()=>handleIsActiveState("Selected")} className={`${isActive.cart?"btn":"active btn"}`}>
                <button>Selected({choosePlayer.length})</button>
            </div>
            
        </div>
        </>
    );
};
CartContainer.propTypes = {
    handleIsActiveState: PropTypes.func.isRequired,
    isActive: PropTypes.shape({
        cart: PropTypes.bool.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    choosePlayer: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            // Add additional player properties here as necessary
        })
    ).isRequired,
};


export default CartContainer;