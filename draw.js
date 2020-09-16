//STARTING ON PAGE LOAD
window.addEventListener("load", () => {
  const clearButton = document.querySelector("#clear");
  const blackButton = document.querySelector("#black");
  const eraseButton = document.querySelector("#erase");
  const blueButton = document.querySelector("#blue");
  const greenButton = document.querySelector("#green");
  const yellowButton = document.querySelector("#yellow");
  const redButton = document.querySelector("#red");
  const purpleButton = document.querySelector("#purple");
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();

  img.onload = () => {
    const [img_scaled_width, img_scaled_height] = drawImageToScale(img, ctx);
    canvas.width = img_scaled_width;
    canvas.height = img_scaled_height;
    window.addEventListener("resize", drawImageToScale(img, ctx));
  };

  // eventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

  // variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  clearButton.addEventListener("click", () =>
    clearCanvas(img, ctx, canvas.width, canvas.height)
  );
  blackButton.addEventListener("click", () => (ctx.strokeStyle = "#000000"));
  eraseButton.addEventListener("click", () => (ctx.strokeStyle = "#ffffff"));
  blueButton.addEventListener("click", () => (ctx.strokeStyle = "#287bff"));
  greenButton.addEventListener("click", () => (ctx.strokeStyle = "#13d50a"));
  yellowButton.addEventListener("click", () => (ctx.strokeStyle = "#f8fb0b"));
  redButton.addEventListener("click", () => (ctx.strokeStyle = "#ea1515"));
  purpleButton.addEventListener("click", () => (ctx.strokeStyle = "#ad0bfb"));
});

function drawImageToScale(img, ctx) {
  const img_width = 650;
  const scaleFactor = img_width / img.width;
  const img_height = img.height * scaleFactor;
  ctx.drawImage(img, 0, 0, img_width, img_height);
  return [img_width, img_height];
}

function clearCanvas(img, ctx, img_scaled_width, img_scaled_height) {
  ctx.clearRect(0, 0, img_scaled_width, img_scaled_height);
  drawImageToScale(img, ctx);
}
