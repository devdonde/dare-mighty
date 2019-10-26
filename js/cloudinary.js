{/* <script type="text/javascript"> */}
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
// </script>