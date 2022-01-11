$(document).ready(function () {
const apodImage = document.querySelector("#space-img");

async function getApod() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=CamLBC9eJwRQEcdg2oafBlPIrOFX5MqqPM8oazvO`
  );
  const res = await response.json();

  if (res.media_type == "image") {
    let copyright = res.copyright;
    console.log(copyright);

    let date = res.date;
    console.log(date);

    let explanation = res.explanation;
    console.log(explanation);

    let imageUrl = res.hdurl;

    document.querySelector("#space-img").style.backgroundImage =
      "url(" + imageUrl + ")";
  } else {
    let backupUrl = "https://apod.nasa.gov/apod/image/2110/SH2-308NS.jpg";
    document.querySelector("#space-img").style.backgroundImage =
      "url(" + backupUrl + ")";
  }
}
var getQuoteArray = function(apiURL) {
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      var randomQuote = data[Math.floor(Math.random() * (1643 - 0 + 1) + 0)].text;
      $("#page-quote").text(randomQuote);
  });
};
getApod();
getQuoteArray();
});