import { useEffect } from "react";
import { useRecoilState } from "recoil";
import createMino from "../features/createMino";
import { bgImgStyle } from "../lib/constants/animalStyle";
import { blockState } from "../status/blockState";
import usePlayerPosition from "../hooks/usePlayerPosition";

export const GameScreen = () => {
  const [currentBoard, setCurrentBoard] = useRecoilState(blockState);
  const { getPlayerPosition } = usePlayerPosition();

  useEffect(() => {
    const updatedBoard = createMino(currentBoard);
    setCurrentBoard(updatedBoard);
  }, []);

  useEffect(() => {
    getPlayerPosition(currentBoard)
  }, [currentBoard]);

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
