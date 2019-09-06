export default class Event {
    constructor({config}) {
        this.events = [];
    }
    getEvents() {
        return this.events;
    }
    save(event) {
        this.events.push(event);
    }
}
