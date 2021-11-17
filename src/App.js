import "./App.css";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import {useState} from "react";

function App() {
	const [showloginButton, setShowloginButton] = useState(true);
	const [showlogoutButton, setShowlogoutButton] = useState(false);

	// const [loginData, setLoginData] = useState(
	// 	localStorage.getItem("loginData")
	// 		? JSON.parse(localStorage.getItem("loginData"))
	// 		: null
	// );

	const handleFailure = (result) => {
		alert(result);
	};

	const handleLogin = (result) => {
		console.log(result);
		setShowloginButton(false);
		setShowlogoutButton(true);
	};

	// const handleLogin = async (googleData) => {
	// 	// console.log(googleData);
	// 	const result = await fetch("/api/google-login", {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			token: googleData.tokenId,
	// 		}),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	});

	// 	const data = await result.json();
	// 	setLoginData(data);
	// 	localStorage.setItem("loginData", JSON.stringify(data));
	// };

	const handleLogout = () => {
		// localStorage.removeItem("loginData");
		// setLoginData(null);
		alert("You have been logged out");
		console.clear();
		setShowloginButton(true);
		setShowlogoutButton(false);
	};

	return (
		<div className="App">
			<header className="App-header">
				{showloginButton ? (
					<div>
						<h1>Login with OAuth</h1>
						<GoogleLogin
							clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
							buttonText="Login with Google"
							onSuccess={handleLogin}
							onFailure={handleFailure}
							// cookiePolicy={"single_host_origin"}
						></GoogleLogin>
					</div>
				) : null}

				{showlogoutButton ? (
					<div>
						<h1>Welcome!! You are logged in now</h1>
						<GoogleLogout
							clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
							buttonText="Sign out"
							onLogoutSuccess={handleLogout}
						></GoogleLogout>
					</div>
				) : null}
			</header>
		</div>
	);
}

export default App;
