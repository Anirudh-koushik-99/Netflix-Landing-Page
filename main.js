const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item =>item.addEventListener('click', selectItem));

function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from dom because this.id will return the id of selected element
    const tabContentItem = document.
    querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}


