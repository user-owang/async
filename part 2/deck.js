const baseURL = "https://deckofcardsapi.com/api/deck/";

// 1.
async function newDeckDraw() {
  let deck = await $.get(`${baseURL}new/shuffle/?deck_count=1`);
  let card = await $.get(`${baseURL}${deck["deck_id"]}/draw/?count=1`);
  console.log(`${card["cards"][0]["value"]} of ${card["cards"][0]["suit"]}`);
}
newDeckDraw();

// 2.
async function newDeckDraw2() {
  let deck = await $.get(`${baseURL}new/shuffle/?deck_count=1`);
  let card1 = await $.get(`${baseURL}${deck["deck_id"]}/draw/?count=1`);
  let card2 = await $.get(`${baseURL}${deck["deck_id"]}/draw/?count=1`);
  console.log(
    `${card1["cards"][0]["value"]} of ${card1["cards"][0]["suit"]}`,
    `${card2["cards"][0]["value"]} of ${card2["cards"][0]["suit"]}`
  );
}
newDeckDraw2();

// 3.
const $btn = $("button");
const $cards = $("#cards");
let deckID = "";

$(document).ready(async function () {
  resp = await $.get(`${baseURL}new/shuffle/?deck_count=1`);
  deckID = resp["deck_id"];
});

$btn.on("click", async function () {
  resp = await $.get(`${baseURL}${deckID}/draw/?count=1`);
  if (resp["remaining"] > 0) {
    $cards.append(`<img src="${resp["cards"][0]["image"]}" alt=""> <br>`);
  }
});
