$(document).ready(function () {
  console.log("test");

  var inputVal = $("#input");
  //Function to clear definition
  function clearDefinition() {
    $("#dictionaryDisplay").empty();
    $("#dictionaryDisplay").addClass("hide");
  }

  //Dictionary API on click
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
      var noun = JSON.stringify(response.meaning.noun).split("/n").join("/");
      var verb = JSON.stringify(response.meaning.verb);
      var adverb = JSON.stringify(response.meaning.adverb);
      var adjective = JSON.stringify(response.meaning.adjective);

      //function to print definition
      function printDefinition() {
        $("#dictionaryDisplay").removeClass("hide");
        $("#dictionaryDisplay").append("<p id='noun'> Noun: " + noun + "</p>");
        $("#dictionaryDisplay").append("<p id ='verb'> Verb: " + verb + "</p>");
        $("#dictionaryDisplay").append(
          "<p id ='adverb'> Adverb: " + adverb + "</p>"
        );
        $("#dictionaryDisplay").append(
          "<p id ='adjective'> Adjective: " + adjective + "</p>"
        );
      }

      printDefinition();
      // Clearing on click

      $("#clearBtn").on("click", function (e) {
        e.preventDefault();
        clearDefinition();
        console.log(clearDefinition);
      });
    });
  });

  //GrammarBot API
  var englishbodyVal = $("#inputgram");

  function clearGrammar() {
    $("#grammarDisplay").empty();
    $("#grammarDisplay").addClass("hide");
  }

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

      function printGrammar() {
        $("#grammarDisplay").append("<p>" + results + "</p>");
        $("#grammarDisplay").removeClass("hide");
      }

      printGrammar();

      $("#grammarclear").on("click", function (e) {
        e.preventDefault();
        clearGrammar();
        console.log(clearDefinition);
      });
    });
  });
});
