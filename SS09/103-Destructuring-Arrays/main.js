'use strict'

const restaurant = {
    name: 'TruongNq',
    location: '9 Ngõ 155 Đường Phương Canh , Nam Từ Liêm , Hà Nội',
    categories : ['Mì Tôm' , 'Mì Tôm' ,'Mì Tôm'],
    starterMenu: ['Mì Tôm Xúc Xích' , 'Mì Tôm Hải Sản' , 'Mì Tôm Chay','Mì Tôm Chua Cay'],
    mainMenu: ['Mì Tôm Ăn Liền ' ,'Mì Tôm Ăn Bất Chấp'],

    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];

    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main , secondary] = restaurant.categories;

console.log(main,secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary]=[secondary,main];
console.log(main,secondary);

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

const nested = [2,4, [5,6]];
// const [i, ,j] =  nested;

const [i, , [j,k]] = nested;
console.log(i,j,k);


const [p=1,q=1,r=1] = [6.7];
console.log(p,q,r);


