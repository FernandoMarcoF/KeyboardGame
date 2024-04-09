export const Menu = () => {
  return (
    <div className="mb-4 flex h-8 justify-center">
      <ul className="box-border flex items-center rounded-lg bg-subAltColor text-subColor text-sm">
        <li>
          <a className="cursor-pointer px-3 py-2 hover:text-textColor">quotes</a>
        </li>
        <li><div className=" rounded-xl w-[4px] h-6 bg-bgColor"></div>
        </li>
        <li>
          <a className="cursor-pointer px-3 py-2 hover:text-textColor">all</a>
        </li>
        <li>
          <a className="cursor-pointer px-3 py-2 hover:text-textColor">short</a>
        </li>
        <li>
          <a className="cursor-pointer px-3 py-2 hover:text-textColor">mediun</a>
        </li>
        <li>
          <a className="cursor-pointer px-3 py-2 hover:text-textColor">log</a>
        </li>
        <li>
          <a className="cursor-pointer px-3 py-2 hover:text-textColor">thicc</a>
        </li>
      </ul>
    </div>
  );
};
