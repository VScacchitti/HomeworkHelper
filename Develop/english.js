$(document).ready(function () {
  console.log("test");

  var word = document.getElementById("input").innerText;


  //Dictionary API
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=word" +
      word,
    method: "GET",
    headers: {
      "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
      "x-rapidapi-key": "c652f38724msh0d9bd2b60906f32p19cabbjsn51b20672f98d",
    },
  };

  $.ajax(settings).done(function (response) {
    var definition = JSON.stringify(response.meaning);
    console.log(definition);
    $("#dictionary").append("<p>" + definition + "</p>");
  });



  //GrammerBot API
  var settings2 = {
    async: true,
    crossDomain: true,
    url: "https://grammarbot.p.rapidapi.com/check",
    method: "POST",
    headers: {
      "x-rapidapi-host": "grammarbot.p.rapidapi.com",
      "x-rapidapi-key": "c652f38724msh0d9bd2b60906f32p19cabbjsn51b20672f98d",
      "content-type": "application/x-www-form-urlencoded",
    },
    data: {
      language: "en-US",
      text: "i have a dog",
    },
  };

  $.ajax(settings2).done(function (response) {
    console.log(settings2.data.text);
    console.log(response.matches);
    $("#grammar").append("<p>" + definition + "</p>");
  });
});
