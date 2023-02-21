const PollController = require('../controllers/poll.controller');

module.exports = app => {
	app.get('/api/polls/', PollController.findAllPolls);
	app.get('/api/polls/:id', PollController.findOneSinglePoll);
	app.put('/api/polls/update/:id', PollController.updateExistingPoll);
	app.post('/api/polls/new', PollController.createNewPoll);
	// app.delete('/api/users/delete/:id', PollController.deleteAnExistingUser);
};
