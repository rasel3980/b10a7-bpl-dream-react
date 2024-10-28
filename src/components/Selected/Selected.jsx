/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Selected = ({choosePlayer,handleDelete}) => {

    return (
        <div className=" grid w-full">
            {
              choosePlayer.map((player)=>(
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
                            <button onClick={()=>handleDelete(player.id)} className="btn">Delete</button>
                            </div>
                        </div>
                </div>
              ))  
            }
        </div>
    );
};

export default Selected;
