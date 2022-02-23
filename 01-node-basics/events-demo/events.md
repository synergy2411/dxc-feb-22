const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

// on - register the subscriber / listener function
// emit - emits/trigger/produce the event

// emitter.on("newListener", (eventName, listenerFn) => {
//   console.log(
//     eventName + " event added with Listener function " + listenerFn.name
//   );
// });
// emitter.on("removeListener", (eventName, listenerFn) => {
//   console.log("Unsubscribed");
// });
// const subscriberOne = (result) => {
//   console.log("First Subscription with message - ", result.message);
// };

// emitter.setMaxListeners(30)

// for (let i = 0; i < 25; i++) {
//   emitter.on("MyCustomEvent", subscriberOne);
// }

// emitter.on("MyCustomEvent", (result) => {
//   console.log("My Event Fired with message - ", result.message);
//   // emitter.removeListener("MyCustomEvent", subscriberOne);
// });

// emitter.emit("MyCustomEvent", { message: "SUCCESS" });
// emitter.emit("MyCustomEvent", { message: "WARNING" });


// process.on("uncaughtException", () => {
//   console.log("HAndled Uncaught Exception");
// })

// nonExistingFunc();


// process.on("exit", code => console.log("Exiting with code - ", code))

// process.exit(1);