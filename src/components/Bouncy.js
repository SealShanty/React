import React, { useState, useEffect } from 'react';

export default function BouncingDVDLogo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ dx: 3, dy: 3 });
  const [color, setColor] = useState('#ff0000');

  useEffect(() => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;

    const animateDVD = () => {
      setPosition(prevPosition => {
        let newX = prevPosition.x + direction.dx;
        let newY = prevPosition.y + direction.dy;

        if (newX <= 0 || newX >= maxX) {
          setDirection(prevDirection => ({ ...prevDirection, dx: -prevDirection.dx }));
          changeColor();
        }

        if (newY <= 0 || newY >= maxY) {
          setDirection(prevDirection => ({ ...prevDirection, dy: -prevDirection.dy }));
          changeColor();
        }

        // Clamp position within bounds
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        return { x: newX, y: newY };
      });

      requestAnimationFrame(animateDVD);
    };

    const changeColor = () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    };

    animateDVD();

    return () => cancelAnimationFrame(animateDVD);
  }, [direction]);

  return (
    <div className="dvd-logo" style={{ left: position.x, top: position.y, backgroundColor: color }}><img src='https://i.pinimg.com/474x/93/6a/b1/936ab1cebc4a93641f41574a19913739.jpg'></img>ermm squirmmmm :3</div>
  );
}
