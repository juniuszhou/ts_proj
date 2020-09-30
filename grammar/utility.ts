"use strict"

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// partial
interface Todo {
    title: string;
    name: string;
}

function get_partial(part: Partial<Todo>) {
    console.log(part);
}

get_partial({title: 'title', name: 'name'});
get_partial({name: 'name'});

// Readonly

// Record 