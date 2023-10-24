

 











let div = document.querySelectorAll('.div')
function generate_color(){
    div.forEach(function(val,index){
        val.addEventListener('mouseleave',function(){
            val.innerHTML=``
        })
        })

    
    let arr = []
    for (let index = 0; index < 4; index++) {
        let hex = '#';
        let digits = '0123456789abcdef';
        
        
            for(i=0;i<6;i++){
                hex = hex+digits[Math.floor(Math.random()*16)]
            };
        
      arr.push(hex)
    }



for (let index = 0; index < 4; index++) {
div[index].style.backgroundColor =arr[index]
    
}
div.forEach(function(val,index){
val.addEventListener('mouseenter',function(){
    val.innerHTML=`<p class='p'>${arr[index]}</p>`;
let p = document.querySelectorAll('p');
p.forEach(function(val){
    val.addEventListener('click',function(){
        navigator.clipboard.writeText(val.innerText).then(()=>alert('copied to clipboard')).catch((error)=>alert(error))


    })
})
})
})
}
