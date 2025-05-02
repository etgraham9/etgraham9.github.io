$(document).ready(function () {
    $('.gallery img').on('click', function () {
      const src = $(this).attr('src');
      const lightbox = `<div id="lightbox" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;display:flex;align-items:center;justify-content:center;">
                          <img src="${src}" style="max-width:80%; max-height:80%;">
                        </div>`;
      $('body').append(lightbox);
      $('#lightbox').on('click', function () {
        $(this).remove();
      });
    });
  });
  