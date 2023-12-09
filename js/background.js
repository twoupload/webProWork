const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
  ];
  
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  
  const bgImage = document.createElement("img");
  
  bgImage.src = `img/${chosenImage}`;
  bgImage.classList.add("background-image");
  
  document.body.prepend(bgImage);