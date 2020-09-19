$(document).ready(function () {
  console.log("test");

  var inputVal = $("#input");

  //Dictionary API
  $("#dictionaryBtn").on("click", function (event) {
    event.preventDefault();
    var searchWord = inputVal.val();
    console.log(searchWord);
    //API Call for Dictionary Button
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=" +
        searchWord,
      method: "GET",
      headers: {
        "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "c652f38724msh0d9bd2b60906f32p19cabbjsn51b20672f98d",
      },
    };

    $.ajax(settings).done(function (response) {
      var definition = JSON.stringify(response.meaning);
      console.log(definition);
      var definitionDisplay = [];
      definitionDisplay.push(definition);
      console.log(definitionDisplay);
      $("#dictionary").append("<p>" + definitionDisplay + "</p>");
    });
  });

  //GrammarBot API
  var englishbodyVal = $("#inputgram");

  $("#grammarBtn").on("click", function (event) {
    event.preventDefault();
    var textVal = englishbodyVal.val();
    console.log(textVal);

    // API Call for Gramar Button
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
        text: textVal,
      },
    };

    $.ajax(settings2).done(function (response) {
      console.log(settings2.data.text);
      var results = response.matches[0].message;
      console.log(results);
      //console.log(displayGrammar);
    //  var corrections = JSON.stringify(displayGrammar);
    //  var displayCorrections = [];
   //   console.log(corrections);
    //  displayCorrections.push(corrections);
      $("#grammar").append("<p>" + results + "</p>");
    });
  });
});
