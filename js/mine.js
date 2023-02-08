var imgList =Array.from( document.querySelectorAll('.item img'));
var lightboxcontainer = document.querySelector('.lightboxcontainer');
var lightBoxitem = document.querySelector('.lightboxitem');
var nextBtn =document.getElementById('next');
var prvBtn =document.getElementById('previos');
var closeBtn =document.getElementById('close');



var currentSlideindex=0;
for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute('src');
        currentSlideindex=imgList.indexOf(e.target);
          lightBoxitem.style.backgroundImage=`url(${imgSrc})`;
        lightboxcontainer.classList.replace('d-none', 'd-flex')


    })
}

nextBtn.addEventListener('click',  function nextSlideIndex(){
    currentSlideindex++;
    if(currentSlideindex ==imgList.length){
        currentSlideindex=0;
    }
    var imgSrc=imgList[currentSlideindex].getAttribute('src');
    lightBoxitem.style.backgroundImage=`url(${imgSrc})`;
})

prvBtn.addEventListener('click',  function prvSlideIndex(){
    currentSlideindex--;
    if(currentSlideindex <0){
        currentSlideindex = imgList.length -1;
    }
    var imgSrc=imgList[currentSlideindex].getAttribute('src');
    lightBoxitem.style.backgroundImage=`url(${imgSrc})`;
})

closeBtn.addEventListener('click',function(){
    lightboxcontainer.classList.replace('d-flex', 'd-none')
})