import { useRecoilState } from "recoil";
import { playerState } from "../status/playerState";
import { GameScreen } from "./game/GameScreen";
import KeyBoard from "./game/keyboard/KeyBoard";
import NextBoard from "./game/nextBoard/NextBoard";
import ScoreAndMode from "./game/ScoreAndMode";
import Pause from "./pause/Pause";

const Play = () => {
  const [player, setPlayer] = useRecoilState(playerState);
  const pauseFunc = () => {
    setPlayer({ ...player, isPause: true });
  };
  return (
    <div className="h-screen w-screen bg-[url('/background/pause.jpg')] bg-cover flex justify-center items-center relative">
      {player.isPause ? (
        <Pause />
      ) : (
        <div className="flex">
          <ScoreAndMode />
          <GameScreen />
          <div className="flex flex-col justify-between items-end w-[250px] ">
            <button className="w-[70px] absolute" onClick={pauseFunc}>
              <img
                src="/background/button/game/button-hamburger01.png"
                alt="button"
              />
            </button>
            <NextBoard />
            <KeyBoard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
