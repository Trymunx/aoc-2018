// Fake console.log so we don't log anything in the imports
const realLogger = console.log;
console.log = () => {};

const { day01 } = require("./01.js");
const { day02 } = require("./02.js");
const { day03 } = require("./03.js");
const { day04 } = require("./04.js");
const { day05 } = require("./05.js");
const { day06 } = require("./06.js");
const { day07 } = require("./07.js");
const { day08 } = require("./08.js");
const { day09 } = require("./09.js");
const { day10 } = require("./10.js");
const { day11 } = require("./11.js");
const { day12 } = require("./12.js");
const { day13 } = require("./13.js");
const { day14 } = require("./14.js");

// Reset back to the real console.log
console.log = realLogger;

console.table([
  ["Part 1", "Part 2"],
  day01(),
  day02(),
  day03(),
  day04(),
  day05(),
  day06(),
  day07(),
  day08(),
  day09(),
  day10(),
  day11(),
  day12(),
  day13(),
  day14(),
]);
