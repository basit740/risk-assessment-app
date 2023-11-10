import './App.css';
import RiskAssessment from './components/RiskAssessment';

function App() {
	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-center font-extrabold bg-slate-600 py-6 px-3 uppercase text-white text-3xl'>
				Risk Score Calculation
			</h1>
			<RiskAssessment />
		</div>
	);
}

export default App;
