import { useRecoilState } from "recoil";
import { useTetris } from "../hooks/tetris";
import { blockState } from "../status/blockState";
import Block from "./parts/Block";

export const GameScreen = () => {
  const [currentBlock, setCurrentBlock] = useRecoilState(blockState);
  useTetris({ currentBlock, setCurrentBlock });
  return (
    <div className="bg-white h-[600px] w-[400px]">
      {currentBlock.map((ary, index: number) => {
        return (
          <div className="flex border" key={index}>
            {ary.map((num, index: number) => {
              return num === 1 ? (
                <Block key={index} />
              ) : (
                <div className="w-10 h-10" key={index}></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
