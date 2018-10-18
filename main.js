(function(){
    const size = 800;
    //get data
    const data = getData(30,0);
    //random position
    randomPosition(data,size);
    //render
    let cav = document.getElementById('forceMap');
    let ctx = cav.getContext('2d');
    //force algorithm
    force(data,ctx,size);
})();

/**
 * @desc generate data
 */
function getData(num, exLink){
    const data = {nodes:new Array(num).fill(1),links:[]};
    data.nodes = data.nodes.map((d,id)=>{
        return{
            id,
            name: d,
            position: [0,0],
            childs: []
        }
    });
    data.nodes.forEach((d,i) => {
        if(d.id!=0){
            data.links.push({
                source: 0,
                target: d.id,
                sourceNode: data.nodes[0],
                targetNode: d
            });
        }
    });

    const randomLink = () => {
        data.nodes.sort(() => 0.5-Math.random());
        data.links.push({
            source: data.nodes[0].id,
            target: data.nodes[1].id,
            sourceNode: data.nodes[0],
            targetNode: data.nodes[1]
        });
    }

    for(let i=0; i<exLink;i++){
        randomLink();
    }

    const obj = {};
    data.nodes.forEach(d => {
        if(!obj[d.id]){
            obj[d.id] = d;
        }
    });
    data.links.forEach(d=>{
        obj[d.source].childs.push(d.targetNode);
        obj[d.target].childs.push(d.sourceNode);
    });
    return data;
}

/**
 * @desc getRandomNum
 */
function getRandom(min,max){
    return Math.floor(min+Math.random()*(max-min));
}

/**
 * @desc randomPosition
 * @param data 
 * @param size size of canvas
 */
function randomPosition(data,size){
    const {nodes,links} = data;
    nodes.forEach(d => {
        let x = getRandom(0,size);
        let y = getRandom(0,size);
        d.position = [x,y];
    });
}
/**
 * @desc render
 * @param {*} ctx 
 * @param {*} data 
 * @param {*} size 
 */
function render(ctx,data,size){
    ctx.clearRect(0,0,size,size);
    const box = 20;
    ctx.fillStyle = '#FF0000';
    data.links.forEach(d=>{
        let {sourceNode,targetNode} = d;
        let [x1,y1] = sourceNode.position;
        let [x2,y2] = targetNode.position;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.closePath();
        ctx.stroke();
    });
    data.nodes.forEach(d => {
        let [x,y] = d.position;
        ctx.fillText(d.id,x,y+box);
        ctx.fillRect(x - box / 2, y - box / 2, box, box);
    })
}

/**
 * @desc force-algoithm
 * @param {*} data 
 * @param {*} ctx 
 * @param {*} size 
 */
function force(data,ctx,size){
    const {nodes,links} = data;

    const maxInterval = 300;
    const maxOffset = 10;
    const minOffset = 0;
    const count = 100;
    const attenuation = 40;

    const doforce = () => {
        nodes.forEach( d => {
            let [x1,y1] = d.position;
            nodes.forEach(e=>{
                if(d.id === e.id){
                    return;
                }
                let [x2,y2] = e.position;
                let interval = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));

                let forceOffset = 0;
                let x3,y3;
                if( interval>maxInterval ){
                    forceOffset = (interval-maxInterval)/attenuation;
                    forceOffset = forceOffset > maxOffset ? maxOffset : forceOffset;
                    forceOffset = forceOffset < minOffset ? minOffset : forceOffset;
                    forceOffset += e.childs.length/attenuation;

                    let k = forceOffset/interval;
                    x3 = k*(x1-x2)+x2;
                    y3 = k*(y1-y2)+y2;
                }
                else if(interval<maxInterval && interval>0){
                    forceOffset = (maxInterval - interval) / attenuation; // 力衰减
                    forceOffset = forceOffset > maxOffset ? maxOffset : forceOffset;
                    forceOffset = forceOffset < minOffset ? minOffset : forceOffset;
                    forceOffset += e.childs.length / attenuation;
                    let k = forceOffset / (interval + forceOffset);
                    x3 = (k * x1 - x2) / (k - 1);
                    y3 = (k * y1 - y2) / (k - 1);
                }
                else {
                    x3 = x2;
                    y3 = y2;
                }
                x3 > size ? x3 -= 10 : null;
                x3 < 0 ? x3 += 10 : null;
                y3 > size ? y3 -= 10 : null;
                y3 < 0 ? y3 += 10 : null;
                e.position = [x3, y3];
            });
        })
    }

    let countForce = 0;
    const forceRun = () => {
      setTimeout(() => {
        countForce++;
        if (countForce > count) {
          return;
        }
        doforce();
        render(ctx, data, size);
        forceRun();
      }, 1000 / 30)
      // requestAnimationFrame(forceRun);
    }

    forceRun();
}

