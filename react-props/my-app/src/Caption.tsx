type Props = {
  text: string;
};

export function Caption({ text }: Props) {
  return <h3>{text}</h3>;
}
