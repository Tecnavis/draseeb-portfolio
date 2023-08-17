console.clear();

const app = document.querySelector("#app");

const figures = Array.from(app.querySelectorAll(".gallery-item"));
const elDetails = app.querySelector(".details");

function flipImages(firstEl, lastEl, change) {
  requestAnimationFrame(() => {
    const firstRect = firstEl.getBoundingClientRect();
    const lastRect = lastEl.getBoundingClientRect();

    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;
    const deltaWidth = firstRect.width / lastRect.width;
    const deltaHeight = firstRect.height / lastRect.height;

    change();
    lastEl.parentElement.dataset.flipping = true;

    const animation = lastEl.animate(
      [
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaWidth}, ${deltaHeight})`
        },
        {
          transform: "none"
        }
      ],
      {
        duration: 500,
        easing: "cubic-bezier(.2, 0, .3, 1)"
      }
    );

    animation.onfinish = () => {
      delete lastEl.parentElement.dataset.flipping;
    };
  });
}

// Add event listeners to figures
figures.forEach(figure =>
  figure.addEventListener("click", () => {
    elDetails.innerHTML = "";
    const elImage = figure.querySelector("img");

    const clonedFigure = figure.cloneNode(true);
    const elClonedImg = clonedFigure.querySelector("img");
    elDetails.appendChild(clonedFigure);

    flipImages(elImage, elClonedImg, () => {
      app.dataset.state = "details";
    });

    function revert() {
      flipImages(elClonedImg, elImage, () => {
        app.dataset.state = "gallery";
        elDetails.removeEventListener("click", revert);
      });
    }

    elDetails.addEventListener("click", revert);
  })
);
