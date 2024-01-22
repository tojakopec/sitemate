import CarouselCard from "./CarouselCard";

interface CarouselCardProps {
  props: {
    title: string;
    text: string;
    img: string;
  }[];
}

const FrontPageCarousel = (props: CarouselCardProps) => {
  return (
    <div
      id="fp-carousel"
      className="container-xl mb-5 rounded-end-pill --bs-theme-c3 fixed-height"
    >
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carouselContainer"
        data-bs-ride="carousel"
      >
        {props.props.map((item, index) => {
          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <CarouselCard
                title={item.title}
                text={item.text}
                img={item.img}
              />
            </div>
          );
        })}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon --bs-theme-c4"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon --bs-theme-c4"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default FrontPageCarousel;
