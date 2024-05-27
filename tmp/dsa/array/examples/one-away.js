function oneAway (s1, s2) {
  const match = {};
  const concatString = s1 + s2;
  for (let i = 0; i < concatString.length; i++) {
    if (match[concatString[i]] === undefined) {
      match[concatString[i]] = i;
    } else {
      match[concatString[i]] -= i;
    }
  }

  console.log(match);

  let noMatch = 0;
  let misMatch = 0;
  let positionDistance = 0;
  for (const key in match) {
    const value = match[key];
    if (value > 0) {
      noMatch += 1;
    }
    if (value < 0) {
      positionDistance = value;
      if (positionDistance !== value) {
        misMatch += 1;
      }
    }
  }

  console.log(noMatch);
  console.log(misMatch);
  
  if (noMatch > 1 || misMatch > 1) {
    return false;
  } else {
    return true;
  }
}

module.exports = oneAway;
