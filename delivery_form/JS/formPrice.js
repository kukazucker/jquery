function formPrice ( $src, $boxPlace, $event ) {

    const counterElement = document.querySelector($src);
    const counterBox = document.querySelector($boxPlace);
    const event = document.querySelector($event);
    const weight = document.querySelector('#text');
    const volume = document.querySelector('#text1');
    const formPric = document.querySelector(".boldWords");

    $( event ).on( "click", function() {

        let typePack = document.querySelector("#mainBlock__current").innerText;
        let weightPrice =  parseFloat(weight.value) / 1;                    // 1 kg = 1$
        let volumePrice =  parseFloat(volume.value) / 0.5;                  // 1 m3 = 2$
        let extraPrice =  parseFloat((parseFloat(weight.value) + parseFloat(volume.value))) / 4;  // 25% for every extra service
        let extraService = $( "input:checked" ).length;

        let pricePack = sortTypePack(typePack);

        let totalPrice = pricePack * ( weightPrice + volumePrice + ( extraPrice * extraService ) );

        $( formPric ).val( totalPrice.toFixed(2) + " " + "$" );
        $( counterBox ).text( counterElement.value );
        
    })
}