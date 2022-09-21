// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");
const addToCart = document.querySelector('.addToCart')



// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======


// 先將存在productData中的菜單資料印出
let htmlContent = ''
for (let i = 0; i < productData.length; i++) {
  htmlContent += `
<div class="col-3">
<div class="card">
 <img src="${productData[i].imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${productData[i].name}</h5>
            <p class="card-text">${productData[i].price}</p>
            <a href="#" class="addToCart btn btn-primary">加入購物車</a>
            </div>
        </div>
      </div>
    `
}
menu.innerHTML = htmlContent

// 點餐加入購物車和結算總金額
let totalPrice = 0 // 購物車一開始的金額為0
menu.addEventListener('click', function (event) {
  const target = event.target
  // console.log(target)
  let parentElement = target.parentElement
  // console.log(parentElement)

  // 將選取的品項加入購物車清單
  if (target.classList.contains('addToCart')) {
    cart.innerHTML += `
    <li class="list-group-item">${parentElement.children[0].innerText} X 1 小計：${parentElement.children[1].innerText}</li>
    `
    // 計算總金額
    totalPrice += Number(parentElement.children[1].innerText)
    totalAmount.innerText = totalPrice
    // console.log(total)
  }
  // console.log(cart) 
})

// 送出訂單會跳出收據
button.addEventListener('click', function (event) {
  const target = event.target
  if (target.classList.contains('submit') && totalPrice !== 0) {
    alert(`感謝購買\n${cart.innerText}\n總金額:${totalPrice}`)
    // 收據被確認後，購物車會被清空
    cart.innerHTML = ''
    totalAmount.innerText = '--'
    totalPrice = 0
    // 假設使用者未加入商品即送出訂單  
  } else {
    alert('請選擇商品加入購物車!')
  }
})




