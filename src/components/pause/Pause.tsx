import { useRecoilState } from "recoil";
import { playerState } from "../../status/playerState";
import PauseButton from "./PauseButton";

const Pause = () => {
  const [player, setPlayer] = useRecoilState(playerState);

  const pauseFunc = () => {
    setPlayer({ ...player, isPause: false });
  };
  const gameOverFunc = () => {
    setPlayer({ ...player, isGameOver: true });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <PauseButton func={pauseFunc} item="back" size="350" />
      <PauseButton func={gameOverFunc} item="title" size="300" />
    </div>
  );
};

export default Pause;
