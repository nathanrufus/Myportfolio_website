import React from "react"
import "./App.css"
import Header from "./componenets/Header"
import Home from "./componenets/Home"
import About from "./componenets/About"
import Projects from "./componenets/Projects"
import Contact from "./componenets/Contact"
import Footer from "./componenets/Footer"
import Services from "./componenets/Services"

function App() {
	return (
		<div className=" max-w-7xl mx-auto">
			<Header />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
