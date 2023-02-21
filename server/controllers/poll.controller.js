const Poll = require('../models/poll.model');

module.exports.findAllPolls = (req, res) => {
	Poll.find()
		.sort({ createdAt: -1 })
		.then(allPolls => res.json({ polls: allPolls }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.findOneSinglePoll = (req, res) => {
	Poll.findOne({ _id: req.params.id })
		.then(oneSinglePoll => res.json({ poll: oneSinglePoll }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.createNewPoll = (req, res) => {
	Poll.create(req.body)
		.then(newPoll => res.json({ poll: newPoll }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.updateExistingPoll = (req, res) => {
	Poll.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(updatedUser => res.json({ poll: updatedUser }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// module.exports.deleteAnExistingUser = (req, res) => {
// 	Poll.deleteOne({ _id: req.params.id })
// 		.then(result => res.json({ result: result }))
// 		.catch(err => res.json({ message: 'Something went wrong', error: err }));
// };
