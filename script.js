const board = document.querySelector(".elems");
const rot=document.querySelector(".rot");
const reset=document.querySelector(".reset");
const letters = document.querySelectorAll(".letters");
const nums = document.querySelectorAll(".nums");
mvaud=new Audio("pieces/mvs.mp3");
cpaud=new Audio("pieces/cap.mp3");
function playground (board,letters,nums){
const alist = ["A","B","C","D","E","F","G","H"];
const nlist = ["8","7","6","5","4","3","2","1"];
    
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(`${"p-"+(j+1)+"-"+nlist[i]}`);
        board.appendChild(square);
    }
}
let i=0;
let j=0;
let k=9;
let lenp=8;
let leni =17;
const sqlist =  document.querySelectorAll(".square");

while (i!=4) { 
    while(j!=lenp){
        sqlist[j].classList.add("sqc");
        j=j+2
    }
    while(k!=leni){
        sqlist[k].classList.add("sqc");
        k=k+2
    }
    i=i+1
    j=j+8
    k=k+8
    lenp=lenp+16
    leni=leni+16
    
}
for (let i = 0; i < 8; i++) {
    const letter0 = document.createElement("div");
    const inlet0 =document.createElement("div");
    const letter1 = document.createElement("div");
    const inlet1 =document.createElement("div");
    letter0.classList.add("letter");
    letter1.classList.add("letter");
    inlet0.classList.add("inlet");
    inlet1.classList.add("inlet");
    inlet0.textContent = alist[i]
    inlet1.textContent = alist[i]
    letter0.appendChild(inlet0)
    letter1.appendChild(inlet1)
    letters[0].appendChild(letter0);
    letters[1].appendChild(letter1);
}

