/* eslint-disable react/prop-types */
import './CartContainer.css'
const CartContainer = ({handleIsActiveState,isActive}) => {
        
    return (
        <>
        
        <div className="flex gap-3">
            <div onClick={()=>handleIsActiveState("Available")} className={`${isActive.cart?"btn active":"btn"}`}>
                <button>Available</button>
            </div>
            <div onClick={()=>handleIsActiveState("Selected")} className={`${isActive.cart?"btn":"active btn"}`}>
                <button>Selected</button>
            </div>
            
        </div>
        {/* <div >
        {!isActive.cart&&<Selected choosePlayer={choosePlayer}></Selected>}
        </div> */}
        
        </>
    );
};

export default CartContainer;