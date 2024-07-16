import { useRecoilState } from "recoil";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

const useNextBlock = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const [player] = useRecoilState(playerState);

  const createNextBlock = () => {
    console.log("hello");
  };

  return {
    createNextBlock,
  };
};

export default useNextBlock;
