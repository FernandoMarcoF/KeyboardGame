/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Menu } from "../components/Menu";
import { Modal } from "../components/Modal";
import { Text } from "../components/Text";
import { ResetButton } from "../components/ResetButton";
import quotesJsonEnglish from "../assets/quotes/english.json";
import quotesJsonSpanis from "../assets/quotes/spanish.json";

const colorDefault = "text-subColor";
const correct = "text-textColor";
const incorrect = "text-errorColor";

const listQuotes = ["español", "inglés"];

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getInitialColorLetters = (arrayLength: number) => {
  return Array.from({ length: arrayLength }, () => colorDefault);
};

const getLanguageQuotes = (op: number) => {
  switch (op) {
    case 0:
      return quotesJsonSpanis.quotes;
    case 1:
      return quotesJsonEnglish.quotes;
    default:
      return quotesJsonSpanis.quotes;
  }
};

const getRandomQuote = (op: number) => {
  const quotes = getLanguageQuotes(op);
  const text = quotes[getRandomNumber(0, quotes.length)].text;
  const textArray = text.split("");
  return textArray;
};

let textArray = getRandomQuote(0);

export const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [colorLetters, setColorLetters] = useState<string[]>(
    getInitialColorLetters(textArray.length),
  );
  const [op, setOp] = useState(0);
  const [cont, setCont] = useState(0);
  const [text, setText] = useState("");

  const prueba = (key: string, inputCont: number) => {
    if (key === textArray[inputCont]) {
      setColorLetters((colors) => {
        colors[inputCont] = correct;
        return [...colors];
      });
      return true;
    } else {
      setColorLetters((colors) => {
        colors[inputCont] = incorrect;
        return [...colors];
      });
      return false;
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    setCont((prevCont) => {
      const result = prueba(event.key, prevCont);
      return result ? prevCont + 1 : prevCont;
    });
  };

  const reset = (option: number) => {
    textArray = getRandomQuote(option);
    setCont(0);
    const initialColors = getInitialColorLetters(textArray.length);
    setColorLetters(initialColors);
    focus(true);
  };

  const focus = (isFocus: boolean) => {
    if (isFocus) {
      inputRef.current?.focus();
    }
  };

  const option = (option: number) => {
    textArray = getRandomQuote(option);
    setOp(option);
    reset(option);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <main className="grid grid-cols-1 h-full justify-center self-start text-center">
      <Menu />
      <div className="mb-1 grid grid-cols-3 auto-rows-min items-end">
        <span className="text-start text-2xl text-mainColor">
          {`${cont}/${textArray.length}`}
        </span>
        <Modal listQuotes={listQuotes} focus={focus} option={option} />
        <div className="relative items-center col-span-3 text-2xl">
          <input
            className="absolute left-0 top-0 opacity-0"
            id="input-test"
            autoCapitalize="false"
            autoComplete="false"
            ref={inputRef}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={handleKeyPress}
            type="text"
            value={text}
          />
          <Text
            textArray={textArray}
            colorLetters={colorLetters}
            posCursor={cont}
          />
        </div>
        <div className="col-start-2">
          <ResetButton option={op} reset={reset} />
        </div>
      </div>
      <div></div>
    </main>
  );
};
