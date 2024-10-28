import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Players from "./components/players/Players";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function App() {
  const [price, setPrice] = useState(0);
  const [choosePlayer, setChoosePlayer] = useState([]);
  const maxPlayers = 6;

  const handleDecreaseCoin = (p) => {
    if (price <= 0) {
      toast.error("Sorry, coins are insufficient!");
    } else {
      setPrice((newPrice) => Math.max(newPrice - p));
    }
  };

  const handleCoinCount = () => {
    setPrice((newPrice) => newPrice + 9000000);
  };

  const handleIncreaseCoin = (id) => {
    const player = choosePlayer.find((plr) => plr.id === id);
    if (player) {
      setPrice((newPrice) => newPrice + player.price);
    }
  };

  const handleDelete = (id) => {
    handleIncreaseCoin(id);
    const updatedPlayers = choosePlayer.filter((p) => p.id !== id);
    setChoosePlayer(updatedPlayers);
  };

  const handleChoosePlayer = (player) => {
    if (choosePlayer.length >= maxPlayers) {
      toast.error(`Sorry, you can only select up to ${maxPlayers} players.`);
      return;
    }

    const isExist = choosePlayer.find((p) => p.id === player.id);
    if (isExist) {
      toast.error("Sorry, this player is already added.");
    } else {
      handleDecreaseCoin(player.price);
      setChoosePlayer((prevPlayers) => [...prevPlayers, player]);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BPL Dream Team</title>
        <meta name="description" content="Helmet application" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header price={price} />
      <Banner handleCoinCount={handleCoinCount} />
      <Main />

      <div className="flex justify-between w-11/12 mx-auto mt-7 pb-52">
        <Players
          choosePlayer={choosePlayer}
          handleDelete={handleDelete}
          handleChoosePlayer={handleChoosePlayer}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
