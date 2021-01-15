$(document).ready(function(){
   

    $(window).scroll(function(){
        let pos_top=$(window).scrollTop();
        console.log(pos_top);


        if((pos_top>5) && (pos_top<50)){
            var element = document.getElementById("navBar");
            element.classList.add("sticky-top");
            document.getElementById('navBar').classList.add('animate__animated','animate__fadeInDown')
            
        }
        else if((pos_top==0)){
            document.getElementById('navBar').classList.remove('animate__animated','animate__fadeInDown')
        }
    });

    $('#navbtn1').click(function(){
        //do something 
        document.getElementById('navbarSupportedContent').classList.add('animate__animated','animate__bounceInLeft')
    });
});