for (let i = 1; i < 9; i++) {
    const num0 = document.createElement("div");
    const num1 = document.createElement("div");
    const innum0 = document.createElement("div");
    const innum1 = document.createElement("div");
    num0.classList.add("num");
    num1.classList.add("num");
    innum0.classList.add("innum");
    innum1.classList.add("innum");
    innum0.textContent= 9-i;
    innum1.textContent= 9-i;
    num0.appendChild(innum0);
    num1.appendChild(innum1);
    nums[0].appendChild(num0);
    nums[1].appendChild(num1);
}
}
function pieces(){
const sqlist =  document.querySelectorAll(".square");
// black pieces
const bbpl = ["br","bb","bn","bq","bk","bn","bb","br"];

for(i=48;i<56;i++){
    const bp = document.createElement("button");
    bp.classList.add("bp");
    bp.classList.add("piece");
    bp.classList.add("bpiece");
    sqlist[i].appendChild(bp);
}
for(i=56;i<64;i++){
    if (bbpl[i-56]=="br"){
        const br = document.createElement("button");
        br.classList.add("br");
        br.classList.add("piece");
        br.classList.add("bpiece");
        sqlist[i].appendChild(br);
    }else if(bbpl[i-56]=="bb"){
        const bb = document.createElement("button");
        bb.classList.add("bb");
        bb.classList.add("piece");
        bb.classList.add("bpiece");
        sqlist[i].appendChild(bb);
    }else if(bbpl[i-56]=="bn"){
        const bn = document.createElement("button");
        bn.classList.add("bn");
        bn.classList.add("piece");
        bn.classList.add("bpiece");
        sqlist[i].appendChild(bn);
    }else if(bbpl[i-56]=="bq"){
        const bq = document.createElement("button");
        bq.classList.add("bq");
        bq.classList.add("piece");
        bq.classList.add("bpiece");
        sqlist[i].appendChild(bq);
    }else{
        const bk = document.createElement("button");
        bk.classList.add("bk");
        bk.classList.add("piece");
        bk.classList.add("bpiece");
        sqlist[i].appendChild(bk);
    }
}
// white pieces
const wbpl = ["wr","wb","wn","wq","wk","wn","wb","wr"];
for(i=8;i<16;i++){
    const wp = document.createElement("button");
    wp.classList.add("wp");
    wp.classList.add("piece");
    wp.classList.add("wpiece");
    sqlist[i].appendChild(wp);
}
for(i=0;i<8;i++){
    if (wbpl[i]=="wr"){
        const wr = document.createElement("button");
        wr.classList.add("wr");
        wr.classList.add("piece");
        wr.classList.add("wpiece");
        sqlist[i].appendChild(wr);
    }else if(wbpl[i]=="wb"){
        const wb = document.createElement("button");
        wb.classList.add("wb");
        wb.classList.add("piece");
        wb.classList.add("wpiece");
        sqlist[i].appendChild(wb);
    }else if(wbpl[i]=="wn"){
        const wn = document.createElement("button");
        wn.classList.add("wn");
        wn.classList.add("piece");
        wn.classList.add("wpiece");
        sqlist[i].appendChild(wn);
    }else if(wbpl[i]=="wq"){
        const wq = document.createElement("button");
        wq.classList.add("wq");
        wq.classList.add("piece");
        wq.classList.add("wpiece");
        sqlist[i].appendChild(wq);
    }else{
        const wk = document.createElement("button");
        wk.classList.add("wk");
        wk.classList.add("piece");
        wk.classList.add("wpiece");
        sqlist[i].appendChild(wk);
    }
} 
let pieces=document.querySelectorAll(".piece")
i=0
pieces.forEach(p=>{
    p.setAttribute("id",`dp-${i}`)
    p.setAttribute("draggable",true)
    p.addEventListener("dragstart",function(ev){
        ev.dataTransfer.setData("text",ev.target.id)
    })
    i++
})
}
//add objects each related to sqlist square maybe usefull for database update  
function checkbw(){
    const sqlist =  document.querySelectorAll(".square");
    sqlist.forEach(sq=>{
        if(sq.childNodes[0] && sq.childNodes[0].length!=1 && (sq.childNodes[0].classList.contains("piece") || sq.childNodes[0].classList.contains("khl") ) ){
            sq.classList.remove("empty")
            sq.classList.add("occupied")
        }
        else{
            sq.classList.remove("occupied")
            sq.classList.add("empty")
        }
    })
}
function rotate(deg){
    const co=document.querySelector(".co");
    const letters = document.querySelectorAll(".inlet");
    const nums = document.querySelectorAll(".innum");
    const ps=document.querySelectorAll(".piece");
    co.style.transform = `rotate(${deg}deg)`;
    ps.forEach(p=>{p.style.transform = `rotate(${-deg}deg)`})
    nums.forEach(n=>{n.style.transform = `rotate(${-deg}deg)`})
    letters.forEach(l=>{l.style.transform = `rotate(${-deg}deg)`})
}
function dragdrop() {
    const upb = [] ;for(i=1;i<9;i++){upb.push(document.querySelector(`.p-${i+"-"+8}`))}
    const upw = [] ;for(i=1;i<9;i++){upw.push(document.querySelector(`.p-${i+"-"+1}`))}
    let squares=document.querySelectorAll(".square")
    squares.forEach(sq=>{
        sq.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
        sq.addEventListener("drop",function(ev){
            ev.preventDefault()
            let data = ev.dataTransfer.getData("text");
            let dele = document.getElementById(data)
            bkpos=document.querySelector(".bk").parentElement
            wkpos=document.querySelector(".wk").parentElement

            if(sq.childNodes[0]!=null && sq.childNodes[0].classList.contains("hl")){
                let initpos=dele.parentElement
                sq.appendChild(dele);
                sq.childNodes[0].remove()
                mvaud.play();
                checkbw()
               
                if(!nottargeted(null,bkpos,"wq","wr","wb","wn","wp") && dele.classList.contains("bpiece")/*&& nottargeted(null,wkpos,"bq","br","bb","bn","bp")*/){
                    initpos.appendChild(dele)
                }

            }else if (sq.childNodes[0]!=null && sq.childNodes[0].classList.contains("khl") && nottargeted(null,bkpos,"wq","wr","wb","wn","wp") /*&& nottargeted(null,wkpos,"bq","br","bb","bn","bp")*/){
                sq.appendChild(dele);
                sq.childNodes[0].remove()
                cpaud.play();
            }else{
                if(dele!=null){dele.style.position = 'initial';}
            } 
            if(dele?.classList.contains("bp")){up(dele,"bp",list=["ubq","ubn","ubb","ubr"],upb,1)}
            if(dele?.classList.contains("wp")){up(dele,"wp",list=["uwq","uwn","uwb","uwr"],upw,2)}
            hls=document.querySelectorAll(".hl");khls=document.querySelectorAll(".khl");rm(hls,khls);
            checkbw();
            kdhl();
        })
    })
}
function hlappend(list,piece){
    nlist=[]
    list.forEach(e=>{let pos=document.querySelector(`.${e}`);nlist.push(pos)})
    i=0
    while(i!=nlist.length && nlist[i].classList[nlist[i].classList.length-1] !="occupied"){
        let hl = document.createElement("button")
        hl.classList.add("hl")
        nlist[i].appendChild(hl)
        i++
    }
    if(nlist[i] && nlist[i].childNodes[0].classList.contains(piece)){
        let khl = document.createElement("button")
        khl.classList.add("khl")
        nlist[i].appendChild(khl)
    }
}
function move(piece,pos,hl,k){
    pos.appendChild(hl);
    hls=document.querySelectorAll(".hl")
    khls=document.querySelectorAll(".khl")
    if(k){hl.appendChild(pos.childNodes[0])}
    hl.onclick=function(){
        if(k){
            pos.childNodes[0].remove()
            khls=document.querySelectorAll(".khl")
            khls.forEach(kelem=>{if(kelem!=null){kelem.parentElement.appendChild(kelem.childNodes[0]);kelem.remove()}})
            cpaud.play();
        }else{
            mvaud.play();
        }
        pos.appendChild(piece)
        hls.forEach(hl=>{hl.remove()})
        khls=document.querySelectorAll(".khl")
        khls.forEach(kelem=>{
        if(kelem!=null){kelem.parentElement.appendChild(kelem.childNodes[0]);kelem.remove()}})
        checkbw()
        bk=document.querySelector(".bk");bk.classList.remove("kdanger")
        wk=document.querySelector(".wk");wk.classList.remove("kdanger")
        kdhl()
    }
}
function kdhl(){
    bk=document.querySelector(".bk");bkpos=bk.parentElement
    wk=document.querySelector(".wk");wkpos=wk.parentElement
    if(!nottargeted(null,bkpos,"wq","wr","wb","wn","wp")){
        bk.classList.add("kdanger")
    }
    if(!nottargeted(null,wkpos,"bq","br","bb","bn","bp")){
        wk.classList.add("kdanger")
    }
}
function rm(hls,khls){
    if(hls!=null){hls.forEach(hl=>{hl.remove()})}
    if(khls!=null){khls.forEach(ke=>{ke.parentElement.appendChild(ke.childNodes[0]);ke.remove()})}
    let bk=document.querySelector(".bk");bk.classList.remove("kdanger")
    let wk=document.querySelector(".wk");wk.classList.remove("kdanger")
}
function up(piece,pc,list,ulist,tnum){
    ulist.forEach(e=>{
        if(e.childNodes[0]&&e.childNodes[0].classList.contains(pc)){
            co=document.querySelector(".up")
            co.innerHTML=""
            co.style.display="grid"
            co.parentElement.style.zIndex="4"
            list.forEach(e=>{let op = document.createElement("button");op.classList.add(e,"upiece");co.appendChild(op)})
            let olist = document.querySelectorAll(".upiece")
            olist.forEach(e=>{
                e.onclick=function(){
                    cp=document.createElement("button")
                    cp.classList.add(`${e.classList[0][1]+e.classList[0][2]}`,"piece",piece.classList[2])
                    cp.setAttribute("id",piece.id)
                    cp.setAttribute("draggable",true)
                    cp.addEventListener("dragstart",function(ev){ev.dataTransfer.setData("text",ev.target.id)})
                    piece.parentElement.appendChild(cp)
                    piece.remove()
                    co.parentElement.style.zIndex="0"
                    co.style.display="none"
                    gameplay(tnum);
                }
            })
        }
    })
}
function wbp(piece,enemy,fpos,lfpos,rfpos,ffpos,ffl){  
    if(fpos){
        if(ffpos !=null && ffpos.classList.contains("empty") && fpos.classList.contains("empty")){
            if (ffl.includes(piece.parentElement)){
                let highlight = document.createElement('button');
                highlight.classList.add('hl');
                move(piece,ffpos,highlight,false)
            } 
        }
        if(fpos.classList.contains("empty")){
            let highlight = document.createElement('button');
            highlight.classList.add('hl');
            move(piece,fpos,highlight,false)
        }
    }
    if(lfpos && lfpos.childNodes[0]){
        if(lfpos.classList.contains("occupied") && lfpos.childNodes[0].classList.contains(enemy)){
            let khighlight2 = document.createElement('button');
            khighlight2.classList.add('khl');
            move(piece,lfpos,khighlight2,true)
        }
    }
    if(rfpos && rfpos.childNodes[0]){
        if(rfpos.classList.contains("occupied")&& rfpos.childNodes[0].classList.contains(enemy)){
            let khighlight1 = document.createElement('button');
            khighlight1.classList.add('khl');
            move(piece,rfpos,khighlight1,true)
        }
    }
}
function wbr(piece,enemy){
    let xpos = parseInt(piece.parentElement.classList[1].split('-')[1])
    let ypos = parseInt(piece.parentElement.classList[1].split('-')[2])
    let plistleft=[];plistright=[];plistup=[];plistdown=[]
    let i=xpos;j=ypos;
    let sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleft.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistright.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    hlappend(plistleft,enemy)
    hlappend(plistright,enemy)
    hlappend(plistup,enemy)
    hlappend(plistdown,enemy)          
    hls=document.querySelectorAll(".hl") 
    khls=document.querySelectorAll(".khl")
    hls.forEach(hl=>{move(piece,hl.parentElement,hl,false)})
    khls.forEach(khl=>{move(piece,khl.parentElement,khl,true)}) 
}
function wbb(piece,enemy){
    let xpos = parseInt(piece.parentElement.classList[1].split('-')[1])
    let ypos = parseInt(piece.parentElement.classList[1].split('-')[2])
    let plistleftup=[];plistrightup=[];plistleftdown=[];plistrightdown=[]
    let i=xpos;j=ypos
    let sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleftup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleftdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistrightdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistrightup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    hlappend(plistleftup,enemy)
    hlappend(plistrightup,enemy)
    hlappend(plistleftdown,enemy)
    hlappend(plistrightdown,enemy)          
    hls=document.querySelectorAll(".hl") 
    khls=document.querySelectorAll(".khl")
    hls.forEach(hl=>{move(piece,hl.parentElement,hl,false)})
    khls.forEach(khl=>{move(piece,khl.parentElement,khl,true)})
}
function wbn(piece,enemy){
    let xpos = parseInt(piece.parentElement.classList[1].split('-')[1])
    let ypos = parseInt(piece.parentElement.classList[1].split('-')[2])
    let plist=[]
    plist.push(document.querySelector(`.p-${(xpos+2)+"-"+(ypos+1)}`))
   plist.push(document.querySelector(`.p-${(xpos+2)+"-"+(ypos-1)}`))
    plist.push(document.querySelector(`.p-${(xpos-2)+"-"+(ypos+1)}`))
    plist.push(document.querySelector(`.p-${(xpos-2)+"-"+(ypos-1)}`))
    plist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos+2)}`))
    plist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos+2)}`))
    plist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos-2)}`))
    plist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos-2)}`))
    plist.forEach(e=>{
        if(e!=null){
            if(e.classList[e.classList.length-1] !="occupied"){
                let hl = document.createElement("button")
                hl.classList.add("hl")
                e.appendChild(hl)
            }else if(e.childNodes[0].classList[2]==enemy){
                let khl = document.createElement("button")
                khl.classList.add("khl")
                e.appendChild(khl)
            }
        }
    })
    hls=document.querySelectorAll(".hl") 
    khls=document.querySelectorAll(".khl")
    hls.forEach(hl=>{move(piece,hl.parentElement,hl,false)})
    khls.forEach(khl=>{move(piece,khl.parentElement,khl,true)}) 
}
function wbq(piece,enemy){
    let xpos = parseInt(piece.parentElement.classList[1].split('-')[1])
    let ypos = parseInt(piece.parentElement.classList[1].split('-')[2])
    let plistleft=[];plistright=[];plistup=[];plistdown=[]
    let plistleftup=[];plistrightup=[];plistleftdown=[];plistrightdown=[]
    let i=xpos;j=ypos;
    let sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleft.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistright.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleftup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleftdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistrightdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistrightup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    hlappend(plistleft,enemy)
    hlappend(plistright,enemy)
    hlappend(plistup,enemy)
    hlappend(plistdown,enemy) 
    hlappend(plistleftup,enemy)
    hlappend(plistrightup,enemy)
    hlappend(plistleftdown,enemy)
    hlappend(plistrightdown,enemy)          
    hls=document.querySelectorAll(".hl") 
    khls=document.querySelectorAll(".khl")
    hls.forEach(hl=>{move(piece,hl.parentElement,hl,false)})
    khls.forEach(khl=>{move(piece,khl.parentElement,khl,true)}) 
}
function wbk(piece,enemy,eq,er,eb,en,ep){
    let xpos = parseInt(piece.parentElement.classList[1].split('-')[1])
    let ypos = parseInt(piece.parentElement.classList[1].split('-')[2])
    let plist=[];safelist=[]
    plist.push(document.querySelector(`.p-${(xpos)+"-"+(ypos+1)}`))
    plist.push(document.querySelector(`.p-${(xpos)+"-"+(ypos-1)}`))
    plist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos)}`))
    plist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos)}`))
    plist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos+1)}`))
    plist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos-1)}`))
    plist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos+1)}`))
    plist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos-1)}`))
    plist.forEach(p=>{
        if(p && nottargeted(piece.parentElement,p,eq,er,eb,en,ep)){
            safelist.push(p)
        }
    })

    safelist.forEach(e=>{
        if(e!=null){
            if(e.classList[e.classList.length-1] !="occupied"){
                let hl = document.createElement("button")
                hl.classList.add("hl")
                e.appendChild(hl)
            }else if(e.childNodes[0].classList[2]==enemy){
                let khl = document.createElement("button")
                khl.classList.add("khl")
                e.appendChild(khl)
            }
        }
    })
    hls=document.querySelectorAll(".hl") 
    khls=document.querySelectorAll(".khl")
    hls.forEach(hl=>{move(piece,hl.parentElement,hl,false)})
    khls.forEach(khl=>{move(piece,khl.parentElement,khl,true)}) 
}
function straightcheck(list,eq,er){
    nlist=[];list.forEach(e=>{let pos=document.querySelector(`.${e}`);nlist.push(pos)});i=0
    while(i!=nlist.length && !nlist[i].classList.contains("occupied")){i++}
        if(nlist[i]&&(nlist[i].childNodes[0].classList.contains(eq) || nlist[i].childNodes[0].classList.contains(er))){
            return false
        }else if (nlist[i]&&nlist[i].childNodes[0]&&nlist[i].childNodes[0].childNodes[0]&&(nlist[i].childNodes[0].childNodes[0].classList.contains(eq) || nlist[i].childNodes[0].childNodes[0].classList.contains(er))){
            console.log("danger")
            return false
        }
        else{
            return true
        }

} 
function diagonalcheck(list,eq,eb){
    nlist=[];list.forEach(e=>{let pos=document.querySelector(`.${e}`);nlist.push(pos)});i=0
    while(i!=nlist.length && !nlist[i].classList.contains("occupied")){i++}
    
        if(nlist[i]&&(nlist[i].childNodes[0]?.classList.contains(eq) || nlist[i].childNodes[0]?.classList.contains(eb))){
            return false
        }else{
            return true
        }
}
function nightchek(plist,en){
    let list=[];plist.forEach(p=>{if(p!=null){list.push(p)}})
    for(let i=0;i<list.length;i++){
        if(list[i].childNodes[0]!=null && list[i].childNodes[0].classList.contains(en)){
            return false
        }
    }
    return true
}
function pawncheck(plist,ep){
    let list=[];plist.forEach(p=>{if(p!=null){list.push(p)}})
    for(let i=0;i<list.length;i++){
        if(list[i].childNodes[0]!=null && list[i].childNodes[0].classList.contains(ep)){
            return false
        }
    }
    return true
}
function nottargeted(kpos,mvpos,eq,er,eb,en,ep){
    if(kpos!=null){
        kpos.classList.remove("occupied")
        kpos.classList.add("empty")
    }
    let xpos = parseInt(mvpos.classList[1].split('-')[1])
    let ypos = parseInt(mvpos.classList[1].split('-')[2])
    //biqueen
    let plistleftup=[];plistrightup=[];plistleftdown=[];plistrightdown=[];plistleft=[];plistright=[];plistup=[];plistdown=[]
    let i=xpos;j=ypos
    let sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleftup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleftdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistrightdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistrightup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    //rkqueen
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistleft.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){j++;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistup.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){j--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistdown.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    sq=document.querySelector(`.p-${(xpos)+"-"+(ypos)}`)
    while(sq!=null){i--;sq=document.querySelector(`.p-${i+"-"+j}`);if(sq!=null){plistright.push(sq.classList[1])};if(sq==null){i=xpos;j=ypos}}
    //night
    let nplist=[]
    nplist.push(document.querySelector(`.p-${(xpos+2)+"-"+(ypos+1)}`))
    nplist.push(document.querySelector(`.p-${(xpos+2)+"-"+(ypos-1)}`))
    nplist.push(document.querySelector(`.p-${(xpos-2)+"-"+(ypos+1)}`))
    nplist.push(document.querySelector(`.p-${(xpos-2)+"-"+(ypos-1)}`))
    nplist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos+2)}`))
    nplist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos+2)}`))
    nplist.push(document.querySelector(`.p-${(xpos+1)+"-"+(ypos-2)}`))
    nplist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos-2)}`))
    //pawns
    let pplist=[]
    if(ep=="wp"){
        pplist.push(document.querySelector(`.p-${+(xpos+1)+"-"+(ypos+1)}`))
        pplist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos+1)}`))
    }else{
        pplist.push(document.querySelector(`.p-${+(xpos+1)+"-"+(ypos-1)}`))
        pplist.push(document.querySelector(`.p-${(xpos-1)+"-"+(ypos-1)}`))
    }
    if(pawncheck(pplist,ep)&&nightchek(nplist,en)&&straightcheck(plistleft,eq,er)&&straightcheck(plistright,eq,er)&&straightcheck(plistup,eq,er)&&straightcheck(plistdown,eq,er)&&diagonalcheck(plistleftup,eq,eb)&&diagonalcheck(plistrightup,eq,eb)&&diagonalcheck(plistleftdown,eq,eb)&&diagonalcheck(plistrightdown,eq,eb)){
        return true
    }else{
        return false
    }    
}
function gameplay(tnum){
    let bps = document.querySelectorAll(".bp");
    let wps = document.querySelectorAll(".wp");
    let brs = document.querySelectorAll(".br");
    let wrs = document.querySelectorAll(".wr");
    let bbs = document.querySelectorAll(".bb");
    let wbs = document.querySelectorAll(".wb");
    let bns = document.querySelectorAll(".bn");
    let wns = document.querySelectorAll(".wn");
    let bqs = document.querySelectorAll(".bq");
    let wqs = document.querySelectorAll(".wq");
    let bk = document.querySelector(".bk");
    let wk = document.querySelector(".wk");
    //pawns
    bps.forEach(bp=>{
        bp.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls);
            if(tnum%2==0){
                let xpos = parseInt(bp.parentElement.classList[1].split('-')[1])
                let ypos = parseInt(bp.parentElement.classList[1].split('-')[2])
                let frontpos =document.querySelector(`.p-${xpos+"-"+(ypos+1)}`)
                let ffrontpos =document.querySelector(`.p-${xpos+"-"+(ypos+2)}`)
                let frontrightpos=document.querySelector(`.p-${+(xpos+1)+"-"+(ypos+1)}`)
                let frontleftpos=document.querySelector(`.p-${(xpos-1)+"-"+(ypos+1)}`)
                let list1=[],list2=[]
                for(i=1;i<9;i++){list1.push(document.querySelector(`.p-${i+"-"+2}`))}
                for(i=1;i<9;i++){list2.push(document.querySelector(`.p-${i+"-"+8}`))}
                wbp(bp,"wpiece",frontpos,frontleftpos,frontrightpos,ffrontpos,list1,list2)
            }
            let ulist = [] ;for(i=1;i<9;i++){ulist.push(document.querySelector(`.p-${i+"-"+8}`))}
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            let bkpos=document.querySelector(".bk").parentElement
            hls.forEach(e=>{e.addEventListener('click', ()=>{if(nottargeted(null,bkpos,"wq","wr","wb","wn","wp")){tnum--};up(bp,"bp",list=["ubq","ubn","ubb","ubr"],ulist,1)})})
            khls.forEach(o=>{o.addEventListener('click', ()=>{if(nottargeted(null,bkpos,"wq","wr","wb","wn","wp")){tnum--};up(bp,"bp",list=["ubq","ubn","ubb","ubr"],ulist,1)})})
        }
        bp.addEventListener("dragstart",()=>{
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls);
            if(tnum%2==0){
                let xpos = parseInt(bp.parentElement.classList[1].split('-')[1])
                let ypos = parseInt(bp.parentElement.classList[1].split('-')[2])
                let frontpos =document.querySelector(`.p-${xpos+"-"+(ypos+1)}`)
                let ffrontpos =document.querySelector(`.p-${xpos+"-"+(ypos+2)}`)
                let frontrightpos=document.querySelector(`.p-${+(xpos+1)+"-"+(ypos+1)}`)
                let frontleftpos=document.querySelector(`.p-${(xpos-1)+"-"+(ypos+1)}`)
                let list1=[],list2=[]
                for(i=1;i<9;i++){list1.push(document.querySelector(`.p-${i+"-"+2}`))}
                for(i=1;i<9;i++){list2.push(document.querySelector(`.p-${i+"-"+8}`))}
                wbp(bp,"wpiece",frontpos,frontleftpos,frontrightpos,ffrontpos,list1,list2)
            }
            let ulist = [] ;for(i=1;i<9;i++){ulist.push(document.querySelector(`.p-${i+"-"+8}`))}
            let bkpos=document.querySelector(".bk").parentElement
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{if(nottargeted(null,bkpos,"wq","wr","wb","wn","wp")){tnum--}})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{if(nottargeted(null,bkpos,"wq","wr","wb","wn","wp")){tnum--}})})
        })
    });
    wps.forEach(wp=>{
        wp.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls);
            if(tnum%2!=0){
                let xpos = parseInt(wp.parentElement.classList[1].split('-')[1])
                let ypos = parseInt(wp.parentElement.classList[1].split('-')[2])
                let frontrightpos=document.querySelector(`.p-${+(xpos+1)+"-"+(ypos-1)}`)
                let ffrontpos =document.querySelector(`.p-${xpos+"-"+(ypos-2)}`)
                let frontleftpos=document.querySelector(`.p-${(xpos-1)+"-"+(ypos-1)}`)
                let frontpos =document.querySelector(`.p-${xpos+"-"+(ypos-1)}`)
                let list1=[],list2=[]
                for(i=1;i<9;i++){list1.push(document.querySelector(`.p-${i+"-"+7}`))}
                for(i=1;i<9;i++){list2.push(document.querySelector(`.p-${i+"-"+1}`))}
                wbp(wp,"bpiece",frontpos,frontleftpos,frontrightpos,ffrontpos,list1,list2)
            }
            let ulist=[]; for(i=1;i<9;i++){ulist.push(document.querySelector(`.p-${i+"-"+1}`))}
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            let wkpos=document.querySelector(".wk").parentElement
            hls.forEach(e=>{e.addEventListener('click', ()=>{if(nottargeted(null,wkpos,"bq","br","bb","bn","bp")){tnum++};up(wp,"wp",list=["uwq","uwn","uwb","uwr"],ulist,2)})})
            khls.forEach(o=>{o.addEventListener('click', ()=>{if(nottargeted(null,wkpos,"bq","br","bb","bn","bp")){tnum++};up(wp,"wp",list=["uwq","uwn","uwb","uwr"],ulist,2)})}) 
        }
        wp.addEventListener("dragstart",()=>{
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls);
            if(tnum%2!=0){
                let xpos = parseInt(wp.parentElement.classList[1].split('-')[1])
                let ypos = parseInt(wp.parentElement.classList[1].split('-')[2])
                let frontrightpos=document.querySelector(`.p-${+(xpos+1)+"-"+(ypos-1)}`)
                let ffrontpos =document.querySelector(`.p-${xpos+"-"+(ypos-2)}`)
                let frontleftpos=document.querySelector(`.p-${(xpos-1)+"-"+(ypos-1)}`)
                let frontpos =document.querySelector(`.p-${xpos+"-"+(ypos-1)}`)
                let list1=[],list2=[]
                for(i=1;i<9;i++){list1.push(document.querySelector(`.p-${i+"-"+7}`))}
                for(i=1;i<9;i++){list2.push(document.querySelector(`.p-${i+"-"+1}`))}
                wbp(wp,"bpiece",frontpos,frontleftpos,frontrightpos,ffrontpos,list1,list2)
            }
            let ulist = [] ;for(i=1;i<9;i++){ulist.push(document.querySelector(`.p-${i+"-"+8}`))}
            let wkpos=document.querySelector(".wk").parentElement
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{if(nottargeted(null,wkpos,"bq","br","bb","bn","bp")){tnum++}})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{if(nottargeted(null,wkpos,"bq","br","bb","bn","bp")){tnum++}})})
        })
    });
    //rooks
    brs.forEach(br=>{
        br.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbr(br,"wpiece")  
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum--})}) 
        }
        br.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbr(br,"wpiece")  
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum--})}) 
        })
    });
    wrs.forEach(wr=>{
        wr.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbr(wr,"bpiece")            
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum++})}) 
        }
        wr.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbr(wr,"bpiece")            
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum++})}) 
        })
    });
    //bs
    bbs.forEach(bb=>{
        bb.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbb(bb,"wpiece")
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum--})}) 
        }
        bb.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbb(bb,"wpiece")  
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum--})}) 
        })
    });
    wbs.forEach(wb=>{
        wb.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbb(wb,"bpiece")   
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum++})}) 
        }
        wb.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbb(wb,"bpiece")            
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum++})}) 
        })
    });
    //ns
    bns.forEach(bn=>{
        bn.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbn(bn,"wpiece")
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum--})}) 
        }
        bn.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbn(bn,"wpiece")  
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum--})}) 
        })


    });
    wns.forEach(wn=>{
        wn.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbn(wn,"bpiece")   
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum++})}) 
        }
        wn.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbn(wn,"bpiece")            
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum++})}) 
        })
    });
    //qs
    bqs.forEach(bq=>{
        bq.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbq(bq,"wpiece")  
            } 
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");  khls.forEach(o=>{o.addEventListener('click', ()=>{tnum--})}) 
        }
        bq.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2==0){
                wbq(bq,"wpiece")  
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum--})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum--})}) 
        })
    });
    wqs.forEach(wq=>{  
        wq.onclick=function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbq(wq,"bpiece")            
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum++})}) 
        }
        wq.addEventListener("dragstart",function(){
            hls=document.querySelectorAll(".hl")
            khls=document.querySelectorAll(".khl")
            rm(hls,khls)
            if(tnum%2!=0){
                wbq(wq,"bpiece")            
            }
            hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum++})})
            khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum++})}) 
        })
    });
    //ks
    bk.onclick=function(){
        hls=document.querySelectorAll(".hl")
        khls=document.querySelectorAll(".khl")
        kd=document.querySelector(".kdangr")
        if(kd!=null){kd.parentElement.appendChild(kd.childNodes[0]);kd.remove()}
        rm(hls,khls)
        if(tnum%2==0){
            wbk(bk,"wpiece","wq","wr","wb","wn","wp")  
        }
        hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('click', ()=>{tnum--})})
        khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('click', ()=>{tnum--})}) 
    }  
    bk.addEventListener("dragstart",function(){
        hls=document.querySelectorAll(".hl")
        khls=document.querySelectorAll(".khl")
        rm(hls,khls)
        if(tnum%2==0){
            wbk(bk,"wpiece","wq","wr","wb","wn","wp") 
        }
        hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum--})})
        khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum--})}) 
    })
    wk.onclick=function(){
        hls=document.querySelectorAll(".hl")
        khls=document.querySelectorAll(".khl")
        rm(hls,khls)
            if(tnum%2!=0){
                wbk(wk,"bpiece","bq","br","bb","bn","bp")            
            }
        hls=document.querySelectorAll(".hl")
        khls=document.querySelectorAll(".khl")
        hls.forEach(e=>{e.addEventListener('click', ()=>{tnum++})})
        khls.forEach(o=>{o.addEventListener('click', ()=>{tnum++})}) 
    }
    wk.addEventListener("dragstart",function(){
        hls=document.querySelectorAll(".hl")
        khls=document.querySelectorAll(".khl")
        rm(hls,khls)
        if(tnum%2!=0){
            wbk(wk,"bpiece","bq","br","bb","bn","bp")              
        }
        hls=document.querySelectorAll(".hl");hls.forEach(e=>{e.addEventListener('drop', ()=>{tnum++})})
        khls=document.querySelectorAll(".khl");khls.forEach(o=>{o.addEventListener('drop', ()=>{tnum++})}) 
    })
}
playground(board,letters,nums);
pieces();
checkbw();
kdhl();
gameplay(1);
dragdrop();
reset.onclick=function(){
    ps=document.querySelectorAll(".piece")
    hls=document.querySelectorAll(".hl")
    khls=document.querySelectorAll(".khl")
    rm(hls,khls);
    ps.forEach(p=>{p.remove();})
    pieces();
    checkbw();
    gameplay(1);
}
