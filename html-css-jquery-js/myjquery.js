$(document).ready(()=>{
    let str = '';
    let arr=[];
    for (i=0;i<5;i++){
        str = Math.round(Math.random()*10);
        for (j=0;j<arr.length;j++){
            if(arr[j]==str){
                arr.splice(j,1);
                i--;
            }
        }

        arr.push(str)
    }

    // let ids = Array.from({length: 3}, () => Math.floor(Math.random() * 10 ));   
    $("#thanos-effect").click(function() {
        
        // let ids = [1];
        arr.forEach((id,index)=> {
            setTimeout(()=>{
                $('html,body').animate({
                    scrollTop: $("#"+id).offset().top-$(window).height()/2
                },'slow');
                $("#"+id).fadeToggle(3000)
            }, 2000*index);
              
        })    
    })
})
// $("button").click(function(){
//     var x = $("#1").offset();
//     alert("Top: " + x.top + " Left: " + x.left); 
// })




