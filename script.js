 // JS for offer selection and total price update
    const offerBoxes = document.querySelectorAll('.offer-box');
    const radios = document.querySelectorAll('.offer-radio');
    const totalPrice = document.getElementById('total-price');
    const prices = [10, 18, 24];
    const priceTexts = [
      '$10.00 USD',
      '$18.00 USD',
      '$24.00 USD'
    ];

    radios.forEach((radio, idx) => {
      radio.addEventListener('change', () => {
        offerBoxes.forEach(box => box.classList.remove('selected'));
        offerBoxes[idx].classList.add('selected');
        totalPrice.textContent = priceTexts[idx];
      });
    });