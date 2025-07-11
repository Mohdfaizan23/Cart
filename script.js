const cardsData = [{
        id: 1,
        price: '$10.00 USD',
        unit: '1 Unit',
        discount: 10,
        sno: ['#1', '#2'],
        sizeOptions: ['S', 'M'],
        colorOptions: ['Red', 'Blue'],
        originalPrice: '$24.00'
    },
    {
        id: 2,
        price: '$18.00 USD',
        unit: '2 Unit',
        badge: 'Most Popular',
        discount: 20,
        sno: ['#1', '#2'],
        sizeOptions: ['L', 'XL'],
        colorOptions: ['Green', 'Yellow'],
        originalPrice: '$24.00'
    },
    {
        id: 3,
        price: '$20.00 USD',
        unit: '3 Unit',
        discount: 30,
        sno: ['#1', '#2'],
        sizeOptions: ['XXL', 'XXXL'],
        colorOptions: ['Black', 'White'],
        originalPrice: '$24.00'
    }
];

const cardsContainer = document.getElementById('cardsContainer');
const totalDisplay = document.getElementById('totalDisplay');

function renderCards() {
    cardsContainer.innerHTML = cardsData.map((card, idx) => `
    <label class="card-label" for="card${card.id}">
      <input type="radio" name="card" id="card${card.id}" value="${card.id}" class="card-radio" ${idx === 0 ? 'checked' : ''} />
      <div class="card" data-card="${card.id}">
        ${card.badge ? `<div class="badge"><span>${card.badge}</span></div>` : ''}
        <div class="card-main">
          <div class="left">
            <div>
              <span class="unit">${card.unit}</span>
              <span class="off-label">${card.discount}% off</span>
            </div>
            <div class="std-price">Standard Price</div>
          </div>
          <div class="right">
            <div class="price">${card.price}</div>
            <div class="original-price">${card.originalPrice}</div>
          </div>
        </div>
        <div class="card-options">
          <div class="card-options-inner">
            <div class="option-header-row">
              <div class="sno-header"></div>
              <div class="option-label">Size</div>
              <div class="option-label">Color</div>
            </div>
            ${card.sno.map((opt, i) => `
              <div class="option-row">
                <div class="sno-label">${opt}</div>
                <select class="size-select">
                  ${card.sizeOptions.map(size => `<option>${size}</option>`).join('')}
                </select>
                <select class="color-select">
                  ${card.colorOptions.map(color => `<option>${color}</option>`).join('')}
                </select>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </label>
  `).join('');
}

function updateTotal() {
    const selected = document.querySelector('.card-radio:checked');
    if (selected) {
        const card = cardsData.find(c => c.id == selected.value);
        totalDisplay.textContent = `Total: ${card.price}`;
    }
}

renderCards();
updateTotal();

document.body.addEventListener('change', e => {
    if (e.target.classList.contains('card-radio')) {
        updateTotal();
    }
});