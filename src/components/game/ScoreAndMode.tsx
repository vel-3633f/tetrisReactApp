import { useRecoilState, useRecoilValue } from "recoil";
import { playerState } from "../../status/playerState";
import { scoreState } from "../../status/scoreState";

const ScoreAndMode = () => {
  const [player] = useRecoilState(playerState);
  const score = useRecoilValue(scoreState);

  return (
    <div className="font-Bungee text-left text-4xl mr-10">
      <h3>MODE</h3>
      <div className="w-[300px] mt-2 mb-6">
        <img
          src={`/background/button/game/icon-mode-${player.mode}.png`}
          alt="button"
        />
      </div>
      <h3>SCORE</h3>
      <div className="w-[300px] my-2 relative">
        <p className="absolute -translate-y-1/2 top-1/2 right-5 text-2xl">
          {score}
        </p>
        <img
          src={`/background/button/game/button-frame-mode-easy.png`}
          alt="button"
        />
      </div>
    </div>
  );
};

export default ScoreAndMode;
