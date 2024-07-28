import { buttonProps } from "../../lib/interface/gameProps";

const PauseButton = ({ func, item, size }: buttonProps) => {
  console.log(size, `w-[${size}px] block mb-[40px]`);
  return (
    <div>
      <button
        className="block mb-[40px]"
        onClick={func}
        style={{ width: `${size}px` }}
      >
        <img src={`/background/button/pause/button-${item}.png`} alt="button" />
      </button>
    </div>
  );
};

export default PauseButton;
