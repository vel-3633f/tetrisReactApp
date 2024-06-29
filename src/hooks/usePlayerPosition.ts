import { useRecoilState } from "recoil";
import { boardSize } from "../lib/constants/defaultBoard";
import { defaltCellProp } from "../lib/interface/gameProps";
import { playerState } from "../status/playerState";

//現在のブロックの左上の位置取得する
const usePlayerPosition = () => {
  const [player, setPlayer] = useRecoilState(playerState);

  const getPlayerPosition = (upgradeBoard: defaltCellProp[][]) => {
    const currentPosition = [];

    positionBoard: for (let y = 0; y < boardSize[1]; y++) {
      for (let x = 0; x < boardSize[0]; x++) {
        const currentBlock = upgradeBoard[y][x];

        if (currentBlock.isDropped) {
          currentPosition.push(y, x);
          break positionBoard;
        }
      }
    }
    setPlayer({ ...player, point: currentPosition });
  };

  return { getPlayerPosition };
};

export default usePlayerPosition;
