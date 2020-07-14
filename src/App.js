import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import CountriesDropDown from "./components/CountriesDropDown";
import CovidInfo from "./components/CovidInfo";
import Footer from "./components/footer";

function App() {
	const [country, setCountry] = useState("");

	const countrySelected = (childData) => {
		setCountry(childData);
	};

	return (
		<div className="App">
			<div className="container">
			
				<Navbar />
				<CountriesDropDown
					selectedCountry={countrySelected}></CountriesDropDown>
				<CovidInfo country={country}></CovidInfo>
				<Footer />
			</div>
		</div>
	);
}

export default App;
