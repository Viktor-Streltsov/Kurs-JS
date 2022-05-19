class Goods2 extends Goods{
    constructor(name, amount, imags, count, sale) {
        super(name, amount, imags, count);
        this.sale = sale;
    }
    drow() {
        let goods = super.drow();
        let p = document.createElement('p');
        p.innerText = this.sale;
        goods.append(p);
        return goods;
    }
}