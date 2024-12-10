type Props = {
  onClick: () => void;
  bgColor: string;
  textColor: string;
};
export function Button({ onClick, bgColor, textColor }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        hello
      </button>
    </>
  );
}
