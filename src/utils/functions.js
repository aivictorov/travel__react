function countID(itemsArray) {
    let id = 0;

    itemsArray.forEach((item) => {
        if (item.id > id) {
            id = item.id;
        }
    });

    return id
}

export { countID }