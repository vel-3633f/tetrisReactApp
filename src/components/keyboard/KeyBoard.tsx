import Button from "./Button";

const KeyBoard = () => {
  // エラーを防ぐために一度全てleftの関数を置いておく
  return (
    <div className="flex justify-around items-center h-full">
      <Button item="←" />
      <Button item="→" />
      <Button item="↑" />
      <Button item="↓" />
    </div>
  );
};

export default KeyBoard;
