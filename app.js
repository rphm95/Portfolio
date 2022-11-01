$ (() => {
//    ================================== INDEX.HTML MAIN PAGE =====================================
    

    $(".cross").hide();
    $(".menu").hide();
    
    $(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
    });
    });
        
    $(".cross").click(function() {
    $(".menu").slideToggle("slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
    });
    });

    // $('.contact').on('click', () => {
    //     $(".menu").slideToggle("slow", function() {
    //         $()
    // }) // work on a contact me button with a modal

// ======================================= PORTFOLIO.HTMLPAGE =======================================
    
    let numOfImages = $('.carousel-images').children().length - 1
    let currentImageIndex = 0

    $('.next-button').on('click', () => {
        $('.carousel-images').children().eq(currentImageIndex).css('display', 'none')

        if (currentImageIndex < numOfImages) {
            currentImageIndex++
        } else { 
            currentImageIndex = 0
        }

        $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')
    })
     
    $('.previous-button').on('click', () => {
        $('.carousel-images').children().eq(currentImageIndex).css('display', 'none')
        if (currentImageIndex > 0) {
            currentImageIndex--
        } else { 
            currentImageIndex = numOfImages
        }
        $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')


    });





})