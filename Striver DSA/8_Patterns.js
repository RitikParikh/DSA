

const pat1 = () =>{
    for(let i=0; i<5;i++){
        let str = "";
        for(let j=0; j<5;j++){
            str += '*'
        }
        console.log(str);
    }
}

const pat2 = () =>{
    for(let i=0; i<5;i++){
        let str = "";
        for(let j=0; j<=i;j++){
            str += '*'
        }
        console.log(str);
    }
}

const pat3 = () =>{
    for(let i=1; i<=5;i++){
        let str = "";
        for(let j=1; j<=i;j++){
            str += `${j}`;
        }
        console.log(str);
    }
}

const pat4 = () =>{
    for(let i=1; i<=5;i++){
        let str = "";
        for(let j=1; j<=i;j++){
            str += `${i}`;
        }
        console.log(str);
    }
}

const pat5 = () =>{
    for(let i=5; i>=1;i--){
        let str = "";
        for(let j=1; j<=i;j++){
            str += `*`;
        }
        console.log(str);
    }
}

const pat6 = () =>{
    for(let i=5; i>=1;i--){
        let str = "";
        for(let j=1; j<=i;j++){
            str += `${j}`;
        }
        console.log(str);
    }
}

const pat7 = () =>{
    for(let i=0; i<5;i++){
        let str = "";
        for(let j=0; j<5-i-1;j++){
            str += ` `;
        }
        for(let k=0; k<2*i+1;k++){
            str += `*`;
        }
        console.log(str);
    }
}

const pat8 =()=>{
    for(let i=5;i>0;i--){
        let str ="";
        for(let k=0;k<5-i;k++){
            str+=" ";
        }
        for(let j=0; j<2*i-1; j++){
            str +=`*`;
        }
       
        console.log(str);
    }
}

const pat9 =()=>{
    let rows =5, arr=[];
    for(let i=0; i<rows;i++){
        let str = "";
        for(let j=0; j<rows-i-1;j++){
            str += ` `;
        }
        for(let k=0; k<2*i+1;k++){
            str += `*`;
        }
        arr.push(str);
        console.log(str);
    }
    for(let i=rows-1; i>=0;i--){
        console.log(arr[i]);
    }
}

const pat10 =()=>{
    let rows =5, arr=[];
    for(let i=0; i<rows;i++){
        let str = "";
        for(let j=0; j<rows-i-1;j++){
            str += ` `;
        }
        for(let k=0; k<2*i+1;k++){
            str += `*`;
        }
        arr.push(str);
        console.log(str);
    }
    for(let i=rows-1; i>=0;i--){
        console.log(arr[i]);
    }
}

const pat11 =()=>{
    let rows =5, arr=[];
    for(let i=1; i<=rows;i++){
        let str = "";
        for(let j=0; j<i;j++){
            str += `*`;
        }
        arr.push(str);
        console.log(str);
    }
    for(let i=rows-2; i>=0;i--){
        console.log(arr[i]);
    }
}

const pat12 =()=>{
    let rows =5,start=1,lastDigit=1;
    for(let i=1; i<=rows;i++){
        let str = `${Number(start)}`;
        for(let j=1; j<i;j++){
            lastDigit = !lastDigit;
            str += `${Number(lastDigit)}`;
        }
        start = !start;
        lastDigit = start;
        console.log(str);
    }
}

/* 
1      1
12    21
123  321
12344321
*/

const pat13 =()=>{
    let rows =4;
    for(let i=1; i<=rows;i++){
        let str = ``;
        for(let j=1; j<=i;j++){
            str += `${j}`;
        }
        for(let k=1; k<=(rows-i)*2;k++){
            str += ` `;
        }
        for(let l=i; l>=1;l--){
            str += `${l}`;
        }
        console.log(str);
    }
}

/* 
A
AB
ABC
ABCD
ABCDE
*/
const pat14 =()=>{
    let rows =5;
    for(let i=1; i<=rows;i++){
        let str = ``;
        for(let j=65; j<=65+i;j++){
            str += `${String.fromCharCode(j)}`;
        }
        console.log(str);
    }
}

const pat15 =()=>{
    let rows =5;
    for(let i=rows-1; i>=0;i--){
        let str = ``;
        for(let j=65; j<=65+i;j++){
            str += `${String.fromCharCode(j)}`;
        }
        console.log(str);
    }
}

const pat16 =()=>{
    let rows =5;
    for(let i=65; i<=65+rows-1;i++){
        let str = ``;
        for(let j=65; j<=i;j++){
            str += `${String.fromCharCode(i)}`;
        }
        console.log(str);
    }
}

const pat17 =()=>{
    let rows =7;
    for(let i=0; i<rows;i++){
        let str = "";
        for(let j=0; j<rows-i-1;j++){
            str += ` `;
        }
        for(let k=65; k<i+1+65;k++){
            str += `${String.fromCharCode(k)}`;
        }
        for(let l=65+i-1; l>=65;l--){
            str += `${String.fromCharCode(l)}`;
        }
        console.log(str);
    }
}

const pat18 =()=>{
    let rows =5;
    for(let i=rows+64; i>=65;i--){
        let str = "";
        for(let j=i; j<=69;j++){
            str += `${String.fromCharCode(j)}`;
        }
        console.log(str);
    }
}

const pat21 =()=>{
    let rows =4;
    for(let i=1; i<=rows;i++){
        let str = "";
        for(let j=1; j<=rows;j++){
            if(i==1 || i==rows || j==1 || j==rows){
                str += `*`;
            }else str +=" "
        }
        console.log(str);
    }
}

const pat22 =()=>{
    let rows =4;
    for(let i=0;i<(2*rows)-1;i++){
        let str = "";
        for(let j=0;j<(2*rows)-1;j++){
            let top = i;
            let bottom = j;
            let right = (2*rows - 2) - j;
            let left = (2*rows - 2) - i;
            str += `${rows-Math.min(Math.min(top,bottom),Math.min(left,right))}`;
        }
        console.log(str);
    }
}

// pat1();
// pat2();
// pat3();
// pat4();
// pat5();
// pat6();
// pat7();
// pat8();
// pat9();
// pat10();
pat11();
// pat12();
// pat13();
// pat14();
// pat15();
// pat16();
// pat17();
// pat18();
// pat21();
// pat22();