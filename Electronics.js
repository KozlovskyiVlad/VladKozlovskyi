class Electrinics extends AbstractProduct {
    constructor(ID, name, description, price, quantity, images,
         YYYY, MM, dd, hh, mm, ss, brand, warranty, power) {
        super(ID, name, description, price, quantity, images, YYYY, MM, dd, hh, mm, ss, brand);
        this.warranty = warranty,
        this.power = power
    }
}