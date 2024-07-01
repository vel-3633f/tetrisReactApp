import { useKeyPressEvent } from "react-use";
import useRotateMino from "../../hooks/useRotateMino";
import useSideMove from "../../hooks/useSideMove";
import Button from "./Button";

const KeyBoard = () => {
  // エラーを防ぐために一度全てrotatedの関数を置いておく
  const { rotateFunc } = useRotateMino();
  const { rightSideMove, leftSideMove } = useSideMove();
  useKeyPressEvent("ArrowUp", rotateFunc);
  useKeyPressEvent("ArrowRight", rightSideMove);
  useKeyPressEvent("ArrowLeft", leftSideMove);
  
  return (
    <div className="flex justify-around items-center h-full">
      <Button item="←" func={leftSideMove} />
      <Button item="→" func={rightSideMove} />
      <Button item="↑" func={rotateFunc} />
      <Button item="↓" func={rotateFunc} />
    </div>
  );
};

export default KeyBoard;
