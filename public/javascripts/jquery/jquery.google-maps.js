/**
 * Created by JetBrains RubyMine.
 * User: Dachiko
 * Date: 21.10.11
 * Time: 0:39
 * To change this template use File | Settings | File Templates.
 */

function init()
{
	var myLatlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById("track-map-create"), myOptions);
}