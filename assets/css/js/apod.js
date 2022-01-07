let apodImage = document.querySelector("#space-img")

async function getApod(){
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=CamLBC9eJwRQEcdg2oafBlPIrOFX5MqqPM8oazvO`);
    const res = await response.json();

    let copyright = res.copyright;
    console.log(copyright);

    let date = res.date;
    console.log(date);

    let explanation = res.explanation;
    console.log(explanation);

    let imageUrl = res.hdurl;

    document.querySelector("#space-img").style.backgroundImage = "url(" + imageUrl + ")"
}
getApod();
