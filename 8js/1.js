document.body.insertAdjacentHTML('afterbegin', `<label class="price-wrap">Price <input type="number" name="price" class="input-price price_js"> </label>`) 
const input = document.querySelector('.price_js');
const label = document.querySelector('.price-wrap');


input.onblur = (e) => {
    input.style.borderColor = '';

    console.log(e.target.value);

    if (e.target.value !== '') {
        label.insertAdjacentHTML('afterend', `<span>Текущая цена: ${e.target.value}</span>`)
    }

};

input.onfocus = (e) => {
    input.style.borderColor = 'green';

};
