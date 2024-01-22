interface CardDataProps {
  title: string;
  text: string;
  img: string;
}
const CarouselCard = (props: CardDataProps) => {
  return (
    <div className="carousel-card">
      <div className="card">
        <div className="card-body --bs-theme-c2">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
