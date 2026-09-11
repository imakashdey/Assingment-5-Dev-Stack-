import { Suspense } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { Itechnologies } from "./Type/technology";
import Footer from "./Components/Footer/Footer";


const technologiesFetch=async():Promise<Itechnologies[] >=>{
  const res=await fetch('/Data.json')
  const data=await res.json();
  return data;
}


function App() {
    const technologiesPromise = technologiesFetch();
  return (
    <>
    <Navbar />
    <Hero />
    <Suspense fallback={<h2>Waiting................</h2>}>
    <Technologies technologiesPromise={technologiesPromise} />
    <Footer/>

    </Suspense>
    
    </>
  );
}

export default App;