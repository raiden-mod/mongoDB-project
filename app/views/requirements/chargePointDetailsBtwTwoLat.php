<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>COS6009-B | Large Scale Data Driven Application Module</title>
	<link rel="stylesheet" href="<?= ASSIGNMENTROOT; ?>/public/resources/css/app.css">
</head>

<body>
	<div class="assgnmentBody">
		<div id="map" style="width: 100%;height: 500px;margin-top:20px">
			<!-- the map will be here -->
		</div>
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>No.</th>
						<th>Town</th>
						<th>PostCode</th>
						<th>Change Device Status</th>
						<th>Connetor1 Type</th>
						<th>Latitude</th>
						<th>Longitude</th>
					</tr>
				</thead>
				<tbody>
					<?php
					$i = 1;
					?>
					<?php foreach ($data["chargePointDetailsBtwTwoLat"] as $data) : ?>
						<tr class="latitude">
							<td><?= $i++; ?></td>
							<td><?= $data["town"]; ?></td>
							<td><?= $data["postcode"]; ?></td>
							<td><?= $data["chargeDeviceStatus"]; ?></td>
							<td><?= $data["connector1Type"] ?></td>
							<td><?= $data["latitude"]; ?></td>
							<td><?= $data["longitude"]; ?></td>
							<input type="hidden" name="latitude" value="<?= $data["latitude"]; ?>">
							<input type="hidden" name="longitude" value="<?= $data["longitude"]; ?>">
						</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
	<script src="<?= ASSIGNMENTROOT; ?>/public/vendor/jquery-3.5.1.js"></script>
	<script>
		function initialize() {
			let locations = []
			$("input[name='latitude']").each(function() {
				locations.push({
					latitude: $(this).val(),
					longitude: $(this).next().val()
				})
			});

			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 6,
				center: new google.maps.LatLng(53.5500, 2.4333),
			});

			var infowindow = new google.maps.InfoWindow();

			var marker, i;

			for (i = 0; i < locations.length; i++) {
				console.log(locations[i]["latitude"]);
				console.log(locations[i]["longitude"]);
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i]["latitude"], locations[i]["longitude"]),
					map: map
				});

				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infowindow.setContent(locations[i]["latitude"]);
						infowindow.open(map, marker);
					}
				})(marker, i));
			}
		}

		function loadScript() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCOQCuXjuSLJ5wiL-HdTG8mVNgH0aa6Ovc&v=3.exp&' +
				'callback=initialize';
			document.body.appendChild(script);
		}

		window.onload = loadScript;
	</script>

</body>

</html>