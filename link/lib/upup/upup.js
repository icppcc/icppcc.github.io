var num = 1;
//循环执行，每隔1秒钟执行一次 1000
var t1 = window.setInterval(refreshCount, 800);

function refreshCount() {
    num++;
    if (num % 2 == 0) {
        document.getElementById("upup").style.display = "none"; //隐藏
    } else {
        document.getElementById("upup").style.display = "block"; //隐藏
    }
}
//去掉定时器的方法
// window.clearInterval(t1);