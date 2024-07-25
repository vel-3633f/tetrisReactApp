export const directionContainer = {
  up: "rotate-0",
  right: "rotate-90",
  down: "rotate-180",
  left: "-rotate-90",
};

export const defaultCellTrue = (className: string, animal: boolean) => ({
  isOccupied: animal,
  isAnimal: animal,
  className: className,
  direction: directionContainer.up,
  isDropped: true,
});

export const defaultCellFalse = (className: string) => ({
  isOccupied: false,
  isAnimal: false,
  className: className,
  direction: directionContainer.up,
  isDropped: false,
});
