import { useRecoilState } from "recoil";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

//現在のブロックの左上の位置取得する
const usePlayerPosition = () => {
  // const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  // const [player, setPlayer] = useRecoilState(playerState);

  const getPlayerPosition = () => {};

  return { getPlayerPosition };
};

export default usePlayerPosition;
