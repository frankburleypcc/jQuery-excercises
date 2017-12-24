console.log("Hello from jokes.js");

//this fades in the titles in the header
$(document).ready(function(){
    $("h1").hide();
    $("h1").fadeIn(3000);
    $("h2.name").hide();
    $("h2.name").fadeIn(5500);

    //this sets the CSS for all h3 elements on the page
    $( "h3" ).css( "border", "2px solid black" )
    .css( "background", "lightGray" );

    //these create nodes in the DIV using ID and class
    //append
    var createHeading = "<h2>Yoohoo! I'm an h2 created in jQuery using append.</h2>"
    $("#welcome").append(createHeading);
    //prepend
    $( ".container" ).prepend( "<h2>I'm some prepend text. How about them apples?</h2>" );
    //appendTo
    $( "<div><h2>Oh yes. I appendTo!</h2></div>" ).appendTo( ".container" );

    //this creates a P element with the div "found by ID"
    var jokeQuestion = "<p>Why was the web developer fired from her job?</p>"
    $("#joke").append(jokeQuestion);

    //this Adds nodes as well as a click event to the DOM tree using append found by tag name
    $("#answerBtn").click(function(){
    $("p:first").append(" <b>Because she was SASSy!</b>.");
    });

    //this event responds to the mouse pointer location on the page
    $(document).mousemove(function(event){ 
        $("#pointer").text("X: " + event.pageX + ", Y: " + event.pageY); 
    });

    //this event hides the secret message "found by class"
    $("p.secret").dblclick(function(){
        $(this).hide();
    });

    //keydown and keup events to color the input field
    $("input").keydown(function(){
        $("input").css("background-color", "beige");
    });
    $("input").keyup(function(){
        $("input").css("background-color", "aqua");
    });

    //this adds a sentence followed by a result using an ID
    var desc = "<p>4. The color property value of this DIV element is: " + '<div id="result"></div></p>';
    $("#cssDesc").append(desc);
    //colors the text red
    $( "#redText" )
    .css( "color", "red" );
    //click event to display clicking on the div ID #result fetches the value
    $("#redText").click(function(){
        var color = $(this).css("color");
        $("#result").html(color);
    }); 

    //image used to get with and height for fetching CSS properties
    var imgInfo = $("#fishImage").get(0);   
    $("#imgWidth").html(imgInfo.width);
    $("#imgHeight").html(imgInfo.height);
    $("#megaPixels").html(imgInfo.width * imgInfo.height / 1000000);

    $("#animateSpace").click(function(){
        $("p").animate({wordSpacing: "+=15px"});
    });
    
     //Adds current year to the footer
    var thisYear = new Date().getFullYear();
    $("#currentYear").html(thisYear);  
    
});

//List of todos in this exercise.
// Create DOM nodes by supplying HTML in the jQuery selector.
// Find nodes by tag name, class and ID using jQuery selectors.
// Add nodes to the DOM tree using append.
// Respond to at least 3 different types of events.
// Fetch the value of CSS properties.
// Set the value of CSS properties. 