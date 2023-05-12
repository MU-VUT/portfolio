import React from "react";
import Phaser from "phaser";
import Boot from "./Boot.js";
import MainGame from "./MainGame.js";
import MainMenu from "./MainMenu.js";

function usePhaserGame(config) {
  const phaserGameRef = React.useRef(null);
  React.useEffect(
    () => {
      if (phaserGameRef.current) {
        return;
      }
      phaserGameRef.current = new Phaser.Game(config);
      return () => {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
      };
    },
    [] /* only run once; config ref elided on purpose */
  );
  return phaserGameRef.current;
}

const config = {
  type: Phaser.AUTO,
  parent: "game-content",
  width: 800,
  height: 600,
  backgroundColor: "#807E78",
  scene: [Boot, MainMenu, MainGame],
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

function GameApp() {
  const game = usePhaserGame(config);
  return <div id="game-content" />;
}

// https://labs.phaser.io/boot.html?src=src/games/avoid%20the%20germs/boot.json

export default GameApp;
