/**
 * QuoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  random: function(req, res){

    quotes = [
      "Love all, trust a few, do wrong to none.",
      "If music be the food of love, play on.",
      "There is nothing either good or bad but thinking makes it so.",
      "I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow; but through it all I still know quite certainly that just to be alive is a grand thing.",
      "Very few of us are what we seem.",
      "The best time for planning a book is while you\'re doing the dishes.",
      "Never do anything yourself that others can do for you.",
      "Everybody said, \"Follow your heart\". I did, it got broken.",
      "Time is the best killer.",
      "To every problem, there is a most simple solution.",
      "The truth, however ugly in itself, is always curious and beautiful to seekers after it."
    ];


    var q = quotes[Math.floor(Math.random() * quotes.length)];

    return res.ok(q);

  }


};
