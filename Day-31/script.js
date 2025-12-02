/** @type {HTMLElement} */
const footballJson = [
  {
    name: "FC Barcelona",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    href: "https://en.wikipedia.org/wiki/FC_Barcelona",
    league: "La Liga",
    stadium: "Camp Nou",
    founded: 1899,
    country: "Spain",
  },
  {
    name: "Real Madrid",
    image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    href: "https://en.wikipedia.org/wiki/Real_Madrid_CF",
    league: "La Liga",
    stadium: "Santiago Bernabéu",
    founded: 1902,
    country: "Spain",
  },
  {
    name: "Atlético Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Atletico_Madrid_logo.svg",
    href: "https://en.wikipedia.org/wiki/Atl%C3%A9tico_Madrid",
    league: "La Liga",
    stadium: "Cívitas Metropolitano",
    founded: 1903,
    country: "Spain",
  },
  {
    name: "Manchester United",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    href: "https://en.wikipedia.org/wiki/Manchester_United_F.C.",
    league: "Premier League",
    stadium: "Old Trafford",
    founded: 1878,
    country: "England",
  },
  {
    name: "Manchester City",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    href: "https://en.wikipedia.org/wiki/Manchester_City_F.C.",
    league: "Premier League",
    stadium: "Etihad Stadium",
    founded: 1880,
    country: "England",
  },
  {
    name: "Chelsea",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    href: "https://en.wikipedia.org/wiki/Chelsea_F.C.",
    league: "Premier League",
    stadium: "Stamford Bridge",
    founded: 1905,
    country: "England",
  },
  {
    name: "Liverpool",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    href: "https://en.wikipedia.org/wiki/Liverpool_F.C.",
    league: "Premier League",
    stadium: "Anfield",
    founded: 1892,
    country: "England",
  },
  {
    name: "Arsenal",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    href: "https://en.wikipedia.org/wiki/Arsenal_F.C.",
    league: "Premier League",
    stadium: "Emirates Stadium",
    founded: 1886,
    country: "England",
  },
  {
    name: "Bayern Munich",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/330px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png",
    href: "https://en.wikipedia.org/wiki/FC_Bayern_Munich",
    league: "Bundesliga",
    stadium: "Allianz Arena",
    founded: 1900,
    country: "Germany",
  },
  {
    name: "Borussia Dortmund",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    href: "https://en.wikipedia.org/wiki/Borussia_Dortmund",
    league: "Bundesliga",
    stadium: "Signal Iduna Park",
    founded: 1909,
    country: "Germany",
  },
  {
    name: "Tottenham Hotspur",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/195px-Tottenham_Hotspur.svg.png",
    href: "https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.",
    league: "Premier League",
    stadium: "Tottenham Hotspur Stadium",
    founded: 1882,
    country: "England",
  },
  {
    name: "Paris Saint-Germain",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    href: "https://en.wikipedia.org/wiki/Paris_Saint-Germain_F.C.",
    league: "Ligue 1",
    stadium: "Parc des Princes",
    founded: 1970,
    country: "France",
  },
  {
    name: "Feyenoord",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Feyenoord_logo_since_2024.svg/330px-Feyenoord_logo_since_2024.svg.png",
    href: "https://en.wikipedia.org/wiki/Feyenoord",
    league: "Eredivisie",
    stadium: "De Kuip",
    founded: 1908,
    country: "Netherlands",
  },
  {
    name: "Olympique de Marseille",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/300px-Olympique_Marseille_logo.svg.png",
    href: "https://en.wikipedia.org/wiki/Olympique_de_Marseille",
    league: "Ligue 1",
    stadium: "Stade Vélodrome",
    founded: 1899,
    country: "France",
  },
  {
    name: "Juventus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg/195px-Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg.png",
    href: "https://en.wikipedia.org/wiki/Juventus_F.C.",
    league: "Serie A",
    stadium: "Allianz Stadium",
    founded: 1897,
    country: "Italy",
  },
  {
    name: "AC Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/330px-Logo_of_AC_Milan.svg.png",
    href: "https://en.wikipedia.org/wiki/A.C._Milan",
    league: "Serie A",
    stadium: "San Siro",
    founded: 1899,
    country: "Italy",
  },
  {
    name: "Inter Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/330px-FC_Internazionale_Milano_2021.svg.png",
    href: "https://en.wikipedia.org/wiki/Inter_Milan",
    league: "Serie A",
    stadium: "San Siro",
    founded: 1908,
    country: "Italy",
  },
  {
    name: "Ajax",
    image: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
    href: "https://en.wikipedia.org/wiki/AFC_Ajax",
    league: "Eredivisie",
    stadium: "Johan Cruyff Arena",
    founded: 1900,
    country: "Netherlands",
  },
  {
    name: "Porto",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
    href: "https://en.wikipedia.org/wiki/FC_Porto",
    league: "Primeira Liga",
    stadium: "Estádio do Dragão",
    founded: 1893,
    country: "Portugal",
  },
  {
    name: "Benfica",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/330px-SL_Benfica_logo.svg.png",
    href: "https://en.wikipedia.org/wiki/S.L._Benfica",
    league: "Primeira Liga",
    stadium: "Estádio da Luz",
    founded: 1904,
    country: "Portugal",
  },
];
let i = 1;
let container = document.querySelector(".container");

footballJson.forEach((club) => {
  let div = document.createElement("div");
  div.classList.add("card",`card${i}`);

  let image = document.createElement("img");
  let clubName = document.createElement("p");
  let country = document.createElement("p");
  let league = document.createElement("p");
  let founded = document.createElement("p");
  let stadium = document.createElement("p");
  let button = document.createElement('button');
  let readmore = document.createElement("a");

  console.log(club);
  container.append(div);
  
  
  div.append(image);
  image.setAttribute("src", club.image);
  div.append(clubName);
  clubName.innerHTML = `${club.name}`;
  div.append(country);
  country.innerHTML = `Country : ${club.country}`;
  div.append(league);
  league.innerHTML = `League : ${club.league}`;
  div.append(founded);
  founded.innerHTML = `Founded : ${club.founded}`;
  div.append(stadium);
  stadium.innerHTML = `Stadium : ${club.stadium}`;
  div.append(button);
  button.append(readmore)
  readmore.setAttribute("href", club.href);
  readmore.setAttribute("target","_blank");
  readmore.innerHTML = "readmore";
  i++;
});
