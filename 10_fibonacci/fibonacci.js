const fibonacci = function(num) {
    // 1, 1, 2, 3, 5, 8, etc.
    num = parseInt(num);
    if (num < 0){
        return "OOPS";
    }
    if(num == 0){
        return num;
    }
    let arr = [];
        for (let i = 0; i <= num; i++){
            //base case, this is our first number "1"
            let firstPrecedingIndex = i - 1;
            let secondPrecedingIndex = i - 2;
            let tmp = 0;
    
            if (secondPrecedingIndex < 0){
                if(i == 0) arr.push(i+1);
                else arr.push(i);
            } else {
                tmp = arr[secondPrecedingIndex] + arr[firstPrecedingIndex];
                arr.push(tmp);
            }
        }
        return arr[num-1];
    };
    
// Do not edit below this line
module.exports = fibonacci;
