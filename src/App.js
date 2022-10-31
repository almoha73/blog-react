import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";
import { Routes, Route, Router } from "react-router-dom";

function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/ecrire" element={<AddArticle />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/articles/:slug" element={<Article />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
