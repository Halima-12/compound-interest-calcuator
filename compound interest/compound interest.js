function calculateCompoundInterest() {
    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rate").value);
    var timesInterestApplied = Number(document.getElementById("timesInterestApplied").value);
    var time = Number(document.getElementById("time").value);

    if (!principal || !rate || !timesInterestApplied || !time) {
        alert("please enter numbers");
        return;
    }

    var rate = rate / 100;
    var rateOverTimesInterestApplied = rate / timesInterestApplied;
    var i = 1 + rateOverTimesInterestApplied;
    var timesInterestAppliedTime = timesInterestApplied * time;
    var iRaisedToPowertimesInterestAppliedTime = Math.pow(i, timesInterestAppliedTime);
    var calculateCompoundInterest = principal * iRaisedToPowertimesInterestAppliedTime;
    var calculateCompoundInterestRounded = calculateCompoundInterest.toFixed(2);
    document.getElementById("output").innerHTML = ["Your compound interest is, " + calculateCompoundInterestRounded];
}