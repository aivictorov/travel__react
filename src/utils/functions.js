function countID(itemsArray) {
    let id = 0;

    itemsArray.forEach((item) => {
        if (item.id > id) id = item.id;
    });

    return id;
};

function scrollToRef(ref, position) {
    ref.current.scrollIntoView({ block: position });
};



export {
    countID,
    scrollToRef
}