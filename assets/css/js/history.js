const historyContainer = document.querySelector("#img-history");

function displayAlbum() {
  let previousSaved = JSON.parse(localStorage.getItem("album")) || [];
  if (previousSaved) {
    previousSaved.forEach(function (album) {
      const albumContainer = document.createElement("div");
      const savedImg = document.createElement("img");
      const savedQuote = document.createElement("div");

      let imageUrl = album.url;

      savedImg.setAttribute("src", imageUrl);
      savedQuote.setAttribute("class", "history-quote");

      savedQuote.textContent = album.quote;

      savedImg.append(savedQuote);
      albumContainer.append(savedImg);
      historyContainer.append(albumContainer);
    });
  }
}
displayAlbum();
