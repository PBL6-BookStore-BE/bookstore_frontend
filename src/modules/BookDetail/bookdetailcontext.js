export const slideImage = (active, count) => {
    if (active === count) {
        return true;
    }
};
export const updateQuantity = (
    type,
    quantitiy,
    setQuantitiy,
    ) => {
    if (type === "increase") {
        setQuantitiy(quantitiy + 1);
    } 
    else if (type === "decrease") {
        if (quantitiy === 1) {
            setQuantitiy(1);
        } 
        else {
            setQuantitiy(quantitiy - 1);
        }
    }
};