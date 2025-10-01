import './style.css'

interface Operator {
  name: string;
  cost: number;
  price: number;
  has5g: boolean;
  has3g: boolean;
}

const operatorData: Operator[] = [
  { name: 'Verizon', cost: 45.99, price: 59.99, has5g: true, has3g: true },
  { name: 'AT&T', cost: 42.50, price: 55.00, has5g: true, has3g: true },
  { name: 'T-Mobile', cost: 40.00, price: 52.99, has5g: true, has3g: true },
  { name: 'Sprint', cost: 35.75, price: 48.50, has5g: false, has3g: true },
  { name: 'US Cellular', cost: 38.25, price: 50.00, has5g: true, has3g: true }
];

function createTableHTML(): string {
  let html = `
    <h1>Mobile Operators</h1>
    <table class="operators-table">
      <thead>
        <tr>
          <th>Operator Name</th>
          <th>Cost</th>
          <th>Price</th>
          <th>5G</th>
          <th>3G</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  operatorData.forEach((operator, index) => {
    html += `
      <tr>
        <td>${operator.name}</td>
        <td>${operator.cost.toFixed(2)}</td>
        <td><input type="number" class="price-input" data-index="${index}" value="${operator.price.toFixed(2)}" step="0.01" /></td>
        <td>${operator.has5g ? '✓' : '✗'}</td>
        <td>${operator.has3g ? '✓' : '✗'}</td>
      </tr>
    `;
  });
  
  html += `
      </tbody>
    </table>
  `;
  
  return html;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = createTableHTML();

function setupPriceInputs() {
  const inputs = document.querySelectorAll<HTMLInputElement>('.price-input');
  
  inputs.forEach(input => {
    input.addEventListener('click', () => {
      input.classList.add('price-input-clicked');
    });
  });
}

setupPriceInputs();
