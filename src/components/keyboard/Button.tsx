import { useRecoilState } from "recoil";
import { buttonProps } from "../../lib/interface/gameProps";
import { blockState } from "../../status/blockState";

const Button = ({ item, func }: buttonProps) => {
  const [currentBlock, setCurrentBlock] = useRecoilState(blockState);
  const onClick = () => {
    func({ currentBlock, setCurrentBlock });
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={onClick}
    >
      {item}
    </button>
  );
};

export default Button;
