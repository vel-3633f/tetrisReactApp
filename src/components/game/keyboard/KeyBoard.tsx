import { useKeyPressEvent } from "react-use";
import useRotateMino from "../../../hooks/useRotateMino";
import useSideMove from "../../../hooks/useSideMove";
import { buttonStyle } from "../../../lib/constants/buttonStyle";
import Button from "./Button";
import useDropFunc from "../../../hooks/useDropFunc";

const KeyBoard = () => {
  // エラーを防ぐために一度全てrotatedの関数を置いておく
  const { rotateFunc } = useRotateMino();
  const { rightSideMove, leftSideMove } = useSideMove();
  const { dropMove } = useDropFunc();

  useKeyPressEvent("ArrowUp", rotateFunc);
  useKeyPressEvent("ArrowRight", rightSideMove);
  useKeyPressEvent("ArrowLeft", leftSideMove);
  useKeyPressEvent("ArrowDown", dropMove);

  return (
    <div className="relative">
      <Button item="left" func={leftSideMove} className={buttonStyle.left} />
      <Button item="right" func={rightSideMove} className={buttonStyle.right} />
      <Button item="rotate" func={rotateFunc} className={buttonStyle.rotate} />
      <Button item="down" func={dropMove} className={buttonStyle.down} />
    </div>
  );
};

export default KeyBoard;
