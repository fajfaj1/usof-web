export class Session {
    timestamp = Date.now();
    teams = {};
    constructor(data = {}) {
        if (data.timetamp !== null) {
            this.timestamp = data.timestamp;
        }
        if (typeof data.teams === "object") {
            Object.keys(data.teams).slice(0, 2).forEach(key => {
                if (data.teams[key] instanceof Array) {
                    this.teams[key] = data.teams[key];
                } else {
                    return new Error("Provided player list is not an array");
                }
            });
        }
    }
    static load() {
        const sessionString = localStorage.getItem('session');
        if (sessionString === null) return null;
        return new Session(JSON.parse(sessionString));
    }
    static create(data) {
        const session = new Session(data);
        session.save();
    }
    delete() {
        localStorage.removeItem('session');
    }
    save() {
        localStorage.setItem('session', JSON.stringify(this));
    }
}