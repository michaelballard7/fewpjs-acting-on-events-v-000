// Your code here

const dodger = document.querySelector('#dodger')


function moveDodgerLeft() {
    // drop the px
    let leftNumbers = dodger.style.left.replace("px","")

    // convert string value to number
    let left = parseInt(leftNumbers, 10)

    // now set the amount for movement

    if(dodger.style.left > 0) {

        dodger.style.left=`${left - 1}px`
    }
}

function moveDodgerRight() {
    // drop the px

    let rightNumbers = dodger.style.right.replace("px","")

    // convert the number
    let right = parseInt(rightNumbers, 10)

    // set the dogdger movement right , if right <parentElement.clientWidth

    if(right < e.target.parentElement.clientWidth){

        dodger.style.right=`${right + 1}px`
    }
}

// add event listner for keydown event
dodger.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){

        moveDodgerLeft()
    }


    if (e.key === 'ArrowRight'){

        moveDodgerRight()

    }
} )
