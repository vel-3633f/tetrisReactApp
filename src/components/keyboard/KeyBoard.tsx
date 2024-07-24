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
      <Button item="left" func={leftSideMove} />
      <Button item="right" func={rightSideMove} />
      <Button item="rotate" func={rotateFunc} />
      <Button item="down" func={rotateFunc} />
    </div>
  );
};

export default KeyBoard;
