import brain from 'brain.js/src'
// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [100], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

// create a simple feed forward neural network with backpropagation
export const contrastBrain = new brain.NeuralNetwork(config);

contrastBrain.train([
    { input: [0.46, 0.94, 0.88], output: { dark: 0, light: 1 } },
    { input: [0.98, 0.81, 0.54], output: { dark: 0, light: 1 } },
    { input: [0, 0.16, 0.34], output: { dark: 1, light: 0 } },
    { input: [0.07, 0.28, 0.26], output: { dark: 1, light: 0 } },
    { input: [0.67, 0.34, 0.74], output: { dark: 1, light: 0 } },
    { input: [0.39, 0.67, 0.42], output: { dark: 1, light: 0 } },
    { input: [0.89, 0.45, 0.23], output: { dark: 1, light: 0 } },
    { input: [0.98, 0.58, 0.33], output: { dark: 0, light: 1 } },
]);

const output = contrastBrain.run([1, 1, 1]); // [0.987]