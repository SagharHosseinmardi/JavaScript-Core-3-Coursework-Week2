async function getDogPhoto() {
  let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  let data = await response.json();
  return data.message;
}

let button = document.createElement("Button");
button.innerText = "Show me a dog!";
document.body.appendChild(button);

button.addEventListener("click", async () => {
  const picture = document.createElement("img");
  picture.src = await getDogPhoto();
  document.body.appendChild(picture);
});
