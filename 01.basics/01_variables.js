console.log("arunabha");
const accountId = 144553;
let accountEmail = "arunabha2006@gmail.com";
var accountPassword = "12453";
let accountCity = "pune";

accountEmail = "hc@hc.com";
accountPassword = "212112";
accountCity = "bengaluru";

/*
    Prefer not to use var because of issue of block and functional scope
*/

const accountDetails = {
  accountId: accountId,
  accountEmail: accountEmail,
  accountPassword: accountPassword,
  accountCity: accountCity
};

console.table([accountDetails]);
