import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { blockState } from "../status/blockState";
import createMino from "../features/createMino";
import { playerState } from "../status/playerState";

export const GameScreen = () => {
  const player = useRecoilValue(playerState)
  console.log(player)
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  useEffect(() => {
    const updatedBoard = createMino(currentBoard);
    setCurrentBoard(updatedBoard);
  }, []);

  return (
    <div className="bg-white">
      {currentBoard.map((row, r_i) => {
        return (
          <div className="flex" key={r_i}>
            {row.map((val, v_i) => {
              return (
                <div
                  className={`w-10 h-10 ${val.className} ${val.direction}`}
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
