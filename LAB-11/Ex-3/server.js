// Import events module
const EventEmitter = require('events');

// Create an EventEmitter object
const eventEmitter = new EventEmitter();

// 1. Register first listener
eventEmitter.on('userLogin', (username) => {
    console.log(`Listener 1: Welcome ${username}!`);
});

// 2. Register second listener (same event)
eventEmitter.on('userLogin', (username) => {
    console.log(`Listener 2: ${username} has logged in successfully.`);
});

// 3. Register another custom event
eventEmitter.on('dataReceived', (data) => {
    console.log(`Data received: ${data}`);
});

// 4. Trigger events using emit()
console.log("Starting application...\n");

// Emit userLogin event with data
eventEmitter.emit('userLogin', 'Surya');

// Emit another event
eventEmitter.emit('dataReceived', 'Sample data from server');

// 5. Demonstrate asynchronous behavior
setTimeout(() => {
    eventEmitter.emit('userLogin', 'AsyncUser');
}, 2000);