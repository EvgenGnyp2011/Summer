function setup() {
  let cards = document.querySelectorAll(".card");
  let arrayCards = Array.from(cards);
  arrayCards.map((card) => initCard(card));
}
setup();

function initCard(card) {
  const cardContent = card.querySelector(".card__content");
  // console.log(card)
  card.addEventListener("mousemove", (e) => {
    // console.log("s vami Vlad Borshch")
    const positionX = e.clientX;
    const positionY = e.clientY;
    // console.log(positionX, positionY)
    const cardRect = card.getBoundingClientRect();
    // console.log(cardRect);
    const halfWidth = cardRect.width / 2;
    const halfHeight = cardRect.height / 2;
    const cardCenterX = cardRect.left + halfWidth;
    const cardCenterY = cardRect.top + halfHeight;
    const deltaX = positionX - cardCenterX;
    const deltaY = positionY - cardCenterY;
    const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = Math.max(halfWidth, halfHeight);
    // console.log('maxDistance', maxDistance)
    // console.log('distanceToCenter', distanceToCenter)
    // console.log('deltaX', deltaX)
    // console.log('deltaY', deltaY)
    // console.log('cardCenterY', cardCenterY)
    // console.log(halfWidth)
    // console.log(halfHeight)
    // console.log(cardCenterX)
    const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);
    const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
    const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
    cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
  });

  card.addEventListener("mouseleave", () =>{
    cardContent.style= null
  })
}

function mapNumberRange(n, a, b, c, d) {
  return ((n - a) * (d - c)) / (b - a);
}

const age = 13;
console.log(`Мені ${age} років`);

