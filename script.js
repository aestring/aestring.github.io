document.addEventListener("DOMContentLoaded", function() {
  const sandbox = document.getElementById("sandbox");
  let isMouseDown = false;

  sandbox.addEventListener("mousedown", function(event) {
    isMouseDown = true;
    createBlock(event);
  });

  sandbox.addEventListener("mouseup", function() {
    isMouseDown = false;
  });

  sandbox.addEventListener("mousemove", function(event) {
    if (isMouseDown) {
      createBlock(event);
    }
  });

  function createBlock(event) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = (event.clientX - sandbox.offsetLeft) + "px";
    block.style.top = (event.clientY - sandbox.offsetTop) + "px";
    sandbox.appendChild(block);

    block.addEventListener("mousedown", function() {
      sandbox.removeChild(block);
    });
  }
});
