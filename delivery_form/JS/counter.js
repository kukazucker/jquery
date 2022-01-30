function counter ( $src, $id , $boxPlace) {  

    const counterElement = document.querySelector($src);
    const counterBox = document.querySelector($boxPlace);

    let counter = 0.0; 

    counterElement.addEventListener("keyup", function( event ) {

        counter = parseFloat(counterElement.value);
        counterElement.innerText = counter;
        counterBox.innerText = counter;
    })

    const btnStart = document.querySelector('#plus' + $id);
    btnStart.onclick = function () {

        counter += parseFloat(0.1);
        counterElement.value = counter.toFixed(2);
        counterBox.innerText = counter.toFixed(2);
    }

    const btnStop = document.querySelector('#minus' + $id);
    btnStop.onclick = function () {

        counter -= parseFloat(0.1);
        counterElement.value = counter.toFixed(2);
        counterBox.innerText = counter.toFixed(2);
        
    }
}

