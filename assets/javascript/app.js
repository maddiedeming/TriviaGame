//Global Variables
var running;
var questionNumber;
var timer;
var wins = 0;
var losses = 0;
var volumeOn = true;
$("#content").hide();
$("#time").hide();
$("#gifURL").hide();
$("#results").hide();
$("#volumeOn").hide();
$("#gameMessage").hide();
$("#gameMessage2").hide();
//Question Data
var questionBank = [
	{
		question: "Do ants have dicks?",
		answers: ["Kourtney Kardashian","Paris Hilton","Tara Reid","Sarah Palin"],
		correctAnswer: "Kourtney Kardashian",
		imageURL: "assets/images/kourtney-kardashian.gif",
		src: "https://twitter.com/kourtneykardash/status/11175751424"
	},
	{
		question: "How Can Mirrors Be Real If Our Eyes Aren't Real",
		answers: ["Jaden Smith","Jim Carrey","Jessica Simpson","Nicki Minaj"],
		correctAnswer: "Jaden Smith",
		imageURL: "assets/images/jaden-smith.gif",
		src: "https://twitter.com/officialjaden/status/329768040235413504"
	},
	{
		question: "I was looking at tweets & saw that i really hurt someones feelings ! Im sorry. It was light blue background with white egg shape . Bye",
		answers: ["Cher","Jamie Lee Curtis","Betty White","Jennifer Aniston"],
		correctAnswer: "Cher",
		imageURL: "assets/images/cher.gif",
		src: "https://twitter.com/cher/status/194552615672102912"
	},
	{
		question: "WAS RUSHIN HOME TO TAKE A DUMP AND GOT CAUGHT BEHIND A SCHOOL BUS DROPPIN KIDS OFF!! LONGEST 30MINS OF MY LIFFFEEEE!!",
		answers: ["Lil' Jon","50 Cent","Jay Z","Kanye West"],
		correctAnswer: "Lil' Jon",
		imageURL: "assets/images/lil-jon.gif",
		src: "https://twitter.com/LilJon/status/25815827140"
	},
	{
		question: "Dear elderly man at the gym:its hard 4 me 2 keep composure whilst punching at chipmunk speed when ur ball sack spills out of ur wind shorts",
		answers: ["Jessica Simpson","Britney Spears","Tara Reid","Mariah Carey"],
		correctAnswer: "Jessica Simpson",
		imageURL: "assets/images/jessica-simpson.gif",
		src: "https://twitter.com/JessicaSimpson/status/7727845556"
	},
	{
		question: "I can't believe my grand mothers making me take Out the garbage I'm rich fuck this I'm going home I don't need this shit",
		answers: ["50 Cent","Kanye West","Justin Bieber","Gucci Mane"],
		correctAnswer: "50 Cent",
		imageURL: "assets/images/50-cent.gif",
		src: "https://twitter.com/50cent/status/22201409032"
	},
	{
		question: "i am still alive",
		answers: ["John Cleese","Doris Day","Julie Andrews","Mel Brooks"],
		correctAnswer: "John Cleese",
		imageURL: "assets/images/john-cleese.gif",
		src: "https://twitter.com/JohnCleese/status/465372192"
	},
	{
		question: "well i am going to bed because snoop noticed a tweet of mine where i only used one g in dogg and i'm mortified",
		answers: ["Chrissy Teigen","Martha Stewart","David Beckham","Wiz Khalifa"],
		correctAnswer: "Chrissy Teigen",
		imageURL: "assets/images/chrissy-teigen.gif",
		src: "https://twitter.com/chrissyteigen/status/530943469389635585"
	},
	{
		question: "I don't know about you, but I'm feeling 22.",
		answers: ["Harry Styles","Taylor Swift","Katy Perry","John Mayer"],
		correctAnswer: "Harry Styles",
		imageURL: "assets/images/harry-styles.gif",
		src: "https://twitter.com/Harry_Styles/status/694229236677120000"
	},
	{
		question: "YO @BARACKOBAMA COME OVERRRRRR",
		answers: ["Aubrey Plaza","Chelsea Handler","Amy Schumer","Amy Poehler"],
		correctAnswer: "Aubrey Plaza",
		imageURL: "assets/images/aubrey-plaza.gif",
		src: "https://twitter.com/evilhag/status/11852331945"
	},
	{
		question: "Why is rhode island nor a road or an island",
		answers: ["Justin Bieber","Jaden Smith","Seth Rogen","Jim Carrey"],
		correctAnswer: "Justin Bieber",
		imageURL: "assets/images/justin-bieber.gif",
		src: "https://twitter.com/justinbieber/status/6350337695"
	},
	{
		question: "Does anyone think global warming is a good thing? I love Lady Gaga. I think she's a really interesting artist.",
		answers: ["Britney Spears","Jessica Simpson","Heidi Montag","Tila Tequila"],
		correctAnswer: "Britney Spears",
		imageURL: "assets/images/britney-spears.gif",
		src: "https://twitter.com/britneyspears/status/35767743634481152"
	},
	{
		question: "Do you think I'm hip?",
		answers: ["Martha Stewart","Betty White","Cher","Bette Midler"],
		correctAnswer: "Martha Stewart",
		imageURL: "assets/images/martha-stewart.gif",
		src: "https://twitter.com/MarthaStewart/status/103943420409683968"
	},
	{
		question: "pee pee on the street. PoPo come n get me if u can find meeee. I blame traffik.",
		answers: ["Ke$ha","Jamie Kennedy","Riff Raff","Iggy Azalea"],
		correctAnswer: "Ke$ha",
		imageURL: "assets/images/kesha.gif",
		src: "https://twitter.com/KeshaRose/status/195025413876092928"
	},
	{
		question: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
		answers: ["Donald Trump","Kanye West","Charlie Sheen","Perez Hilton"],
		correctAnswer: "Donald Trump",
		imageURL: "assets/images/donald-trump.gif",
		src: "https://twitter.com/realDonaldTrump/status/260482827458592768"
	},	
	{
		question: "kowabunga dudettes. i'm so pumped to be on this surfing kick. who else surfs out there? gnarly day in the h2o. ridin waves!",
		answers: ["Kim Kardashian","Rihanna","Emma Stone","Lindsay Lohan"],
		correctAnswer: "Kim Kardashian",
		imageURL: "assets/images/kim-kardashian-1.gif",
		src: "https://twitter.com/KimKardashian/status/22396212024"
	},
	{
		question: "I feel like there's a giant meatloaf inside of me",
		answers: ["Kris Jenner","Michael Lee Aday","Will Ferrell","Sarah Silverman"],
		correctAnswer: "Kris Jenner",
		imageURL: "assets/images/kris-jenner.gif",
		src: "https://twitter.com/KrisJenner/status/243812456558903296"
	},
	{
		question: "First tweet of My life",
		answers: ["Hulk Hogan","Cher","Barack Obama","George W. Bush"],
		correctAnswer: "Hulk Hogan",
		imageURL: "assets/images/hulk-hogan.gif",
		src: "https://twitter.com/HulkHogan/status/21587600569"
	},
	{
		question: "@tpa@y#m##@nyhn",
		answers: ["Oprah Winfrey","Melinda Gates","Ruth Bader Ginsburg","Hillary Clinton"],
		correctAnswer: "Oprah Winfrey",
		imageURL: "assets/images/oprah.gif",
		src: "https://twitter.com/Oprah/status/447783529997271040"
	},
	{
		question: "Hey friends, I lost my blackberry. 😢 So if your trying to reach me, then text me on one of my three iPhones. 💋",
		answers: ["Paris Hilton","Nicole Richie","Kim Kardashian","Lauren Conrad"],
		correctAnswer: "Paris Hilton",
		imageURL: "assets/images/paris-hilton.gif",
		src: "https://twitter.com/ParisHilton/status/449707907769438209"
	},	
	{
		question: "JIMMY KIMMEL PUT YOURSELF IN MY SHOES .. OH NO THAT MEANS YOU WOULD HAVE GOTTEN TOO MUCH GOOD PUSSY IN YOUR LIFE...",
		answers: ["Kanye West","Donald Trump","Alec Baldwin","Chris Brown"],
		correctAnswer: "Kanye West",
		imageURL: "assets/images/kanye-west.gif",
		src: "https://www.usmagazine.com/celebrity-news/news/kim-kardashian-reads-kanye-wests-mean-tweet-about-jimmy-kimmel/"
	},	
	{
		question: "I cry because I love Justin Bieber!!!",
		answers: ["Joe Jonas","Chad Michael Murray","Zac Efron","Shia LaBeouf"],
		correctAnswer: "Joe Jonas",
		imageURL: "assets/images/joe-jonas.gif",
		src: "https://twitter.com/joejonas/status/9753206057"
	},	
	{
		question: "I AM NOT FAMOUS ANYMORE",
		answers: ["Shia LaBeouf","James Franco","Jim Carrey","Sacha Baron Cohen"],
		correctAnswer: "Shia LaBeouf",
		imageURL: "assets/images/shia-lebeouf.gif",
		src: "https://twitter.com/thecampaignbook/status/422731823811395584"
	},	
	{
		question: "Ice Loves Coco is so romantic :)",
		answers: ["Miley Cyrus","Selena Gomez","Demi Lovato","Brenda Song"],
		correctAnswer: "Miley Cyrus",
		imageURL: "assets/images/miley-cyrus.gif",
		src: "https://twitter.com/MileyCyrus/status/186126055499771904"
	},
	{
		question: "Flight attendant on American reamed me out 4 playing WORDS W FRIENDS while we sat at the gate, not moving. #nowonderamericaairisbankrupt",
		answers: ["Alec Baldwin","Christian Slater","Billie Joe Armstrong","Amanda Bynes"],
		correctAnswer: "Alec Baldwin",
		imageURL: "assets/images/alec-baldwin.gif",
		src: "https://twitter.com/ABFalecbaldwin/status/144174648920260608"
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
		$("#content").hide();
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
	showMessage: function() {
		$("#gameMessage").empty();
		$("#gameMessage2").empty();
		$("#gameMessage").removeClass("");
		$("#gameMessage").show();
		$("#gameMessage2").show();
		if(this.game === "win"){
			$("#gameMessage").html("<h4>Correct!</h4>");
		}
		else if(this.game === "lose"){
			$("#gameMessage").html("<h4>Nope!</h4>");
			$("#gameMessage2").html("<h6>The correct answer was: <br /><strong>" + this.questionBank[questionNumber].correctAnswer + "</strong><h6>");
		}
		else if(this.game === "time"){
			$("#gameMessage").html("<h4>Time's up!</h4>");
			$("#gameMessage2").html("<h6>The correct answer was: <br /><strong>" + this.questionBank[questionNumber].correctAnswer + "</strong><h6>");
		}
		if(volumeOn === true){
			$("#tweetSound").get(0).play(); 
		}
	},
	showGIF: function() {
		$("#gameMessage").hide();
		$("#gameMessage2").hide();
		$(".multipleChoice").prop("disabled",false);
		$(".buttons button").addClass("multipleChoice");
		$(".multipleChoice").removeClass("btn-danger");
		$(".multipleChoice").removeClass("btn-success");
		$("#gif").show();
		$("#gifURL").attr("src",this.questionBank[questionNumber].imageURL);
		$("#content").hide();
		setTimeout(function(){
			$("#gifURL").removeAttr("src");
			$("#gif").hide();
			$("#content").show()
		}, 5000);
	},
	run: function(timer){
		if(this.questionBank.length > 0){
			this.setQuestion();
			this.intervalTime = setInterval(function(){
			if (running){
				timer--;
				$("#timeRemaining").text(timer);
				$("#time").val(timer);
				if (timer === 0) {
					$("#time").removeClass("btn-primary");
					$("#time").addClass("btn-danger");
					$(".multipleChoice").prop("disabled",true);
					triviaGame.stop();			
					triviaGame.game = "time";
					losses++;
					triviaGame.showMessage();
					setTimeout(function(){
						triviaGame.showGIF();
						triviaGame.questionBank.splice([questionNumber],1);
						triviaGame.run(20);						
					}, 3000);

					}
				else{
					$("#time").addClass("btn-primary");
					$("#time").removeClass("btn-danger");
				}
			}
			},1000)
		}
		else{
			this.endGame();
		}
	},
	selectedAnswer: function(obj){
		var buttonSelected = $("#" + obj.id)
		if (buttonSelected.val() == this.questionBank[questionNumber].correctAnswer){
			triviaGame.stop();
			buttonSelected.removeClass("multipleChoice");
			buttonSelected.addClass("btn-success");
			this.game = "win";
			wins++;
		}
		else{
			triviaGame.stop();
			buttonSelected.removeClass("multipleChoice");
			buttonSelected.addClass("btn-danger");
			this.game = "lose";
			losses++;
		}		
		this.showMessage();	
		setTimeout(function(){
			triviaGame.showGIF();
			triviaGame.questionBank.splice([questionNumber],1);	
			if(triviaGame.questionBank.length > 1){
				triviaGame.run(20);
			}
			else{
				setTimeout(function(){
					triviaGame.endGame();
				}, 5000);
			}
		}, 3000);
	},
	volumeOff: function(){
		$("#volumeOn").show();
		$("#volumeOff").hide();
		volumeOn = false;
	},
	volumeOn: function(){
		$("#volumeOff").show();
		$("#volumeOn").hide();
		volumeOn = true;
	},
	reset: function() {
		running = true;
		this.questionBank = JSON.parse(JSON.stringify(questionBank))
		$("#content").show();
		$("#time").show();
		$("#start").hide();
		$("#results").hide();
		$(".multipleChoice").show();
		$("#content header").show();
		$("#content").show();
		$("blockquote").show();
		$("#question").show();
		wins = 0;
		losses = 0;		
		this.run(16);
	}
}
