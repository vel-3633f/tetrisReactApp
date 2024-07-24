import { useRecoilState } from "recoil";
import { playerState } from "../../status/playerState";
import ModeButton from "./ModeButton";

const Start = () => {
  const [player, setPlayer] = useRecoilState(playerState);

  const easyFunc = () => {
    setPlayer({
      ...player,
      isGameOver: false,
      mode: "easy",
      dropTime: 2000,
    });
  };
  const normalFunc = () => {
    setPlayer({
      ...player,
      isGameOver: false,
      mode: "normal",
      dropTime: 1000,
    });
  };
  const hardFunc = () => {
    setPlayer({
      ...player,
      isGameOver: false,
      mode: "hard",
      dropTime: 500,
    });
  };

  return (
    <div className="h-screen w-screen bg-[url('/background/title.jpg')] bg-cover flex justify-center items-center">
      <div>
        <ModeButton func={easyFunc} item="easy" />
        <ModeButton func={normalFunc} item="normal" />
        <ModeButton func={hardFunc} item="hard" />
      </div>
    </div>
  );
};

export default Start;
