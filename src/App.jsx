import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Players from "./components/players/Players";
import { toast } from "react-toastify";

function App() {

const [price,setPrice] = useState(0)

const handleAddPrice = (p)=>{
  setPrice(price-p)
}

const handleCoinCount=()=>{
  setPrice(newPrice => newPrice + 5000000);
}
  const [choosePlayer,setChoosePlayer] = useState([]);

  const handleDecreaseCoin = (id)=>{
    const player = choosePlayer.find((plr)=>plr.id ==id)
    setPrice(price+player.price)
  }

  const handleDelete = (id)=>{
    handleDecreaseCoin(id)
    const newPlayer = choosePlayer.filter((p)=>p.id !=id);
    setChoosePlayer(newPlayer)
  }

  const handleChoosePlayer =(player)=>{
    const isExit = choosePlayer.find((p)=>p.id==player.id)

    if(isExit){
      toast.error('Sorry, Already added this player')
    }
    else{
      handleAddPrice(player.price)
      const newChoosePlayer = [...choosePlayer,player];
      setChoosePlayer(newChoosePlayer)
    }
    // console.log(isExit);
    
  }
  return (
    <>
      <Header price={price}></Header>
      <Banner handleCoinCount={handleCoinCount}></Banner>
      <Main></Main>

      <div className="flex justify-between w-11/12 mx-auto mt-7 pb-52">
        <Players choosePlayer={choosePlayer} handleDelete={handleDelete} handleChoosePlayer={handleChoosePlayer}></Players>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
