$(document).ready(function() {
    
    $('[data-toggle=offcanvas]').click(function() {
      $('.row-offcanvas').toggleClass('active');
    });
    
    $("#datetimepicker6" ).datepicker({
        onSelect :function(data){
            
        }
    });

    // $('.dropdown-toggle').dropdown();

    $('.product11__previously').click(function(){
        $('#datetimepicker6 .ui-datepicker-prev.ui-corner-all').click();
        var action = setTimeout(function(){    
            var a=    $('#datetimepicker6 .ui-datepicker-title').text();
            $('.titlehead').html("<b>"+a+"</b>");
            }, 250);
    });

    $('.product11__sequent').click(function(){
      
        $('#datetimepicker6 .ui-datepicker-next.ui-corner-all').click();
            var action = setTimeout(function(){    
            var a=    $('#datetimepicker6 .ui-datepicker-title').text();
            $('.titlehead').html("<b>"+a+"</b>");
        }, 250);
    
   });

   $('.product11__close').click(function(){
       $('.product11__contenthead').hide();
       
   });
   
   $('.product11__closetail').click(function(){
    $('.product11__contenttail').hide();
    
});
    $("#datetimepicker5" ).datepicker({
        onSelect :function(data){
            
        }
    });

    $('.product11__prev').click(function(){
        $('#datetimepicker5 .ui-datepicker-prev.ui-corner-all').click();
        var action = setTimeout(function(){    
            var a=    $('#datetimepicker5 .ui-datepicker-title').text();
            $('.title').html("<b>"+a+"</b>");
            }, 250);
    });

    $('.product11__next').click(function(){
      
        $('#datetimepicker5 .ui-datepicker-next.ui-corner-all').click();
            var action = setTimeout(function(){    
            var a=    $('#datetimepicker5 .ui-datepicker-title').text();
            $('.title').html("<b>"+a+"</b>");
        }, 250);
    
   });

   
   $( function() {
    $( "#datepicker3" ).datepicker({
      showOn: "button",
      buttonImage: "./assets/images/calendar.png" ,
      buttonImageOnly: true,
      
    });
  } );
 

  $('#demo').btnSwitch({
    Theme: 'Android'
  });

  $('#demo1').btnSwitch({
    Theme: 'Android'
  });
  
  $('#demo2').btnSwitch({
    Theme: 'Android'
  });
  $('#demo3').btnSwitch({
    Theme: 'Android'
  });

    
  $("#datetimepicker5").datepicker({
    onSelect :function(data){
        
    }
});

 
//     var ctx = $("#myChart");
//     var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: {
//         datasets: [{
//             label: "1000$ Profit",
//             fontColor: 'Yellow',
//             data: ['100'],
//             backgroundColor: [
//               "#1e88e5",
//             ]
//         },
//         {
//           label: "1 Report",
//           data: ['75'],
//           backgroundColor: [
//             "#f24c4c",
//           ]
//       },
//       {
//         label: "3 Report",
//         data: ['50'],
//         backgroundColor: [
//           "#ffca28",
//         ]
//     },
//     {
//       label: "4 Report",
//       data: ['25'],
//       backgroundColor: [
//         "#95cc47",
//       ]
//   }]
//     },

//     // Configuration options go here
//     options: {
//       title: {
//         display: true,
//         text: 'Earning Graph',
//         fontStyle: 600
//       },
//       legend: {
//         display: true,
//         position: 'left',
//         labels :{
//           fontSize : 15,
//           fontStyle : 600,
//           padding:40
//         }
//       },
//       scales: {
//         xAxes: [{
//           display: false
//         }],
//         yAxes: [{
//           display: false
//         }],
//       }
//     }
// });
    $('#progressbar1').LineProgressbar({
      percentage: 74,
      fillBackgroundColor: '#1abc9c',
      ShowProgressCount: true,
      height: '20px',
      radius: '50px',
      width: 100
    });
    $('#progressbar2').LineProgressbar({
      percentage: 74,
      height: '20px',
      radius: '50px',
      width: 100
    });
    $('#progressbar3').LineProgressbar({
      percentage: 74,
      height: '20px',
      radius: '50px',
      width: 100
    });

   

  });
  
