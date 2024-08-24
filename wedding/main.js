/*main.js*/
//포토갤러리
$(function(){
    $('.img-list > li > a').on('click', function(e){
        e.preventDefault(); //기본이벤트 제거
        var src = $(this).children().attr('src');
        $('.main-photo > img').attr('src', src);
    })
})

//copy-btn
function copy_to_clipboard(event) {    
    var copyText = event.target.parentNode.previousElementSibling;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('복사되었습니다');
  }     


//스플래쉬 스크린 로딩이벤트
//document.ready()-html이 loading된 후 함수가 실행

$(function() {
});

window.onload = function() {
    //로딩중 지연시간
    setTimeout(function(){
        console.log('3초가 경과함...')
    
        console.log('문서로딩완료!')
        $('.splash-screen').removeClass('on')
    
    }, 3000)
}