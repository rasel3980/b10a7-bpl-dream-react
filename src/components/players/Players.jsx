import propTypes from 'prop-types';
import { useEffect, useState } from "react";
import Player from "../player/Player";
import CartContainer from "../cartContainer/CartContainer";
import Selected from "../Selected/Selected";

const Players = ({handleChoosePlayer,choosePlayer,handleDelete}) => {

    const [players,setPlayers] = useState([])

    useEffect(()=>{
        fetch(`Players data.json`)
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    const [isActive, setIsActive] = useState({
      cart: true,
      status: "Available",
    },[]);

    const handleIsActiveState = (status) => {
      setIsActive({
        cart: status === "Available" || status === "Add More Players",
        status: status === "Available" ? "Available" : status === "Add More Players" ? "Add More Players" : "Selected",
      });
    };

    

    return (
        <div className="w-full mx-auto">
            <div className="flex justify-between py-3">
              <h1 className={`text-3xl font-bold ${isActive.cart && 'hidden'}`}>Selected Players({choosePlayer.length}/6)</h1>
            <h1 className={`text-3xl font-bold ${!isActive.cart && 'hidden'}`}>Available Players</h1>
            <div>
            <CartContainer
        choosePlayer={choosePlayer}
          isActive={isActive}
          handleChoosePlayer={handleChoosePlayer}
          handleIsActiveState={handleIsActiveState}
        ></CartContainer>
            </div>
            </div>
          <div>
            {!isActive.cart&&<Selected isActive={isActive} handleIsActiveState={handleIsActiveState} handleDelete={handleDelete} choosePlayer={choosePlayer}></Selected>}
        </div>
            <div className={`grid grid-cols-3 gap-4 ${!isActive.cart && 'hidden'}`}>
            
            {
                players?.map((p)=><Player handleChoosePlayer={handleChoosePlayer} key={p.id} player={p}></Player>)
            }
            </div>
            
        </div>
    );

};

Players.propTypes = {
  handleChoosePlayer: propTypes.func.isRequired,
  choosePlayer: propTypes.array.isRequired,
  handleDelete: propTypes.func.isRequired,
};
export default Players;