const mainEl = document.getElementById('site_main');
const ulEl = document.createElement('ul');
let liEl;
mainEl.append(ulEl);

const elementList = [
    'carciofi',
    'mozzarella',
    'pane',
    'acqua',
];
let i = 0;

while (i < elementList.length) {
    liEl = document.createElement('li');
    ulEl.append(liEl);
    liEl.innerHTML = elementList[i];
    console.log(elementList[i]);
    i++;
}