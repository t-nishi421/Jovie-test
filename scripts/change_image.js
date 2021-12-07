$(function(){
    const image_button = $(".image-item");
    const image_box = $("#image-box")

    image_button.on("click", function(){

        // use-itemクラスを移動
        image_button.removeClass("use-item");
        $(this).addClass("use-item");

        // 画像を変更
        image_box.empty();

        let image_url = "images/display_images/" + $(this).attr("id") + ".png";
        image_box.append('<img src="' + image_url + '" alt="順次追加予定">');
    });
});