'use strict';
$(document).ready(function () {
  $('#adviser_user_id').select2({
    width: '100%'
  });
});

$(function(){
  if ($('.table-sortable').length) {
    $('.table-sortable').tablesorter({
      theme : 'bootstrap',
      widthFixed: true,
      headerTemplate : '{content} {icon}',
      widgets : [ 'uitheme' ],
      headers: {
        '.unsortable' : {
          sorter: false
        }
      }
    })
  }
});
