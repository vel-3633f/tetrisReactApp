import { useTetris } from "../hooks/tetris";

export const GameScreen = () => {
  const outData = useTetris();
  return (
    <div className="bg-white h-[600px] w-[400px]">
      {outData.map(
        (ary, index) => {
          return (
            <div className="flex" key={index}>
              {ary.map((num, index) => (
                <div className="w-10 h-10 bg-red-50" key={index}>
                  {num}
                </div>
              ))}
            </div>
          );
        }
        //
      )}
    </div>
  );
};
