/**
 * Created by JetBrains RubyMine.
 * User: pechenikin
 * Date: 21.10.11
 * Time: 16:25
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
	drawLine();
	$("#myCanvas").click(function(evt)
	{
		console.log(evt.layerX);
		console.log(evt.layerY);
	});
});
function drawLine() {
	var canvas = document.getElementById("myCanvas");
	console.log(canvas);
	console.log(self);
	var $self = $(self);
	var data = JSON.parse(canvas.innerHTML);
	var line;
	for (id in data) {
		line = canvas.getContext("2d");
		var new_track = true;
		for (c_id in data[id].coords) {
			if (data[id].coords[c_id][0] != undefined) {
				var x = data[id].coords[c_id][0] + 5;
				var y = data[id].coords[c_id][1] + 5;
				if (new_track) {
					line.moveTo(x, y);
					new_track = false;
				}
				else {
					line.lineTo(x, y);
				}
			}
		}
	}
	line = canvas.getContext("2d");
	line.moveTo(100, 100);
	line.lineTo(200, 200);
	line.strokeStyle = "#f00";

	line.stroke();
}
