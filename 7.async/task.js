class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some((time) => this.alarmCollection.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({ callback, time, canCall: true })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((time) => this.alarmCollection.time !== time);
    }

    getCurrentFormattedTime() {
        let now = new Date();

    }

    start() {
        if (this.intervalId !== 0) {
            return
        }

        this.intervalId = setInterval(() => this.alarmCollection.forEach((time) => {
            if ((this.alarmCollection.time === currentTime) && (this.alarmCollection.canCall === true)) {
                this.alarmCollection.canCall = false;
                this.alarmCollection.callback();
            }
        }
        ), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((canCall) => this.alarmCollection.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
