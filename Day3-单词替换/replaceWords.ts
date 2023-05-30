function replaceWords(dictionary: string[], sentence: string): string {
  let strArr = sentence.split(" ").map((item) => {
    for (let i = 0; i < dictionary.length; i++) {
      if (item.startsWith(dictionary[i])) {
        item = item.replace(item, dictionary[i]);
      }
    }
    return item;
  });
  return strArr.join(" ");
}
console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"),
  "11"
);
