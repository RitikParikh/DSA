/* Data type refers to the type of value a variable has and the way the computer interprets it.



Each data type has a different size. You’ve studied 5 different data types and the sizes of the data types:

Integer: 4 bytes
Long: 8 bytes
Float: 4 bytes
Double: 8 bytes
Character: 1 byte


You’re given a data type. Print its size in bytes. */


function getSizeInBytes(dataType) {
    switch (dataType.toLowerCase()) {
        case 'integer':
        case 'float':
            return 4;
        case 'long':
        case 'double':
            return 8;
        case 'character':
            return 1;
        default:
            return 'Unknown data type';
    }
}

// Example usage
const dataType = 'Long';
const sizeInBytes = getSizeInBytes(dataType);
console.log(sizeInBytes);