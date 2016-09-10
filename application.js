$(document).ready(function(){
    
     $('#music-list').on('click', '.toggleEventList', function(event){
        event.preventDefault();
        var $detailList = $(this).next();
        $detailList.toggle();
    });
});