import React from 'react';
import './glass.css';
import VanillaTilt from "vanilla-tilt";
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';
import { width } from '@mui/system';
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
                        <ApartmentIcon sx={{ color: 'white' }}/>
						<h3>Manufacture</h3>
                        <p className='text-white'>
                            
                        </p>
					</div>
					<background style={{ float: "right" }} alt="vector-img" />
				</div>

				<div className="card">
					<div className="content">
						<h1>2</h1>
                        <SellIcon sx={{ color: 'white' }}/>
						<h3>Third Party</h3>
					</div>
				</div>
				<div className="card">
					<div className="content">
						<h1>3</h1>
                        <LocalShippingIcon sx={{ color: 'white' }}/>
						<h3>Delivery</h3>
					</div>
				</div>
                <div className="card">
					<div className="content">
						<h1>4</h1>
                        <PersonIcon sx={{ color: 'white' }}/>
						<h3>Customer</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
