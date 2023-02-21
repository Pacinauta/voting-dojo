import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/char.webp';

const Card = props => {
	const poll = props.data;
	const titulo = poll.name;
	const opciones = poll.options.reduce((accumulator, currentOpt) => {
		accumulator += currentOpt.name + ': ' + currentOpt.count + ' ';
		return accumulator;
	}, '');

	const tiempo = moment(poll.createdAt, 'YYYYMMDD').fromNow();

	return (
		<div className="card mb-4">
			<div className="card-body">
				<div className="row">
					<div className="col-3">
						<img src={img} style={{ width: '150px' }} />
					</div>

					<div className="col-9">
						<Link to={`/votaciones/${poll._id}`}>
							<h4 className="card-title">{titulo}</h4>
						</Link>

						<div className="card-text">
							<p>{opciones}</p>
							<p>
								<i>({tiempo})</i>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
