function threeSum(arr, target) {
  // write your code here
arr = arr.sort((a,b)=>{return a-b;});
let closest = 99999999999;
for(let i=0; i<arr.length; i++){
    let prt2 = i+1;
    let prt3 = arr.length-1;
    while(prt2<prt3){
        let sum = arr[i] + arr[prt2] + arr[prt3];
        let compareSum = target - sum;
        let compareClosest = target - closest;
        if(compareSum<0){
            compareSum = -(compareSum);
        }
        if(compareClosest<0){
            compareClosest = -(compareClosest);
        }
    if((compareSum) < (compareClosest)){
        closest = sum;
    }
    if(sum>target){
        prt3--;
    }else{
        prt2++;
    }
}
}
return closest;
}

module.exports = threeSum;
