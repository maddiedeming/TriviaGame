//Global Variables
var running;
var intervalTime;
var questionNumber;
var game = "";
var timer;
//Question Data (Constant)
var questionBank = [
	{
		question: "Hello Facebook. Yes, this is actually Lindsay. Welcome to my Facebook page!",
		answers: ["Lindsay Lohan","","",""],
		correctAnswer: "Lindsay Lohan",
		imageURL: "./images/lindsay-lohan.gif"
	},
	{
		question: "Do ants have dicks?",
		answers: ["Kourtney Kardashian","","",""],
		correctAnswer: "Kourtney Kardashian",
		imageURL: "./images/kourtney-kardashian.gif"
	},
	{
		question: "How Can Mirrors Be Real If Our Eyes Aren't Real",
		answers: ["Jaden Smith","","",""],
		correctAnswer: "Jaden Smith",
		imageURL: "./images/jaden-smith.gif"
	},
	{
		question: "I was looking at tweets & saw that i really hurt someones feelings ! Im sorry. It was light blue background with white egg shape . Bye",
		answers: ["Cher","","",""],
		correctAnswer: "Cher",
		imageURL: "./images/cher.gif"
	},
	{
		question: "310-954-7277 Call me bro. C",
		answers: ["Charlie Sheen","","",""],
		correctAnswer: "Charlie Sheen",
		imageURL: "./images/charlie-sheen.gif"
	},
	{
		question: "EWW Im at lunch,the woman at the table next 2 me is breast feeding her baby w no coverup then puts baby on the table and changes her diaper",
		answers: ["Kim Kardashian","","",""],
		correctAnswer: "Kim Kardashian",
		imageURL: "./images/kim-kardashian-2.jpg"
	},
	{
		question: "WAS RUSHIN HOME TO TAKE A DUMP AND GOT CAUGHT BEHIND A SCHOOL BUS DROPPIN KIDS OFF!! LONGEST 30MINS OF MY LIFFFEEEE!!",
		answers: ["Lil' Jon","","",""],
		correctAnswer: "Lil' Jon",
		imageURL: "./images/lil-jon.gif"
	},
	{
		question: "Dear elderly man at the gym:its hard 4 me 2 keep composure whilst punching at chipmunk speed when ur ball sack spills out of ur wind shorts",
		answers: ["Jessica Simpson","","",""],
		correctAnswer: "Jessica Simpson",
		imageURL: "./images/jessica-simpson.gif"
	},
	{
		question: "I can't believe my grand mothers making me take Out the garbage I'm rich fuck this I'm going home I don't need this shit",
		answers: ["50 Cent","","",""],
		correctAnswer: "50 Cent",
		imageURL: "./images/50-cent.gif"
	},
	{
		question: "i am still alive",
		answers: ["John Cleese","","",""],
		correctAnswer: "John Cleese",
		imageURL: "./images/john-cleese.gif"
	},
	{
		question: "well I am going to be because snoop noticed a tweet of mine where i only used one g in dogg and i'm mortified",
		answers: ["Chrissy Teigen","","",""],
		correctAnswer: "Chrissy Teigen",
		imageURL: "./images/chrissy-teigen.gif"
	},
	{
		question: "I don't know about you, but I'm feeling 22.",
		answers: ["Harry Styles","","",""],
		correctAnswer: "Harry Styles",
		imageURL: "./images/harry-styles.gif"
	},
	{
		question: "YO @BARACKOBAMA COME OVERRRRRR",
		answers: ["Aubrey Plaza","","",""],
		correctAnswer: "Aubrey Plaza",
		imageURL: "./images/aubrey-plaza.gif"
	},
	{
		question: "Why is rhode island nor a road or an island",
		answers: ["Justin Bieber","","",""],
		correctAnswer: "Justin Bieber",
		imageURL: "./images/justin-bieber.gif"
	},
	{
		question: "Does anyone think global warming is a good thing? I love Lady Gaga. I think she's a really interesting artist.",
		answers: ["Britney Spears","","",""],
		correctAnswer: "Britney Spears",
		imageURL: "./images/britney-spears.gif"	
	},
	{
		question: "Do you think I'm hip?",
		answers: ["Martha Stewart","","",""],
		correctAnswer: "Martha Stewart",
		imageURL: "./images/martha-stewart.gif"
	},
	{
		question: "pee pee on the street. PoPo come n get me if u can find meeee. I blame traffik.",
		answers: ["Ke$ha","","",""],
		correctAnswer: "Ke$ha",
		imageURL: "./images/kesha.gif"
	},
	{
		question: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
		answers: ["Donald Trump","","",""],
		correctAnswer: "Donald Trump",
		imageURL: "./images/donald-trump.gif"
	},	
	{
		question: "kowabunga dudettes. i'm so pumped to be on this surfing kick. who else surfs out there? gnarly day in the h2o. ridin waves!",
		answers: ["Kim Kardashian West","Rihanna","Emma Stone","Lindsay Lohan"],
		correctAnswer: "Kim Kardashian West",
		imageURL: "./images/kim-kardashian-1.gif"
	},
	{
		question: "I feel like there's a giant meatloaf inside of me",
		answers: ["Kris Jenner","","",""],
		correctAnswer: "Kris Jenner",
		imageURL: "./images/kris-jenner.gif"
	},
	{
		question: "First tweet of My life",
		answers: ["Hulk Hogan","","",""],
		correctAnswer: "Hulk Hogan",
		imageURL: "./images/hulk-hogan.gif"
	},
	{
		question: "@tpa@y#m##@nyhn",
		answers: ["Oprah Winfrey","","",""],
		correctAnswer: "Oprah Winfrey",
		imageURL: "./images/oprah.gif"
	},
	{
		question: "Hey friends, I lost my blackberry. 😢 So if your trying to reach me, then text me on one of my three iPhones. 💋",
		answers: ["Paris Hilton","","",""],
		correctAnswer: "Paris Hilton",
		imageURL: "./images/paris-hilton.gif"
	},	
	{
		question: "JIMMY KIMMEL PUT YOURSELF IN MY SHOES .. OH NO THAT MEANS YOU WOULD HAVE GOTTEN TOO MUCH GOOD PUSSY IN YOUR LIFE...",
		answers: ["Kanye West","","",""],
		correctAnswer: "Kanye West",
		imageURL: "./images/kanye-west.gif"
	},	
	{
		question: "I cry because I love Justin Bieber!!!",
		answers: ["Joe Jonas","","",""],
		correctAnswer: "Joe Jonas",
		imageURL: "./images/joe-jonas.gif"
	},	
	{
		question: "I AM NOT FAMOUS ANYMORE",
		answers: ["Shia LaBeouf","","",""],
		correctAnswer: "Shia LaBeouf",
		imageURL: "./images/shia-lebeouf.gif"
	},	
	{
		question: "Go ahead. Meme me!",
		answers: ["Bill Cosby","","",""],
		correctAnswer: "Bill Cosby",
		imageURL: "./images/bill-cosby.jpg"
	},	
	{
		question: "I want @drake to murder my vagina",
		answers: ["Amanda Bynes","","",""],
		correctAnswer: "Amanda Bynes",
		imageURL: "./images/amanda-bynes.gif"
	},	
	{
		question: "Ice Loves Coco is so romantic :)",
		answers: ["Miley Cyrus","","",""],
		correctAnswer: "Miley Cyrus",
		imageURL: "./images/miley-cyrus.gif"
	},
	{
		question: "Flight attendant on American reamed me out 4 playing WORDS W FRIENDS while we sat at the gate, not moving. #nowonderamericaairisbankrupt",
		answers: ["Alec Baldwin","","",""],
		correctAnswer: "Alec Baldwin",
		imageURL: "./images/alec-baldwin.gif"
	}
];

