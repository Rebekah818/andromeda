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
      savedImg.setAttribute("class", "col-12")

      savedQuote.textContent = album.quote;

      albumContainer.append(savedImg, savedQuote);
      historyContainer.append(albumContainer);
    });
  }
}
displayAlbum();
