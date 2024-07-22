import { useRecoilState } from "recoil";
import { playerState } from "../status/playerState";

const usePlayerUpdate = () => {
  const [player, setPlayer] = useRecoilState(playerState);

  const playerUpdateFunc = (width: number, height: number) => {
    const max = width >= height ? width : height;
    setPlayer({
      ...player,
      blockWidth: width,
      blockHeight: height,
      blockMaxleng: max,
    });
  };

  return { playerUpdateFunc };
};

export default usePlayerUpdate;