var triviaGame = {
	questionBank: [],
	displayMessage: function(){
	},
	endGame: function(){
		running = false;
		this.stop();
		$("#timeRemaining").text(15);
		$(".multipleChoice").removeAttr("value");
		$(".multipleChoice").empty();
		$("#time").hide();
		$("#bodyText").hide();
		$("#start").show();
	},
	stop: function(){
		clearInterval(intervalTime);
	},
	setQuestion: function(){
			//Randomize Quetion
			questionNumber = Math.floor(Math.random() * this.questionBank.length);
			$("#question").text(this.questionBank[questionNumber].question);
			//Randomize Answers
			var idNumber = 1;
			for(i = 0; i < 4; i++){
				selectionNumber = Math.floor(Math.random() * this.questionBank[questionNumber].answers.length);
				var selectId = "#selection" + idNumber;
				idNumber = idNumber + 1;
				$(selectId).text(this.questionBank[questionNumber].answers[selectionNumber]);
				$(selectId).val(this.questionBank[questionNumber].answers[selectionNumber]);
				this.questionBank[questionNumber].answers.splice([selectionNumber],1);
			}
	},
	run: function(timer){
		//console.log(this.questionBank);
		if(this.questionBank.length > 0){
			this.setQuestion();
			intervalTime = setInterval(function(){
				if (running){
					timer--;
					$("#timeRemaining").text(timer);
					$("#time").val(timer);
					if (timer === 0) {
						// game = "lose";
						triviaGame.selectedAnswer();
						//triviaGame.displayMessage();
						triviaGame.stop();
						//triviaGame.run(4);
						}
					}
				},1000)
		}
		else{
			this.endGame();
		}
	},
	selectedAnswer: function(){
		var selectedAnswer = $("#" + this.id).val();
		if ($("#time").val() <= 0){
			game = "lose";
			this.displayMessage();
			this.reset();
		}
		else{
			if (selectedAnswer == this.questionBank[questionNumber].correctAnswer){
				game = "win";
				this.displayMessage();
			}
			else{
				game = "lose";
				this.displayMessage();
			}
		}
		this.stop();
		this.showGIF();
		this.questionBank.splice([questionNumber],1);
		//this.stop();
		this.run(4);
	},
	showGIF: function() {
		$("#gifURL").show();
		console.log(this.questionBank[questionNumber].imageURL);
		$("#gifURL").attr("src",this.questionBank[questionNumber].imageURL);
		$("#bodyText").hide();
		setTimeout(function(){
			$("#gifURL").removeAttr("src");
			$("#gifURL").hide();
			$("#bodyText").show()
		}, 1000);
	},
	reset: function() {
		running = true;
		this.questionBank = JSON.parse(JSON.stringify(questionBank))
		$("#bodyText").show();
		$("#time").show();
		$("#start").hide();
		this.run(4);
	}
}

$("#bodyText").hide();
$("#time").hide();
$("#gifURL").hide();
//console.log(questionBank.length);
console.log(triviaGame.run(intervalTime));