//Global Variables
var running;
var questionNumber;
var timer;
var wins = 0;
var losses = 0;
$("#bodyText").hide();
$("#time").hide();
$("#gifURL").hide();
$("#results").hide();
//Question Data
var questionBank = [
	{
		question: "Hello Facebook. Yes, this is actually Lindsay. Welcome to my Facebook page!",
		answers: ["Lindsay Lohan","Lindsay Davenport","Lindsay Ellingson","Lindsay Sloane"],
		correctAnswer: "Lindsay Lohan",
		imageURL: "./images/lindsay-lohan.gif"
	},
	{
		question: "Do ants have dicks?",
		answers: ["Kourtney Kardashian","Paris Hilton","Tara Reid","Sarah Palin"],
		correctAnswer: "Kourtney Kardashian",
		imageURL: "./images/kourtney-kardashian.gif"
	},
	{
		question: "How Can Mirrors Be Real If Our Eyes Aren't Real",
		answers: ["Jaden Smith","Jim Carrey","Jessica Simpson","Nicki Minaj"],
		correctAnswer: "Jaden Smith",
		imageURL: "./images/jaden-smith.gif"
	},
	{
		question: "I was looking at tweets & saw that i really hurt someones feelings ! Im sorry. It was light blue background with white egg shape . Bye",
		answers: ["Cher","Jamie Lee Curtis","Betty White","Jennifer Aniston"],
		correctAnswer: "Cher",
		imageURL: "./images/cher.gif"
	},
	{
		question: "310-954-7277 Call me bro. C",
		answers: ["Charlie Sheen","Chad Kroeger","Channing Tatum","Chris Brown"],
		correctAnswer: "Charlie Sheen",
		imageURL: "./images/charlie-sheen.gif"
	},
	{
		question: "EWW Im at lunch,the woman at the table next 2 me is breast feeding her baby w no coverup then puts baby on the table and changes her diaper",
		answers: ["Kim Kardashian","Wendy Williams","Mila Kunis","Alyssa Milano"],
		correctAnswer: "Kim Kardashian",
		imageURL: "./images/kim-kardashian-2.jpg"
	},
	{
		question: "WAS RUSHIN HOME TO TAKE A DUMP AND GOT CAUGHT BEHIND A SCHOOL BUS DROPPIN KIDS OFF!! LONGEST 30MINS OF MY LIFFFEEEE!!",
		answers: ["Lil' Jon","50 Cent","Jay Z","Kanye West"],
		correctAnswer: "Lil' Jon",
		imageURL: "./images/lil-jon.gif"
	},
	{
		question: "Dear elderly man at the gym:its hard 4 me 2 keep composure whilst punching at chipmunk speed when ur ball sack spills out of ur wind shorts",
		answers: ["Jessica Simpson","Britney Spears","Tara Reid","Mariah Carey"],
		correctAnswer: "Jessica Simpson",
		imageURL: "./images/jessica-simpson.gif"
	},
	{
		question: "I can't believe my grand mothers making me take Out the garbage I'm rich fuck this I'm going home I don't need this shit",
		answers: ["50 Cent","Kanye West","Justin Bieber","Gucci Mane"],
		correctAnswer: "50 Cent",
		imageURL: "./images/50-cent.gif"
	},
	{
		question: "i am still alive",
		answers: ["John Cleese","Doris Day","Julie Andrews","Mel Brooks"],
		correctAnswer: "John Cleese",
		imageURL: "./images/john-cleese.gif"
	},
	{
		question: "well I am going to be because snoop noticed a tweet of mine where i only used one g in dogg and i'm mortified",
		answers: ["Chrissy Teigen","Martha Stewart","David Beckham","Wiz Khalifa"],
		correctAnswer: "Chrissy Teigen",
		imageURL: "./images/chrissy-teigen.gif"
	},
	{
		question: "I don't know about you, but I'm feeling 22.",
		answers: ["Harry Styles","Taylor Swift","Katy Perry","John Mayer"],
		correctAnswer: "Harry Styles",
		imageURL: "./images/harry-styles.gif"
	},
	{
		question: "YO @BARACKOBAMA COME OVERRRRRR",
		answers: ["Aubrey Plaza","Chelsea Handler","Amy Schumer","Amy Poehler"],
		correctAnswer: "Aubrey Plaza",
		imageURL: "./images/aubrey-plaza.gif"
	},
	{
		question: "Why is rhode island nor a road or an island",
		answers: ["Justin Bieber","Jaden Smith","Seth Rogen","Jim Carrey"],
		correctAnswer: "Justin Bieber",
		imageURL: "./images/justin-bieber.gif"
	},
	{
		question: "Does anyone think global warming is a good thing? I love Lady Gaga. I think she's a really interesting artist.",
		answers: ["Britney Spears","Jessica Simpson","Heidi Montag","Tila Tequila"],
		correctAnswer: "Britney Spears",
		imageURL: "./images/britney-spears.gif"	
	},
	{
		question: "Do you think I'm hip?",
		answers: ["Martha Stewart","Betty White","Cher","Bette Midler"],
		correctAnswer: "Martha Stewart",
		imageURL: "./images/martha-stewart.gif"
	},
	{
		question: "pee pee on the street. PoPo come n get me if u can find meeee. I blame traffik.",
		answers: ["Ke$ha","Jamie Kennedy","Riff Raff","Iggy Azalea"],
		correctAnswer: "Ke$ha",
		imageURL: "./images/kesha.gif"
	},
	{
		question: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
		answers: ["Donald Trump","Kanye West","Charlie Sheen","Perez Hilton"],
		correctAnswer: "Donald Trump",
		imageURL: "./images/donald-trump.gif"
	},	
	{
		question: "kowabunga dudettes. i'm so pumped to be on this surfing kick. who else surfs out there? gnarly day in the h2o. ridin waves!",
		answers: ["Kim Kardashian","Rihanna","Emma Stone","Lindsay Lohan"],
		correctAnswer: "Kim Kardashian West",
		imageURL: "./images/kim-kardashian-1.gif"
	},
	{
		question: "I feel like there's a giant meatloaf inside of me",
		answers: ["Kris Jenner","Michael Lee Aday","Will Ferrell","Sarah Silverman"],
		correctAnswer: "Kris Jenner",
		imageURL: "./images/kris-jenner.gif"
	},
	{
		question: "First tweet of My life",
		answers: ["Hulk Hogan","Cher","Barack Obama","George W. Bush"],
		correctAnswer: "Hulk Hogan",
		imageURL: "./images/hulk-hogan.gif"
	},
	{
		question: "@tpa@y#m##@nyhn",
		answers: ["Oprah Winfrey","Melinda Gates","Ruth Bader Ginsburg","Hillary Clinton"],
		correctAnswer: "Oprah Winfrey",
		imageURL: "./images/oprah.gif"
	},
	{
		question: "Hey friends, I lost my blackberry. 😢 So if your trying to reach me, then text me on one of my three iPhones. 💋",
		answers: ["Paris Hilton","Nicole Richie","Kim Kardashian","Lauren Conrad"],
		correctAnswer: "Paris Hilton",
		imageURL: "./images/paris-hilton.gif"
	},	
	{
		question: "JIMMY KIMMEL PUT YOURSELF IN MY SHOES .. OH NO THAT MEANS YOU WOULD HAVE GOTTEN TOO MUCH GOOD PUSSY IN YOUR LIFE...",
		answers: ["Kanye West","Donald Trump","Alec Baldwin","Chris Brown"],
		correctAnswer: "Kanye West",
		imageURL: "./images/kanye-west.gif"
	},	
	{
		question: "I cry because I love Justin Bieber!!!",
		answers: ["Joe Jonas","Chad Michael Murray","Zac Efron","Shia LaBeouf"],
		correctAnswer: "Joe Jonas",
		imageURL: "./images/joe-jonas.gif"
	},	
	{
		question: "I AM NOT FAMOUS ANYMORE",
		answers: ["Shia LaBeouf","James Franco","Jim Carrey","Sacha Baron Cohen"],
		correctAnswer: "Shia LaBeouf",
		imageURL: "./images/shia-lebeouf.gif"
	},	
	{
		question: "Go ahead. Meme me!",
		answers: ["Bill Cosby","Donald Trump","Harvey Weinstein","Louis C.K."],
		correctAnswer: "Bill Cosby",
		imageURL: "./images/bill-cosby.jpg"
	},	
	{
		question: "I want @drake to murder my vagina",
		answers: ["Amanda Bynes","Nicki Minaj","Selena Gomez","Rihanna"],
		correctAnswer: "Amanda Bynes",
		imageURL: "./images/amanda-bynes.gif"
	},	
	{
		question: "Ice Loves Coco is so romantic :)",
		answers: ["Miley Cyrus","Selena Gomez","Demi Lovato","Brenda Song"],
		correctAnswer: "Miley Cyrus",
		imageURL: "./images/miley-cyrus.gif"
	},
	{
		question: "Flight attendant on American reamed me out 4 playing WORDS W FRIENDS while we sat at the gate, not moving. #nowonderamericaairisbankrupt",
		answers: ["Alec Baldwin","Christian Slater","Billie Joe Armstrong","Amanda Bynes"],
		correctAnswer: "Alec Baldwin",
		imageURL: "./images/alec-baldwin.gif"
	}
];
//Trivia Game Object
var triviaGame = {
	game: "",
	intervalTime: 0,
	questionBank: [],
	endGame: function(){
		running = false;
		this.stop();
		$("#timeRemaining").text(15);
		$(".multipleChoice").removeAttr("value");
		$(".multipleChoice").hide();
		$("#bodyText header").hide();
		$("#bodyText").hide();
		$("blockquote").hide();
		$("#question").hide();
		$("#results").show();
		$("#start").show();
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
	},
	stop: function(){
		clearInterval(this.intervalTime);
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
	showGIF: function() {
		if(this.game === "win"){
			$("#game").text("Correct!");
		}
		else if(this.game === "lose"){
			$("#game").text("Nope! The correct answer was: " + this.questionBank[questionNumber].correctAnswer);
		}
		else if(this.game === "time"){
			$("#game").text("Time's up! The correct answer was: " + this.questionBank[questionNumber].correctAnswer);
		}
		$("#gif").show();
		$("#gifURL").attr("src",this.questionBank[questionNumber].imageURL);
		$("#bodyText").hide();
		setTimeout(function(){
			$("#gifURL").removeAttr("src");
			$("#gif").hide();
			$("#bodyText").show()
		}, 5000);
	},
	run: function(timer){
		//console.log(this.questionBank);
		if(this.questionBank.length > 0){
			this.setQuestion();
			this.intervalTime = setInterval(function(){
			if (running){
				timer--;
				$("#timeRemaining").text(timer);
				$("#time").val(timer);
				if (timer === 0) {
					triviaGame.game = "time";
					losses++;
					triviaGame.stop();
					triviaGame.showGIF();
					triviaGame.questionBank.splice([questionNumber],1);
					triviaGame.run(20);
					}
				}
			},1000)
		}
		else{
			this.endGame();
		}
	},
	selectedAnswer: function(obj){
		var buttonSelected = $("#" + obj.id).val();
		if (buttonSelected == this.questionBank[questionNumber].correctAnswer){
			this.game = "win";
			wins++;
		}
		else{
			this.game = "lose";
			losses++;
		}
		if(this.questionBank.length > 1){
			this.stop();
			this.showGIF();
			this.questionBank.splice([questionNumber],1);
			this.run(20);
		}
		else{
			this.stop();
			this.showGIF();
			this.questionBank.splice([questionNumber],1);
			setTimeout(function(){
				triviaGame.endGame();
			}, 5000);
		}

	},
	reset: function() {
		running = true;
		this.questionBank = JSON.parse(JSON.stringify(questionBank))
		$("#bodyText").show();
		$("#time").show();
		$("#start").hide();
		$("#results").hide();
		$(".multipleChoice").show();
		$("#bodyText header").show();
		$("#bodyText").show();
		$("blockquote").show();
		$("#question").show();
		wins = 0;
		losses = 0;		
		this.run(16);
	}
}