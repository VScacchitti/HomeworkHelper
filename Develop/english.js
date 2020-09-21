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
      console.log(response.meaning.noun);
      console.log(response.meaning.verb);
      console.log(response.meaning.adverb);
      console.log(response.meaning.adjective);

      //response varibales
      var noun = JSON.stringify(response.meaning.noun);
      var verb = JSON.stringify(response.meaning.verb);
      var adverb = JSON.stringify(response.meaning.adverb);
      var adjective = JSON.stringify(response.meaning.adjective);

      //finding what to append
      var definitionDisplay = [];

      if (noun && verb && adverb && adjective) {
        definitionDisplay.push(noun, verb, adverb, adjective);
      } else if (noun && verb && adverb && adjective === "") {
        definitionDisplay.push(noun, verb, adverb);
      } else if (noun && verb && adverb === "" && adjective === "") {
        definitionDisplay.push(noun, verb);
      } else if (noun) {
        definitionDisplay.push(noun);
      } else if (verb) {
        definitionDisplay.push(verb);
      } else if (adverb) {
        definitionDisplay.push(adverb);
      } else {
        definitionDisplay.push(adjective);
      }

      //definitionDisplay.push(noun, verb, adverb, adjective);
      console.log(definitionDisplay);
      //For loop iterating through definition array that was created above
      for (let i = 0; i < definitionDisplay.length; i++) {
        console.log(definitionDisplay[i]);
        $("#dictionary").append("<p>" + definitionDisplay[i] + "</p>");
      }
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
