function pipeFix(numbers){
    var first = numbers[0];
    console.log(first)
    var last = numbers[numbers.length-1];
    console.log(last)
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
      
    }
    return arr;
  }

console.log(pipeFix([-2,4,5,6,8,10]));


