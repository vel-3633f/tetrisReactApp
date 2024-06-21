import useRotateMino from "../../hooks/useRotateMino";
import Button from "./Button";

const KeyBoard = () => {
  // エラーを防ぐために一度全てrotatedの関数を置いておく
  const { rotateFunc } = useRotateMino();
  return (
    <div className="flex justify-around items-center h-full">
      <Button item="←" func={rotateFunc} />
      <Button item="→" func={rotateFunc} />
      <Button item="↑" func={rotateFunc} />
      <Button item="↓" func={rotateFunc} />
    </div>
  );
};

export default KeyBoard;
