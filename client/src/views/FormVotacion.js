import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FormVotacion = () => {
	const [title, setTitle] = useState('');
	const [option1, setOption1] = useState('');
	const [option2, setOption2] = useState('');
	const [option3, setOption3] = useState('');
	const [option4, setOption4] = useState('');

	const onSubmitHandler = e => {
		e.preventDefault();

		const options = [];
		if (option1.length != 0) {
			options.push({ name: option1, count: 0 });
		}

		if (option2.length != 0) {
			options.push({ name: option2, count: 0 });
		}

		if (option3.length != 0) {
			options.push({ name: option3, count: 0 });
		}

		if (option4.length != 0) {
			options.push({ name: option4, count: 0 });
		}

		axios
			.post('http://localhost:8000/api/polls/new', {
				name: title,
				options,
			})
			.then(response => {
				console.log(response);
				setTitle('');
				setOption1('');
				setOption2('');
				setOption3('');
				setOption4('');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="container">
			<h1 className="mb-3 text-center">Sistema de Votaciones</h1>
			<Link to="/">Volver al home</Link>
			<h1 className="mb-3">Crear nueva encuesta</h1>
			<form onSubmit={onSubmitHandler}>
				<div className="row">
					<div className="col-6 d-flex flex-column justify-content-between">
						<div className="mb-3">
							<label htmlFor="titulo-pregunta" className="form-label">
								¿Cuál será su pregunta? *
							</label>
							<textarea
								value={title}
								onChange={e => setTitle(e.target.value)}
								className="form-control"
								id="titulo-pregunta"
								rows="6"
								minLength={10}
								maxLength={50}
								required
							></textarea>
						</div>
						<button type="submit" className="btn btn-primary mb-3">
							Crear encuesta
						</button>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<label htmlFor="option-1" className="form-label">
								Opción 1 *
							</label>
							<input
								type="text"
								value={option1}
								onChange={e => setOption1(e.target.value)}
								className="form-control"
								id="option-1"
								required
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="option-2" className="form-label">
								Opción 2 *
							</label>
							<input
								type="text"
								value={option2}
								onChange={e => setOption2(e.target.value)}
								className="form-control"
								id="option-2"
								required
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="option-3" className="form-label">
								Opción 3
							</label>
							<input
								type="text"
								value={option3}
								onChange={e => setOption3(e.target.value)}
								className="form-control"
								id="option-3"
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="option-4" className="form-label">
								Opción 4
							</label>
							<input
								type="text"
								value={option4}
								onChange={e => setOption4(e.target.value)}
								className="form-control"
								id="option-4"
							/>
						</div>
					</div>
				</div>
				<div className="alert alert-warning" role="alert">
					Los campos con * son obligatorios
				</div>
			</form>
		</div>
	);
};

export default FormVotacion;
