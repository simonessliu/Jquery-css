
var str='';
 
var arr=[];
 
for(i=0;i<5;i++){
 
    str = Math.round( Math.random()*10 );
 
    for(j=0;j<arr.length;j++){
 
            if(arr[j]==str){
 
                arr.splice(j,1);
 
                i--;
 
            }
 
        }
 
    arr.push( str);
 
}
 
console.log(arr);
