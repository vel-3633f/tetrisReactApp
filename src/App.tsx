import { RecoilRoot } from "recoil";
import { GameScreen } from "./components/GameScreen";
import KeyBoard from "./components/keyboard/KeyBoard";

function App() {
  return (
    <RecoilRoot>
      <div className="h-screen w-screen bg-blue-900 flex justify-center items-center">
        <GameScreen />
        <div className="bg-white h-[300px] w-[400px]">
          <KeyBoard />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
