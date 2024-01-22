import Header from "./components/Header";
import "./App.css";
import { Fragment } from "react";
import Hero from "./components/Hero";
import FrontPageCarousel from "./components/FrontPageCarousel";

function App() {
  const CarouselCardDataEmployee = [
    {
      title: "Browse Jobs",
      text: "Search through our database of jobs and pick the perfect location, company and salary.",
      img: "SearchSVG",
    },

    {
      title: "Apply & Negotiate",
      text: "Apply for the job and negotiate your salary with the employer (industry standard rate is guaranteed).",
      img: "CheckSVG",
    },

    {
      title: "Work & Get Paid",
      text: "You get paid fully for the work you do. We don't take any cut from your salary.",
      img: "CoinSVG",
    },
  ];

  const CarouselCardDataEmployer = [
    {
      title: "Post Jobs",
      text: "Post jobs on our platform and get matched with the right candidates.",
      img: "SearchSVG",
    },

    {
      title: "Interview & Hire",
      text: "Interview candidates and hire the best fit for the job.",
      img: "CheckSVG",
    },

    {
      title: "Pay & Review",
      text: "Pay the worker and review their performance.",
      img: "CoinSVG",
    },
  ];

  return (
    <Fragment>
      <Header />
      <Hero
        title="Get the right person for the job."
        subtitle="Hire skilled personnel with ease."
      />
      <FrontPageCarousel props={CarouselCardDataEmployee} />
    </Fragment>
  );
}

export default App;
