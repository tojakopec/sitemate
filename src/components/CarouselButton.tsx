interface CarouselButtonProps {
  text: string;
  onClick: () => void;
  selected: boolean;
}
const CarouselButton = ({ text, onClick, selected }: CarouselButtonProps) => {
  return (
    <button
      type="button"
      className={"button " + (selected && "selected")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CarouselButton;
