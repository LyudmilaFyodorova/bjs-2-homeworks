class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.objectToAdd = { callback, time, canCall: true };
        this.alarmCollection.push(this.objectToAdd)
    }

    removeClock(time) {
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time === time) {
                this.alarmCollection.splice(i, 1);
            }
        }
    }

    getCurrentFormattedTime() {
        return
    }

    start() {
        if (this.intervalId !== 0) {
            return
        }

        setInterval(() => this.alarmCollection.forEach((time) => {
            if ((time === currentTime) && (canCall === true)) {
                canCall = false;
                this.alarmCollection.callback;
            }
        }
        ), 1000);
    }

    stop() {
        clearInterval(intervalId);
        let intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((canCall) => canCall = true);
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}
