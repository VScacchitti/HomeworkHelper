/* Nav Transition*/
  $(".burger").on("click", ()=>{
    $(".nav").toggleClass("nav-active");
  });
/* End Nav Transition*/

/* Date Elements using Moment.js */
$("#todays-date").text(moment().format('dddd') +" "+ moment().format('L'));
$("#week-range").text(moment().startOf('week').format('L') +" - " + moment().endOf('week').format('L'));
/* End Date ELements */
