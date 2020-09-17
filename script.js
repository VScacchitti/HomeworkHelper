/* Initialize Materialize */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
      direction: 'right',
      hoverEnabled: false
  });
});

/* Date Elements using Moment.js */
$("#todays-date").text(moment().format('dddd') +" "+ moment().format('L'));
$("#week-range").text(moment().startOf('week').format('L') +" - " + moment().endOf('week').format('L'));
/* End Date ELements */
