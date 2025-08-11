const $ = (node)=>document.querySelector(node);

window.addEventListener('DOMContentLoaded',()=>{
    const modalOpBtn = $('#modal-open-btn');
    const modalCloseBtn = $('#modal-close-btn');
    const LinkModal = $('.link-modal');

    modalOpBtn.addEventListener('click',()=>{ModalControl();})
    modalCloseBtn.addEventListener('click',()=>{ModalControl();})

    function ModalControl () {
        let ClassHas = LinkModal.classList.contains('on');
        if(ClassHas) {
            $('.link-modal').classList.remove('on')
        } else {
            $('.link-modal').classList.add('on')
        }
    }
})