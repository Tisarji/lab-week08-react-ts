import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bannerChamp from "./assets/banner.png";
import score from "./assets/score.png";
import MyTable from "./component/myTable";
import "./App.css";

document.body.style.backgroundColor = "black";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<h1>NBA Championship 2024</h1>
			<img src={bannerChamp} className="banner" alt="banner champ" />

			<div className="news-container">
				<h2>Boston Celtics Win NBA Championship 2024</h2>
				<p>The Boston Celtics emerged victorious in the 2024 NBA Championship by defeating the Dallas Mavericks in a thrilling 6-game series.</p>
				<p><strong>Finals MVP:</strong> Jayson Tatum</p>
				<p><strong>How They Won:</strong> The Celtics clinched the title with a decisive Game 6 win at home, where Jayson Tatum delivered a standout performance, scoring 40 points and securing the championship with a clutch three-pointer in the final minutes.</p>
			</div>

			<h2>Score!</h2>
			<img src={score} className="banner" alt="Score" />
			<h3>Jirasit Karunwong: 6511130052</h3>
			<hr />

			<div className="table-container">
				<MyTable />
			</div>

			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					Count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
