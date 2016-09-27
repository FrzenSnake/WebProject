var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var n = 6;
function Creat(n) {
    //var pyramid:string;
    var i, j, k;
    for (i = 1; i <= n; i++) {
        var pyramid = "";
        for (j = 0; j < n - i; j++) {
            pyramid += " ";
        }
        ;
        for (k = 0; k < (2 * i - 1); k++) {
            pyramid += "*";
        }
        console.log(pyramid);
    }
}
window.onload = function () {
    Creat(n);
};
