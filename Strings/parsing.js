
function parseAndDisplayNames(names){
    const space= (" ");
    const first = names.indexOf(space)
  const sec = names.indexOf(space, first+1)
if(-1==sec){
    console.log("FISRT NAME: "+ names.slice(0,first+1));
    console.log("LAST NAME: "+names.slice(first+1));
    return
}

}
parseAndDisplayNames("Brenda kaye")

