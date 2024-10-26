import './CartContainer.css'
const CartContainer = ({handleIsActiveState,isActive}) => {
    // console.log(handleIsActiveState)
    return (
        <div className="flex gap-3">
            <div onClick={()=>handleIsActiveState("Available")} className={`${isActive.cart?"btn active":"btn"}`}>
                <button>Available</button>
            </div>
            <div onClick={()=>handleIsActiveState("Selected")} className={`${isActive.cart?"btn":"active btn"}`}>
                <button>Selected</button>
            </div>
        </div>
    );
};

export default CartContainer;