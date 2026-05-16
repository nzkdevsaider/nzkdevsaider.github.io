import Link from "next/link";

type TButtonProps = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  externalUri?: string;
  internalUri?: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  startIcon,
  endIcon,
  children,
  externalUri,
  internalUri,
  onClick,
  className = "btn btn-primary",
}: TButtonProps) => {
  const content = (
    <>
      {startIcon}
      {children}
      {endIcon}
    </>
  );

  if (externalUri) {
    return (
      <a
        href={externalUri}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  if (internalUri) {
    return (
      <Link href={internalUri} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
