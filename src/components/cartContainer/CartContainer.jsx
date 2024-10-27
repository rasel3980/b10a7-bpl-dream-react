/* eslint-disable react/prop-types */
import Available from '../available/Available';
import Selected from '../Selected/Selected';
import './CartContainer.css'
const CartContainer = ({handleIsActiveState,isActive,choosePlayer,}) => {
    
    // console.log(handleChoosePlayer)
    
    return (
        <>
        <Selected choosePlayer={choosePlayer}></Selected>
        <div className="flex gap-3">
            <div onClick={()=>handleIsActiveState("Available")} className={`${isActive.cart?"btn active":"btn"}`}>
                <button>Available</button>
            </div>
            <div onClick={()=>handleIsActiveState("Selected")} className={`${isActive.cart?"btn":"active btn"}`}>
                <button>Selected</button>
            </div>
            {isActive.cart?<Available></Available>:<Selected choosePlayer={choosePlayer}></Selected>}
        </div>
        </>
    );
};

export default CartContainer;