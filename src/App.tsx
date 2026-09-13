import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";

const technologyFetch = async () => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologyPromise] = useState(() => technologyFetch());
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback = {<h2>Website Loading...</h2>}>
        <Technologies technologyPromise = {technologyPromise}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
