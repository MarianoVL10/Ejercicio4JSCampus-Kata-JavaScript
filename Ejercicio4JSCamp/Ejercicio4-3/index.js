// console.log('its working')
const myArray = [4, 'two', 8, 'three', 5, 9, 1, 'zero']

for (const element of myArray){
    if(typeof element === 'number'){
        console.log(`${element} is a number`);
    }
}
