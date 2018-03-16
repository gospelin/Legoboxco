const header = {
	backgroundColor: 'red',
	padding:'40px'
}

let destination  = document.querySelector("#container");


class Header extends React.Component{
	render(){
		return(
			<header style={header}></header>
			);
	}
}

class Aside extends React.Component{
	render(){
		return(
			<aside>
				<section><p></p></section>
				<section><p></p></section>
				<section><p></p></section>
				<section><p></p></section>
			</aside>
		);
	}
}
class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
			</div>
		);
	}
}

	ReactDOM.render(
		<App />,
		destination
	);

