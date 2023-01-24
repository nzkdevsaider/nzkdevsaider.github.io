const SText = ({ children }) => {
  return (
    <h1 className="flex w-[220px] h-[26px] font-light text-4xl dark:text-swhite">
      <p className="relative font-black before:absolute before:bg-sblue before:left-[0] before:bottom-[-0.67rem] before:w-[120%] before:h-2 before:-z-[1]">
        {children}
      </p>
    </h1>
  );
};

export default SText;
