var A = "custom";
var B;


function updateResult(result) {
    var $display = "http://res.cloudinary.com/demo/image/upload/e_style_transfer,l_#art_image#/#use-img#.jpg"
    var $urldisplay = "http://res.cloudinary.com/demo/image/upload/e_style_transfer,l_#art_image#/#use-img#.jpg"
    var $linkdisplay = "http://res.cloudinary.com/demo/image/upload/e_style_transfer,l_#art_image#/#use-img#.jpg"
    var $userpic = "http://res.cloudinary.com/demo/image/upload/w_100,h_100,c_pad,dpr_2.0/#upic#.jpg"

    var $imglink = $('#imagelink');
    var $img = $('#testpic');
    var widget_id = result["public_id"];
    A =   widget_id;
    if (!B) {
      B = "sailing_angel";
      $('#art1').addClass('active');
    }

    var newUrl = $display.replace('#use-img#', A).replace('#art_image#', B);
    var newUrl2 = $urldisplay.replace('#use-img#', A).replace('#art_image#', B);
    var newUrl3 = $linkdisplay.replace('#use-img#', A).replace('#art_image#', B);

     var newUserUrl = $userpic.replace('#upic#', A);


    var $ccloudurl = $('#cloudurl');
    document.getElementById("c-url").textContent=newUrl2;
    $img.attr('src', newUrl);
    $ccloudurl.attr('href', newUrl2);
    $imglink.attr('href', newUrl3);
   $('#photo4').attr('src', newUserUrl).data('url-image', widget_id);

     $('.photo-img').removeClass('active');
     $('#photo4').addClass('active');
  };

  document.getElementById("upload_widget_opener").addEventListener("click", function(e) {
     e.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'st_blog',
    sources: ['local','url','camera','dropbox', 'image_search','google_photos', 'facebook'], google_api_key: 'AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4'},
      function(error, result) { console.log(result[0].public_id);  console.log(error, result); updateResult(result[0]) });
  }, false);

 //<![CDATA[
 function insertScript(src, callback) {
  var script = document.createElement('script');
  script.onload = callback;
  script.type = 'text/javascript';
  script.async = true;
  script.src = src;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
 }

 insertScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', function(){

  $('.apply-button').click(function(){


    var $display = "http://res.cloudinary.com/demo/image/upload/e_style_transfer,l_#art_image#/#use-img#.jpg"
    var $urldisplay = "http://res.cloudinary.com/demo/image/upload/e_style_transfer,l_#art_image#/#use-img#.jpg"
    var $linkdisplay = "http://res.cloudinary.com/demo/image/upload/e_style_transfer,l_#art_image#/#use-img#.jpg"

    var $imglink = $('#imagelink');
    var $img = $('#testpic');

    if (A == "custom") {
      return;
    }

    if (!A) {
      A = "art-here"
    }
    if (!B) {
      B = "sailing_angel"
    }

    var newUrl = $display.replace('#use-img#', A).replace('#art_image#', B);
    var newUrl2 = $urldisplay.replace('#use-img#', A).replace('#art_image#', B);
    var newUrl3 = $linkdisplay.replace('#use-img#', A).replace('#art_image#', B);


    var $ccloudurl = $('#cloudurl');
    document.getElementById("c-url").textContent=newUrl2;
    $img.attr('src', newUrl);
    $ccloudurl.attr('href', newUrl2);
    $imglink.attr('href', newUrl3);

  });

  $('.photo-img').click(function(){

    var $sender = $(this);
    A =  $sender.data('url-image');
     $('.photo-img').removeClass('active');
   $sender.addClass('active');


  });

  $('.art-img').click(function(){

    var $sender = $(this);
    B =  $sender.data('url-image');
     $('.art-img').removeClass('active');
   $sender.addClass('active');

  });

 });
