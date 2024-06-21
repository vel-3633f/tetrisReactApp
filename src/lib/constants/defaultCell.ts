export const defaultCellTrue = (className: string) => ({
  isOccupied: true,
  className: className,
  direction: "up",
  isDropped: true,
});

export const defaultCellFalse = (className: string) => ({
  isOccupied: false,
  className: className,
  direction: "up",
  isDropped: false,
});
