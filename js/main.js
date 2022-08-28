const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// tab content item 'i seçer
function selectItem(e) {
    removeBorder();
    removeShow();
    // Tıklanan tab 'a border yapar
    this.classList.add('tab-border')
    // content item 'ı DOM ile alır
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // show class 'ına ekler
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// tab tıklamaları için listener
tabItems.forEach(item => item.addEventListener('click', selectItem))