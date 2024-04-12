import { useTetris } from "../hooks/tetris";
import Block from "./block/Block";

export const GameScreen = () => {
  const outData = useTetris();
  return (
    <div className="bg-white h-[600px] w-[400px]">
      {outData.map(
        (ary, index) => {
          return (
            <div className="flex" key={index}>
              {ary.map((num, index) => {
                return num === 1 ? (
                  <Block />
                ) : (
                  <div className="w-10 h-10"></div>
                );
              })}
            </div>
          );
        }
        //
      )}
    </div>
  );
};
