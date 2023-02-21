const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
	name: { type: String, required: true },
	count: { type: Number, required: false },
});

const PollSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: [10, 'El nombre debe tener como mínimo 10 caracteres'],
		},
		options: [OptionSchema],
	},
	{ timestamps: true }
);

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;
