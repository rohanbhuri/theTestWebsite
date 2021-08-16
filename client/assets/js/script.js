let threeDots = document.getElementById('three-dots');
    console.log(threeDots)
threeDots.addEventListener("click",function (event){
    console.log(event);
    document.getElementById('green-box').style.display = 'block'
});
