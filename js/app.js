
class NumberAdd {
  constructor(element, startNumber, step) {
    this.btn = document.querySelector(element);
    this.number = startNumber;
    this.step = step;
    this.btn.addEventListener('click', this.addElement.bind(this));
  }
  addElement() {
    const div = document.createElement('div');
    div.textContent = this.number;
    this.number += this.step;
    document.body.appendChild(div);
  }
}

const numberAdd = new NumberAdd('button', 1, 1);



//starty kod proceduralny
// const btn = document.querySelector('button');
// let number = 1;
// function addElement() {
//   const div = document.createElement('div');
//   div.textContent = number;
//   number++;
//   document.body.appendChild(div);
// }
// btn.addEventListener('click', addElement);
