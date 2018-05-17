window.onload=function () {
    let datu=document.querySelectorAll('.datu1')
    let dian=document.querySelectorAll('.dian')
    let dada=document.querySelector('.dada')
    let zuosanjiao=document.querySelector('.zuosanjiao')
    let yousanjiao=document.querySelector('.yousanjiao')
    let flag=true;
    for (let i=0;i<dian.length;i++){
        dian[i].onclick=function () {
            for (let j=0;j<dian.length;j++){
                dian[j].classList.remove('hot')
                // dian[j].className='dian '
               /* datu[j].style.zIndex=10;*/
                animate(datu[j],{opacity:0})
            }
            this.classList.add('hot');
            /*datu[i].style.zIndex=999;*/
            animate(datu[i],{opacity:1})
            index2=i;
        }
    }

    let liebiaobox=document.getElementsByClassName('liebiaoBox')
    let liebiaos=document.getElementsByClassName('liebiaos')
    let current=0;
    console.log(liebiaobox);
    console.log(liebiaos);

    for (let k=0;k<liebiaos.length;k++){
            liebiaobox[k].onmouseenter=function () {
                liebiaos[current].style.display='none'
                liebiaos[k].style.display='block';
                current=1;
            }
            liebiaobox[k].onmouseleave=function () {
                liebiaos[k].style.display='none'
            }
        }


    let index2=0;
    let t=setInterval(move,2000)
    function move() {
        index2++;
        if (index2===datu.length){
            index2=0
        }
        datu.forEach(function (value) {
           /* value.style.zIndex=10;*/
            animate(value,{opacity:0})
        })
        dian.forEach(value => value.className='dian')
        /*datu[index2].style.zIndex=999;*/
        animate(datu[index2],{opacity:1},function () {
            flag=true;
        })
        dian[index2].className='dian hot';
    }
    function movel() {
        index2--;
        if (index2<0){
            index2=datu.length-1;
        }
        datu.forEach(function (value) {
            /*value.style.zIndex=10;*/
            animate(value,{opacity:0})
        })
        dian.forEach(value => value.className='dian')
        /*datu[index2].style.zIndex=999;*/
        animate(datu[index2],{opacity:1},function () {
            flag=true;
        })
        dian[index2].className='dian hot';
    }
    dada.onmouseenter=function () {
        clearInterval(t);
    }
    dada.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    yousanjiao.onclick=function () {
        if (!flag){
            return
        }
        flag=false;
        move();
    }
    zuosanjiao.onclick=function () {
        if (!flag){
            return
        }
        flag=false;
        movel();
    }

}