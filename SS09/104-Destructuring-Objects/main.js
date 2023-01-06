'use strict'

const restaurant = {
    name: 'TruongNq',
    location: '9 Ngõ 155 Đường Phương Canh , Nam Từ Liêm , Hà Nội',
    categories: ['Mì Tôm', 'Mì Tôm', 'Mì Tôm'],
    starterMenu: ['Mì Tôm Xúc Xích', 'Mì Tôm Hải Sản', 'Mì Tôm Chay', 'Mì Tôm Chua Cay'],
    mainMenu: ['Mì Tôm Ăn Liền ', 'Mì Tôm Ăn Bất Chấp'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex =0, time, address }) {
        console.log(`Order receives! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} )
        will be delivered to ${address} at ${time}`
        );
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: '9 Ngõ 155 Đường Phương Canh , Nam Từ Liêm , Hà Nội',
    mainIndex: 2,
    startersIndex: 2,
});
restaurant.orderDelivery({
   
    address: '9 Ngõ 155 Đường Phương Canh , Nam Từ Liêm , Hà Nội',
    starters: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Nutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects

const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);


// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main , secondary] = restaurant.categories;

// console.log(main,secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main,secondary);

// [main,secondary]=[secondary,main];
// console.log(main,secondary);

// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter,mainCourse);

// const nested = [2,4, [5,6]];
// // const [i, ,j] =  nested;

// const [i, , [j,k]] = nested;
// console.log(i,j,k);


// const [p=1,q=1,r=1] = [6,7];
// console.log(p,q,r);


