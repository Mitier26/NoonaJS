let animals = [
    'Aardvark',
    'Albatross',
    'Alligator',
    'Alpaca',
    'Ant',
    'Ape',
    'Armadillo',
    'Donkey',
    'Baboon',
    'Badger',
    'Barracuda',
    'Bat',
    'Bear',
    'Beaver',
    'Bee',
    'Bison',
    'Cat',
    'Caterpillar',
    'Cattle',
    'Chamois',
    'Cheetah',
    'Chicken',
    'Chimpanzee',
    'Chinchilla',
    'Chough',
    'Clam',
    'Cobra',
    'Cockroach',
    'Cod',
    'Cormorant',
    'Dugong',
    'Dunlin',
    'Eagle',
    'Echidna',
    'Eel',
    'Eland',
    'Elephant',
    'Elk',
    'Emu',
    'Falcon',
    'Ferret',
    'Finch',
    'Fish',
    'Flamingo',
    'Fly',
    'Fox',
    'Frog',
    'Gaur',
    'Gazelle',
    'Gerbil',
    'Giraffe',
    'Grasshopper',
    'Heron',
    'Herring',
    'Hippopotamus',
    'Hornet',
    'Horse',
    'Kangaroo',
    'Kingfisher',
    'Koala',
    'Kookabura',
    'Moose',
    'Narwhal',
    'Newt',
    'Nightingale',
    'Octopus',
    'Okapi',
    'Opossum',
    'Quail',
    'Quelea',
    'Quetzal',
    'Rabbit',
    'Raccoon',
    'Rail',
    'Ram',
    'Rat',
    'Raven',
    'Red deer',
    'Sandpiper',
    'Sardine',
    'Sparrow',
    'Spider',
    'Spoonbill',
    'Squid',
    'Squirrel',
    'Starling',
    'Stingray',
    'Tiger',
    'Toad',
    'Whale',
    'Wildcat',
    'Wolf',
    'Worm',
    'Wren',
    'Yak',
    'Zebra',
];

console.log('뒤에서 제거: ' + animals.pop());
console.table(animals);
console.log('뒤에 값을 추가 : ' + animals.push('Dog'));
console.table(animals);

animals.push('Mosquito', 'Mouse', 'Mule');
console.table(animals);

console.log(animals.includes('Human'));
console.log(animals.includes('Cat'));

console.log(animals.indexOf('Red deer'));
animals[animals.indexOf('Red deer')] = 'Deer';
console.table(animals);

animals.splice(animals.indexOf('Spider'), 3);
console.table(animals);

animals.splice(animals.indexOf('Tiger'));
console.table(animals);

let newArr = animals.slice(animals.indexOf('Baboon'), animals.indexOf('Bison') + 1);
console.table(newArr);

let newArray = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].startsWith('B')) {
        newArray.push(animals[i]);
    }
}
console.log(newArray);

arr = ['1', '2', '3', '4', '5'];

arr.splice('1', 2);
console.log(arr);

arr = ['1', '2', '3', '4', '5'];
arr.splice(arr.indexOf('1'), 2);
console.log(arr);

arr = ['1', '2', '3', '4', '5'];
console.log(arr.indexOf('1'));
console.log(arr.splice('1'));
