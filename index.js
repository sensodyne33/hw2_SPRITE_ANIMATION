import img from "./img.js";
import Player from "./Player.js";

const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 2000 / 1.5;
canvas.height = 1143 / 1.5;

const background = img("BG.png");
const bird = img("tile000.png")
const birdBubble = img("text_bubble.png")
const dinoBubble = img("text_bubble_dino.png")
const cactus = img("Cactus.png")
const stone = img("stone.png")
const sun = img("sun.png")
const player = new Player();

function game() {
  ctx.drawImage(background, 0, 0, 2000, 1143, 0, 0, 2000, 1143);
  ctx.drawImage(bird, 700, 50)
  ctx.drawImage(birdBubble, 950, 120)
  ctx.drawImage(dinoBubble, 400, 250)
  ctx.drawImage(cactus, 900, 650)
  ctx.drawImage(stone, 500, 700)
  ctx.drawImage(sun, 10, 0)
  player.draw(ctx);
}

setInterval(game, 1000 / 60);
