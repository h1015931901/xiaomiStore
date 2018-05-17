window.onload=function () {
    let datu=document.querySelectorAll('.datu1')
    let index=0;
    let dian1=document.querySelectorAll('.dian')
    setInterval(move,2000)
    function move() {
        index++;
        if (index===datu.length){
            index=0
        }
        datu.forEach(function (value) {
            value.style.zIndex=10;
        })
        dian1.forEach(value => value.className='dian')
        datu[index].style.zIndex=999;
        dian1[index].className='dian hot'
    }

}