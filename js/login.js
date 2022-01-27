$(document).ready(function(){
    $("#login").click(function(){
    var uname = $("#uname").val();
    var password = $("#password").val();
    // Checking for blank fields.
    if( uname =='' || password ==''){
    $('input[type="text"],input[type="password"]').css("border","2px solid red");
    $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
    alert("Please fill all fields...!!!!!!");
    }else {
    $.post("login.",{ email1: email, password1:password},//login
    function(data) {
    if(data=='Invalid uname.......') {
    $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
    alert(data);
    }else if(data=='Email or Password is wrong...!!!!'){
    $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    alert(data);
    } else if(data=='Successfully Logged in...'){
    $("form")[0].reset();
    $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
    alert(data);
    } else{
        $.ajax({
            URL:"http://localhost:3000/users",
            type:"GET",
            data:{
                "uname":"uname",
                "pass":"pass"
            },
            success:(x)=>{
                alert(username+" welcome")
            }
        })

    alert(data);
    }
    });
    }
    });
    });