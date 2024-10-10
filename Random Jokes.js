const bioButton = document.getElementById("bio-button");
const bioDisplay = document.getElementById("My-Bio");
let bioVisible = false;

function bioInfo() {
  myBio = {
    Name: "Abdulkabir Yahya",
    Age: 25,
    Edu: [
      { School: "FSP", Uni: "Umaru Musa Yar'adua University" },
      { Occupation: "Currently Serving", Salary: "Null" },
    ],
    FullBio: function () {
      return `My name is ${this.Name}. I'm ${this.Age} years old, 
                i went to ${this.Edu[0].School}. 
                And did my higher institution at ${this.Edu[0].Uni}`;
    },
  };

  if (bioVisible) {
    bioDisplay.innerHTML = "";
    bioButton.textContent = "Show Bio";
  } else {
    bioDisplay.innerHTML = myBio.FullBio();
    bioDisplay.style.fontWeight = "Bolder";
    bioButton.textContent = "Hide Bio";
  }
  bioVisible = !bioVisible;
}

// const h2 = document.getElementById('h2');

// let catFact = {
//     url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
//     fetchData: function() {
//         fetch(this.url)
//         .then(response => response.json())
//         .then(data => this.displayData(data))
//     },
//     displayData: (data)=>{
//         let price = data.bpi.USD.rate;
//         const dollarSign = data.bpi.USD.symbol;
//         h2.innerHTML = dollarSign+price;

//     }};

const btnJoke = document.getElementById("btnJoke");
const paragraph = document.getElementById("paragraph");
const paragraphii = document.getElementById("paragraphii");

let jokes = {
  url: "https://official-joke-api.appspot.com/random_joke",
  fetchJoke: function () {
    fetch(this.url)
      .then((respond) => respond.json())
      .then((data) => this.displayJoke(data));
  },

  displayJoke: function (data) {
    let setup = data.setup;
    let punchline = data.punchline;

    paragraph.innerHTML = "<b>Joke:</b> " + setup;
    paragraphii.innerHTML = "<b>Answer:</b> " + punchline;
  },
};

btnJoke.addEventListener("click", () => {
  jokes.fetchJoke();
});
