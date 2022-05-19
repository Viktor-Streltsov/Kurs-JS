class Goods{
    constructor(name, amount, imags, count) {
        this.name = name;
        this.amount = amount;
        this.imags = imags;
        this.count = count;
    }
    drow() {
        let div = document.createElement('div');
        let pr = document.createElement('p');
        let imag = document.createElement('img');
        imag.src = this.imags;
        div.append(imag);
        pr.append(`${this.name} - цена: ${this.count}`);
        div.append(pr);
        return div;
    }
}