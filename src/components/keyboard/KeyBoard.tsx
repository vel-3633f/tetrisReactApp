import { useLeftMoveBlock, useRightMoveBlock } from "../../hooks/sideMove";
import Button from "./Button";

const KeyBoard = () => {
  // エラーを防ぐために一度全てleftの関数を置いておく
  return (
    <div className="flex justify-around items-center h-full">
      <Button item="←" func={useLeftMoveBlock} />
      <Button item="→" func={useRightMoveBlock} />
      <Button item="↑" func={useLeftMoveBlock} />
      <Button item="↓" func={useLeftMoveBlock} />
    </div>
  );
};

export default KeyBoard;
