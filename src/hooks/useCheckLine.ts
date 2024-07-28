import { useRecoilState } from "recoil";
import { defaltCellProp } from "../lib/interface/gameProps";
import { scoreState } from "../status/scoreState";
import { boardSize } from "../lib/constants/defaultBoard";
import { defaultCellFalse } from "../lib/constants/defaultCell";

const useCheckLine = () => {
  const [score, setScore] = useRecoilState(scoreState);

  const checkLine = (currentBoard: defaltCellProp[][]) => {
    let lineCount = 0;
    let isLine = true;
    const upgradeBoard = [...currentBoard]
    for (let y = 0; y < currentBoard.length; y++) {
      isLine = true;
      for (const block of currentBoard[y]) {
        if (!block.isAnimal) {
          isLine = false;
        }
      }
      if (isLine) {
        upgradeBoard.splice(y, 1);
        const newLine = Array.from({ length: boardSize[0] }, () => ({
          ...defaultCellFalse("border"),
        }))
        upgradeBoard.unshift(newLine);
        lineCount++;
      }
    }
    setScore(score + lineCount * 100);
    return upgradeBoard
  };

  return { checkLine };
};

export default useCheckLine;
