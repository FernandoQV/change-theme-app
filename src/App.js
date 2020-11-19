import { useState, useEffect } from "react";
import Global from "./helpers/GlobalStyles";
import Header from "./components/Header/Header";
import getPalette from "./helpers/getPalette";
import Cards from "./components/cards/Cards";

function App() {
  const [palette, setPalette] = useState(getPalette(true));
  const [dark, setDark] = useState(true);
  const updatePalette = (isDark) => {
    setPalette(getPalette(isDark));
  };
  const updateDark =()=> {
    setDark(!dark);
  };
  useEffect(() => {
    updatePalette(dark);
  }, [dark]);
  return (
    <>
      <Global></Global>
      <Header updateDark={updateDark} palette={palette}/>
      <Cards palette={palette}></Cards>
    </>
  );
}

export default App;
