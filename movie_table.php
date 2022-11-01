
<html>
	<body>
			<table style="border:1px solid black;margin-left:auto;margin-right:auto;">
				<tr>
					<th>movie_name</th>
					<th>Year</th>
					<th>certificate</th>
					<th>runtime</th>
					<!--
					<th>genre</th>
					<th>RATING</th>
					<th>DETAIL OF MOVIE</th>
					<th>DIRECTOR</th>
					<th>ACTOR 1</th>
					<th>ACTOR 2</th>
					<th>ACTOR 3</th>
					<th>ACTOR 4</th>
					<th>votes</th>
					<th>metascore</th>
					<th>GROSS COLLECTION</th>
					-->
				</tr>
				<?php
				error_reporting(0);
				$conn = mysqli_connect("localhost:3306", "root", "gkfma123", "movie");
				$sql = "SELECT * FROM movie_stats";
				$result = $conn->query($sql);

				if ($result->num_rows > 0) {
					while ($row = $result-> fetch_assoc()) {
						echo "<tr><td>".$row["movie_name"]."</td><td>".
						$row["Year"]."</td><td>".$row["certificate"]."</td><td>".
						$row["runtime"].
						/*"</td><td>"
						/*
						.$row["genre"]."</td><td>".
						$row["RATING"]."</td><td>".$row["DETAIL OF MOVIE"]."</td><td>".
						$row["DIRECTOR"]."</td><td>".$row["ACTOR 1"]."</td><td>".
						$row["ACTOR 2"]."</td><td>".$row["ACTOR 3"]."</td><td>".
						$row["ACTOR 4"]."</td><td>".$row["votes"]."</td><td>".
						$row["metascore"]."</td><td>".$row["GROSS COLLECTION"].*/"</td><tr>";
					}
				} 
				else {
					echo "No Results";
				}
				$conn->close();
				?>
			</table>
	</body>
</html>