import { useEffect, useState } from "react";
import Player from "../player/Player";

const Players = ({handleChoosePlayer}) => {

    const [players,setPlayers] = useState([])

    useEffect(()=>{
        fetch(`Players data.json`)
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])



    return (
        <div className="w-11/12 mx-auto">
            <div>
            <h1 className="text-3xl font-bold">Available Players</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
            
            {
                players.map((p)=><Player handleChoosePlayer={handleChoosePlayer} key={p.id} player={p}></Player>)
            }
            </div>
            
        </div>
    );
};

export default Players;