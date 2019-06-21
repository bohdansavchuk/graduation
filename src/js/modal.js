$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function(){
    modal.addClass('modal_active');
  });

  close.on('click', function(){
    modal.removeClass('modal_active');
  });
});

// $(document).ready(function(){
//   var button = $('#button-modal');
//   var modal = $('#success');
//   var close = $('#close-success');

//   button.on('click', function(){
//     modal.addClass('success_active');
//   });

//   close.on('click', function(){
//     modal.removeClass('success_active');
//   });
// });