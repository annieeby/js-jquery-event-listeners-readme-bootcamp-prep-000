//define functions here

function getIt() {
$("p").on("click", function() {
  alert ("Hey!")
  });
}

function frameIt() {
$("img'").on("load", function() {
  img.addClass("tasty")
  });
}

$(document).ready(function(){

getIt() 

frameIt()

})

/*
OLD DRAFTS
function getIt() {
$("p").on("click", function() {console.log("Hey!")});
}


function getIt() {
$("p").on("click", function() {alert ("Hey!")});
return;
}

$(document).ready(function(){

getIt() 

  
})

function getIt() {
  $('p').on("click", 'button.alert', function() {
    alert("Hey!");
}) 

function getIt() {
  $('p.alert').click(function(){
    alert("Hey!");
})

//Difference between .on('click') vs .click() - Stack Overflow https://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click

});
*/