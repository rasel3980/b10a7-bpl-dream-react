/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Player from "../player/Player";
import CartContainer from "../cartContainer/CartContainer";

const Players = ({handleChoosePlayer,choosePlayer}) => {

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
      if (status == "Available") {
        setIsActive({
          cart: true,
          status: "Available",
        });
      } else {
        setIsActive({
          cart: false,
          status: "Selected",
        });
      }
    };


    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between py-3">
            <h1 className="text-3xl font-bold">Available Players</h1>
            <CartContainer
        choosePlayer={choosePlayer}
          isActive={isActive}
          handleChoosePlayer={handleChoosePlayer}
          handleIsActiveState={handleIsActiveState}
        ></CartContainer>
            </div>
            <div className="grid grid-cols-3 gap-4">
            
            {
                players?.map((p)=><Player handleChoosePlayer={handleChoosePlayer} key={p.id} player={p}></Player>)
            }
            </div>
            
        </div>
    );
};

export default Players;