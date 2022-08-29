function Product(ID, name, description, price, brand, sizes,
   activeSize, quantity, YYYY, MM, dd, hh, mm, ss, images) {
   this.ID = ID,
      this.getID = function () {
         return `${this.ID}`;
      },
      this.setID = function (value) {
         this.ID = value;
      },
      this.name = name,
      this.getName = function () {
         return `${this.name}`;
      },
      this.setName = function (value) {
         this.name = value;
      },
      this.description = description,
      this.getdDescription = function () {
         return `${this.description}`;
      },
      this.setDescription = function (value) {
         this.description = value;
      },
      this.price = price,
      this.getPrice = function () {
         return `${this.price}`;
      },
      this.setPrice = function (value) {
         this.price = value;
      },
      this.brand = brand,
      this.getBrand = function () {
         return `${this.brand}`;
      },
      this.setBrand = function (value) {
         this.brand = value;
      },
      this.sizes = sizes,
      this.getSizes = function () {
         return `${this.sizes}`;
      },
      this.setSizes = function (value) {
         this.sizes = value;
      },
      this.activeSize = activeSize,
      this.getActiveSize = function () {
         return `${this.activeSize}`;
      },
      this.setActiveSize = function (value) {
         this.activeSize = value;
      },
      this.quantity = quantity,
      this.getQuantity = function () {
         return `${this.quantity}`;
      },
      this.setQuantity = function (value) {
         this.quantity = value;
      },
      this.date = new Date(YYYY, MM, dd, hh, mm, ss),
      this.getDate = function () {
         return this.date;
      },
      this.setDate = function (YYYY, MM, dd, hh, mm, ss) {
         this.date = new Date(YYYY, MM, dd, hh, mm, ss);
      },
      this.reviews = [],
      this.getReviews = function () {
         return this.reviews;
      },
      this.addReview = function (reviewID, author, YYYY, MM, dd, hh, mm, ss, comment, service, priceRating, value, quality) {
         this.reviews.push(new Review(reviewID, author, new Date(YYYY, MM, dd, hh, mm, ss), comment, {
            service: service,
            price: priceRating,
            value: value,
            quality: quality,
         }))
      }
   this.deleteReview = function (ID) {
      for (let i = 0; i < this.reviews.length; i++) {
         if (this.reviews[i].getReviewID() == ID) {
            this.reviews.splice(i, 1);
         }
      }
   }
   this.getReviewByID = function (ID) {
      for (let i = 0; i < this.reviews.length; i++) {
         if (this.reviews[i].getReviewID() == ID) {
            return this.reviews[i];
         }
      }
   }
   this.getImage = function (index) {
      if (index != null) {
         for (let i = 0; i < this.images.length; i++) {
            if (index == i) {
               return this.images[i];
            }
         }
      } else return this.images;
   }
   /*this.setReviews = function (reviewID, author, YYYY, MM, dd, hh, mm, ss, comment, service, priceRating, value, quality) {
      this.reviews = new Review(reviewID, author, new Date(YYYY, MM, dd, hh, mm, ss), comment, {
         service: service,
         price: priceRating,
         value: value,
         quality: quality,
      });
   },*/
   this.images = images,
      this.getImages = function () {
         return `${this.images}`;
      },
      this.setImages = function (value) {
         this.images = value;
      };
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
   this.getAverageRating = function () {
      let sum = 0;
      for (let i = 0; i < this.reviews.length; i++) {
         let buff = this.reviews[i].getAverageR();
         sum += buff;
      }
      return sum / this.reviews.length;
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



let p1 = new Product(11,
   'pants',
   'red pants',
   100,
   'nike',
   ['XS', 'S', 'M'],
   'M',
   23,
   2022, 05, 12, 09, 15, 20,
   ['img1', 'img2', 'img3', 'img4']);
p1.addReview(110, "Maya", new Date(2022, 11, 21, 12, 33, 44), "nice saler", 3, 2, 4, 5);
p1.addReview(111, "Vlad", 2022, 06, 22, 10, 22, 44, "good pants", 5, 3, 4, 4);
p1.addReview(112, "Vitaliy", 2022, 06, 12, 10, 24, 54, "not bad pants", 4, 5, 3, 4);
p1.addReview(113, "Ivan", 2022, 06, 03, 20, 32, 32, "regular pants", 5, 4, 2, 3);

let p2 = new Product(22,
   't-shirt',
   'blue t-shirt',
   125,
   'adidas',
   ['XS', 'S', 'M', 'XXL'],
   'XXL',
   32,
   2022, 05, 15, 14, 20, 43,
   ['img5', 'img6', 'img7', 'img8']);
p2.addReview(220, "Kora", new Date(2022, 06, 22, 11, 33, 44), "", 5, 4, 3, 5);
p2.addReview(221, "Roman", 2022, 06, 09, 10, 12, 11, "my favorite t-shirt", 5, 5, 5, 5);
p2.addReview(222, "Alex", 2022, 07, 06, 10, 34, 14, "bad t-shirt", 3, 5, 2, 4);
p2.addReview(223, "Olha", 2022, 08, 03, 20, 52, 22, "bad service", 2, 1, 2, 3);

let p3 = new Product(33,
   'hat',
   'black hat',
   50,
   'kenzo',
   ['XS', 'S', 'M'],
   'XS',
   21,
   2022, 05, 10, 11, 22, 52,
   ['img9', 'img10', 'img11', 'img12']);
p3.addReview(330, "Stefan", new Date(2022, 06, 21, 15, 33, 14), "good store", 4, 2, 4, 5);
p3.addReview(331, "Ksenia", 2022, 09, 09, 11, 52, 11, "small size", 5, 5, 3, 5);
p3.addReview(332, "Alex", 2022, 08, 01, 14, 32, 24, "good", 2, 5, 5, 4);
p3.addReview(333, "Anna", 2022, 10, 03, 22, 51, 24, "nice service", 2, 2, 2, 1);

let p4 = new Product(44,
   'skirt',
   'yellow skirt',
   150,
   'sinsey',
   ['XS', 'XXL', 'L', 'S', 'M'],
   'S',
   8,
   2022, 05, 11, 08, 53, 12,
   ['img13', 'img14', 'img15', 'img16']);
p4.addReview(440, "Rafael", new Date(2022, 06, 10, 22, 43, 44), "nice skirt", 3, 5, 4, 5);
p4.addReview(441, "Donatello", 2022, 10, 09, 11, 22, 11, "sexy skirt", 5, 5, 3, 5);
p4.addReview(442, "April", 2022, 08, 01, 14, 42, 24, "not my style", 3, 4, 5, 4);
p4.addReview(443, "Casey", 2022, 10, 03, 23, 51, 24, "just right", 3, 2, 2, 1);

let p5 = new Product(55,
   'dress',
   'white dress',
   200,
   'chanel',
   ['XS', 'S', 'M', 'L'],
   'M',
   33,
   2022, 05, 22, 17, 33, 32,
   ['img17', 'img18', 'img19', 'img20']);
p5.addReview(550, "Mike", new Date(2022, 10, 06, 13, 32, 55), "litle white dress", 4, 4, 4, 5);
p5.addReview(551, "Splinter", 2022, 09, 09, 11, 52, 11, "bad choice", 5, 5, 4, 5);
p5.addReview(552, "Shreder", 2022, 04, 11, 14, 31, 24, "best my dress", 3, 5, 5, 4);
p5.addReview(553, "Bibop", 2022, 10, 23, 12, 51, 14, "", 3, 3, 3, 3);

let products = [p1, p2, p3, p4, p5];


searchProducts = function (products, search) {
   let arrToReturn = [];
   for (let i = 0; i < products.length; i++) {
      let name = products[i].getName();
      let countN = 0;
         for(let j = 0; j< name.length; j++) {
               if(name[j] == search[countN]){
                  countN++;
               }
         }
      let description = products[i].getdDescription();
      let countD = 0;
      for(let k = 0; k< description.length; k++) {
            if (description[k] == search[countD]){
               countD++;
            }
      }
      if (countD >= 3 || countN >=3 ){
         arrToReturn.push(products[i])
      }
      countD = 0;
      countN = 0;
   }
   return arrToReturn;
}

Sort = function(products, sortRule){
   let arrToReturn = [];
   if (sortRule == "brand"){
      let sortBrand = [];
      for(let i = 0; i < products.length; i++) {
        sortBrand.push(products[i].getBrand());
      }
      sortBrand = sortBrand.sort();
      console.log(sortBrand);
      for(let i = 0; i < sortBrand.length; i++){
         for(let j = 0; j < products.length;j++) {
            if (sortBrand[i] == products[j].getBrand()){
               arrToReturn.push(products[j]);
            }
         }
      }
      return arrToReturn;
   } else if (sortRule == "price"){
      let sortPrice = [];
      for(let i = 0; i < products.length; i++) {
        sortPrice.push(products[i].getPrice());
      }
      sortPrice = sortPrice.sort((a, b) => a - b);
      console.log(sortPrice);
      for(let i = 0; i < sortPrice.length; i++){
         for(let j = 0; j < products.length;j++) {
            if (sortPrice[i] == products[j].getPrice()){
               arrToReturn.push(products[j]);
            }
         }
      }
      return arrToReturn;
   } else if (sortRule == "ID"){
      let sortID = [];
      for(let i = 0; i < products.length; i++) {
        sortID.push(products[i].getID());
      }
      sortID = sortID.sort((a, b) => a - b);
      console.log(sortID);
      for(let i = 0; i < sortID.length; i++){
         for(let j = 0; j < products.length;j++) {
            if (sortID[i] == products[j].getID()){
               arrToReturn.push(products[j]);
            }
         }
      }
      return arrToReturn;
   }
      
}