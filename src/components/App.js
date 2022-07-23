// create your App component here
import React,{useState,useEffect} from "react";
const App = () => {
	const [ dogImage, setDogImage ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => (res.json()))
			.then((data) => {
				setDogImage(data.message);
				setIsLoaded(true);
			});
	},[])
//displays when the component is first rendered  before useEffect runs our fetch 
	if (!isLoaded) { return <p>Loading...</p> }


	return (<div className="dogImages"><img src={dogImage} alt="A Random Dog" /></div>
	);
}

export default App;