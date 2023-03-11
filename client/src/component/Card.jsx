import React from 'react';
import './glass.css';
import VanillaTilt from "vanilla-tilt";
// const element = document.querySelectorAll('.card');

function Card() {
	React.useEffect(() => {
		const element = document.querySelectorAll(".card");
		VanillaTilt.init(element);
	}, []);

	return (
		<div className="home-cards-bg p-2" style={{ backgroundColor: "#121113" }}>
			<div className="container">
				<div className="card">
					<div className="content">
						<h1>1</h1>
						<h3></h3>
					</div>
					<background style={{ float: "right" }} alt="vector-img" />
				</div>

				<div className="card">
					<div className="content">
						<h1>2</h1>
						<h3></h3>
					</div>
				</div>
				<div className="card">
					<div className="content">
						<h1>3</h1>
						<h3> </h3>
					</div>
				</div>
                <div className="card">
					<div className="content">
						<h1>4</h1>
						<h3> </h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
