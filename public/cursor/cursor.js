document.addEventListener("mousemove", (e) => {
  const height = circle.offsetHeight;
  const width = circle.offsetWidth;

  if (
    e.target.tagName === "A" ||
    e.target.tagName === "BUTTON" ||
    e.target.parentNode.tagName === "BUTTON"
  ) {
    circle.classList.add("big");
  } else {
    circle.classList.remove("big");
  }

  circle.style.left = `${e.pageX - width / 2}px`;
  circle.style.top = `${e.pageY - height / 2}px`;

  // console.log(`Mouse X: ${e.pageX}, Mouse Y: ${e.pageY}`);
  // console.log(
  //   `Circle Left: ${circle.style.left}, Circle Top: ${circle.style.top}`
  // );
});
