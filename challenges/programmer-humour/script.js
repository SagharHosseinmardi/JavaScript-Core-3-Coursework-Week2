async function ProgrammerHumour() {
  try {
    let response = await fetch(`https://xkcd.now.sh/?comic=latest`);
    let data = await response.json();
    console.log(data);
    let url = data.img;
    let image = document.createElement("img");
    document.body.appendChild(image);
    return (image.src = url);
  } catch (error) {
    console.log(error);
  }
}

ProgrammerHumour();
