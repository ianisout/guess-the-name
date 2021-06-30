// DAY 10 - PROJECT DAY! 🎈

let count = 1;
let names = ["Mazen", "George", "Khaled", "Felipe", "Ian", "Omar"];
let correctGuess = names[Math.round(Math.random() * 5)].toLowerCase();


// printing the name on html

let nameOnScreen = "";

for (let i = 0; i < names.length; i++) {
  nameOnScreen += `${names[i]} `;
}

document.getElementById("names").innerHTML = nameOnScreen;

function medal(count) {
  let answer = "";
  if (count === 1) {
    answer = "CONGRATULATIONS! You won the GOLDEN MEDAL! 🥇";
  } else if (count > 1 && count < 4) {
    answer = "CONGRATULATIONS! You won the SILVER MEDAL! 🥈";
  } else if (count > 3 && count < 6) {
    answer = "CONGRATULATIONS! You won the BRONZE MEDAL! 🥉";
  } else {
    answer = "PEE EWW! You got the POOP MEDAL 💩 take a sniff!";
  }

  return answer;
}

// 

function getName() {
  let guess = document.getElementById("guess").value.toLowerCase();

  if (guess !== correctGuess) {
    document.getElementById(
      "answer"
    ).innerHTML = `Try again! <br> Number of tries: ${count}`;
    count++;
  } else if (guess === correctGuess) {
    document.getElementById("answer").innerHTML = medal(count);
  }
}

console.log(correctGuess);

/* 

3 == '3'  // true
3 === '3'  // false

*/
