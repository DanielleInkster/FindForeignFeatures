// eslint-disable-next-line
import React, { useEffect } from "react";

function Compare({ keywordRecs, genres, comparedHandler }) {
  useEffect(() => {
    returnRecommendations();
  });

  function compareWithGenres() {
    let arr = [];
    keywordRecs.forEach((item) => {
      genres.forEach((num) => {
        if (item.genre_ids.includes(num)) arr.push(item);
      });
    });
    return arr;
  }

  function countReturns(arr) {
    let counts = {};
    arr.forEach(function (x) {
      x.returns = counts[x.id] = (counts[x.id] || 0) + 1;
    });
    return arr;
  }

  function returnUnique(arr) {
    let t;
    return arr.filter(((t = {}), (a) => !(t[a.id] = a.id in t)));
  }

  async function returnRecommendations() {
    let arr = compareWithGenres();
    let returnArr = await countReturns(arr);
    let filteredArr = await returnUnique(returnArr);
    comparedHandler(await filteredArr);
  }

  return null;
}

export default Compare;
