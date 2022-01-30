let select = function () {                                                  // main selector insted <select>
    let selectHeader = document.querySelectorAll ('.mainBlock__area');
    let selectItem = document.querySelectorAll ('.select__item');

    selectHeader.forEach( item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach( item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.mainBlock'),
        currentText = this.closest('.mainBlock').querySelector('#mainBlock__current');
        currentText.innerText = text;
        select.classList.remove('is-active')   
    }
};