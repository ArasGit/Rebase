export class TimeFormatted extends HTMLElement { // (1)

    connectedCallback() {
    let date = new Date(this.getAttribute('datetime') || Date.now());

        let spreadElements :any = {
            year: this.getAttribute('year') || undefined,
            month: this.getAttribute('month') || undefined,
            day: this.getAttribute('day') || undefined,
            hour: this.getAttribute('hour') || undefined,
            minute: this.getAttribute('minute') || undefined,
            second: this.getAttribute('second') || undefined,
            timeZoneName: this.getAttribute('time-zone-name') || undefined
        };
        this.innerHTML = new Intl.DateTimeFormat("default", {...spreadElements}).format(date);
}
}

customElements.define("time-formatted", TimeFormatted)