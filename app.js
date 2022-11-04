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

    const openModal = () => {
        $('#modal').css('display', 'block');
        $('.menu').hide('slow')
        $('.cross').hide();
        $('.hamburger').show()
    }

    $('#aboutme').on('click', openModal);

    const closeModal = () => {
        $('#modal').css('display', 'none');
    }
    $('#close').on('click', closeModal);
    // work on a contact me button with a modal

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

    // ------------------------------ SECOND CAROUSEL ------------------------------

    let numOfImages2 = $('.carousel-images2').children().length - 1
    let currentImageIndex2 = 0

    $('.next-button2').on('click', () => {
        $('.carousel-images2').children().eq(currentImageIndex2).css('display', 'none')

        if (currentImageIndex2 < numOfImages2) {
            currentImageIndex2++
        } else { 
            currentImageIndex2 = 0
        }

        $('.carousel-images2').children().eq(currentImageIndex2).css('display', 'block')
    })
     
    $('.previous-button2').on('click', () => {
        $('.carousel-images2').children().eq(currentImageIndex2).css('display', 'none')
        if (currentImageIndex2 > 0) {
            currentImageIndex2--
        } else { 
            currentImageIndex2 = numOfImages2
        }
        $('.carousel-images2').children().eq(currentImageIndex2).css('display', 'block')


    });

    
    
    // ------------------------------ THIRD CAROUSEL ------------------------------

    let numOfImages3 = $('.carousel-images3').children().length - 1
    let currentImageIndex3 = 0

    $('.next-button3').on('click', () => {
        $('.carousel-images3').children().eq(currentImageIndex3).css('display', 'none')

        if (currentImageIndex3 < numOfImages3) {
            currentImageIndex3++
        } else { 
            currentImageIndex3 = 0
        }

        $('.carousel-images3').children().eq(currentImageIndex3).css('display', 'block')
    })
     
    $('.previous-button3').on('click', () => {
        $('.carousel-images3').children().eq(currentImageIndex3).css('display', 'none')
        if (currentImageIndex3 > 0) {
            currentImageIndex3--
        } else { 
            currentImageIndex3 = numOfImages3
        }
        $('.carousel-images3').children().eq(currentImageIndex3).css('display', 'block')


    });

    // Set a same-site cookie for first-party contexts
    document.cookie = 'cookie1=value1; SameSite=Lax';
    // Set a cross-site cookie for third-party contexts
    // document.cookie = 'cookie2=value2; SameSite=None; Secure';

})


