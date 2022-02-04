const minus = document.querySelector('.minus')
const plyus = document.querySelector('.plyus')
const bajanac = document.querySelector('.bajanac')
const bazmapatkac = document.querySelector('.bazmapatkac')

function insert(symbol) {
  document.form.textView.value = document.form.textView.value + symbol;
  
}

function clean() {
    document.form.textView.value = '';
}

function equal() {

    let number = document.form.textView.value;
    document.form.textView.value = eval(number);
    
}



