{
  //2621. Sleep
  // async function sleep(millis) {
  //   return new Promise((delayresolve) => setTimeout(delayresolve, millis));
  // }
  // console.log(sleep(200));
}
{
  // 2703. Return Length of Arguments Passed
  // var argumentsLength = function(...args) {
  //     return args.length
  //    };
}
{
  // 2704. To Be Or Not To Be
  // var expect = function(val) {
  //     function toBe(val2){
  //       if(val===val2){
  //         return true
  //       }
  //       throw new Error('Not Equal')
  //     }
  //     function notToBe(val2){
  //       if(val!==val2){
  //         return true
  //       }
  //       throw new Error('Equal')
  //     }
  //     return {toBe, notToBe}
  // };
}
{
  // 13. Roman to Integer
  // const romans={
  //     I:1,
  //     V:5,
  //     X:10,
  //     L:50,
  //     C:100,
  //     D:500,
  //     M:1000,
  //     }
  //    var romanToInt = function(s) {
  //        let result=0;
  //        for(let i=0; i < s.length;i++){
  //            let current=romans[s[i]]
  //            let next=romans[s[i+1]]
  //           current < next ? (result -= current) : (result += current);
  //        }
  //        return result
  //    };
}
{
  // 234. Palindrome Linked List
  // var isPalindrome = function (head) {
  //   let arr = [];
  //   while (head) {
  //     arr.push(head.val);
  //     head = head.next;
  //   }
  //   return arr.join("") == arr.reverse().join("");
  // };
  // console.log(isPalindrome([1, 2]));
}
