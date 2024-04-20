export interface BlockProps {
  currentBlock: number[][];
  setCurrentBlock: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface buttonProps {
  item: string;
  func: ({ currentBlock, setCurrentBlock }: BlockProps) => void
}