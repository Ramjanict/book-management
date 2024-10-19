import React from "react";
import BookList from "../components/BookList";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <BookList title={"Choose your favorite books"} />
    </div>
  );
};

export default Home;
