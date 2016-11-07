var repeat = require("../src/repeat").repeat;
var exclaim = require("../src/exclaim").exclaim;

if (exclaim(repeat, "hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log("Success");
}
