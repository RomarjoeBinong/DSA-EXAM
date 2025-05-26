let groceryStack = [];

function peek(stack) {
    if (stack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log("Top of the stack: " + stack[stack.length - 1]);
        return stack[stack.length - 1];
    }
}

function push(stack, item) {
    stack.push(item);
    console.log(`Pushed "${item}" to the stack.`);
    peek(stack);
    console.log("Current Stack:", stack);
}

function pop(stack) {
    if (stack.length === 0) {
        console.log("Cannot pop. The stack is empty.");
    } else {
        let removedItem = stack.pop();
        console.log(`Popped "${removedItem}" from the stack.`);
        peek(stack);
        console.log("Current Stack:", stack);
    }
}

// Continue until 5 valid items remain in the stack
while (groceryStack.length < 5) {
    let item = prompt(`Enter grocery item #${groceryStack.length + 1}:`);
    push(groceryStack, item);

    let response;
    while (true) {
        response = prompt("Do you want to remove the last added item? (yes/no)").trim().toLowerCase();
        if (response === "yes" || response === "no") {
            break;
        }
        alert("Please type only 'yes' or 'no'.");
    }

    if (response === "yes") {
        pop(groceryStack);
    } else {
        console.log("Item kept in the stack.");
    }
}

console.log("Final Stack:", groceryStack);