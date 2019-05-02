$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list");

	$btn.click(function(evt){
		// TODO
		clicks.push(evt);
	});

	// TODO: setup sampled sequence, populate $list

	// sample clicks stream
	setInterval(function(){
		if (latest) {
			msgs.push("clicked!");
			latest = null;
		}
	},1000);

	// subscribe to click stream
	clicks.val(function(evt){
		latest = evt;
	});

	// subscribe to sampled message stream
	msgs.val(function(msg){
		$list.append($("<div>" + msg + "</div>"));
	});
});
