import React, { useState } from "react";

const CountriesDropDown = (props) => {
	const [countries, setCountries] = useState([]);
	const onChange = (e) => {
		console.log(e.target.value);
		props.selectedCountry(e.target.value);
	};

	const createSelectItems = () => {
		const res = fetch("https://api.covid19api.com/countries")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setCountries(res);
			});
		let items = [];
		countries.forEach((country) => {
			items.push(
				<option key={country.Slug} value={country.Slug}>
					{country.Country}
				</option>
			);
		});
		return items;
	};
	return (
		<div>
			<section class="hero tile is-light is-medium">
				<div class="hero-body">
					<div class="container has-text-centered">
						<h1 class="title toggleadd is-1 is-cursor-pointer is-size-1-touch">
							NCOVID-2019 Tracker
						</h1>
						<form id="" className="field has-addons has-addons-centered ">
							<p className="control  is-dark ">
								<div className="select is-large">
									<select onChange={onChange}>{createSelectItems()}</select>
								</div>
							</p>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CountriesDropDown;
