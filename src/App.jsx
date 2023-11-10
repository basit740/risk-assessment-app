import './App.css';
import RiskAssessment from './components/RiskAssessment';

function App() {
	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-center font-extrabold bg-slate-600 py-6 px-3 uppercase text-white text-3xl flex align-middle justify-between'>
				<img
					width='50px'
					height='50px'
					src='https://gowithcanvas.com/wp-content/uploads/2023/01/Canvas_Icon_Color_.png'
					alt=''
				/>{' '}
				Risk Score Calculation
			</h1>
			<RiskAssessment />
		</div>
	);
}

export default App;
