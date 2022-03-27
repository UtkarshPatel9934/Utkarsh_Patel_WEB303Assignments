$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '800px',
            height: '450px',
            opacity: 100
        });
        // $content.addClass("img_");
        //modal code goes here
        e.preventDefault();
        (function (someParameter) {
            console.log(someParameter);
            // Remove modal content from page and store in $content
            var $content_ = $content.detach();
            var modal = new Modal();
            // Click handler calls open() method of modal object
            
            modal.open({
                content: $content_,
                width: 800,
                height: 'auto',
            });
        })("ValuePassedIn");
        var $h1 = `<h1>Utkarsh Patel's Photo Gallery</h1>`;
        $('.modal').prepend($h1);
        $h1.addClass("modalHead");
    });
});


