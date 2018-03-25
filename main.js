
function dragstart(ev) {
 ev.dataTransfer.setData('', ev.target.id);
}

function drop(ev) {
 ev.preventDefault();
 var squareId=ev.target.id;
 var colorId=squareId.split('-');
 var data = ev.dataTransfer.getData('');
 var colorData=data.split('-');
 if(colorId[0]===colorData[0])
 {
   ev.target.appendChild(document.getElementById(data));
   $("#"+data+"").css('margin',"45px ");
 }

}

function dragover(ev) {
 ev.preventDefault();
}
