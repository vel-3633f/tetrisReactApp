import { buttonProps } from "../../../lib/interface/gameProps";

const Button = ({ item, func, className }: buttonProps) => {
  return (
    <button className={`w-[70px] absolute ${className}`} onClick={func}>
      <img src={`/background/button/game/button-${item}.png`} alt="button" />
    </button>
  );
};

export default Button;

