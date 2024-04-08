class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

      
        const listeners = this.events.get(eventName);
        listeners.push(callback);

       
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1); 
                }
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }

        const listeners = this.events.get(eventName);
        const results = [];

    
        listeners.forEach(callback => {
            results.push(callback(...args));
        });

        return results;
    }
}

const emitter = new EventEmitter();

const subscription1 = emitter.subscribe('event1', () => {
    console.log('Event 1 listener 1');
});
const subscription2 = emitter.subscribe('event1', () => {
    console.log('Event 1 listener 2');
});
const subscription3 = emitter.subscribe('event2', (arg1, arg2) => {
    console.log(`Event 2 listener, received args: ${arg1}, ${arg2}`);
});

emitter.emit('event1');


emitter.emit('event2', [10, 20]);


subscription1.unsubscribe();
emitter.emit('event1');


subscription2.unsubscribe();
emitter.emit('event1');

