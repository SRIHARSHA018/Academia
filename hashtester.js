const bcrypt = require("bcryptjs");

const password = "Sj@15634";
const getHased = async () => {
  try {
    const hased = await bcrypt.hash(password, 10);
    return hased;
  } catch (error) {
    console.log(error);
  }
};

getHased().then((res) => {
  console.log(res);
  bcrypt.compare(password, res).then((ispass) => {
    console.log(ispass);
    if (ispass) {
      console.log("Comparision done and successfull");
    }
  });
});
