const Hello: string = "Hello"
console.log(Hello)

let ten: number = 10
let point: number = 0.1
let if_ok: boolean = true

let arr: number[] = [1, 2]
let arr2: Array<number> = [1, 2]

let tuple: [string, string] = ["Hello", "World"]

enum Color {Red, Blue, Green}

// void null undefined and any
function get_void(): void {
    let a: number = 1;
}

let x: any = 2;

export type ApiTypes = 'promise' | 'rxjs';


/*
null
在 JavaScript 中 null 表示 "什么都没有"。

null是一个只有一个值的特殊类型。表示一个空对象引用。

用 typeof 检测 null 返回是 object。

undefined
在 JavaScript 中, undefined 是一个没有设置值的变量。
*/

// tuple usage
let my_tuple: [string, number, boolean] = ["Hello", 1, true]
console.log(my_tuple)
// update via index
my_tuple[0] = "world"
console.log(my_tuple)

let nested_type: [string, [string, number]] = ["Hello", ["Hello", 1]]
console.log(nested_type)

