import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import createMino from "../features/createMino";
import useDropFunc from "../hooks/useDropFunc";
import usePlayerPosition from "../hooks/usePlayerPosition";
import { bgImgStyle } from "../lib/constants/animalStyle";
import { blockState } from "../status/blockState";
import { playerState } from "../status/playerState";

export const GameScreen = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const { getPlayerPosition } = usePlayerPosition();
  const { dropMove } = useDropFunc();
  const player = useRecoilValue(playerState);

  const dropTime = player.dropTime;

  useEffect(() => {
    const updatedBoard = createMino(currentBoard);
    setCurrentBoard(updatedBoard);
  }, [player.isNextMino]);

  useEffect(() => {
    getPlayerPosition(currentBoard);
  }, [currentBoard]);

  useEffect(() => {
    const interval = setInterval(() => {
      dropMove();
    }, dropTime);
    return () => clearInterval(interval);
  }, [dropMove, dropTime]);

  return (
    <div className="bg-white">
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
  );
};
