import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Players from "./components/players/Players";
import { toast } from "react-toastify";

function App() {

const [count,setCount] = useState(0)

const handleCoinCount=()=>{
  setCount(prevCount => prevCount + 700000);
}
  const [choosePlayer,setChoosePlayer] = useState([]);

  const handleChoosePlayer =(player)=>{
    const isExit = choosePlayer.find((p)=>p.id==player.id)

    if(isExit){
      toast.error('sorry r add kora jabe na ')
    }
    else{
      const newChoosePlayer = [...choosePlayer,player];
      setChoosePlayer(newChoosePlayer)
    }
    // console.log(isExit);
    
  }
  return (
    <>
      <Header count={count}></Header>
      <Banner handleCoinCount={handleCoinCount}></Banner>
      <Main></Main>

      <div className="flex justify-between w-11/12 mx-auto mt-7 pb-52">
        <Players choosePlayer={choosePlayer} handleChoosePlayer={handleChoosePlayer}></Players>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
