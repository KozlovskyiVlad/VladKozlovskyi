class AbstractProduct {
    constructor(ID, name, description, price, quantity, images, YYYY, MM, dd, hh, mm, ss, brand) {
        this.ID = ID,
            this.name = name,
            this.description = description,
            this.price = price,
            this.quantity = quantity,
            this.reviews = [],
            this.images = images,
            this.date = new Date(YYYY, MM, dd, hh, mm, ss),
            this.brand = brand
    }
    getteSetter(param, set) {
        if (set == null) {
            if (param === "id") {
                return `${this.ID}`;
            } else if (param === "name") {
                return `${this.name}`;
            } else if (param === "description") {
                return `${this.description}`;
            } else if (param === "price") {
                return `${this.price}`;
            } if (param === "quantity") {
                return this.quantity;
            } else if (param === "images") {
                return this.images;
            } else if (param === "date") {
                return this.date;
            } else if (param === "brand") {
                return this.brand;
            } else if (param === "reviews") {
                return this.reviews;
            }
        } else if (set !== null) {
            if (param === "id") {
                this.ID = set;
            } else if (param === "name") {
                this.name = set;
            } else if (param === "description") {
                this.description = set;
            } else if (param === "price") {
                this.price = set;
            } if (param === "quantity") {
                this.quantity = set;
            } else if (param === "images") {
                this.images = set;
            } else if (param === "date") {
                this.date = set;
            } else if (param === "brand") {
                this.brand = set;
            }
        }
    }
    getFullInformation() {
        return `ID: ${this.ID}
        Name: ${this.name}
        Description: ${this.description}
        Price: ${this.price}
        Quantity: ${this.quantity}
        Images: ${this.images}
        Date: ${this.date}
        Brand: ${this.brand}`
    }
    getPriceForQuantity(int) {
        return this.price * int;

    }

    

    addReview = function (reviewID, author, YYYY, MM, dd, hh, mm, ss, comment, service, priceRating, value, quality) {
        this.reviews.push(new Review(reviewID, author, new Date(YYYY, MM, dd, hh, mm, ss), comment, {
            service: service,
            price: priceRating,
            value: value,
            quality: quality,
        }))
    }
    deleteReview = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].getReviewID() == ID) {
                this.reviews.splice(i, 1);
            }
        }
    }
    getReviewByID = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].getReviewID() == ID) {
                return this.reviews[i];
            }
        }
    }
    getImage = function (index) {
        if (index != null) {
            for (let i = 0; i < this.images.length; i++) {
                if (index == i) {
                    return this.images[i];
                }
            }
        } else return this.images;
    }
    getAverageRating = function () {
        let sum = 0;
        for (let i = 0; i < this.reviews.length; i++) {
            let buff = this.reviews[i].getAverageR();
            sum += buff;
        }
        return sum / this.reviews.length;
    }

    

}
searchProducts = function (products, search) {
        let arrToReturn = [];
        for (let i = 0; i < products.length; i++) {
           let name = products[i].getteSetter('name');
           let countN = 0;
           for (let j = 0; j < name.length; j++) {
              if (name[j] == search[countN]) {
                 countN++;
              }
           }
           let description = products[i].getteSetter('description');
           let countD = 0;
           for (let k = 0; k < description.length; k++) {
              if (description[k] == search[countD]) {
                 countD++;
              }
           }
           if (countD >= 3 || countN >= 3) {
              arrToReturn.push(products[i])
           }
           countD = 0;
           countN = 0;
        }
        return arrToReturn;
     }
     
     sort = function (products, sortRule) {
        let arrToReturn = [];
        if (sortRule == "brand") {
           let sortBrand = [];
           for (let i = 0; i < products.length; i++) {
              sortBrand.push(products[i].getteSetter(`brand`));
           }
           sortBrand = sortBrand.sort();
           console.log(sortBrand);
           for (let i = 0; i < sortBrand.length; i++) {
              for (let j = 0; j < products.length; j++) {
                 if (sortBrand[i] == products[j].getteSetter('brand')) {
                    arrToReturn.push(products[j]);
                 }
              }
           }
           return arrToReturn;
        } else if (sortRule == "price") {
           let sortPrice = [];
           for (let i = 0; i < products.length; i++) {
              sortPrice.push(products[i].getteSetter('price'));
           }
           sortPrice = sortPrice.sort((a, b) => a - b);
           console.log(sortPrice);
           for (let i = 0; i < sortPrice.length; i++) {
              for (let j = 0; j < products.length; j++) {
                 if (sortPrice[i] == products[j].getteSetter('price')) {
                    arrToReturn.push(products[j]);
                 }
              }
           }
           return arrToReturn;
        } else if (sortRule == "ID") {
           let sortID = [];
           for (let i = 0; i < products.length; i++) {
              sortID.push(products[i].getteSetter('id'));
           }
           sortID = sortID.sort((a, b) => a - b);
           console.log(sortID);
           for (let i = 0; i < sortID.length; i++) {
              for (let j = 0; j < products.length; j++) {
                 if (sortID[i] == products[j].getteSetter('id')) {
                    arrToReturn.push(products[j]);
                 }
              }
           }
           return arrToReturn;
        }
     
     }

function Date(YYYY, MM, dd, hh, mm, ss) {
    this.YYYY = YYYY,
        this.MM = MM,
        this.dd = dd,
        this.hh = hh,
        this.mm = mm,
        this.ss = ss;
}

function Review(ID, author, date, comment, service, priceRating, value, quality) {
    this.ID = ID,
        this.getReviewID = function () {
            return `${this.ID}`;
        },
        this.author = author,
        this.date = date,
        this.comment = comment,
        this.rating = {
            service: service,
            price: priceRating,
            value: value,
            quality: quality,
        }
    this.getAverageR = function () {
        return (this.rating.service.service + this.rating.service.price +
            this.rating.service.value + this.rating.service.quality) / 4;
    };
}