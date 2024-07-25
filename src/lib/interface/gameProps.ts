export interface BlockProps {
  currentBlock: number[][];
  setCurrentBlock: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface buttonProps {
  item: string;
  func(): void;
}

export interface defaltCellProp {
  isOccupied: boolean;
  className: string;
  direction: string;
  isDropped: boolean;
}

export interface playerProp {
  point: number[];
  dropTime: number;
  isNextMino: boolean;
  isGameOver: boolean;
  blockMaxLength: number;
  blockHeight: number;
  blockWidth: number;
  mode: string;
  score: number;
}

export interface AnimalMino {
  [key: string]: {
    mino: defaltCellProp[][];
    width: number;
    height: number;
    maxLength: number;
  };
}
