import { useRecoilState } from "recoil";
import useCreateMino from "../hooks/useCreateMino";
import { blockState } from "../status/blockState";

export const GameScreen = () => {
  const [currentBoard] = useRecoilState(blockState);
  const updatedBoard = useCreateMino(currentBoard);

  return (
    <div className="bg-white">
      {updatedBoard.map((row, r_i) => {
        return (
          <div className="flex" key={r_i}>
            {row.map((val, v_i) => {
              return (
                <div className={`w-10 h-10 ${val.className}`} key={v_i}></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
