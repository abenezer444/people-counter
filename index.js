function increment(){
    //get intial value
    //update intial value
    let count=Number(document.getElementById('count').innerText);
    count+=1;
    document.getElementById('count').innerText=count
}
function decrement(){
    let count=Number(document.getElementById('count').innerText);
    if (count>0){
        count-=1;
        document.getElementById('count').innerText=count
    }
    
}
function save(){
    let original=document.getElementById('text').innerText;
    let count=document.getElementById('count').innerText;
    original+=count+'-'
    if (count>0){
        document.getElementById('text').innerText=original;
    }
    
    document.getElementById('count').innerText=0;
}
save();