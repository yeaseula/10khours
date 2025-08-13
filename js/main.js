const $ = (node)=>document.querySelector(node);

window.addEventListener('DOMContentLoaded',()=>{
    const modalOpBtn = $('#modal-open-btn');
    const modalCloseBtn = $('#modal-close-btn');
    const LinkModal = $('.link-modal');

    modalOpBtn.addEventListener('click',()=>{
        LinkModal.showModal();
        LinkModal.setAttribute('aria-hidden', 'false');
        document.getElementById('modal-title').focus();
    })
    modalCloseBtn.addEventListener('click',()=>{
        LinkModal.close();
        LinkModal.setAttribute('aria-hidden', 'true');
    })

})