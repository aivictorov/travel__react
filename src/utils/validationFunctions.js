function checkEmail(email, setEmailCheckMsg) {
    let result = false;
    const template = /^[A-Z][0-9A-Z._]+@[A-Z]+.[A-Z]{2,}$/i;

    if (!email.trim()) {
        setEmailCheckMsg('Please, enter email');
    } else if (!template.test(email.trim())) {
        setEmailCheckMsg('Incorrect format of email');
    } else {
        setEmailCheckMsg('');
        result = true;
    };

    return result;
}

function checkEmpty(value, setValueCheckMsg, name) {
    let result = false;

    if (!value.trim()) {
        setValueCheckMsg('Please, enter ' + name);
    } else {
        setValueCheckMsg('');
        result = true;
    };

    return result;
}

export {
    checkEmail,
    checkEmpty
};