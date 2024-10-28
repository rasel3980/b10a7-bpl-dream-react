/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Selected = ({ choosePlayer }) => {

    return (
        <div>
            {
              choosePlayer.map((player)=>(
                <div className="mt-3 border border-red-600">
                    <div className="flex gap-3">
                        <img className="w-24 h-24 bg-cover rounded-xl" src={player.img} alt="" />
                        <div className="grid justify-center items-center">
                        <h1 className="text-2xl font-extrabold">{player.name}</h1>
                        <p>{player.role}</p>
                        
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                            <button className="btn">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
              ))  
            }
        </div>
    );
};

export default Selected;
