const original = []
for (let i = 0; i < 28; i++) {
    original.push([i + 1, 1, 60, 0.5])
    original.push([i + 1, 2, 60, 0.5])
}

const performance1 = []
for (let i = 0; i < 28; i++) {
    let randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    let randomDynamics = Math.floor(Math.random() * (0.7 - 0.4 + 1)) + 0.4;
    performance1.push([i + 1, 1, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance1.push([i + 1, 2, randomBPM, randomDynamics])
}

const original2 = []
for (let i = 0; i < 28; i++) {
    original2.push([i + 1, 1, 60, 0.5])
    original2.push([i + 1, 2, 60, 0.5])
    original2.push([i + 1, 3, 60, 0.5])
    original2.push([i + 1, 4, 60, 0.5])
}


const performance1Second = []
for (let i = 0; i < 28; i++) {
    let randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    let randomDynamics = Math.floor(Math.random() * (0.7 - 0.4 + 1)) + 0.4;
    performance1Second.push([i + 1, 1, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance1Second.push([i + 1, 2, randomBPM, randomDynamics])
}

const performance2 = []
for (let i = 0; i < 28; i++) {
    let randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    let randomDynamics = Math.floor(Math.random() * (0.7 - 0.4 + 1)) + 0.4;
    performance2.push([i + 1, 1, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance2.push([i + 1, 2, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance2.push([i + 1, 3, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance2.push([i + 1, 4, randomBPM, randomDynamics])
}

const performance2Second = []
for (let i = 0; i < 28; i++) {
    let randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    let randomDynamics = Math.floor(Math.random() * (0.7 - 0.4 + 1)) + 0.4;
    performance2Second.push([i + 1, 1, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance2Second.push([i + 1, 2, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance2Second.push([i + 1, 3, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance2Second.push([i + 1, 4, randomBPM, randomDynamics])
}

const performance3 = []
for (let i = 0; i < 28; i++) {
    let randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    let randomDynamics = Math.floor(Math.random() * (0.7 - 0.4 + 1)) + 0.4;
    performance3.push([i + 1, 1, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance3.push([i + 1, 2, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance3.push([i + 1, 3, randomBPM, randomDynamics])

    randomBPM = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
    randomDynamics = Math.random() * (0.7 - 0.4 + 1) + 0.4;
    performance3.push([i + 1, 4, randomBPM, randomDynamics])
}

export { original, original2, performance1, performance1Second, performance2, performance3, performance2Second};