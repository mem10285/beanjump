const menu = [
  {
    title: "americano",
    category: "coffee",
    price: 3,
    img: "https://www.theladders.com/wp-content/uploads/coffee_190607.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "cappuccino",
    category: "coffee",
    price: 5,
    img: "https://cdn.leitesculinaria.com/wp-content/uploads/fly-images/233844/cappuccino-1200x675-c.jpg.optimal.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "macchiato",
    category: "coffee",
    price: 5,
    img: "https://www.letseatcake.com/wp-content/uploads/2021/07/Apple-Crisp-Macchiato-social.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "espresso",
    category: "coffee",
    price: 5,
    img: "https://www.perfectbrew.com/wp-content/uploads/2021/06/espresso-vs-lungo-coffee-compared-XS-1200x900.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "hot chocolate",
    category: "drinks",
    price: 4,
    img: "https://www.thespruceeats.com/thmb/E2Q-2ZpiWiDavY5sWZPyi2u6U8c=/1500x1000/filters:fill(auto,1)/hot-chocolate-mug-cake-4177438-Hero_1-56d7457a2b6745b99b74fe3eb63d9edb.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "white chocolate",
    category: "drinks",
    price: 4,
    img: "https://www.savoryexperiments.com/wp-content/uploads/2018/09/White-Hot-Chocolate.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "green tea",
    category: "drinks",
    price: 3,
    img: "https://www.nfcr.org/wp-content/uploads/2019/08/Does-Green-Tea-Reduce-the-Risk-of-Cancer_.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "mint tea",
    category: "drinks",
    price: 3,
    img: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/325242_1100-1100x628.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "pancakes",
    category: "breakfast",
    price: 10,
    img: "https://i.postimg.cc/g0W5qdSn/item-1.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "belgian waffles",
    category: "breakfast",
    price: 11,
    img: "https://zonacooks.com/wp-content/uploads/2018/04/Homemade-Belgian-Waffles-Recipe-for-Two-13-720x405.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "french toast",
    category: "breakfast",
    price: 10,
    img: "https://media.healthyfood.com/wp-content/uploads/2020/12/FrenchToast-1024x652.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "biscuit",
    category: "breakfast",
    price: 8,
    img: "https://i.postimg.cc/ZK6X9CH1/item-7.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "cupcake",
    category: "desserts",
    price: 4,
    img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Paleo-Chocolate-Cupcake-8.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "doughnut",
    category: "desserts",
    price: 3,
    img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/06/119434.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "apple pie",
    category: "desserts",
    price: 4,
    img: "https://iambaker.net/wp-content/uploads/2019/08/apple-pie.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
  {
    title: "pecan pie",
    category: "desserts",
    price: 4,
    img: "https://images-gmi-pmc.edge-generalmills.com/2b31966f-9558-490a-b82b-c2018b288425.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
  },
];

const menuItemsCtr = document.querySelector('.menu-items-ctr');
const filterBtnCtr = document.querySelector('.filter-btn-ctr');
const orderBtnCtr = document.querySelector('.order-btn-ctr');

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
  displayOptions();
});

function displayMenuButtons () {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories.map(function (category) {
    return `
      <button class="btn filter-btn" type="button" data-class=${category}>
        ${category}
      </button>
    `;
  }).join("");

  filterBtnCtr.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.class;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    })
  });
}

function displayMenuItems(menu) {
  let displayMenu = menu.map(function (item) {
    return `
      <article class="menu-item">
        <img src=${item.img} class="img" alt="${item.title}">
        <div class="item-info">
          <header>
            <h4 class="item-title"><strong>${item.title}</strong></h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
    `;
  });
  displayMenu = displayMenu.join("");
  menuItemsCtr.innerHTML = displayMenu;
  displayMenuButtons ()
}

$(".order-btn").click(function() {
  $(".order-modal").modal()
});

$('.pickup-btn').click(() => {
  $('.address-section').hide();
  $('.only-delivery').hide();
  document.querySelector('.yourOrder').innerHTML = `Your Pickup Order`;
})

$('.delivery-btn').click(() => {
  $('.address-section').show();
  $('.only-delivery').show();
  document.querySelector('.yourOrder').innerHTML = `Your Delivery Order`;
})

const cap = input => {
  const arr = input.split(' ');
  const newArr = [];
  for (const x of arr) {
    newArr.push(x[0].toUpperCase() + x.slice(1))
  };
  return newArr.join(' ')
};

const selector = document.querySelector('#choose-item');
const displayOptions = () => {
  for (x of menu) {
    const option = document.createElement("option");
    option.innerHTML = `
      ${cap(x.title)}
    `;
    selector.appendChild(option);
  }
};

const addBtn = document.querySelector('.btn-add');
const itemsCtr = document.querySelector('.items-ctr');
let total = 0;

addBtn.addEventListener("click", () => {
  const selection = $("#choose-item option:selected")
    .text()
    .toLowerCase()
    .split('')
    .slice(7,-5)
    .join('');

  let quantity = $("#quantity option:selected").text();
  quantity = quantity === 'Qty' ? 1 : quantity;
  const instructions = document.querySelector('.instructions').value;
  console.log(instructions);
  const itemPrice = Number(menu.find(x => x.title === selection).price) * quantity;

  const newItem = document.createElement("div");
  newItem.innerHTML = `
    <div class="row form-group">
      <div class="col col-sm-10 order-item">
        <p id="${selection}">${cap(selection)}  ${quantity > 1 && quantity < 11 ? `(${quantity})` : ''}</p>
      </div>
      <div class="col col-sm-2 item-price">
        <p>${itemPrice}.00</p>
      </div>
    </div>
  `;
  itemsCtr.appendChild(newItem);

  const totalDisplay = document.querySelector('.total-price')
  total += itemPrice;
  const taxCost = (Math.round(100 * (total * .1)) / 100).toFixed(2);
  const tipCalc = (Math.round(100 * (total * .15)) / 100).toFixed(2);
  const tipFee = tipCalc >= 3 ? tipCalc : "3.00";

  document.querySelector('.fees-ctr').innerHTML = `
    <div class="row form-group">
      <div class="col col-sm-10 subtotal">
        <p id="subtotal">Sub Total</p>
      </div>
      <div class="col col-sm-2 subtotal-cost">
        <p>${total}.00</p>
      </div>
    </div>
    <div class="row form-group">
      <div class="col col-sm-10 tax">
        <p id="tax">Estimated Tax</p>
      </div>
      <div class="col col-sm-2 tax-cost">
        <p>${taxCost}</p>
      </div>
    </div>
  `;

  document.querySelector('.only-delivery').innerHTML = `
    <div class="row form-group">
      <div class="col col-sm-10 delivery-fee">
        <p id="delivery-fee">Delivery Fee</p>
      </div>
      <div class="col col-sm-2 delivery-cost">
        <p>5.00</p>
      </div>
    </div>
    <div class="row form-group">
      <div class="col col-sm-10 tip">
        <p id="tip-fee">Driver Tip</p>
      </div>
      <div class="col col-sm-2 tip-amount">
        <input type="text" placeholder="${tipFee}"></input>
      </div>
    </div>
  `;

  const isDelivery = document.querySelector('.only-delivery').style.display !== 'none';
  const roughTotal = isDelivery ? Number(total) + Number(taxCost) + 5 + Number(tipFee) : Number(total) + Number(taxCost)
  const newTotal = (Math.round(roughTotal * 100) / 100).toFixed(2);
  totalDisplay.innerHTML = `
    Total: $${newTotal}
  `;
});