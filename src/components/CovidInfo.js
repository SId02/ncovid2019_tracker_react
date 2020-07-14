import React, { useState } from "react";
const CovidInfo = (props) => {
	const [covidData, setCovidData] = useState([]);
	const InfoData = () => {
		console.log(props.country);
		let items = [];
		const response = fetch(
			`https://api.covid19api.com/total/country/,${props.country}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				const index = res.length - 1;
				setCovidData(res[index]);
				console.log(index);
			});
	};
	return (
		<div>
			<p class="control has-text-centered">
				<button
					onClick={InfoData}
					type="submit"
					value="Get Info"
					class="button is-success is-large">
					Get Info
				</button>
			</p>

			<div class="container has-text-centered ">
				<div class="has-addons has-addons-centered">
					<div class="tile">
						<div class="tile is-parent ">
							<article class="tile is-child box">
								<nav class="level">
									<div class="level-item has-text-centered has-background-dark">
										<div>
											<p class="heading has-text-white ">
												Total Confirmed Cases
											</p>
											<p class="title has-text-white">{covidData.Confirmed}</p>
										</div>
									</div>
									<div class="level-item has-text-centered has-background-warning">
										<div>
											<p class="heading">Total Active Cases</p>
											<p class="title">{covidData.Active}</p>
										</div>
									</div>
									<div class="level-item has-text-centered has-background-danger">
										<div>
											<p class="heading">Total Deaths Cases</p>
											<p class="title">{covidData.Deaths}</p>
										</div>
									</div>
									<div class="level-item has-text-centered has-background-success">
										<div>
											<p class="heading">Total Recovered Cases</p>
											<p class="title">{covidData.Recovered}</p>
										</div>
									</div>
								</nav>
								<div>
									Date : <span class="subtitle">{covidData.Date}</span>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>

			{/* <div class="container has-text-centered ">
				<div class="has-addons has-addons-centered">
					<div class="tile">
						<div class="tile is-parent ">
							<article class="tile is-child box">
								<ul>
									<li>
										Total Confirmed Cases :
										<span class="subtitle is-warning">
											{covidData.Confirmed}
										</span>
									</li>
									<li>
										Total Active Cases :
										<span class="subtitle ">{covidData.Active}</span>
									</li>
									<li>
										Total Deaths Cases :
										<span class="subtitle is-danger">{covidData.Deaths}</span>
									</li>
									<li>
										Total Recovered Cases :
										<span class="subtitle is-sucess">
											{covidData.Recovered}
										</span>
									</li>
									<li>
										Date : <span class="subtitle">{covidData.Date}</span>
									</li>
								</ul>
							</article>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default CovidInfo;
