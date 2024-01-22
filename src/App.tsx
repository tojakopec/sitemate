import Header from "./components/Header";
import "./App.css";
import { Fragment } from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero
        title="Get the right person for the job."
        subtitle="Hire skilled personnel with ease."
      />
    </Fragment>
  );
}

export default App;
