$(document).ready(function(){
  var mc = '💛';
  var sc = '🖤';

  $('#shine').on('click', function(){
    var omc = mc;
    var osc = sc;

    mc = $('#mainColor').val();
    sc = $('#secondColor').val();
    $('#colorMain').text(mc);
    $('#colorSecond').text(sc);

    $('#pole p span').each(function(i, obj) {
      if ($(this).text() == omc) {
      $(this).text(sc);
    } else if ($(this).text() == osc) {
      $(this).text(mc);
    } else {
      $(this).text(mc);
    }
    });
  });

  $('#pole p span').on('click', function(){
    if ($(this).text() == mc) {
      $(this).text(sc);
    } else if ($(this).text() == sc) {
      $(this).text(mc);
    } else {
      $(this).text(mc);
    }
  });

  var clipboard = new Clipboard('.btn');

  clipboard.on('success', function(e) {
      console.log(e);
  });
  clipboard.on('error', function(e) {
      console.log(e);
  });

  $('#clear').on('click', function(){
    $('#pole p span').each(function(i, obj) {
      $(this).text(mc);
    });
  });

});



