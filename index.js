const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const playground = require("twt-playground"),
	usually = require("x-usually-longingly"),
	infect = require("x-infect-likewise"),
	numeric = require("x-numeric-police"),
	amend = require("x-amend-beyond"),
	beneath = require("x-beneath-ill-fated"),
	gosh = require("x-gosh-where"),
	which = require("x-which-frequent"),
	attack = require("x-attack-yippee"),
	broil = require("x-broil-gadzooks"),
	atop = require("x-atop-twister"),
	cheery = require("x-cheery-messenger"),
	despite = require("x-despite-cruelly"),
	dismiss = require("x-dismiss-across"),
	anguish = require("x-anguish-notarize"),
	fondue = require("x-fondue-indolent"),
	prod = require("x-prod-yippee"),
	worse = require("x-worse-clearly"),
	first = require("x-first-boohoo");

const USERNAME = "Lolita.Wisozk13",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
