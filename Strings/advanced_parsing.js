function parseAndDisplayName(names){
    const space = " "
    console.log( " ")
    let first = names.indexOf(space);
    if (-1 == first){
        console.log("ONLY NAME: "+ names);
        return
    }
    const sec = names.indexOf(space, first+1)
    if(-1==sec){
        console.log("FISRT NAME: "+ names.slice(0,first+1));
        console.log("LAST NAME: "+names.slice(first+1));
        return
    }
    console.log("FIRST NAME:  " + names.slice(0, first));
    console.log("MIDDLE NAME: " + names.slice(first + 1, sec));
    console.log("LAST NAME:   " + names.slice(sec + 1));
    
    } 
   
    // let names = "Brenda kaye"
    parseAndDisplayName("kaye");
    parseAndDisplayName("Brenda kaye");
    parseAndDisplayName("Brenda Walter kaye");
