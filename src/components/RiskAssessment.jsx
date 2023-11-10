import { useState } from 'react';

const RiskAssessmentView = () => {
	const [formData, setFormData] = useState({
		category: '',
		policy: '',
		citation: '',
		siteVisit: '',
		riskCategory: '',
		penaltiesLitigation: '1',
		regulationComplexity: '1',
		priorExceptions: '1',
		managementResponse: '1',
		turnover: '1',
		newAreasOfBusiness: '1',
		managementOversight: '1',
		policiesProcedures: '1',
		organization: '1',
		riskAssessments: '1',
		training: '1',
		testingAudit: '1',
		issueManagement: '1',
	});
	const [showPopup, setShowPopup] = useState(false);
	const [inherentRiskTotal, setInherentRiskTotal] = useState(0);
	const [residualRiskTotal, setResidualRiskTotal] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const calculateInherentRiskTotal = () => {
		const total =
			parseInt(formData.penaltiesLitigation) +
			parseInt(formData.regulationComplexity) +
			parseInt(formData.priorExceptions) +
			parseInt(formData.managementResponse) +
			parseInt(formData.turnover) +
			parseInt(formData.newAreasOfBusiness);
		return total;
	};

	const calculateResidualRiskTotal = () => {
		const total =
			parseInt(formData.managementOversight) +
			parseInt(formData.policiesProcedures) +
			parseInt(formData.organization) +
			parseInt(formData.riskAssessments) +
			parseInt(formData.training) +
			parseInt(formData.testingAudit) +
			parseInt(formData.issueManagement);
		return total;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const inherentTotal = calculateInherentRiskTotal();
		const residualTotal = calculateResidualRiskTotal();
		setInherentRiskTotal(inherentTotal);
		setResidualRiskTotal(residualTotal);
		setShowPopup(true);
	};

	const closePopup = () => setShowPopup(false);

	return (
		<div className='container mx-auto p-4'>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label
						htmlFor='category'
						className='block text-sm font-medium text-gray-700'
					>
						Category
					</label>
					<select
						name='category'
						id='category'
						onChange={handleChange}
						className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					>
						<option value=''>Select a Category</option>
						<option value='Bankruptcy'>Bankruptcy</option>
						<option value='Fair Lending'>Fair Lending</option>
						<option value='ECOA'>ECOA</option>
						<option value='TILA-Closed End'>TILA-Closed End</option>
						<option value='MLA'>MLA</option>
					</select>
				</div>
				<div>
					<label
						htmlFor='policy'
						className='block text-sm font-medium text-gray-700'
					>
						Policy
					</label>
					<input
						type='text'
						name='policy'
						id='policy'
						onChange={handleChange}
						className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					/>
				</div>
				<div>
					<label
						htmlFor='citation'
						className='block text-sm font-medium text-gray-700'
					>
						Citation
					</label>
					<input
						type='text'
						name='citation'
						id='citation'
						onChange={handleChange}
						className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					/>
				</div>
				<div>
					<label
						htmlFor='siteVisit'
						className='block text-sm font-medium text-gray-700'
					>
						Site Visit
					</label>
					<select
						name='siteVisit'
						id='siteVisit'
						onChange={handleChange}
						className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					>
						<option value=''>Select a Site Visit Type</option>
						<option value='Applications and Organizations'>
							Applications and Organizations
						</option>
						<option value='Servicing and Collections'>
							Servicing and Collections
						</option>
						<option value='Advertising & Marketing'>
							Advertising & Marketing
						</option>
						<option value='Annual'>Annual</option>
					</select>
				</div>
				<div>
					<label
						htmlFor='riskCategory'
						className='block text-sm font-medium text-gray-700'
					>
						Risk/Category
					</label>
					<textarea
						name='riskCategory'
						id='riskCategory'
						onChange={handleChange}
						className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					/>
				</div>
				{/* INHERET RISK CATEGORES */}

				<div>
					<h2 className='border-b-8 text-2xl'>Inhert Risk Categories</h2>
					<div>
						<label
							htmlFor='penaltiesLitigation'
							className='block text-sm font-medium text-gray-700'
						>
							Penalties Litigation
						</label>
						<select
							name='penaltiesLitigation'
							id='penaltiesLitigation'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Low</option>
							<option value='2'>Moderate</option>
							<option value='3'>High</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='regulationComplexity'
							className='block text-sm font-medium text-gray-700'
						>
							Regulation Complexity
						</label>
						<select
							name='regulationComplexity'
							id='regulationComplexity'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Low</option>
							<option value='2'>Moderate</option>
							<option value='3'>High</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='priorExceptions'
							className='block text-sm font-medium text-gray-700'
						>
							Prior Exceptions
						</label>
						<select
							name='priorExceptions'
							id='priorExceptions'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Low</option>
							<option value='2'>Moderate</option>
							<option value='3'>High</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='managementResponse'
							className='block text-sm font-medium text-gray-700'
						>
							Management Response
						</label>
						<select
							name='managementResponse'
							id='managementResponse'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Low</option>
							<option value='2'>Moderate</option>
							<option value='3'>High</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='turnover'
							className='block text-sm font-medium text-gray-700'
						>
							Turnover
						</label>
						<select
							name='turnover'
							id='turnover'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Low</option>
							<option value='2'>Moderate</option>
							<option value='3'>High</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='newAreasOfBusiness'
							className='block text-sm font-medium text-gray-700'
						>
							New Areas of Business
						</label>
						<select
							name='newAreasOfBusiness'
							id='newAreasOfBusiness'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Low</option>
							<option value='2'>Moderate</option>
							<option value='3'>High</option>
						</select>
					</div>
				</div>
				{/* END INHERT RISK CATEGORIES */}
				{/* RESIDUAL RISK CATEGORES */}
				<h2 className='border-b-8 border-gray-500 text-2xl'>
					Residual Risk Controls
				</h2>

				<div>
					<div>
						<label
							htmlFor='managementOversight'
							className='block text-sm font-medium text-gray-700'
						>
							Management Oversight & Reporting
						</label>
						<select
							name='managementOversight'
							id='managementOversight'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='policiesProcedures'
							className='block text-sm font-medium text-gray-700'
						>
							Policies & Procedures
						</label>
						<select
							name='policiesProcedures'
							id='policiesProcedures'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='organization'
							className='block text-sm font-medium text-gray-700'
						>
							Organization
						</label>
						<select
							name='organization'
							id='organization'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='riskAssessments'
							className='block text-sm font-medium text-gray-700'
						>
							Risk Assessments
						</label>
						<select
							name='riskAssessments'
							id='riskAssessments'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='training'
							className='block text-sm font-medium text-gray-700'
						>
							Training
						</label>
						<select
							name='training'
							id='training'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='testingAudit'
							className='block text-sm font-medium text-gray-700'
						>
							Testing & Audit
						</label>
						<select
							name='testingAudit'
							id='testingAudit'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='issueManagement'
							className='block text-sm font-medium text-gray-700'
						>
							Issue Management
						</label>
						<select
							name='issueManagement'
							id='issueManagement'
							onChange={handleChange}
							className='mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
						>
							<option value='1'>Weak</option>
							<option value='2'>Adequate</option>
							<option value='3'>Strong</option>
						</select>
					</div>
				</div>
				{/* END RESIDUAL RISK CATEGORIES */}
				<button
					type='submit'
					id='submit'
					className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Submit
				</button>
			</form>

			{showPopup && (
				<div className='absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-lg shadow-xl'>
					<div className='text-sm'>
						{/* <p>Category: {formData.category}</p>
						<p>Policy: {formData.policy}</p>
						<p>Citation: {formData.citation}</p>
						<p>Site Visit: {formData.siteVisit}</p>
						<p>Risk/Category: {formData.riskCategory}</p> */}
						<h2 className='font-semibold'>
							Risk Score :{' '}
							<strong className='text-green-600'>
								{residualRiskTotal - inherentRiskTotal}
							</strong>{' '}
						</h2>
						<h2 className='font-semibold'>
							Inherent Risk Total:{' '}
							<strong className='text-blue-600'>{inherentRiskTotal}</strong>
						</h2>
						<h2 className='font-semibold'>
							Residual Risk Total:{' '}
							<strong className='text-blue-600'>{residualRiskTotal}</strong>
						</h2>
					</div>
					<button
						onClick={closePopup}
						className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					>
						Close
					</button>
				</div>
			)}
		</div>
	);
};

export default RiskAssessmentView;
