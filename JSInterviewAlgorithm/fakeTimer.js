class FakeTimer{
    tasks = [];
    nextTimeoutId = 0;
    time = 0;
    refs = new Map();

    install() {
        if (this.installed) {
        throw new Error("This FakeTimer is already installed.")
        }

        this.installed = true;
        this.originalSetTimeout = window.setTimeout;
        this.originalClearTimeout = window.clearTimeout;
        this.originalDateNow = Date.now;


        window.setTimeout = this.setTimeout.bind(this);
        window.clearTimeout = this.clearTimeout.bind(this);
        Date.now = this.now.bind(this);
    }

    uninstall() {
        if (!this.installed) {
        throw new Error("Attemping to uninstall a FakeTimer that has not been installed.")
        }

        this.installed = false;
        window.setTimeout = this.originalSetTimeout;
        window.clearTimeout = this.originalClearTimeout;
        Date.now = this.originalDateNow;
    }

    tick() {
        if (!this.installed) {
        throw new Error("Attemping to tick a FakeTimer that has not been installed. Did you forget to call install?")
        }

        while (this.tasks.length) {
        const task = this.tasks.shift();

        const { timeout, due, callback, args } = task;
        this.refs.delete(timeout);

        this.time = due;
        callback.apply(undefined, args);
        }
    }

    setTimeout(callback, delay, ...args) {
        const timeout = this.nextTimeoutId++;

        const due = Math.max(0, delay) + this.time;
        const task = { timeout, due, callback, args };
        this.tasks.push(task);
        this.refs.set(timeout, task);

        this.tasks.sort((a, b) => a.due - b.due);

        return timeout;
    }

    clearTimeout(timeout) {
        if (this.refs.has(timeout)) {
        const task = this.refs.get(timeout);

        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.refs.delete(timeout);
        }
    }

    now() {
        return this.time;
    }
}