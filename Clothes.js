class Clothes extends AbstractProduct {
    constructor(ID, name, description, price, quantity, images,
         YYYY, MM, dd, hh, mm, ss, brand, material, color, sizes, activeSize) {
        super(ID, name, description, price, quantity, images, YYYY, MM, dd, hh, mm, ss, brand);
        this.sizes = sizes,
        this.activeSize = activeSize,
        this.material = material,
        this.color = color,
        this.addSize = function (value) {
            this.sizes.push(value);
         }
         this.deleteSize = function (value) {
            for (let i = 0; i < this.sizes.length; i++) {
               if (this.sizes[i] == value) {
                  this.sizes.splice(i, 1);
               }
            }
         }
    }
    
}