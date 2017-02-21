import Typed from './typed';

export default function Resume () {
	if (window.innerWidth) {
		return (
			<div className={'text-terminal'}>
				<Typed>
					Person rafael = new Person("Rafael Kallis");<br/>
					rafael.age = 22;<br/>
					rafael.email = () => email_client.open(<a target="_blank" href="mailto:rk [at] rafaelkallis [dot] com">rk[at]rafaelkallis[dot]com</a>);<br/>
					rafael.location = "Zürich, Switzerland";<br/>
					<br/>
					rafael.addJob({`{`} job: "Requirements Engineer",<br/>
					<div style="padding-left: 9.5em;">
						employer: <a target="_blank" href="http://staffbravo.com">{`"Staffbravo"`}</a>{`,`}<br/>
						duration: "3 months" {`}`}){`;`}
					</div>
					<br/>
					rafael.addJob({`{`} job: <a target="_blank" href="http://www.ifi.uzh.ch/en/dbtg/teaching/tutorsInfoII.html">"Tutor Algorithms & Data Structures"</a>,<br/>
					<div style="padding-left: 9.5em;">
						employer: <a href="http://www.uzh.ch/en.html" target="_blank">"University of Zurich"</a>,<br/>
						duration: "3 months" {`}`});
					</div>
					<br/>
					rafael.addEducation({`{`} degree: <a target="_blank" href="http://www.oec.uzh.ch/de/studies/general.html">"BSc. UZH Computer Science"</a>,<br/>
					<div style="padding-left: 13.2em;">
						institute: <a href="http://uzh.ch" target="_blank">"University of Zurich"</a>,<br/>
						graduation: "January 2018" {`}`});
					</div>
					<br/>
					rafael.skills = [ "Javascript", <a target="_blank" href="https://nodejs.org/en/">"Node.js"</a>, <a target="_blank" href="https://facebook.github.io/react/">"React"</a>, <a target="_blank" href="https://www.docker.com">"Docker"</a>,<br/>
					<div style="padding-left: 10.8em;">
						"Java", <a target="_blank" href="https://spring.io">"Spring"</a>, <a target="_blank" href="https://spark.apache.org">"Apache Spark"</a>, <a target="_blank" href="https://developer.android.com">"Android"</a>,<br/>
						"C/C++", <a target="_blank" href="http://openmp.org">"OpenMP"</a>,<br/>
						"SQL/NoSQL DBMS", <a target="_blank" href="https://postgresql.org">"PostgreSQL"</a>, <a target="_blank" href="https://mongodb.com">"MongoDB"</a>, <a target="_blank" href="https://neo4j.com">"Neo4j"</a>,<br/>
						<a target="_blank" href="https://www.r-project.org">"R"</a>, <a target="_blank" href="http://www.mathworks.com/products/matlab/">"MATLAB"</a>, "Numerical Algorithms" ];
					</div>
				</Typed>
			</div>
		);
	} else {
		return (
			<div className={'text-terminal'} style={{padding: '5px'}}>
				<Typed>
					rafael.email = <a target="_blank" href="mailto:rk [at] rafaelkallis [dot] com">rk[at]rafaelkallis[dot]com</a>;<br/>
					<br/>
					rafael.jobs = [{`{`}<br/>
					<div style="padding-left: 1.75em">
						job: "Requirements Engineer",<br/>
						employer: <a target="_blank" href="http://staffbravo.com">{`"Staffbravo"`}</a>
					</div>
					{`},{`}
					<div style="padding-left: 1.75em">
						job: "Tutor AlgoDat",<br/>
						employer: <a target="_blank" href="http://www.ifi.uzh.ch/en/dbtg/teaching/tutorsInfoII.html">{`"UZH"`}</a>
					</div>
					{`}`}];<br/>
					<br/>
					rafael.education = [{`{`}<br/>
					<div style="padding-left: 1.75em">
						degree: <a target="_blank" href="http://www.oec.uzh.ch/de/studies/general.html">"BSc. UZH Computer Science"</a><br/>
						institute: <a href="http://uzh.ch" target="_blank">"UZH"</a>
					</div>
					{`}`}];<br/>
					<br/>
					rafael.skills = [<br/>
					<div style="padding-left: 1.75em;">
						Javascript,&emsp;
						<a target="_blank" href="https://nodejs.org/en/">Node.js</a>,&emsp;
						<a target="_blank" href="https://facebook.github.io/react/">React</a>,&emsp;
						Java,&emsp;
						<a target="_blank" href="https://spring.io">Spring</a>,&emsp;
						<a target="_blank" href="https://spark.apache.org">Spark</a>,&emsp;
						<a target="_blank" href="https://developer.android.com">Android</a>,&emsp;
						C/C++,&emsp;
						SQL/NoSQL DBMS,&emsp;
						<a target="_blank" href="https://www.r-project.org">R</a>,&emsp;
						<a target="_blank" href="http://www.mathworks.com/products/matlab/">MATLAB</a>&emsp;
					</div>
					];
				</Typed>
			</div>
		);
	}
	
}