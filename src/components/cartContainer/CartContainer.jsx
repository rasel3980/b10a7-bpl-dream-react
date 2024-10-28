/* eslint-disable react/prop-types */
import './CartContainer.css'
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

export default CartContainer;