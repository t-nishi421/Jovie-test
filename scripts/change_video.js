$(function(){
    const image_button = $(".image-item");
    const video_area = $("#wrapper");

    image_button.on("click", function(){

        // use-itemクラスを移動
        image_button.removeClass("use-item");
        $(this).addClass("use-item");

        // 動画を変更
        const id = $(this).attr("id");
        const video_url = `videos/${id}.mp4`;
        video_area.children('video').attr('src', video_url);
    });
});