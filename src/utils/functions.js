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

function addClass(name, classes) {
    let classString = '';

    if (classes) {
        const classArray = classes.split([' ']);
    
        if (classArray.length > 0) {
            classString = ' ' + classArray.map((item) => item = `${name}--${item}`).join(' ');
        };
    };
    
    return classString;
}

export {
    countID,
    scrollToRef,
    addClass,
}