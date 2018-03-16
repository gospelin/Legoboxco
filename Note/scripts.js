const header = {
	backgroundColor: '#65E',
	padding:'40px'
}

let destination  = document.querySelector("#container");


class Header extends React.Component{
	render(){
		return(
			<header style={header}>Note App</header>
			);
	}
}

const aside = {
	float: 'left'
}

class Aside extends React.Component{
	render(){
		return(
			<aside className= "aside" style={aside}>
				<section><p>Heading 1</p></section>
				<section><p>Heading 2</p></section>
				<section><p>Heading 3</p></section>
				<section><p>Heading 4</p></section>
			</aside>
		);
	}
}
class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Aside />
			</div>
		);
	}
}

	ReactDOM.render(
		<App />,
		destination
	);

