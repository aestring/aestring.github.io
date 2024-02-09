document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("paintCanvas");
  const context = canvas.getContext("2d");
  let painting = false;

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);

  function startPosition(event) {
    painting = true;
    draw(event);
  }

  function endPosition() {
    painting = false;
    context.beginPath();
  }

  function draw(event) {
    if (!painting) return;

    context.lineWidth = 5;
    context.lineCap = "round";
    context.strokeStyle = "black";

    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  }
});
