import { Cursor } from "./Cursor";

interface TextProps {
  textArray: string[];
  colorLetters: string[];
  posCursor: number;
}

export const Text = ({ textArray, colorLetters, posCursor }: TextProps) => {
  console.log(posCursor);
  return (
    <div className="relative min-h-44 w-full text-justify">
      {textArray.map((letter, index) => (
        <span key={index} className={colorLetters[index]}>
          {posCursor === index && <Cursor />}
          <span>{letter}</span>
        </span>
      ))}
    </div>
  );
};
