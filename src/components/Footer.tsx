export const Footer = () => {
  return (
    <footer className="h-12 w-full ">
      <section className="flex h-full items-end  fill-subColor text-subColor">
        <a className="flex cursor-pointer items-center hover:fill-textColor hover:text-textColor">
          <svg
            className="mr-2 "
            width="18px"
            height="18px"
            version="1.1"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
            <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
            <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
          </svg>
          <div className="mb-[1px] self-center text-[14px]">github</div>
        </a>
      </section>
    </footer>
  );
};
