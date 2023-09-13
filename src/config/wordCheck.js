const allPhrases = [
    "We design and develop applications",
    "that run the world and",
    "showcase the future"
  ];
  
  export const checkPhrase = (phrase) => {
    return allPhrases.includes(phrase.join(" "));
  };
  
  export const sortWordQueue = (wordQueue) => {
    wordQueue.sort((a, b) => b.pos.x - a.pos.x);
    wordQueue.sort((a, b) => b.pos.y - a.pos.y);
    return wordQueue;
  };
  