import React, { useEffect, useState } from 'react';
import Card from '../components/card-votacion/Card';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PollResults from '../components/Results/PollResults';

export default function Main() {
	const [poll, setPoll] = useState(null);
	const [isUserVote, setIsUserVote] = useState(false);
	let listOptions = null;
	let { id } = useParams();

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/polls/' + id)
			.then(response => {
				setPoll(response.data.poll);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const onClickHandler = i => {
		let optionsUpdate = [];

		poll.options.forEach(opt => {
			optionsUpdate.push({ name: opt.name, count: opt.count });
		});
		optionsUpdate[i].count++;

		axios
			.put('http://localhost:8000/api/polls/update/' + id, { options: optionsUpdate })
			.then(response => {
				console.log(response);
				setPoll(response.data.poll);
				setIsUserVote(true);
			})
			.catch(err => {
				console.log(err);
			});
	};

	if (poll) {
		listOptions = poll.options.map((opt, index) => (
			<div className="col-3" key={opt._id}>
				<div className="card">
					<div className="card-body text-center">
						<h3 className="card-title">{opt.name}</h3>
						<button type="button" onClick={() => onClickHandler(index)} className="btn btn-primary">
							¡Votar!
						</button>
					</div>
				</div>
			</div>
		));
	}

	return (
		<>
			<main className="container">
				<h1 className="mb-3 text-center">Sistema de Votaciones</h1>
				<Link to="/">Volver al home</Link>

				{poll && !isUserVote ? (
					<section>
						<h2 className="mb-3">{poll.name}</h2>
						<section className="row g-3">{listOptions}</section>
					</section>
				) : (
					''
				)}

				{isUserVote ? <PollResults data={poll} /> : ''}
			</main>
		</>
	);
}
