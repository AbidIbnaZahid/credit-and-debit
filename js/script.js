let addmoney = document.querySelector(".addtaka");
let add_btn = document.querySelector(".add-btn");
let total_amount = document.querySelector(".tatal-amount");
let view_money = document.querySelector(".view-new-money")


let remove_val = document.querySelector(".rvalue");
let btn_remove = document.querySelector(".rbtn");
let remove_money = document.querySelector(".remove_money");

let total = 0;

add_btn.addEventListener("click", function () {
    money = parseInt(addmoney.value)
    total = money + total;
    total_amount.innerHTML = total
    view_money.innerHTML = money
});

btn_remove.addEventListener("click", function () {
    money = parseInt(remove_val.value)
    total = total - money
    total_amount.innerHTML = total
    remove_money.innerHTML = money
});

