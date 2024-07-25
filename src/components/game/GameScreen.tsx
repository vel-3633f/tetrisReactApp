import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useCreateMino from "../../hooks/useCreateMino";
import useDropFunc from "../../hooks/useDropFunc";
import usePlayerUpdate from "../../hooks/usePlayerUpdate";
import { bgImgStyle } from "../../lib/constants/animalStyle";
import { blockState } from "../../status/blockState";
import { playerState } from "../../status/playerState";

export const GameScreen = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const { createMino } = useCreateMino();
  const { dropMove } = useDropFunc();
  const [player] = useRecoilState(playerState);
  const dropTime = player.dropTime;
  const { playerUpdateFunc } = usePlayerUpdate();

  useEffect(() => {
    const { newMinoBoard } = createMino(currentBoard);
    setCurrentBoard(newMinoBoard);
  }, []);

  useEffect(() => {
    playerUpdateFunc(currentBoard);
  }, [currentBoard]);

  useEffect(() => {
    const interval = setInterval(() => {
      dropMove();
    }, dropTime);
    return () => clearInterval(interval);
  }, [dropMove, dropTime]);

  return (
    <div className="border-2 border-border rounded-lg">
      <div className="bg-white border-8 border-forest rounded-lg">
        <div className="border border-border">
          {currentBoard.map((row, r_i) => {
            return (
              <div className="flex" key={r_i}>
                {row.map((val, v_i) => {
                  return (
                    <div
                      style={bgImgStyle(val.className)}
                      className={`w-7 h-7 bg-cover bg-no-repeat ${val.direction}`}
                      key={v_i}
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
