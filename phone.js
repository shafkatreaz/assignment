$(document).ready(function(){


$("#tab_dialer").show();
$("#tab_contactList").hide();
$("#tab_contactAdd").hide();



$("#tab_1").click(function(){

	$("#tab_dialer").show();
	$("#tab_contactList").hide();
	$("#tab_contactAdd").hide();

});

$("#tab_2").click(function(){

	$("#tab_dialer").hide();
	$("#tab_contactList").show();
	$("#tab_contactAdd").hide();

});

$("#tab_3").click(function(){

	$("#tab_dialer").hide();
	$("#tab_contactList").hide();
	$("#tab_contactAdd").show();

});


$(".btn_num").click(function(){

	console.log($(this).text());

	$("#textbox_dialer").val( $("#textbox_dialer").val() + $(this).text());

});

$("#btn_clear").click(function(){

	var getDialerVal = $("#textbox_dialer").val();
	console.log(getDialerVal);
	$("#textbox_dialer").val(getDialerVal.slice(0,-1));

});

$("#btn_dialer").click(function(){

	alert("Dialing number : " + $("#textbox_dialer").val());

});

});