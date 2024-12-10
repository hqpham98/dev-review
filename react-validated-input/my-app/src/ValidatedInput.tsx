type Props = {
  onChange: (pass: string) => void;
};

export function ValidatedInput({ onChange }: Props) {
  return (
    <input
      onChange={(e) => onChange(e.currentTarget.value)}
      type="password"
    ></input>
  );
}
