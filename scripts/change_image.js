$(function(){
    const image_button = $(".image-item");
    const image_box = $("#image-box")

    image_button.on("click", function(){

        // use-itemクラスを移動
        image_button.removeClass("use-item");
        $(this).addClass("use-item");

        // 画像を変更
        const image_url = "images/display_images/" + $(this).attr("id") + ".png";
        image_box.children('img').attr('src', image_url)
    });
});