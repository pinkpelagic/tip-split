
function calculateBill()
{
    var billamt = document.getElementById("billamt").value;
    var tipamt = document.getElementById("tipamt").value;
    var sharenum = document.getElementById("sharenum").value;
    if(billamt <= 0 ||billamt === "")
    {
        alert("Please enter the proper amount");
        return;
    }
    if (sharenum === "" || sharenum <= 1) {
        sharenum = 1;
        document.getElementById("each").style.display = "none";
    }
    var total = 0;
    total = parseInt(tipamt) + parseInt(billamt);
    total = total / sharenum;
    total = total.toFixed(2);
    document.getElementById("bill").innerHTML = total;
}
document.getElementById("totalbill").onclick = function() {
    calculateBill();}
