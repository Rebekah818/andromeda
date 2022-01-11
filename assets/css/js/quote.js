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
getQuote(array);
