export const bgImgStyle = (imgName: string) => {
  const noNumName = imgName.slice(0, -2);

  return imgName === "border"
    ? { borderWidth: "1px" }
    : {
        backgroundImage: `url("/animalImg/${noNumName}/${imgName}.jpg")`,
      };
};
