export interface BlockProps {
  currentBlock: number[][];
  setCurrentBlock: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface buttonProps {
  item: string;
  func(): void;
  className?: string;
}

export interface nextAnimalProps {
  animal: string;
}

export interface defaltCellProp {
  isOccupied: boolean;
  isAnimal: boolean;
  isDropped: boolean;
  className: string;
  direction: string;
}

export interface playerProp {
  point: number[];
  score: number;
  dropTime: number;
  isNextMino: boolean;
  isGameOver: boolean;
  isLay: boolean;
  blockMaxLength: number;
  blockHeight: number;
  blockWidth: number;
  mode: string;
}

export interface AnimalMino {
  [key: string]: {
    mino: defaltCellProp[][];
    width: number;
    height: number;
    maxLength: number;
  };
}
