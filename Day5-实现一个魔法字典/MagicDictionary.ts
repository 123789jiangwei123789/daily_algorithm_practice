class MagicDictionary {
  dictionaryList: string[];
  constructor() {}
  buildDict(dictionary: string[]): void {
    if (dictionary.length > 0) {
      if (Array.isArray(dictionary[0])) {
        this.dictionaryList = dictionary[0];
      } else {
        this.dictionaryList = dictionary;
      }
    }
  }
  search(searchWord: string): boolean {
    if (!this.dictionaryList.length) {
      return false;
    }
    for (let i = 0; i < this.dictionaryList.length; i++) {
      let Chance = 0;
      for (let j = 0; j < this.dictionaryList[i].length; j++) {
        if (
          this.dictionaryList[i][j] !== searchWord[j] &&
          this.dictionaryList[i].length === searchWord.length
        ) {
          Chance++;
          if (Chance > 1) {
            break;
          }
        }
      }
      if (Chance === 1) {
        return true;
      }
    }
    return false;
  }
}
var obj = new MagicDictionary();
obj.buildDict(["hello", "leetcode"]);
var param_2 = obj.search("hllo");
console.log(param_2);
