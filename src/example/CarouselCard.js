import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ title, image, currentSlide, currentIndex }: any) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      style={{ ...styles, height: "fit-content" }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(22px)",
          position: "relative",
        }}
      >
        <div
          style={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 350,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <image
              src={image}
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {title && (
            <div
              style={{
                mt: 3,
                fontWeight: 600,
                fontSize: 28,
                lineHeight: "150%",
                color: "#FDFDFD",
              }}
            >
              {title}
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export default Card;