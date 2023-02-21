import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PollResults = props => {
	const poll = props.data;
	const pollTitle = poll.name;

	const charLabels = poll.options.map(opt => opt.name);
	const charData = poll.options.map(opt => opt.count);

	const char = {
		labels: charLabels,
		datasets: [
			{
				label: '',
				data: charData,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<section>
			<div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
				¡Gracias por responder la encuensta! Estos son los resultados hasta el momento
				<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>

			<div className="p-3" style={{ backgroundColor: 'var(--bs-gray-200)', maxHeight: '500px' }}>
				<h2 className="text-center mb-4">{pollTitle}</h2>

				<Pie data={char} style={{ maxHeight: '400px' }} />
			</div>
		</section>
	);
};

export default PollResults;
