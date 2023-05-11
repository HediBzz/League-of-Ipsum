var copy = "";

jQuery(document).ready(function ($) {
  // Initialize ipsum
  var generated = $("#generated");
  var league = ["Draven",
"ADC",
"bot lane",
"mid",
"hue",
"flash",
"ignite",
"CS",
"creeps",
"minions",
"towers",
"inhibitor",
"inhib", "nexus",
"jungle",
"bruiser",
"counter",
"lore",
"ranked",
"bronze",
"ganks", "wraiths",
"wolves",
"golems",
"double buffs",
"red buff",
"blue buff",
"baron",
"dragon",
"pentakill",
"penta",
"quadrakill",
"quadra",
"doran's",
"bork",
"OP",
"skins",
"skintimidation",
"smurf",
"reset",
"League of  ",
"League of Legends",
"runes",
"masteries", 
"top",
"lane",
"trade",
"assassin",
"dive",
"push",
"sustain",
"pots",
"wards",
"warding",
"escape",
"1v1",
"ARAM",
"ace",
"AFK",
"feed",
"assist",
"auto-attack",
"bait",
"bush",
"backdoor",
"blink",
"burst", 
"cooldown",
"chase",
"counter gank",
"counter jungle",
"dodge",
"queue",
"dunk",
"Elo hell",
"face check",
"fog of war",
"fountain",
"gap closer",
"glass cannon",
"global",
"elixir",
"harass",
"poke",
"CC",
"initiate",
"instakill",
"instalock",
"kite",
"knockup",
"lag",
"DC",
"last hit",
"KS",
"leash",
"map",
"wave",
"overextending",
"overstaying",
"peeling", "pink",
"proc", "ragequit",
"report",
"riot pls",
"rito pls",
"roam",
"skillshot",
"solo queue",
"split push",
"support",
"tank",
"troll",
"ult",
"ulti",
"ultimate",
"utility",
"vision",
"zoning",
"nerf",
"pro",
"esports",
"pro strats",
"BotRK", "such",
"so",
"wow",
"lol",
"Aatrox",
"Ahri",
"Akali",
"Akshan",
"Alistar",
"Amumu",
"Anivia",
"Annie",
"Aphelios",
"Ashe",
"Aurelion sol",
"Azir",
"Bard",
"Bel'Veth",
"Blitzcrank",
"Brand",
"Braum",
"Caitlyn",
"Camille",
"Cassiopeia",
"Cho'Gath",
"Corki",
"Darius",
"Diana",
"Dr. Mundo",
"Draven",
"Ekko",
"Elise",
"Evelynn",
"Ezreal",
"Fiddlesticks",
"Fiora",
"Fizz",
"Galio",
"Gangplank",
"Garen",
"Gnar",
"Gragas",
"Graves",
"Gwen",
"Hecarim",
"Heimerdinger",
"Illaoi",
"Irelia",
"Ivern",
"Janna",
"Jarvan IV",
"Jax",
"Jayce",
"Jhin",
"Jinx",
"Kai'sa",
"Kalista",
"Karma",
"Karthus",
"Kassadin",
"Katarina",
"Kayle",
"Kayn",
"Kennen",
"Kha'Zix",
"Kindred",
"Kled",
"Kog'Maw",
"LeBlanc",
"Lee Sin",
"Leona",
"Lillia",
"Lissandra",
"Lucian",
"Lulu",
"Lux",
"Malphite",
"Malzahar",
"Maokai",
"Master Yi",
"Miss Fortune",
"Mordekaiser",
"Morgana",
"Nami",
"Nasus",
"Nautilus",
"Neeko",
"Nidalee",
"Nocturne",
"Nunu and Willump",
"Olaf",
"Orianna",
"Ornn",
"Pantheon",
"Poppy",
"Pyke",
"Qiyana",
"Quinn",
"Rakan",
"Rammus",
"Rek'Sai",
"Rell",
"Renata Glasc",
"Renekton",
"Rengar",
"Riven",
"Rumble",
"Ryze",
"Samira",
"Sejuani",
"Senna",
"Seraphine",
"Sett",
"Shaco",
"Shen",
"Shyvana",
"Singed",
"Sion",
"Sivir",
"Skarner",
"Sona",
"Soraka",
"Swain",
"Sylas",
"Syndra",
"Tahm kench",
"Taliyah",
"Talon",
"Taric",
"Teemo",
"Thresh",
"Tristana",
"Trundle",
"Tryndamere",
"Twisted Fate",
"Twitch",
"Udyr",
"Urgot",
"Varus",
"Vayne",
"Veigar",
"Vel'Koz",
"Vex,",
"Vi",
"Viego",
"Viktor",
"Vladimir",
"Volibear",
"Warwick",
"Wukong",
"Xayah",
"Xerath",
"Xin Zhao",
"Yasuo",
"Yone",
"Yorick",
"Yuumi",
"Zac",
"Zed",
"Zeri",
"Ziggs",
"Zilean",
"Zoe",
"Zyra",
"int",
"mana",
"OOM",
"fed",
"pisslow",
"dogshit",
"toxic",
"pill",
"faker",
"ez",
"ff 15",
"ff",
"summoner rift",
"ms",
"build"];
  
 var generatedText = ""; // Variable pour stocker le texte généré

  $("#ipsum").bind("submit", function() {
    var numParagraphs = $("input[name=num-paragraphs]").val();
    if (numParagraphs > 100) {
      numParagraphs = 100;
    }
    var numSentences = $("input[name=num-sentences]").val();
    var startWith = "League of Ipsum dolor sit amet ";
    generatedText = ipsum(numParagraphs, league, startWith, numSentences); // Stocker le texte généré
    generated.html(generatedText);
    return false;
  });

  $("#copy-button").click(function() {


    // Create a temporary textarea element
    navigator.clipboard.writeText(copy);

    // Alert the copied text
    alert("Text copied !");
  });
});


function ipsum(numParagraphs, phrases, startText, numS){
  var text = "";

  if(numParagraphs < 1){
    return text;
  }
  
  for(var i = 0; i < numParagraphs; i++){
    // 5 - 8 sentences per paragraph
    var paragraph = "";
    var saveS = numS;
    var numS = Math.floor((numS * 2) + 5);
    for(var j = 0; j < numS; j++){
      // 15 - 20 words per sentence
      var sentence = "";
      var numWords = Math.floor((Math.random()* 10)+15);
      for(var k = 0; k < numWords; k++){
        var word = "";
        var wordNum = Math.floor(Math.random()*phrases.length);
        word = phrases[wordNum];
        
        if (k != 0){
          sentence = sentence + " ";
        }
        sentence = sentence + word;
      }
      sentence = sentence + ".";
      if (j == 0 && i == 0){
        sentence = startText + sentence;
      }

      sentence = capitalizeFirstLetter(sentence);
      
      paragraph = paragraph + sentence;
      paragraph = paragraph + " ";
    }
    numS = saveS;
    copy = copy + paragraph + "\n \n";
    paragraph = "<p>" + paragraph + "</p>";
    text = text + paragraph;
  }
  
  return text;
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

