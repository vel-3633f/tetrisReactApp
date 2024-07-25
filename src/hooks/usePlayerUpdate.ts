import { useRecoilState } from "recoil";
import { animalMinos } from "../lib/constants/animalMino";
import { boardSize } from "../lib/constants/defaultBoard";
import { defaltCellProp } from "../lib/interface/gameProps";
import { playerState } from "../status/playerState";

const usePlayerUpdate = () => {
  const [player, setPlayer] = useRecoilState(playerState);

  const playerUpdateFunc = (upgradeBoard: defaltCellProp[][]) => {
    let width = 0;
    let height = 0;
    const currentPosition = [];

    Board: for (let y = 0; y < boardSize[1]; y++) {
      for (let x = 0; x < boardSize[0]; x++) {
        const currentBlock = upgradeBoard[y][x];

        if (currentBlock.isDropped) {
          currentPosition.push(y, x);
          break Board;
        }
      }
    }
    animalBoard: for (let y = 0; y < boardSize[1]; y++) {
      for (let x = 0; x < boardSize[0]; x++) {
        const currentBlock = upgradeBoard[y][x];

        if (currentBlock.isAnimal && currentBlock.isDropped) {
          const aniName = currentBlock.className.slice(0, -2);
          if (player.isLay) {
            width = animalMinos[aniName].height;
            height = animalMinos[aniName].width;
          } else {
            width = animalMinos[aniName].width;
            height = animalMinos[aniName].height;
          }

          break animalBoard;
        }
      }
    }

    const max = width >= height ? width : height;
    setPlayer({
      ...player,
      blockWidth: width,
      blockHeight: height,
      blockMaxLength: max,
      point: currentPosition,
    });
  };


  return { playerUpdateFunc };
};

export default usePlayerUpdate;
