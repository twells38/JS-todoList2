//show today date
const dateElement = document.getElementById("date");
const options = {
  weekday: "long",
  month: "short",
  day: "numeric"
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

/* clear the local storage
const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
});*/

//Check off specific Todos by Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//check on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val(" "); //clear the for new input
    //create a li and add to  ul
    $("ul").append(
      "<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});
// Toggle plus sign
$(".fa-plus-circle").click(function() {
  $("input[type='text']").fadeToggle();
});
