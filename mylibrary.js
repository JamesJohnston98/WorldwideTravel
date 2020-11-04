
$(document).ready(function(){  
//Toggle jQuery to allow user to read more information on the page. 
    $("#read").click(function(){
     $(".more1").slideToggle(1000);
    if($("#read").text() == 'Read More'){
      $(this).text('Read Less');  
    } 
    else{
       $(this).text('Read More');  
    }
    });
    $("#read2").click(function(){
    $(".more2").slideToggle(1000);
    if($(this).text() == 'Read More'){
      $(this).text('Read Less');  
    } 
    else{
       $(this).text('Read More');  
    }
    });    
     $("#read3").click(function(){
    $(".more3").slideToggle(1000);
    if($(this).text() == 'Read More'){
      $(this).text('Read Less');  
    } 
    else{
       $(this).text('Read More');  
    }
    });     
    $("#read4").click(function(){
    $(".more4").slideToggle(1000);
    if($(this).text() == 'Read More'){
      $(this).text('Read Less');  
    } 
    else{
       $(this).text('Read More');  
    }
    });  
    
//Ajax call for json data
$(".quotebutton").click(function(event){
//retrieve the data from json file
  $.get("people.json")
  .done(function(e) {
    var num = $("#ref").val();
    $("#fname").val(e[num].fname);
    $("#surname").val(e[num].lname);
    $("#dest").val(e[num].Destination);
    $("#checkin").val(e[num].checkin);
    $("#checkout").val(e[num].checkout);
    $("#guest").val(e[num].guestnumber);
    $("#email").val(e[num].email);
    $("#address").val(e[num].Address);
    $("#town").val(e[num].Town);
    $("#pcode").val(e[num].PostCode);
    $("#cost").val(e[num].Price);

  })
  .fail(function() {
    alert("Unforunately we are unable to process your request at this time." + "<br />" +  "Please ensure you are connected to a server and try again");
});
               });
    

//control to show the next fieldset in the multistep form
var current_fs, next_fs;
var left, opacity, scale;
//animated of the fieldsets
var animating;//prevents quick multiclick glitches
//Variables with values from the form.

$(".next").click(function(){   
    if(animating) return false;
    animating = true;
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
//displays the newxt fieldset with the form information
next_fs.show();
//hides the currently viewable form stored in the fieldset.
//opacity of current_fs reduces to 0 and is stored in now.
current_fs.animate({opacity:0},{
    step: function(now,mx){
    //scales the current_fs down to 80%
        scale = 1-(1-now)*0.2;
    //brings the next_fs onto the screen from the right.
        left = (now * 50)+ "%";
    //increases the opacity of next_fs to one to make it visible.
        opacity = 1-now;
        current_fs.css({
        'transform':'scale('+scale+')',
            'position': 'absolute'
        }); 
        next_fs.css({'left': left, 'opacity': opacity});
    },
    duration: 1000,
    complete: function(){
        current_fs.hide();
        animating = false;
    },
});   
});
    
//form validation
//contains the rule and the message which will appear for the validation within the form
$("input").change(function(){
  $("#quoteform").validate({
//rules for the validation to define which fields are required and how long they should be
rules: {
      ref : {
        required: true,
        minlength: 8
      },
      fname: {
        required: true,
        minlength: 3
      },
       surname: {
        required: true,
        minlength: 5
      },
        dest: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      checkin: {
        required: true,
      },
    checkout: {
        required: true,
      },
    guest: {
        required: true,
        number: true,
        range: [1, 9]
      },
    pcode: {
        required: true,
    }
},
//custom messages which should appear for the validated form elements.
messages: {
    ref: "Reference number must include letters and numbers. Format: QRN10000",
  fname: {
    required: "You must enter your firstname",
    minlength: "your name should contain at least three letters"
  },
  surname: "You must enter your surname and it should contain at least five letters",
  dest: "please enter a destination name",
  email: "The email should be in the format: johnston-j52@ulster.ac.uk",
  checkin: "please enter a relevant date DD/MM/YYYY",
  checkout:"please enter a relevant date DD/MM/YYYY",  
  guest: {
    required: "Please enter your guest number",
    number: "guest number should be a numerical value",
    range: "guest number should be minimum 1 and maximum  9"
  },
pcode: "Postcode should be in format 'BT60 1'"
    }
});
  });
//Tooltips which will appear when the user hovers over the input within the form and then is hidden again when the user moves the mouse away from the input areas.
$("#ref").tooltip({
    //information displayed within the tooltip
    content: 'Reference number format is QRN1000',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},
});
$("#surname").tooltip({
    //information displayed within the tooltip
    content: 'your surname is required',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},
});
$("#fname").tooltip({
    //information displayed in the tooltip
    content: 'we require your firstname for our records',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},
});
$("#dest").tooltip({
    //information displayed on the tooltip
    content: 'This is the location you plan to fly to',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},  
});   
$("#checkin").tooltip({
    //information displayed on the tooltip
    content: 'Date of your arrival on holiday',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:100, duration:200, effect:'slideUp'},  
});    
$("#checkout").tooltip({
    //information displayed on the tooltip
    content: 'Date of your departure',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},  
});     
$("#guest").tooltip({
    //information displayed on the tooltip
    content: 'Number of guests in your party',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},  
});  
$("#email").tooltip({
    //information displayed on the tooltip
    content: 'Format: jjohnston899@yahoo.co.uk',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},  
}); 
$("#pcode").tooltip({
    //information displayed on the tooltip
    content: 'Postcode is in format BT60 1TU',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is shown and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},  
});
$("#cost").tooltip({
    //information displayed within the tooltip
    content: 'Value of your holiday format:(£300)',
    track: true,
    //defines how the tooltip is shown and the effect used
    show: {delay:50, duration:200, effect:'slideDown'},
    //defines how the tooltip is hidden and the effect used
    hide: {delay:50, duration:200, effect:'slideUp'},  
}); 
    
});




