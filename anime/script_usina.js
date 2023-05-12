
        const ttext = document.querySelector('.text_usina ');
       
        ttext.innerHTML=ttext.textContent.replace(/\S/g , "<span>$& </span>")
    
        const animation =anime.timeline
        ({
            targets : '.text_usina span',
            easing: 'easeInOutExpo', 
            /*loop : true,*/
            loop : 2,

        })
    
        animation
        .add ({

            rotate:function(){
                return anime.random(360,360)
            },
        translateX:function(){
            return anime.random(-500, 500)
        },
        translateY:function(){
            return anime.random(-500, 500)
        },

        duration: 5000,
        delay:anime.stagger(20),
        })
        
        .add({
            rotate :0,
            translateX:0,
            translateY:0,
            duration:5000,
            delay:anime.stagger(20),
        })
