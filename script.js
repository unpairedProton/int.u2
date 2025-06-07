// JS for offer selection and total price update
    const offerBoxes = document.querySelectorAll('.offer-box');
    const radios = document.querySelectorAll('.offer-radio');
    const totalPrice = document.querySelector('.total-row');
    const prices = [10, 18, 24];
    const priceTexts = [
      'Total : $10.00 USD',
      'Total : $18.00 USD',
      'Total : $24.00 USD'
    ];

    // Function to handle variant selectors visibility
    function updateVariantSelectors(selectedIndex) {
      offerBoxes.forEach((box, i) => {
        const variantSelector = box.querySelector('.variant-selectors');
        if (i === selectedIndex) {
          variantSelector.style.display = 'grid';
        } else {
          variantSelector.style.display = 'none';
        }
      });
    }

    // Initialize with first offer selected and its variant selectors visible
    updateVariantSelectors(0);

    offerBoxes.forEach((box, i) => {
      box.addEventListener('click', () => {
        radios[i].checked = true;
        offerBoxes.forEach(b => b.classList.remove('selected'));
        box.classList.add('selected');
        totalPrice.textContent = priceTexts[i];
        updateVariantSelectors(i);
      });
    });