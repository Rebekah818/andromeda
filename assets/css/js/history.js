const historyContainer = document.querySelector("#img-history");

function displayAlbum() {
  let previousSaved = JSON.parse(localStorage.getItem("album")) || [];
  if (previousSaved) {
    previousSaved.forEach(function (album) {
      const albumContainer = document.createElement("div");
      const cardContainer = document.createElement("div");
      const imgContainer = document.createElement("div");
      const savedImg = document.createElement("img");
      const contentContainer = document.createElement("div");
      const savedQuote = document.createElement("p");

      let imageUrl = album.url;

      albumContainer.setAttribute("class", "col s6");
      cardContainer.setAttribute("class", "card lard");
      imgContainer.setAttribute("class", "card-image");
      savedImg.setAttribute("src", imageUrl);
      contentContainer.setAttribute("class", "card-content");

      savedQuote.textContent = `"${album.quote}"`;

      imgContainer.appendChild(savedImg);
      contentContainer.appendChild(savedQuote);
      cardContainer.append(imgContainer, contentContainer);
      albumContainer.append(cardContainer);
      historyContainer.append(albumContainer);
    });
  }
}
displayAlbum();
