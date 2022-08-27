// let date= new Date();
// console.log(date);
setInterval(() => {
    d = new Date()
    // console.log(newdate)
    h= d.getHours();
    minut= d.getMinutes();
    second= d.getSeconds();
//    document.getElementById('date').innertext = h ;
time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + 'on' +  ' ' + d.getDate() + '-' + d.getMonth() + '-' +d.getFullYear()
document.getElementById('date').innerHTML = time ;

}, 1000);