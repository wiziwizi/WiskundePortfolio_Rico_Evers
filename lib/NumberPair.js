class NumberPair {
    constructor(a, b) {
        console.log("ik ben er", a, b);
        this.a = a;
        this.b = b;
    };

    sum() {
        return this.a + this.b;
    };

    longDivision() {
        var ans = "";
        var divident = this.a;
        var divisor = this.b;
        var quotient = Math.floor(divident / divisor);
        var rest = divident % divisor;
        var rests = [];
        var quotients = [];


        ans = quotient + ".";

        while (rests.indexOf(rest) == -1) {
            rests.push(rest);

            divident = rest * 10;
            quotient = Math.floor(divident / divisor);
            rest = divident % divisor;
            ans = ans + quotient;
            quotients.push(quotient);
        }
        quotients.splice(rests.indexOf(rest), 0, "[");
        quotients.push("]");
        ans += quotients.join("");
        return ans;
    }
}