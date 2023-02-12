

let shop = (sale, mass) => {
    let totalSale = 0;
    let total = 0;
    let max = 0;
    let min = Infinity;
    let average = 0;
    if (typeof (sale) === `number`) {
        if (sale <= 100 && sale > 0) {
            if (Math.floor(sale) === sale) {
                for (i = 0; i < mass.length; i++) {
                    total += mass[i].price;
                    mass[i].price = (Math.round((mass[i].price - ((mass[i].price / 100) * sale)) * 100)) / 100;
                    totalSale += mass[i].price;
                    if (max < mass[i].price) {
                        max = mass[i].price;
                    }
                    if (min > mass[i].price) {
                        min = mass[i].price;
                    }
                }
                average = ((Math.round((totalSale / mass.length) * 100)) / 100);
                console.log(mass);
                console.log(`скидка составила= ` + sale + `%`);
                console.log(`обшая сумма со скидкой равна= ` + ((Math.round(totalSale * 100)) / 100));
                console.log(`обшая сумма без скидкой равна= ` + total);
                console.log(`саммый дорогой продукт стоит = ` + max);
                console.log(`саммый дешовый продукт стоит = ` + min);
                console.log(`средня цена = ` + average);
            }
            else {
                console.log(`Ведите коректную скидку!!!`);
            }
        }
        else if (sale === 0) {
            console.log(`А смысл в такой скидке?`);
        }
        else {
            console.log(`Ведите адекватную скидку!!!`);
        }
    }
    else {
        console.log(`это не число`);
    }
}



let discounts = +prompt('Какая скидка?');

let arr = [
    {
        name: 'Milk',
        price: 3.25
    },
    {
        name: 'Coffee',
        price: 1.5
    },
    {
        name: 'Ice Cream',
        price: 7.85
    },
    {
        name: 'Tomatos',
        price: 4.14
    },
    {
        name: 'Onion',
        price: 2.25
    }
]

shop (discounts, arr);