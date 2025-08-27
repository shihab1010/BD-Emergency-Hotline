const callHistory = [];

//...... reusable function.........

// get value as INT
function getValueInt(id) {
  const inputFieldValue = parseInt(document.getElementById(id).value);
  return inputFieldValue;
}

// get value as String
function getValueString(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

// get Inner text

function getInnerText(id) {
  const innertext = document.getElementById(id).innerText;
  return innertext;
}

// heart interactivity

const hearts = document.getElementsByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    let heartCount = parseInt(getInnerText("heart-count"));
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// Call button interactivity
const callButtons = document.getElementsByClassName("call-button");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    let coinCount = parseInt(getInnerText("coin-count"));
    if (coinCount < 20) {
      alert(
        "No Enough Coin in your Phone. For Calling You must need at least 20 coin."
      );
      return;
    }
    const card = callButton.closest(".card");
    const title = card.querySelector("h4").innerText;
    const number = card.querySelector("h1").innerText;

    alert(`Calling ${title} ${number}...`);
    coinCount -= 20;
    document.getElementById("coin-count").innerText = coinCount;

    const time = new Date().toLocaleTimeString();
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex items-center justify-between bg-[#FAFAFA] p-3 mt-4">
            <div>
                <h3 class="font-semibold">${title}</h3>
                <p class="text-gray-500">${number}</p>
            </div>
            <p class="font-semibold text-[14px]">${time}</p>
           </div>
    `;
    historyContainer.appendChild(div);
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
});
