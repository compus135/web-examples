interface Iobj  {
    key:string
}
 
let obj: Iobj | {} = {}

// let arr: string[] = ["abc"];
// arr = [1]
// interface Iobj {
//     label:string
// }
// let obj: Iobj;
// obj = {}

// interface Ioverloads {
//     (x: { sex: number }): number;
//     (x: string): string;
// }

// let fn = <Ioverloads>null;
// fn("")

// function cry(x: { sex: number }): string;
// function cry(x: string): string;

// let cry = function () { }



// import { arguments } from "file-loader"





// interface Ihybrid {
//     (url:boolean): boolean,
//     (url:string,config:boolean):string,
//     name: string,
//     say: () => string,
//     cry(type:string):boolean
// }

// const fn = <Ihybrid>null

// fn( true,"2");
// fn.say = () => ""

// fn.cry = () => true

// fn.cry(2)

// fn.name = "12"


// interface Shape {
//     color:string
// }

// interface Square extends Shape { 
//     sideLenght:number
// }

// let square = <Square>{}
// square.color = "blue"
// square.sideLenght = 10

// interface Ifn { 
//     (config:string):boolean
// }

// let fn: Ifn = config => { return true}

// let obj: { label: string } = { label: "abc" }
// //等价于以下写法
// interface Iobj { 
//     label:string
// }
// let obj:Iobj = { label: "abc" }
export {}