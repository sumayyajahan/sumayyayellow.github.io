/* max returns the maximum of 2 arguments */
function max(a, b) {
    let c = [a, b];

    const d = c.reduce(function (prev, elem, i, array) {
      return prev>elem? prev: elem;
    }, 0);

    return d;
  }

  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    
    let arr = [a, b, c];
    let result = arr.reduce((accumulator, currentValue) => {
        return (accumulator > currentValue? accumulator: currentValue);
    },0);

    return result;
  }

  function isVowel(x) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
    const isV = vowels.filter(function(ele, i, array){
        return (ele === x ) 
    });

    return isV.length > 0;
  }
  
  function sum(a) {
    let sum = 0;
    //let a = [1,2,3,4];
    const result = a.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    },0);

    return result;
  }


  function multiply(arr){
    return arr.reduce(function (prev, elm, i, array) {
        return prev*elm;
    }, 1);
}
  

  function reverse(str) {
    let revStrArr = str.split("");

    return revStrArr.reverse().reduce(function(prev, elm, i, array) {
        return prev +""+elm;
    },"");
}

function findLongestWord(wordsArry) {
    let len = wordsArry.reduce(function(prev, elem, i, array) {
        return prev.length > elem.length?prev: elem;
    },'');

    return len.length;
}
  

function filterLongWords(wordsArry, maxLen) {
    return wordsArry.filter(function(elem, i, array) {
        return elem.length > maxLen;
    });
}

  

  function mapMultiply() {
    const a = [1, 3, 5, 3, 3];
    const b = a.map(function (elem, i, array) {
      return elem * 10;
    });

    return b;
  }

  

  function findFilter() {
    const a = [1, 3, 5, 3, 3];

    const c = a.filter(function (elem, i, array) {
      return elem == 3;
    });

    return c;
  }

  

  function reduceEle() {
    const a = [1, 3, 5, 3, 3];
    const d = a.reduce(function (prevValue, elem, i, array) {
      return prevValue * elem;
    });

    return d;
  }

  function shortest(x, y, z){
     
    let item = [x, y, z];

    return item.reduce(function(prev, elem, i, array){
        return (prev > elem) ? elem : prev;
    });
  }

  