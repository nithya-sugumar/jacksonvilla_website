$(function(){
	$('#header').load('shared/header.html');
	$('#footer').load('shared/footer.html');	
});

$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active"); // remove active from all
    $(this).addClass("active"); // add active to clicked one
  });
});

