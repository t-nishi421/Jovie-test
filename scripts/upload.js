// コードは下記より引用して作成
// 【ドラッグ&ドロップでファイルアップロードする】
// http://bashalog.c-brains.jp/20/03/30-170110.php

$(function(){

    var dropZone = document.getElementById('drop-zone');
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('file-input');

    dropZone.addEventListener('dragover', function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.style.background = '#e1e7f0';
    }, false);

    dropZone.addEventListener('dragleave', function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.style.background = '#e7e7e7';
    }, false);

    fileInput.addEventListener('change', function () {
        previewFile(this.files[0]);
    });

    dropZone.addEventListener('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.style.background = '#e7e7e7'; //背景色を白に戻す
        var files = e.dataTransfer.files; //ドロップしたファイルを取得
        if (files.length > 1) return alert('アップロードできるファイルは1つだけです。');
        fileInput.files = files; //inputのvalueをドラッグしたファイルに置き換える。
        previewFile(files[0]);
    }, false);

    function previewFile(file) {
        /* FileReaderで読み込み、プレビュー画像を表示。 */
        var fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function() {
            var video = document.createElement('video');
            video.setAttribute('src', fr.result);
            video.setAttribute('controls', '');
            video.setAttribute('style', 'height:350px;');
            preview.innerHTML = '';
            preview.appendChild(createInputTitle());
            preview.appendChild(video);
            preview.appendChild(createInputDescription());
            preview.after(createsubmit());
        };
    }

    function createInputTitle() {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'video-title');
        input.setAttribute('id', 'video-title');
        input.setAttribute('placeholder', '動画のタイトルを入力');
        return input
    }

    function createInputDescription() {
        let textarea = document.createElement('textarea');
        textarea.setAttribute('name', 'video-description');
        textarea.setAttribute('id', 'video-description');
        textarea.setAttribute('cols', '66');
        textarea.setAttribute('rows', '10');
        textarea.setAttribute('placeholder', '動画の詳細を入力');
        return textarea
    }

    function createsubmit() {
        let submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submit');
        return submit
    }
});