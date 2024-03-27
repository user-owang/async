const baseURL = "http://numbersapi.com";
// #1
async function fact(num) {
  const resp = await $.get(`${baseURL}/${num}?json`);
  console.log(resp);
}
fact(69);
// #2
let numbers = [3, 5, 99];
async function facts(array) {
  const resp = $.get(`${baseURL}/${array}?json`);
  console.log(resp);
}
// #3
async function fact4x(num) {
  const resp = await Promise.all([
    $.get(`${baseURL}/69?json`),
    $.get(`${baseURL}/69?json`),
    $.get(`${baseURL}/69?json`),
    $.get(`${baseURL}/69?json`),
  ]);
  console.log(resp);
}
