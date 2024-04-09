import { Cursor } from "./Cursor";

interface TextProps {
  textArray: string[];
  colorLetters: string[];
  posCursor: number;
  isFocused: boolean;
  focus: (isFocus: boolean) => void;
}

export const Text = ({
  textArray,
  colorLetters,
  posCursor,
  isFocused,
  focus,
}: TextProps) => {
  
  const sendIsFocus = (isFocus: boolean) => {
    focus(isFocus)
  };

  return (
    <div className={"relative min-h-44 w-full text-justify"}>
      {!isFocused && (
        <div
          className="absolute flex h-full w-full items-center justify-center text-lg text-textColor cursor-pointer z-50"
          onClick={() => sendIsFocus(true)}
        >
          Click here to focus
        </div>
      )}
      <div className={`${!isFocused && "opacity-30 blur-sm"}`}>
        {textArray.map((letter, index) => (
          <span key={index} className={colorLetters[index]}>
            {isFocused && posCursor === index && <Cursor />}
            <span>{letter}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
