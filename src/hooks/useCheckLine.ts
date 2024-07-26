import { useRecoilState } from "recoil";
import { defaltCellProp } from "../lib/interface/gameProps";
import { scoreState } from "../status/scoreState";

const useCheckLine = () => {
  const [score, setScore] = useRecoilState(scoreState);

  const checkLine = (currentBoard: defaltCellProp[][]) => {
    let lineCount = 0;
    let isLine = true;
    // const upgradeBoard = [...currentBoard]
    for (const line of currentBoard) {
      isLine = true;
      for (const block of line) {
        if (!block.isAnimal) {
          isLine = false;
        }
      }
      if (isLine) {
        lineCount++;
      }
    }
    setScore(score + lineCount * 100);
  };

  return { checkLine };
};

export default useCheckLine;
