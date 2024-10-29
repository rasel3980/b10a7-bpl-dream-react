
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
const Selected = ({choosePlayer,handleDelete,isActive,handleIsActiveState}) => {

    return (

        <div className=" grid w-full">
            {
              choosePlayer.map((player)=>(
                <>
                <div className=" flex justify-between mt-3 border rounded-xl px-4">
                    <div className="flex gap-3">
                        <img className="w-24 h-24 bg-cover rounded-xl" src={player.img} alt="" />
                        <div className="grid justify-center items-center">
                        <h1 className="text-2xl font-extrabold">{player.name}</h1>
                        <p>{player.role}</p>
                        
                        </div>
                        
                    </div>
                    <div className="flex justify-between items-center">
                            <div>
                            <button onClick={()=>handleDelete(player.id)} className="btn"><FontAwesomeIcon icon={faTrash}/></button>
                            </div>
                        </div>
                </div>
                </>
              ))
                
            }
            <div className='mt-4'>
            <div onClick={()=>handleIsActiveState("Add More Players")}>
                <button className={`${isActive.cart?"btn":"btn active"}`}>Add More Players</button>
            </div>
            </div>
        </div>
        
    );
    
};

Selected.propTypes = {
    choosePlayer: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
    isActive: PropTypes.shape({
        cart: PropTypes.bool.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    handleIsActiveState: PropTypes.func.isRequired,
};

export default Selected;
