const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  summ() {
    let summResult = 0;

    for (const key in this) {
      let resultNumber = Number(this[key]);
      if (!isNaN(resultNumber)) {
        summResult += resultNumber;
      }
    }
    return summResult;
  },
};

console.log(salaries.summ());
