/**
 * Created by JetBrains RubyMine.
 * User: pechenikin
 * Date: 24.10.11
 * Time: 19:22
 * To change this template use File | Settings | File Templates.
 */
function ShowTrack(lat, lon)
{
	if (typeof(lat) == 'number' && typeof(lon) == 'number')
	{
		$.getJSON('/index/result', {lon: lon, lat:lat}, function(data)
		{
			console.log(data);
		})
	}
}
$(document).ready(function()
{
	var myOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'),
					myOptions);
	google.maps.event.addListener(map, 'click', function(event)
	{
		ShowTrack(event.point.x, event.point.y);
	});
});