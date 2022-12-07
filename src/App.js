import React from "react";

import "./App.css";

import Carousel3d from "./example/Carousel3d";
import CarouselCard from "./example/CarouselCard";

import Carousel1 from "./example/image/carousel-1.jpeg";
import Carousel2 from "./example/image/carousel-2.png";
import Carousel3 from "./example/image/carousel-3.png";

function App() {
  return (
    <div className="App">
      <Carousel3d
        cards={[
          {
            key: 1,
            content: <CarouselCard title="War Paradise" image={Carousel1} />,
          },
          {
            key: 2,
            content: <CarouselCard title="Town Star" image={Carousel2} />,
          },
          {
            key: 3,
            content: <CarouselCard title="Defense Heroes" image={Carousel3} />,
          },
        ]}
        offset={2}
      />
    </div>
  );
}

export default App;
