import"./assets/styles-D3Zv_nFo.js";import"./assets/main-CDOXjBUk.js";import"./assets/vendor-CGgFmzkN.js";let o=document.querySelector(".iconCart"),a=document.querySelector(".cart"),s=document.querySelector(".container"),d=document.querySelector(".close");o.addEventListener("click",function(){a.style.right=="-100%"?(a.style.right="0",s.style.transform="translateX(-400px)"):(a.style.right="-100%",s.style.transform="translateX(0)")});d.addEventListener("click",function(){a.style.right="-100%",s.style.transform="translateX(0)"});let r=null;fetch("../product.json").then(t=>t.json()).then(t=>{r=t,u()});function u(){let t=document.querySelector(".listProduct");t.innerHTML="",r!=null&&r.forEach(e=>{let i=document.createElement("div");i.classList.add("item"),i.innerHTML=`<img src="${e.image}" alt="">
            <h2>${e.name}</h2>
             <div class="desc">${e.desc}</div>
            <div class="price">₴${e.price} / 1 ${e.unit}</div>
            <button onclick="addCart(${e.id})">Додати до кошика</button>`,t.appendChild(i)})}let l=[];function m(){var t=document.cookie.split("; ").find(e=>e.startsWith("listCart="));t?l=JSON.parse(t.split("=")[1]):l=[]}m();y();function y(){let t=document.querySelector(".listCart");t.innerHTML="";let e=document.querySelector(".totalQuantity"),i=0;l&&l.forEach(n=>{if(n){let c=document.createElement("div");c.classList.add("item"),c.innerHTML=`<img src="${n.image}">
                    <div class="content">
                        <div class="name">${n.name}</div>
                        <div class="price">₴${n.price} / 1 ${n.unit}</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${n.id}, '-')">-</button>
                        <span class="value">${n.quantity}</span>
                        <button onclick="changeQuantity(${n.id}, '+')">+</button>
                    </div>`,t.appendChild(c),i=i+n.quantity}}),e.innerText=i}
//# sourceMappingURL=index.js.map
