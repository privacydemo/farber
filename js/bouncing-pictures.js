(function () {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  // Resize canvas to fill the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Track cursor position
  let cursor = { x: canvas.width / 2, y: canvas.height / 2 };

  // Update cursor position on mousemove
  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  });

  // Image sources
  const imageSources = [
    "../img/farber.png", // Replace with your image paths
    "../img/dog.png",
    "../img/dogs.png",
  ];

  // Load images
  const images = imageSources.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });

  // Ball objects
  const balls = images.map((image, i) => ({
    x: Math.random() * canvas.width, // Random start position
    y: Math.random() * canvas.height,
    width: 100,
    height: 100,
    vx: (Math.random() - 0.5) * 10, // Random velocity
    vy: (Math.random() - 0.5) * 10,
    image,
  }));

  // Collision detection with cursor
  function detectCollision(ball) {
    const distX = Math.abs(ball.x - cursor.x);
    const distY = Math.abs(ball.y - cursor.y);
    return distX < ball.width / 2 && distY < ball.height / 2;
  }

  // Update and draw balls
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach((ball) => {
      // Bounce off walls
      if (ball.x + ball.width > canvas.width || ball.x < 0) {
        ball.vx *= -1;
      }
      if (ball.y + ball.height > canvas.height || ball.y < 0) {
        ball.vy *= -1;
      }

      // Collision with cursor
      if (detectCollision(ball)) {
        ball.vx = (Math.random() - 0.5) * 20; // Randomize velocity on hit
        ball.vy = (Math.random() - 0.5) * 20;
      }

      // Move ball
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Draw ball
      ctx.drawImage(ball.image, ball.x, ball.y, ball.width, ball.height);
    });

    requestAnimationFrame(animate);
  }

  // Start animation after images are loaded
  Promise.all(images.map((img) => new Promise((resolve) => (img.onload = resolve)))).then(() => {
    animate();
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();
