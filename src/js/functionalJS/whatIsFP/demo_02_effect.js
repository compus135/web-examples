let discount = 0.8;
let price = (value) => discount * value;
// price依赖外部变量discount
price(10);
