// Type your code below this line!

const total = Number(process.argv[2])
const names = []

for (let i = 0; i < total; i++) {
  names.push(process.argv[3 + i])
}

console.log(names)

// Type your code above this line!
