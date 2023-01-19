'use strict'

const storage = {
    pivo: {
        title: 'pivo',
        price: 25
    },
    chipsi: {
        title: 'chipsi',
        price: 10
    },
    suh: {
        title: 'suhaldriki',
        price: 1
    },
};

function show() {
    for (let key in storage) {
        console.log(storage[key])
    }
}

show();

console.log('VIBIRAY!!!');

const bucket = {};

function add(key, amount = 1) {
    if (!bucket[key]) {
        bucket[key] = amount
        return 
    }
    bucket[key] = bucket[key] + amount
  }

function remove(key, amount = 1) {
    if (bucket[key] > amount) {
        bucket[key] -= amount
        return
    }
    delete bucket[key]
};

function sum () {
    let total = 0;
    for (let key in bucket) {
    total += (bucket[key] * storage[key].price) - (check(key) * bucket[key])
    }
    return total
}

function show_all() {
    let allBuc = '';
    Object.entries(bucket).forEach(([key, value]) => {
        allBuc += ` ${key}: ${value},`
    })
    return `${allBuc} 
    Total: ${sum()}`;
};

function clear() {
    for (let key in bucket) {
        delete bucket[key]
    }
    return
};

const salePercent = {
    pivo: {
        per: 10,
        fromAmount: 3
    },
    chipsi: {
        per: 10,
        fromAmount: 3
    },
};

function check(key) {
        const value = storage[key]
        if(!value || !salePercent[key] || (bucket[key] < salePercent[key].fromAmount)) {
            return 0;
        };
        return value.price / 100 * salePercent[key].per;
      };


add('pivo', 3);
add('chipsi', 0);
add('suh', 0);
remove('pivo', 0);
add('suh', 5);
add('chipsi', 4);

console.log(show_all());


