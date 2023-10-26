// ACME:123-L the large (L) part 123 is supplied by ACME
// DI:12345-M the medium (M) part 12345 is supplied by DI
// ACE:1-12 the size 12 part 1 is supplied by ACE
function getSupplier(code) {
    // let product = code.slice(0, code.indexOf(":"));
    let product = code.slice(0,4);
    return product

}
// that returns all characters before the : 
function getProductNumber(code) {
    let product = code.slice(code.indexOf(":")+1, code.indexOf("-"));
    // let product = code.slice(5,8);
    return product;

}
// that returns all characters between the : and -
function getSize(code) {
    let product = code.slice(code.indexOf("-") + 1);
    // let product = code.slice(9);
    return product;
}
function categorized(supplier,product,size){
    if(size == "L"){
        size = "large (L)"
    }else if(size == "M"){
        size = "medium (M)"
    }
    console.log(`The size ${size} part ${product} is supplied by ${supplier}`)

}
const part1 = "ACME:123-L";
categorized(getSupplier(part1),getProductNumber(part1),getSize(part1));

const part2 = "DI:12345-M";
categorized(getSupplier(part2),getProductNumber(part2),getSize(part2));

const part3 = "ACE:1-12";
categorized(getSupplier(part3), getProductNumber(part3), getSize(part3));

// that returns all characters after the 
