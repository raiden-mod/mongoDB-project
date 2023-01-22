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
		<div class="table">
			<h3>Which county has the greatest number of charge point</h3>
			<table style="margin: 20px 0;">
				<thead>
					<tr>
						<th>No.</th>
						<th>County</th>
						<th>Number of Charge Point</th>
					</tr>
				</thead>
				<tbody>
						<tr>
							<td>1</td>
							<td>Greater London</td>
							<td>4730</td>
						</tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<th>No.</th>
						<th>County</th>
						<th>Number of Charge Point</th>
					</tr>
				</thead>
				<tbody>
					<?php
					$i = 1;
					?>
					<?php foreach ($data["chargePoint"] as $data) : ?>
						<tr>
							<td><?= $i++; ?></td>
							<td><?= $data["_id"]; ?></td>
							<td><?= $data["count"]; ?></td>
						</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
</body>

</html>