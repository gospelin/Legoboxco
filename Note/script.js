
let destination  = document.querySelector("#container");

class Header extends React.Component{
	render(){
		return(
			<header className="header"><p>NOTE APP </p></header>
		);
	}
}


class Aside extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<aside className="aside">
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
				<section>
					<p> A New Note <br /> 
						<span> a little description </span>
					</p>
				</section>
			</aside>
		);
	}
}
class MainContent extends React.Component{
	constructor(props){
		super(props);

		this.submit = this.submit.bind(this);
	}
	
	submit(){
		console.log(this.title.value);
	}
	render(){
		return(
		<section className="body">
			
			<Aside />
			<div className="content">
				<form className="form" onSubmit={this.submit}>
					<div className="input-tab">
						<input type="text" ref={(input) => this.title = input} className="title" defaultValue="Enter the Title Here" name="title" />
					</div>
					<div className="text-area">
						<textarea defaultValue="Type your note here"></textarea>
					</div>

					<div className="submit">
						<input type="submit" value="Save" className="submit-button" />
					</div>
				</form>
			</div>
		</section>
		);
	}
}


class App extends React.Component{
	render(){
		return(
			<div className="container">
				<Header />
				<MainContent />			
			</div>
		);
	}
} 

	ReactDOM.render(
		<App />,
		destination
	);

