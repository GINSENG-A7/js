function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const aclean = (arr) => {
  const clearedArr = [];
  const set = new Set();
  arr.forEach((word) => {
    const wordHash = word
      .toLowerCase()
      .split("")
      .reduce((summ, char) => {
        return summ + char.charCodeAt(0);
      }, 0);
    if (!set.has(wordHash)) {
      clearedArr.push(word);
      set.add(wordHash);
    }
  });
  return clearedArr;
};

describe("aclean", function () {
  it("returns exactly 1 word from each anagram set", function () {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    let result = aclean(arr);
    assert.equal(result.length, 3);

    assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
    assert.equal(
      intersection(result, ["teachers", "cheaters", "hectares"]).length,
      1
    );
    assert.equal(intersection(result, ["ear", "era"]).length, 1);
  });

  it("is case-insensitive", function () {
    let arr = ["era", "EAR"];
    assert.equal(aclean(arr).length, 1);
  });
});