import rotateMino from "../../features/rotateMino";
import Button from "./Button";

const KeyBoard = () => {
  // エラーを防ぐために一度全てrotatedの関数を置いておく
  return (
    <div className="flex justify-around items-center h-full">
      <Button item="←" func={ rotateMino} />
      <Button item="→" func={ rotateMino} />
      <Button item="↑" func={ rotateMino} />
      <Button item="↓" func={ rotateMino} />
    </div>
  );
};

export default KeyBoard;
