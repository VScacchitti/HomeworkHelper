/* Date Elements using Moment.js */
$("#todays-date").text(moment().format('dddd') +" "+ moment().format('L'));
$("#week-range").text(moment().startOf('week').format('L') +" - " + moment().endOf('week').format('L'));
/* End Date ELements */

/* Save Calendar Assignments to localStorage*/
var todoList = [];
var todoObj = {};

    //Initialize saved assignments
    init();
    function init(){
        var storedTodo = JSON.parse(localStorage.getItem("assignments"));
        if(storedTodo !== null){
            todoList = storedTodo;
        }
        renderTodos();
    }

    //Save assignments
    function saveTodos(){
        localStorage.setItem("assignments", JSON.stringify(todoList));
    }

    //Render Assignments to page
    function renderTodos(){
        for(var i=0; i<todoList.length; i++){
            $("#"+todoList[i].id).text(todoList[i].desc);
        }
    }

    //Event listener for saveBtn
    $(".saveBtn").on("click", function(e){
        e.preventDefault();
        console.log(this);
        
        todoObj.id =  $(this).parent().children(".description").attr("id");
        todoObj.desc = $(this).parent().children(".description").val().trim();

        todoList.push(todoObj);
        saveTodos();
        renderTodos();
    });
/* End Save Calendar Assignments to localStorage*/
