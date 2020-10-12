//Function "take" devuelve los 3 primeros elementos

function take(xs: number[], n:number):number[]{
    var ys = [];
    for(var i = 0; i < xs.length; i++){
        if(i < n){
            ys.push(xs[i]);
        }
    }
    return ys;
}

//Funcion "drop" elimina los 3 primeros elementos

function drop(xs:number[], n:number):number[]{
    var ys = [];
    for(var i = 0; i < xs.length; i++){
        if(i >= n){
            ys.push(xs[i]);
        }
    }
    return ys;
}

console.log(take([1,4,5,6,7], 3)); //[1,3,5]
console.log(drop([1,4,5,6,7], 3)); //[6,7]