(function() {
  $(function() {
    var $box;
    $box = $('.box');
    return $box.velocity({
      rotateX: '360deg',
      rotateY: '360deg'
    }, {
      duration: 8000,
      loop: false,
      easing: 'linear'
    });
  });

}).call(this);
