$(document).ready(function () {
  const apodImage = document.querySelector("#space-img");
  const welcomePage = document.querySelector("#welcome-screen");

  apodImage.style.display = "none";

  async function getApod() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=CamLBC9eJwRQEcdg2oafBlPIrOFX5MqqPM8oazvO`
    );
    const res = await response.json();

    if (res.media_type == "image") {
      let imageUrl = res.hdurl;

      document.querySelector("#space-img").style.backgroundImage =
        "url(" + imageUrl + ")";

      let copyright = res.copyright;

      copyrightText = document.createElement("p");
      copyrightText.setAttribute("class", "p-3");
      copyrightText.textContent = `© ${copyright}`;
      apodImage.appendChild(copyrightText);
    } else {
      let imageUrl = "https://apod.nasa.gov/apod/image/2110/SH2-308NS.jpg";
      document.querySelector("#space-img").style.backgroundImage =
        "url(" + imageUrl + ")";

      let copyright = res.copyright;

      copyrightText = document.createElement("p");
      copyrightText.setAttribute("class", "p-3");
      copyrightText.textContent = `© ${copyright}`;
      apodImage.appendChild(copyrightText);
    }
  }
  var getQuoteArray = function (apiURL) {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var randomQuote =
          data[Math.floor(Math.random() * (1643 - 0 + 1) + 0)].text;
        $("#page-quote").text(randomQuote);
      });
  };
  $("#button-1").on("click", saveCurrent);

  function saveCurrent(e) {
    e.preventDefault();
    let quote = document.querySelector("#page-quote").innerText;
    let url = document
      .querySelector("#space-img")
      .style.backgroundImage.slice(5, -2);
    let newSaved = {
      quote: quote,
      url: url,
    };
    let previousSaved = JSON.parse(localStorage.getItem("album")) || [];
    previousSaved.unshift(newSaved);
    localStorage.setItem("album", JSON.stringify(previousSaved));
  }

  welcomePage.onclick = function () {
    welcomePage.style.display = "none";
    apodImage.style.display = "block";
  };

  getApod();
  getQuoteArray();
});
