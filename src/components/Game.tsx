import { useRecoilState } from "recoil";
import { playerState } from "../status/playerState";
import Play from "./Play";
import Start from "./start/Start";

const Game = () => {
  const [player] = useRecoilState(playerState);

  return (
    <>
      {player.isGameOver ? <Start /> : <Play />}
    </>
  );
};

export default Game;
