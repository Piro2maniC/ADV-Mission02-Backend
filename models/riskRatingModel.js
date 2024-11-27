const calculateRiskRating = (claimHistory) => {
  //key words to increase risk rating
  const keywords = ["collide", "bump", "scratch", "smash", "crash"];

  //split claim history into words seperated by **any** spaces incl more than one
  const words = claimHistory.toLowerCase().split(/\s+/);

  let riskRating = 0;

  //loop through words in claim history
  words.forEach((word) => {
    let cleanedWord = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] >= "a" && word[i] <= "z") {
        cleanedWord += word[i];
      }
    }

    if (keywords.includes(cleanedWord)) {
      riskRating++;
    }
  });

  if (riskRating > 5) {
    riskRating = 5;
  }

  if (riskRating === 0) {
    riskRating = 1;
  }
  return riskRating;
};

module.exports = { calculateRiskRating };
