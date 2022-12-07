import React from "react";

import "./App.css";

import Carousel3d from "./example/Carousel3d";
import CarouselCard from "./example/CarouselCard";

import Carousel1 from "./example/image/carousel-1.jpeg";
import Carousel2 from "./example/image/carousel-2.png";
import Carousel3 from "./example/image/carousel-3.png";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(89, 76, 244, 0.48) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(76, 103, 244, 0.61) 0%, rgba(76, 103, 244, 0.02) 100%), rgb(21, 15, 44)",
      }}
    >
      <div style={{ width: 600, height: "100vh" }}>
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
              content: (
                <CarouselCard title="Defense Heroes" image={Carousel3} />
              ),
            },
          ]}
          offset={2}
        />
      </div>
    </div>
  );
}

export default App;
