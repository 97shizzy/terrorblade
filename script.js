document.addEventListener("mousemove", (e) => {
    let trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);

    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    setTimeout(() => {
        trail.remove();
    }, 3000	);
});
