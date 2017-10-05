/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

 subscribeToMessages: function(req, res){
		if (!req.isSocket) {
			return res.badRequest();
		}
		sails.sockets.join(req, Message, function(err) {
			if (err) {
				return res.serverError(err);
			}
			return res.ok("Subscribed to messages!");
		});
	}

};
