import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import CartContainer from "./components/cartContainer/CartContainer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Players from "./components/players/Players";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "Available",
  });

  const [choosePlayer,setChoosePlayer] = useState([]);

  const handleChoosePlayer = (player)=>{
    console.log(player);
  }














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

  console.log(isActive);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>

      <div className="flex justify-between w-11/12 mx-auto mt-7">
        <Players handleChoosePlayer={handleChoosePlayer}></Players>
        <CartContainer
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        ></CartContainer>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
