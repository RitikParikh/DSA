function largest(a){

    let large = a[0];
    let arrlength = Math.floor(a.length/2)
    for(let i=1;i<=arrlength; i++){
        if(a[i] && a[i]> large){
            large = a[i];
        }
        if(a[i + arrlength] && a[i + arrlength]> large){
            large = a[i + arrlength];
        }
    }
    return large;
   }

   console.log(largest([100,3,35,67,14,1167,33,112]));