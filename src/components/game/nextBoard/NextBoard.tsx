import NextBlock from "./NextBlock";

const NextBoard = () => {
  return (
    <div className="w-full">
      <NextBlock animal="cat" />
      <NextBlock animal="cow" />
      <NextBlock animal="rabbit" />
    </div>
  );
};

export default NextBoard;
