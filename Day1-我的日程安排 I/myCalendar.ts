class MyCalendar {
  constructor(public cacheArr = []) {}
  book(start: number, end: number): boolean {
    if ((start || start === 0) && (end || end === 0) && start < end) {
      if (this.cacheArr.length > 0) {
        let num = 0;
        for (let i = 0; i < this.cacheArr.length; i++) {
          if (start >= this.cacheArr[i][1] || end <= this.cacheArr[i][0]) {
            num++;
            if (num === this.cacheArr.length) {
              this.cacheArr.push([start, end]);
              return true;
            }
          }
        }
      } else {
        this.cacheArr.push([start, end]);
        return true;
      }
    }
    return false;
  }
}
let obj = new MyCalendar();
console.log(obj.book(48, 50));
console.log(obj.book(0, 6));
console.log(obj.book(20, 30));
