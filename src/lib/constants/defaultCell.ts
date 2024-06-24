export const directionContainer = ["up", "right", "down", "left"];

export const defaultCellTrue = (className: string) => ({
  isOccupied: true,
  className: className,
  direction: directionContainer[0],
  isDropped: true,
});

export const defaultCellFalse = (className: string) => ({
  isOccupied: false,
  className: className,
  direction: directionContainer[0],
  isDropped: false,
});
