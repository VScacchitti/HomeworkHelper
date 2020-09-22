var firstNumber = 0;
var secondNumber = 0;
var operator = "";
var result = 0;
var isOperatorChosen = false;
var isCalculated = false;
var hasfirstNumber = false;

function initializeCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isOperatorChosen = false;
    isCalculated = false;

    $("#resultbox").empty();
  }
initializeCalculator();

  $(".number").on("click", function(){
    if(firstNumber !== null){  
        firstNumber += $(this).val();
        $("#resultbox").text(firstNumber);
        
    }else{
        hasfirstNumber = true;
        secondNumber += $(this).val();
        $("#resultbox").text(secondNumber);
    }
  });


  $(".operator").on("click", function(){
    
    operator = $(this).val();
    $("#resultbox").empty();

  });


  $(".clear").on("click", function() {
    initializeCalculator();
  });

  function calculate(){
    if (operator === "plus") {
        result = firstNumber + secondNumber;
      }
      else if (operator === "minus") {
        result = firstNumber - secondNumber;
      }
      else if (operator === "times") {
        result = firstNumber * secondNumber;
      }
      else if (operator === "divide") {
        result = firstNumber / secondNumber;
      }
      else if (operator === "power") {
        result = Math.pow(firstNumber, secondNumber);
      }
    $("#resultbox").text(result);
    firstNumber = result;
  };