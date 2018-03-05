
$("#addToList").on("click",clickSubmit);
$("#clearCompleted").on("click",clickClearCompleted);
$("#clearList").on("click",clickClearWholeList);
$("#usersList").on("click","li",crossOut);

function clickSubmit(event){
  event.preventDefault()
  var usersChoice = $("#theInput").val();
  $("#usersList").append("<li>"+usersChoice+"</li>");
  $("#theInput").val("");
}
function clickClearCompleted(){
  $(".completed").remove();
}
function clickClearWholeList(){
  $("#usersList li").remove();
}
function crossOut(){
  $(this).addClass("completed");
}

$("#usersList").on("mouseenter","li",function(){
   $(this).append("<a class='edit' href='#'>"+"edit"+"</a>");
   $(this).append("<a class='remove' href='#'>"+" remove"+"</a>");
   $(".edit").on("click", function(){
    $(this).parent().html("<input type='text' class='input_edit' />" + "<button class='confirm_button'>" + "confirm" + "</button>");
    $(".confirm_button").on("click" , function(){
      let newItem = $(".input_edit").val();
      $(this).parent().html(newItem);
    });
  });
  $(".remove").on("click", function(){
    $(this).parent().remove();
  });
});

$("#usersList").on("mouseleave","li",function(){
   $("a").remove();
})

function countDown(){
  $("#countDown").text("things left to do "+ count);
}

$("#usersList").on("click","li",function(){
  $("li").toggleClass("Completed");
});

$(document).ready(function(){
  $("ul").on("click","li", function(){
    $(this).addClass("completed");
  });
});
