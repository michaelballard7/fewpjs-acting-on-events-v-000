// Your code here

const dodger = document.querySelector('#dodger')


// add event listner for keydown event
dodger.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){
        // drop the px
        let leftNumbers = dodger.style.left.replace("px","")

        // convert string value to number
        let left = parseInt(leftNumbers, 10)

        // now set the amount for movement

        if(dogdger.style.left > 0) {
            
            dodger.style.left=`${left - 1}`
        }

    }


    if (e.key === 'ArrowRight'){

        // drop the px


        // convert the number


        // set the dogdger movement right , if right <parentElement.clientWidth

    }
} )

// creeate function for move left


// create a function for move right


// create conditional to match key type / evebt
if()
