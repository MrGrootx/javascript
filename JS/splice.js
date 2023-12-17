const spliced = names.splice(0, 1, "Abishek2.0");
console.log(spliced);
console.log(names);

// const spliced = names.splice(0[index], 1[position], "Abishek2.0"[New elements]);

/*
        Parameter	Description
        index	Required.
        The position to add/remove items.
        Negative value defines the position from the end of the array.
        howmany	Optional.
        Number of items to be removed.
        item1, ..., itemX	Optional.
        New elements(s) to be added.
*/
