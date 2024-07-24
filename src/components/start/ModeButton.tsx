import { buttonProps } from "../../lib/interface/gameProps";

const ModeButton = ({ func, item }: buttonProps) => {
  return (
    <button className="w-[300px] block mb-[40px]" onClick={func}>
      <img
        src={`/background/button/title/button-mode-${item}.png`}
        alt="button"
      />
    </button>
  );
};

export default ModeButton;
