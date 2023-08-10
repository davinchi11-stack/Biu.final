
let tl = new TimelineMax()

function active(){
   $(function () {

    $("nav ").click(function (e) { 
        e.preventDefault();

        $('nav').removeClass("active");
        $(this).addClass("active");
    });
      
   });
}

// active()


function calender(){
    $(function () {

        $("#buton").click(function (e) { 
            e.preventDefault();
            
            tl.fromTo(".wrapper",
            0.5,
            {filter:"none"},{filter:"blur(10px)"}
            ) .fromTo(".calender",
            {display:"none"},{display:"block"}
           )
            
        });

        $(".cancel").click(function (e) { 
            e.preventDefault();
             
            tl.fromTo(".calender", {display:"block"},{display:"none"})
            .fromTo(".wrapper",0.5, {filter:"blur(10px)"},{filter:"none"})
            
        });

        $(".one").click(function (e) { 
            e.preventDefault();
            tl.fromTo(".calender", {display:"block"},{display:"none"})
            .fromTo(".wrapper", {filter:"blur(10px)"},{filter:"none"})
            $(".second").hide()
            $(".third").hide()
            $(".main").show()
        
            
        }); 

        $(".two").click(function (e) { 
            e.preventDefault();
            tl.fromTo(".calender", {display:"block"},{display:"none"})
            .fromTo(".wrapper", {filter:"blur(10px)"},{filter:"none"})
              $(".main").hide()
              $(".third").hide()
              $(".second").show()
        });

        $(".three").click(function (e) { 
            e.preventDefault();
            tl.fromTo(".calender", {display:"block"},{display:"none"})
            .fromTo(".wrapper", {filter:"blur(10px)"},{filter:"none"})
            $(".main").hide()
            $(".second").hide()
            $(".third").show()
        });
        
    });
}

calender()


function ani(){

    gsap.from(".side-nav",{
        duration:"1",
        x:"-100",
        ease:"Expo.easeInOut",
        delay:"0.8"
    })

    tl.fromTo("header",1.5,{opacity:"0"},{opacity:"1"},1)
    tl.fromTo("#buton",1.5,{opacity:"0"},{opacity:"1"},1.8)
    tl.fromTo(".pro-bar",1.5,{opacity:"0"},{opacity:"1"},2.5)



}
ani()


function pages(){

    $(function () {
        
        $(".items > #ba").click(function (e) { 
            e.preventDefault();
            
            aleert("ndnd")
        });


    });

}

pages()