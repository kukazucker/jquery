function boxName ( $src, $boxPlace ) {

    const formElement = document.querySelector( $src );
    const boxElement = document.querySelector( $boxPlace );

    $( formElement ).on( "keyup", function() {
        $( boxElement ).text( formElement.value );
    })
}

function checkTypePack ( $src, $boxPlace ) {

    const formElement = document.querySelector( $src );
    const typePackBtn = document.querySelector( "#typePack" );
    const boxElement = document.querySelector( $boxPlace );

    $( typePackBtn ).on( "click", function() {

        $( boxElement ).text( formElement.innerText );
    })
}

function check ( $src, $src_value, $boxPlace ) {

    const formElement = document.querySelector( $src );
    const insertTextElement = document.querySelector( $src_value );
    const boxElement = document.querySelector( $boxPlace );

    $( formElement ).on( "click", function() {

        $( boxElement ).text( insertTextElement.innerText )
        $( boxElement ).toggleClass( "black_checkbox_box" );
    })
}