import"./assets/styles-JhtLTKVy.js";let r=[];function c(){var i=document.cookie.split("; ").find(e=>e.startsWith("listCart="));i&&(r=JSON.parse(i.split("=")[1]))}c();o();function o(){let i=document.querySelector(".returnCart .list");i.innerHTML="";let e=document.querySelector(".totalQuantity"),s=document.querySelector(".totalPrice"),a=0,n=0;r&&r.forEach(t=>{if(t){let l=document.createElement("div");l.classList.add("item"),l.innerHTML=`<img src="${t.image}">
                    <div class="info">
                        <div class="name">${t.name}</div>
                        <div class="price">₴${t.price} / 1 ${t.unit}</div>
                        </div>
                    <div class="quantity">${t.quantity}</div>
                    <div class="returnPrice">₴${t.price*t.quantity}</div>`,i.appendChild(l),a=a+t.quantity,n=n+t.price*t.quantity}}),e.innerText=a,s.innerText="₴"+n}
//# sourceMappingURL=checkout.js.map
