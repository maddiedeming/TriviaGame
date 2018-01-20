//Global Variables
var x;
var timer;
var bonusTimer;
var heartCount;
var bonusCount = 0;
var bonusHead = "";
var bonusComplete = false;
//Intial Page Load
$("#content,#time,#gifURL,#results,#volumeOn,#bonusCrown,#bonusRoundTitle,#animations,#bonusRound,#sounds,#bonus,#bonusTweet,#bonusTweetText,#gameMessage2,#bonusGif").hide();
//Tweet Data
var tweetBank = [
	{
		tweet: "Do ants have dicks?",
		answers: ["Kourtney Kardashian","Paris Hilton","Tara Reid","Sarah Palin"],
		correctAnswer: "Kourtney Kardashian",
		src: "https://twitter.com/kourtneykardash/status/11175751424",
		profileImg: "assets/images/kourtney-kardashian-profile.jpg",
		twitterHandle: "@kourtneykardash"
	},
	{
		tweet: "How Can Mirrors Be Real If Our Eyes Aren't Real",
		answers: ["Jaden Smith","Jim Carrey","Jessica Simpson","Nicki Minaj"],
		correctAnswer: "Jaden Smith",
		src: "https://twitter.com/officialjaden/status/329768040235413504",
		profileImg: "assets/images/jaden-smith-profile.jpg",
		twitterHandle: "@officialjaden"
	},
	{
		tweet: "I was looking at tweets & saw that i really hurt someones feelings ! Im sorry. It was light blue background with white egg shape . Bye",
		answers: ["Cher","Jamie Lee Curtis","Betty White","Jennifer Aniston"],
		correctAnswer: "Cher",
		src: "https://twitter.com/cher/status/194552615672102912",
		profileImg: "assets/images/cher-profile.jpg",
		twitterHandle: "@cher"
	},
	{
		tweet: "i am still alive",
		answers: ["John Cleese","Doris Day","Julie Andrews","Mel Brooks"],
		correctAnswer: "John Cleese",
		src: "https://twitter.com/JohnCleese/status/465372192",
		profileImg: "assets/images/john-cleese-profile.jpeg",
		twitterHandle: "@JohnCleese"
	},
	{
		tweet: "well i am going to bed because snoop noticed a tweet of mine where i only used one g in dogg and i'm mortified",
		answers: ["Chrissy Teigen","Martha Stewart","David Beckham","Wiz Khalifa"],
		correctAnswer: "Chrissy Teigen",
		src: "https://twitter.com/chrissyteigen/status/530943469389635585",
		profileImg: "assets/images/chrissy-teigen-profile.jpg",
		twitterHandle: "@chrissyteigen"
	},
	{
		tweet: "I don't know about you, but I'm feeling 22.",
		answers: ["Harry Styles","Taylor Swift","Katy Perry","John Mayer"],
		correctAnswer: "Harry Styles",
		src: "https://twitter.com/Harry_Styles/status/694229236677120000",
		profileImg: "assets/images/harry-styles-profile.jpg",
		twitterHandle: "@Harry_Styles"
	},
	{
		tweet: "YO @BARACKOBAMA COME OVERRRRRR",
		answers: ["Aubrey Plaza","Chelsea Handler","Amy Schumer","Amy Poehler"],
		correctAnswer: "Aubrey Plaza",
		src: "https://twitter.com/evilhag/status/11852331945",
		profileImg: "assets/images/aubrey-plaza-profile.jpg",
		twitterHandle: "@evilhag"
	},
	{
		tweet: "Why is rhode island nor a road or an island",
		answers: ["Justin Bieber","Jaden Smith","Seth Rogen","Jim Carrey"],
		correctAnswer: "Justin Bieber",
		src: "https://twitter.com/justinbieber/status/6350337695",
		profileImg: "assets/images/justin-bieber-profile.jpg",
		twitterHandle: "@justinbieber"
	},
	{
		tweet: "Does anyone think global warming is a good thing? I love Lady Gaga. I think she's a really interesting artist.",
		answers: ["Britney Spears","Jessica Simpson","Heidi Montag","Tila Tequila"],
		correctAnswer: "Britney Spears",
		src: "https://twitter.com/britneyspears/status/35767743634481152",
		profileImg: "assets/images/britney-spears-profile.jpg",
		twitterHandle: "@britneyspears"
	},
	{
		tweet: "Do you think I'm hip?",
		answers: ["Martha Stewart","Betty White","Cher","Bette Midler"],
		correctAnswer: "Martha Stewart",
		src: "https://twitter.com/MarthaStewart/status/103943420409683968",
		profileImg: "assets/images/martha-stewart-profile.jpeg",
		twitterHandle: "@MarthaStewart"
	},
	{
		tweet: "kowabunga dudettes. i'm so pumped to be on this surfing kick. who else surfs out there? gnarly day in the h2o. ridin waves!",
		answers: ["Kim Kardashian","Rihanna","Emma Stone","Lindsay Lohan"],
		correctAnswer: "Kim Kardashian",
		src: "https://twitter.com/KimKardashian/status/22396212024",
		profileImg: "assets/images/kim-kardashian-profile.jpg",
		twitterHandle: "@KimKardashian"
	},
	{
		tweet: "I feel like there's a giant meatloaf inside of me",
		answers: ["Kris Jenner","Michael Lee Aday","Will Ferrell","Sarah Silverman"],
		correctAnswer: "Kris Jenner",
		src: "https://twitter.com/KrisJenner/status/243812456558903296",
		profileImg: "assets/images/kris-jenner-profile.jpg",
		twitterHandle: "@KrisJenner"
	},
	{
		tweet: "First tweet of My life",
		answers: ["Hulk Hogan","Cher","Barack Obama","George W. Bush"],
		correctAnswer: "Hulk Hogan",
		src: "https://twitter.com/HulkHogan/status/21587600569",
		profileImg: "assets/images/hulk-hogan-profile.jpg",
		twitterHandle: "@HulkHogan"
	},
	{
		tweet: "@tpa@y#m##@nyhn",
		answers: ["Oprah Winfrey","Melinda Gates","Ruth Bader Ginsburg","Hillary Clinton"],
		correctAnswer: "Oprah Winfrey",
		src: "https://twitter.com/Oprah/status/447783529997271040",
		profileImg: "assets/images/oprah-profile.jpg",
		twitterHandle: "@Oprah"
	},
	{
		tweet: "Hey friends, I lost my blackberry. 😢 So if your trying to reach me, then text me on one of my three iPhones. 💋",
		answers: ["Paris Hilton","Nicole Richie","Kim Kardashian","Lauren Conrad"],
		correctAnswer: "Paris Hilton",
		src: "https://twitter.com/ParisHilton/status/449707907769438209",
		profileImg: "assets/images/paris-hilton-profile.jpg",
		twitterHandle: "@ParisHilton"
	},	
	{
		tweet: "I AM NOT FAMOUS ANYMORE",
		answers: ["Shia LaBeouf","James Franco","Jim Carrey","Sacha Baron Cohen"],
		correctAnswer: "Shia LaBeouf",
		src: "https://twitter.com/thecampaignbook/status/422731823811395584",
		profileImg: "assets/images/shia-lebeouf-profile.png",
		twitterHandle: "@thecampaignbook"
	},
	{
		tweet: "Ice Loves Coco is so romantic :)",
		answers: ["Miley Cyrus","Selena Gomez","Demi Lovato","Brenda Song"],
		correctAnswer: "Miley Cyrus",
		src: "https://twitter.com/MileyCyrus/status/186126055499771904",
		profileImg: "assets/images/miley-cyrus-profile.jpg",
		twitterHandle: "@MileyCyrus"
	},
	{
		tweet: "Flight attendant on American reamed me out 4 playing WORDS W FRIENDS while we sat at the gate, not moving. #nowonderamericaairisbankrupt",
		answers: ["Alec Baldwin","Christian Slater","Billie Joe Armstrong","Amanda Bynes"],
		correctAnswer: "Alec Baldwin",
		src: "https://twitter.com/ABFalecbaldwin/status/144174648920260608",
		profileImg: "assets/images/alec-baldwin-profile.jpeg",
		twitterHandle: "@ABFalecbaldwin"
	},
	{
		tweet: "I would like to extend my best wishes to all, even the haters and losers, on this special date, September 11th.",
		answers: ["Donald Trump","Kanye West","Charlie Sheen","Perez Hilton"],
		correctAnswer: "Donald Trump",
		src: "https://twitter.com/realDonaldTrump/status/377947866641485824",
		profileImg: "assets/images/donald-trump-profile.jpg",
		twitterHandle: "@realDonaldTrump"
	},	
	{
		tweet: "JIMMY KIMMEL IS OUT OF LINE TO TRY AND SPOOF IN ANY WAY THE FIRST PIECE OF HONEST MEDIA IN YEARS",
		answers: ["Kanye West","Donald Trump","Alec Baldwin","Chris Brown"],
		correctAnswer: "Kanye West",
		src: "#",
		profileImg: "assets/images/kanye-west-profile.jpeg",
		twitterHandle: "@KanyeWest"
	}
];
//Bonus Round Tweet Data
var bonusTweets = [	
	{
		tweet: "Also for anyone that has money they know the first rule is to use other people's money.",
		correctAnswer: "Kanye West"
	},
	{
		tweet: "I have never seen a thin person drinking Diet Coke.",
		correctAnswer: "Donald Trump"
	},
	{
		tweet: "What is your definition of true freedom? There is no true freedom without economic freedom.",
		correctAnswer: "Kanye West"
	},
	{
		tweet: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
		correctAnswer: "Donald Trump"
	},
	{
		tweet: "I especially hate suit jackets on women… that was a groundbreaking idea 5 million years ago!",
		correctAnswer: "Kanye West"
	},
	{
		tweet: "My twitter has become so powerful that I can actually make my enemies tell the truth.",
		correctAnswer: "Donald Trump"
	},
	{
		tweet: "The world needs a guy like me. The world needs somebody to not be scared and tell his truth.",
		correctAnswer: "Kanye West"
	},
	{
		tweet: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
		correctAnswer: "Donald Trump"
	},
	{
		tweet: "I guess in a media world where you never hear the truth, the truth can come off as crazy…",
		correctAnswer: "Kanye West"
	},
	{
		tweet: ".@katyperry Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!",
		correctAnswer: "Donald Trump"
	},
	{
		tweet: "I'd like to address the false stories and noise that have been engineered by the media.",
		correctAnswer: "Kanye West"
	},
	{
		tweet: "Sorry, there is no STAR on the stage tonight!",
		correctAnswer: "Donald Trump"
	}
];
//Trivia Game Object
var triviaGame = {
	gameData: {
		game: "",
		wins: 0,
		losses: 0,
		running: "",
		bonusRound: false
	},
	volume: true,
	intervalTime: 0,
	tweetBank: [],
	volumeOff: function(){
		$("#volumeOn").show();
		$("#volumeOff").hide();
		triviaGame.volume = false;
		$("audio").each(function(){
			this.pause();
			this.currentTime = 0;
		}); 
	},
	volumeOn: function(){
		$("#volumeOff").show();
		$("#volumeOn").hide();
		triviaGame.volume = true;
		if(this.gameData.bonusRound === false){
			document.getElementById("twitterSong").currentTime = 48;
			$("#twitterSong").get(0).play(); 
		}
		else{
			if(bonusHead === "kanye"){
				$("#god").get(0).play();
			}
			else{
				$("#money").get(0).play();
			}
		}
	},
	endGame: function(){
		this.gameData.running = false;
		timer = 15;
		this.stop();
		$("#timeRemaining").text(15);
		$(".multipleChoice").removeAttr("value");
		if(!this.gameData.bonusRound){
			$("#content,blockquote,#tweet,button,.buttons").hide();
			$("#results,#start,#wins,#losses").show();
			$("#wins").text("Wins: " + this.gameData.wins);
			$("#losses").text("Losses: " + this.gameData.losses);
		}
	},	
	showMessage: function(){
		$("#gameMessage,#gameMessage2").empty();
		$("#gameMessage").removeClass("invisible");
		$("#gameMessage2").show();
		$("#twitterHandle").html("<a>");
		$("#link,#twitterHandle a").attr({href:this.tweetBank[x].src, target:"_blank"});
		$("#twitterHandle a").text(this.tweetBank[x].twitterHandle);
		$("#profileLogo").css("background-image", "url(" + this.tweetBank[x].profileImg + ")");
		if(this.gameData.game === "win"){
			if(this.volume === true){
				$("#popSound").get(0).play(); 
			}
			$("#gameMessage").html("<h4>Correct!</h4>");
			if($(".btn-success").val() === "Kanye West" && bonusComplete === false || $(".btn-success").val() === "Donald Trump"  && bonusComplete === false){
				$("#bonusCrown").show();
			}
			else{
				$("#bonusCrown").hide();
			}
		}
		else if(this.gameData.game === "lose"){
			$("#gameMessage").html("<h4>Nope!</h4>");
			$("#gameMessage2").html("<h6>The correct answer was: <br /><strong>" + this.tweetBank[x].correctAnswer + "</strong><h6>");
			if(this.volume === true){
				$("#tweetSound").get(0).play(); 
			}
		}
		else if(this.gameData.game === "time"){
			$("#gameMessage").html("<h4>Time's up!</h4>");
			$("#gameMessage2").html("<h6>The correct answer was: <br /><strong>" + this.tweetBank[x].correctAnswer + "</strong><h6>");
			if(this.volume === true){
				$("#tweetSound").get(0).play(); 
			}
		}
	},
	showGIF: function(){
		$("#bonusCrown,#content,#gameMessage2").hide();
		$("#gameMessage").addClass("invisible");
		$("#gif").show();
		$(".multipleChoice,.btn-success,.btn-danger").prop("disabled",false);
		$("#link").removeAttr("href");
		$("#twitterHandle").empty();
		$(".buttons button").addClass("multipleChoice");
		$(".multipleChoice").removeClass("btn-danger btn-success");
		$("#profileLogo").css("background-image", "url(assets/images/twitter-icon.png)");
		if(!this.gameData.bonusRound){
			$("#gif").show();
			$("#gifURL").attr("src",this.tweetBank[x].gifURL);
			setTimeout(function(){
				$("#gifURL").removeAttr("src");
				$("#gif").hide();
				$("#content").show();
				timer = 16;
			}, 3000);
		}
		else{
			$("#gifURL").removeAttr("src");
			$("#gif").hide();
			$("#content").hide();	
			$("#bonusRound").show();
			this.gameData.running = false;	
		}

	},
	getGif: function(){
		var regex = /\s/g;
		var query = "https://api.giphy.com/v1/gifs/random?tag=";
		var celebrity = triviaGame.tweetBank[x].correctAnswer.replace(regex, "+");
		var apiKey = "&apikey=C5d75scOHxPnli61nvl3JPjObqAnq7Ub";		
		var queryURL = query + celebrity + apiKey;	  
		$.ajax(this.href, {
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			triviaGame.tweetBank[x].gifURL = response.data.image_original_url;
		});
	},
	setTweet: function(){
		x = Math.floor(Math.random() * this.tweetBank.length);
		$("#tweet").text(this.tweetBank[x].tweet);
		this.getGif();
		var idNumber = 1;
		var selectId = "";
		for (var i = 0; i < 4; i++) {
			selectionNumber = Math.floor(Math.random() * this.tweetBank[x].answers.length);
			selectId = "#selection" + idNumber;
			idNumber = idNumber + 1;
			$(selectId).text(this.tweetBank[x].answers[selectionNumber]);
			$(selectId).val(this.tweetBank[x].answers[selectionNumber]);
			this.tweetBank[x].answers.splice([selectionNumber],1);
		}
	},
	stop: function(){
		clearInterval(this.intervalTime);
	},
	run: function(){
		timer = 15;
		this.stop();
		if(this.tweetBank.length > 0){
			if(this.gameData.bonusRound){
				 $("#content").hide();
			}
			else{
				this.setTweet();
			}
			this.intervalTime = setInterval(function(){
			if (triviaGame.gameData.running){
				timer--;
				$("#timeRemaining").text(timer);
				$("#time").val(timer);
				if (timer === 0) {
					timer = 15;
					$("#time").removeClass("btn-primary");
					$("#time").addClass("btn-danger");
					$(".multipleChoice,.btn-success,.btn-danger").prop("disabled",true);
					triviaGame.stop();			
					triviaGame.gameData.game = "time";
					triviaGame.gameData.losses++;
					triviaGame.showMessage();
						setTimeout(function(){
							triviaGame.stop();
							triviaGame.showGIF();
							triviaGame.tweetBank.splice([x],1);
							triviaGame.run();						
						}, 3000);						
					}
				else{
					$("#time").addClass("btn-primary");
					$("#time").removeClass("btn-danger");
				}
			}
			},1000);
		}
		else{
			this.endGame();
		}
		
	},
	selectedAnswer: function(obj){
		var buttonSelected = $("#" + obj.id);
		if (buttonSelected.val() === this.tweetBank[x].correctAnswer){
			triviaGame.stop();
			buttonSelected.removeClass("multipleChoice");
			buttonSelected.addClass("btn-success");
			triviaGame.gameData.game = "win";
			triviaGame.gameData.wins++;
		}
		else{
			triviaGame.stop();
			buttonSelected.removeClass("multipleChoice");
			buttonSelected.addClass("btn-danger");
			triviaGame.gameData.game = "lose";
			triviaGame.gameData.losses++;
		}		
		$(".multipleChoice,.btn-success,.btn-danger").prop("disabled",true);
		this.showMessage();	
		setTimeout(function(){
			triviaGame.showGIF();
			triviaGame.tweetBank.splice([x],1);	
			if(triviaGame.tweetBank.length > 0){
				triviaGame.run();
			}
			else{
				setTimeout(function(){
					triviaGame.endGame();
				}, 3000);
			}
		}, 3000);
	},
	bonustweet: function(){
		$("#bonusProfileLogo").attr("style","background-image:url(assets/images/twitter-icon.png);background-size:cover");
		var y = Math.floor(Math.random() * bonusTweets.length);
		$("#bonusTweetText").text(bonusTweets[y].tweet);
		var determineValue = bonusTweets[y].correctAnswer;
		if(determineValue === "Donald Trump"){
			$("#trumpButton").attr("data-value","correct");
			$("#kanyeButton").attr("data-value","incorrect");
		}
		else{
			$("#trumpButton").attr("data-value","incorrect");
			$("#kanyeButton").attr("data-value","correct");
		}
		bonusTweets.splice([y],1);
		$("#bonusTime,#bonusTimeRemaining").hide();
	},
	bonusClick: function(obj){
		bonusCount++;
		var idName = obj.id;
		var bonusRoundAnswer = $("#" + obj.id).attr("data-value");
		$("#trumpButton").prop("disabled",true);
		$("#kanyeButton").prop("disabled",true);
		if(bonusRoundAnswer === "correct"){
			$("#heart").animate();
			if(triviaGame.volume === true){
				$("#popSound").get(0).play();
			}
			heartCount++;
			if (heartCount > 9){
				$("#heart p").css({
					"right":"43%",
					"left": "auto"
				});
			}
			$("#heart").html("<p>" + heartCount + "</p>");
			$("#heart").animate({
				backgroundPosition: "left"
			});
			if(idName.match("trump") !== null){
				$("#bonusProfileLogo").attr("style","background-image:url(assets/images/donald-trump-profile.jpg);background-size:cover");
				$("#bonusHandle").text("@realDonaldTrump");
				$("#bonusTweet a").attr("href","https://twitter.com/realDonaldTrump");
				$("#bonusHandle").show();
			}
			else{
				$("#bonusProfileLogo").attr("style","background-image:url(assets/images/kanye-west-profile.jpeg);background-size:cover");
				$("#bonusHandle").text("@realKanyeWest");
				$("#bonusTweet a").attr("href","#");
				$("#bonusHandle").show();
			}
		}
		else{
			if(this.volume === true){
				$("#tweetSound").get(0).play(); 
			}
			if(idName.match("trump") !== null){
				$("#bonusProfileLogo").attr("style","background-image:url(assets/images/kanye-west-profile.jpeg);background-size:cover");
				$("#bonusHandle").text("@realKanyeWest");
				$("#bonusTweet a").attr("href","#");
				$("#bonusHandle").show();
			}
			else{
				$("#bonusProfileLogo").attr("style","background-image:url(assets/images/donald-trump-profile.jpg);background-size:cover");
				$("#bonusHandle").text("@realDonaldTrump");
				$("#bonusTweet a").attr("href","https://twitter.com/realDonaldTrump");
				$("#bonusHandle").show();
			}			
		}
		setTimeout(function(){	
			if (bonusCount < 2){
				$("#bonus,#bonusTweetText,#bonusHandle,#bonusProfileLogo,#bonusTime,#bonusTimeRemaining,#bonusTweet").fadeOut("slow");
				$("#heart").hide();
				setTimeout(function(){
					$("#bonusHandle").text("");	
					$("#bonus,#bonusTweetText,#bonusHandle,#bonusProfileLogo,#bonusTime,#bonusTimeRemaining,#bonusTweet").fadeIn("slow");
					triviaGame.bonustweet();
				}, 1000);
				setTimeout(function(){
					$("#heart").fadeIn("slow");
				}, 1000);
				$("#trumpButton").prop("disabled",false);
				$("#kanyeButton").prop("disabled",false);
			}
			else{
				$("#bonus").hide();
				var addNumber = triviaGame.gameData.wins;
				triviaGame.gameData.losses = triviaGame.gameData.losses + (12 - heartCount);
				triviaGame.gameData.wins = triviaGame.gameData.wins + heartCount;
				triviaGame.gameData.bonusRound = false;
				triviaGame.gameData.running = true;
				$("#heart").hide();
				$("#bonusRoundTitle").hide();
				$("#bonusRound").hide();
				$("audio").each(function(){
					this.pause();
					this.currentTime = 0;
				}); 
				document.getElementById("twitterSong").currentTime = 48;
				$("#twitterSong").get(0).play();
				
				$("#bonusGif").show();
				setTimeout(function(){
					$("#bonusGif").hide();
					$("#content").show();
					timer = 15;
					triviaGame.stop();
					$("#timeRemaining").text(15);	
					triviaGame.run();
				}, 2000);
			}
		}, 3000);
	},
	bonusRound: function(){
		$("#twitterSong").get(0).pause();
		if(this.volume === true){
			var delayAudio = 0;
			if($("#tweet").text().match("JIMMY") && this.volume === true){
				bonusHead = "kanye";
				document.getElementById("kanyeHead").currentTime = 3;
				delayAudio = 5300;
				$("#kanyeHead").get(0).play();
				setTimeout(function(){
					$("#kanyeHead").get(0).pause();
				}, delayAudio);	
				document.getElementById("god").volume = 0.2;
				document.getElementById("god").currentTime = 48;
				$("#god").get(0).play();
			}
			else{
				bonusHead = "trump";
				document.getElementById("trumpHead").currentTime = 15.7;
				delayAudio = 6100;	
				$("#trumpHead").get(0).play();
				setTimeout(function(){
					$("#trumpHead").get(0).pause();
					
				}, delayAudio);	
				document.getElementById("money").volume = 0.2;
				document.getElementById("money").currentTime = 39.5;
				$("#money").get(0).play();
			}
		}
		$("#kanyeVoice,#bonusCrown,#content,#bonusTweet").hide();
		$("#gameMessage").addClass("invisible");
		$("#bonusRoundTitle").show();
		var length = bonusTweets.length;
		$("#heart").appendTo($("#animations"));
		for (var i = 0; i < 100; i++) {
			var newId = "animation"+ i;
			$("#heart").clone().attr("style","right: " + 20*i + "px").attr("id",newId).appendTo($("#animations"));
		}
		$("#heart").appendTo($("#bonusRound"));
		$("#animations,#bonusRound").show();
		$("#heart").removeClass("animation");
		heartCount = 0;
		$("#heart").html("<p>" + heartCount + "</p>");
		for (var i = 0; i < 100; i++) {
			var a = $("#animation" + i);
			var delayTime = Math.floor(Math.random()*1000);
			(a).delay(delayTime);
			$("#animation" + i).animate({
				top: "-=1000",
			  },
			  3000);	
			 setTimeout(function(){
				$("#animations").hide();
				$("#bonus").show();
				$("#bonusTweet").show();
				$("#bonusTweetText").show();
			 }, 3000);			 
		}
		// bonusTimer = 30;
		// setTimeout(function(){
		// 	bonusTimer--;
		// 	$("#bonusTimeRemaining").text(bonusTimer);
		// 	$("#bonusTime").val(bonusTimer);
		// }, 1000);
		this.bonustweet();
		this.gameData.bonusRound = true;
		bonusComplete = true;
		this.gameData.running = false;
	},
//Start Button Resets Game
	reset: function(){
		bonusComplete = false;
		document.getElementById("twitterSong").currentTime = 48;
		$("#twitterSong").get(0).play(); 
		$("#start,#results").hide();
		$("#content,#time,.multipleChoice,#content,#content,blockquote,#tweet,.buttons").show();
		this.tweetBank = JSON.parse(JSON.stringify(tweetBank));
		this.gameData.wins = 0;
		this.gameData.losses = 0;
		this.gameData.running = true;	
		this.run();
	}
};