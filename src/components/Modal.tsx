import { MouseEvent, useRef, useState } from "react";

interface ComponenteProps {
  listQuotes: string[];
  focus: (isFocus: boolean) => void;
  option: (index: number) => void;
}

export const Modal = ({ listQuotes, focus, option }: ComponenteProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearh] = useState("");
  const [op, setOp] = useState(0);

  const sendFocus = () => {
    focus(true);
  };

  const sendOption = (index: number) => {
    modalRef.current?.close();
    setOp(index);
    focus(false);
    option(index);
  };

  const handleButtonClick = () => {
    sendFocus();
    setSearh("");
    modalRef.current?.showModal();
  };

  const closeModalBgClick = (event: MouseEvent<HTMLDialogElement>) => {
    const { id } = event.target as HTMLDialogElement;
    if (id === "modal-bg") {
      modalRef.current?.close();
      focus(false);
    }
  };

  return (
    <>
      {/*Button trigger modal*/}
      <div className="flex w-full justify-center text-xl text-subColor">
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex items-center p-2"
        >
          <div className="mr-4 fill-subColor">
            <svg
              width="20px"
              height="20px"
              version="1.1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M16.9,6 L14,6 C13.7,4.7 13.2,3.6 12.6,2.4 C14.4,3.1 16,4.3 16.9,6 L16.9,6 Z M10,2 C10.8,3.2 11.5,4.5 11.9,6 L8.1,6 C8.5,4.6 9.2,3.2 10,2 L10,2 Z M2.3,12 C2.1,11.4 2,10.7 2,10 C2,9.3 2.1,8.6 2.3,8 L5.7,8 C5.6,8.7 5.6,9.3 5.6,10 C5.6,10.7 5.7,11.3 5.7,12 L2.3,12 L2.3,12 Z M3.1,14 L6,14 C6.3,15.3 6.8,16.4 7.4,17.6 C5.6,16.9 4,15.7 3.1,14 L3.1,14 Z M6,6 L3.1,6 C4.1,4.3 5.6,3.1 7.4,2.4 C6.8,3.6 6.3,4.7 6,6 L6,6 Z M10,18 C9.2,16.8 8.5,15.5 8.1,14 L11.9,14 C11.5,15.4 10.8,16.8 10,18 L10,18 Z M12.3,12 L7.7,12 C7.6,11.3 7.5,10.7 7.5,10 C7.5,9.3 7.6,8.7 7.7,8 L12.4,8 C12.5,8.7 12.6,9.3 12.6,10 C12.6,10.7 12.4,11.3 12.3,12 L12.3,12 Z M12.6,17.6 C13.2,16.5 13.7,15.3 14,14 L16.9,14 C16,15.7 14.4,16.9 12.6,17.6 L12.6,17.6 Z M14.4,12 C14.5,11.3 14.5,10.7 14.5,10 C14.5,9.3 14.4,8.7 14.4,8 L17.8,8 C18,8.6 18.1,9.3 18.1,10 C18.1,10.7 18,11.4 17.8,12 L14.4,12 L14.4,12 Z"
                id="Shape"
              />
            </svg>
          </div>
          <div>{listQuotes[op]}</div>
        </button>
      </div>

      {/* Modal */}
      <dialog
        id="modal-bg"
        ref={modalRef}
        onClick={closeModalBgClick}
        className="items-center justify-center bg-transparent px-4 text-subColor backdrop:bg-black/70 sm:px-0"
      >
        <div className="relative grid w-[540px] overflow-hidden rounded-md bg-transparent">
          <div className="grid grid-cols-[auto_minmax(0px,_1fr)] items-center bg-bgColor">
            <svg
              className="mx-4 fill-subColor"
              width="24px"
              height="24px"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                id="XMLID_223_"
              />
            </svg>
            <input
              className="my-4 mr-4 bg-bgColor text-xl text-subColor focus:border-none focus:outline-none"
              type="text"
              ref={inputRef}
              value={search}
              onChange={(e) => setSearh(e.target.value)}
              placeholder="Search..."
            />
          </div>
          <div className="grid w-full bg-bgColor text-left text-sm">
            {listQuotes.map((elem, index) => {
              return (
                <>
                  {elem.includes(search) && (
                    <button
                      onClick={() => sendOption(index)}
                      key={elem}
                      className="text-start hover:bg-textColor hover:text-bgColor"
                    >
                      <div className="px-4 py-2 ">{elem}</div>
                    </button>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </dialog>
    </>
  );
};
