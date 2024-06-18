export interface BlockProps {
  currentBlock: number[][];
  setCurrentBlock: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface buttonProps {
  item: string;
}

export interface defaltCellProp {
  isOccupied: boolean;
  className: string;
  direction: string;
}
