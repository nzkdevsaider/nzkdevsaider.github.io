const SLogo = ({ light }) => {
  if (!light)
    return (
      <h1 className="flex w-[220px] h-[26px] font-light text-4xl">
        sebas
        <span className="relative font-black before:absolute before:bg-sblue before:left-[0] before:bottom-[-0.67rem] before:w-full before:h-2 before:-z-[1]">
          morant.
        </span>
      </h1>
    );
  else
    return (
      <h1 className="flex w-[220px] h-[26px] font-light text-4xl text-swhite">
        sebas
        <span className="relative text-sgray font-black before:absolute before:bg-sgraypure before:left-[0] before:bottom-[-0.67rem] before:w-full before:h-2 before:-z-[1]">
          morant.
        </span>
      </h1>
    );
};

export default SLogo;
