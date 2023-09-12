$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    //Get balloon checkboxes by individual ID
    const input1 = document.getElementById('red');
    const input2 = document.getElementById('blue');
    const input3 = document.getElementById('green');
    //When submit button clicked check to see if balloons.check is true or false if false display toast
    $("#submit").on("click", function(e){
        if (input1.checked != true && input2.checked != true && input3.checked != true){
            e.preventDefault();
                $('#liveToast').toast({ autohide: false }).toast('show');
                
        }
    })
    //When toast open and esc key pressed toast closes
    $(document).on( "keydown", function( event ) {
        if ( event.which == 27 ) {
           event.preventDefault();
           $('#liveToast').toast('hide')
        }
      } );

    //Select all balloon checkboxes on select all click
      document.getElementById('select-all').onclick = function() {
        var checkboxes = document.getElementsByName('balloon');
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
            
        }
        if (checkboxes.checked === true) {
            $('#' + this.id + 'Img').css('visibility', 'visible')
        }
       };

   //Header animation change on screen load
   var randomNumber = Math.floor(Math.random() * 6);
   switch (randomNumber) {
   
   case 0: $('h1').addClass('animate__animated animate__bounce')
   break;
   case 1: $('h1').addClass('animate__animated animate__rubberBand')
   break;
   case 2: $('h1').addClass('animate__animated animate__pulse')
   break;
   case 3: $('h1').addClass('animate__animated animate__flash')
   break;
   case 4: $('h1').addClass('animate__animated animate__shakeX')
   break;
   case 5: $('h1').addClass('animate__animated animate__swing')
   break;
   case 6: $('h1').addClass('animate__animated animate__tada')
   break;
   default: $('h1').addClass('animate__animated animate__heartBeat')
   
   }
});

//Change header color on balloon image hover
function ChangeColor(){
    document.getElementById("happyBirthday").style.color = "red";
}
function ChangeColorTwo() {
    document.getElementById("happyBirthday").style.color = "green";
}
function ChangeColorThree() {
    document.getElementById("happyBirthday").style.color = "Blue";
}
function Revert() {
    document.getElementById("happyBirthday").style.color = "black";
}
