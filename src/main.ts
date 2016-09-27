class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}
var n:number=6;
function Creat(n:number):void{
    //var pyramid:string;
    var i,j,k:number;
    for(i=1;i<=n;i++){
        var pyramid="";
        for(j=0;j<n-i;j++){
            pyramid+=" ";
        };
        for(k=0;k<(2*i-1);k++){
            pyramid+="*";
        }
        console.log(pyramid);
    }
}

window.onload = () => {
  Creat(n);
};