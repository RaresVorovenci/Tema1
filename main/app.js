function removeOrderItem(orderInfo , position){
    if(!(orderInfo.items instanceof Array))
     throw "Items should be an array";
    
     orderInfo.items.forEach(item => {
        if (!item.hasOwnProperty('price') || !item.hasOwnProperty('quantity')) {
            throw 'Malformed item'
        }
    })
    
    if(orderInfo.items[position]==undefined)
     throw "Invalid position";
    
    let removed = orderInfo.items.splice(position, 1);
    
    let suma = 0
    for(let i =0; i < orderInfo.items.length; i++){
	if(orderInfo.items[i].price != undefined && orderInfo.items[i].quantity != undefined){
		suma = suma + orderInfo.items[i].price * orderInfo.items[i].quantity
	}
}
    
    orderInfo.total=suma;

    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;