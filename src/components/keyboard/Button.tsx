import { buttonProps } from "../../lib/interface/gameProps";

const Button = ({ item, func }: buttonProps) => {
  return (
    <button className="w-[70px]" onClick={func}>
      <img src={`/background/button/game/button-${item}.png`} alt="button" />
    </button>
  );
};

export default Button;
