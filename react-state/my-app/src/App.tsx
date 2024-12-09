import { Header } from "./Header";
import { Image } from "./Image";
import { Caption } from "./Caption";
import { Description } from "./Description";
import { Button } from "./Button";
import "./App.css";
import { useState } from "react";

const imageList = ["/starry-sky.jpeg", "/burger-1.jpg", "/burger-2.jpg"];
const captionList = ["A Beautiful Image of Space", "Burger 1", "Burger 2"];
const descriptionList = [
  "Picture 1",
  "Picture of Burger 1",
  "Picture of Burger 2",
];

export default function App() {
  const [index, setIndex] = useState(0);

  function clickHandler() {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={imageList[index]} />
      <Caption caption={captionList[index]} />
      <Description text={descriptionList[index]} />
      <Button label="Click for Next Image" onClick={clickHandler} />
    </>
  );
}
