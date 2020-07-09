import React from "react";

import ImageTransition from "../image-transition";

export default {
  title: "ImageTransition",
  component: ImageTransition,
};

const imgs = [
  "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
  "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
];

export const Text = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter === 0 ? 1 : 0);
        }}
      >
        Toggle img
      </button>
      <ImageTransition src={imgs[counter]} />
    </>
  );
};

export const Emoji = () => (
  <ImageTransition>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ImageTransition>
);
