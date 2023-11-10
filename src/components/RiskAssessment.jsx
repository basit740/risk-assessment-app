import { useState } from 'react';

const RiskAssessment = () => {
	const [formData, setFormData] = useState({
		category: '',
		policy: '',
		citation: '',
		siteVisit: '',
		riskCategory: '',
	});
	const [showPopup, setShowPopup] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
				<button
					type='submit'
					className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Submit
				</button>
			</form>

			{showPopup && (
				<div className='absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-lg shadow-xl'>
					<div className='text-sm'>
						<p>Category: {formData.category}</p>
						<p>Policy: {formData.policy}</p>
						<p>Citation: {formData.citation}</p>
						<p>Site Visit: {formData.siteVisit}</p>
						<p>Risk/Category: {formData.riskCategory}</p>
						<h2 className='font-semibold'>
							Risk Score : <strong className='text-green-600'>2</strong>{' '}
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

export default RiskAssessment;
