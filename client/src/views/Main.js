import React, { useEffect, useState } from 'react';
import Card from '../components/card-votacion/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Main() {
	const [polls, setPolls] = useState(null);
	let listPolls = null;
	let topPolls = null;

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/polls/')
			.then(response => {
				setPolls(response.data.polls);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	if (polls) {
		listPolls = polls.map(poll => <Card key={poll._id} data={poll} />);

		let mostVotePolls = polls.map(poll => {
			let totalVotes = poll.options.reduce(
				(accumulator, currentOpt) => accumulator + currentOpt.count,
				0
			);
			return { ...poll, totalVotes };
		});

		mostVotePolls = mostVotePolls.sort((a, b) => a.totalVotes - b.totalVotes);
		mostVotePolls = mostVotePolls.slice(-3).reverse();

		topPolls = mostVotePolls.map(poll => <Card key={poll._id} data={poll} />);
	}

	return (
		<>
			<main className="container">
				<h1 className="mb-3 text-center">Sistema de Votaciones</h1>
				<Link to="/votaciones/nuevo">Crear nueva votacion</Link>

				<div className="row">
					<section className="col-6">
						<h2>Top 3 votaciones</h2>

						{polls ? topPolls : 'Cargando'}
					</section>
					<section className="col-6">
						<h2>Votaciones recientes</h2>
						{polls ? listPolls : 'Cargando'}
					</section>
				</div>
			</main>
		</>
	);
}
