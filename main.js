// Question 1
let HighTemp = [48,40,52,56,57,61,58,58];
let LowTemp = [33,30,35,38,42,44,46,47];
console.log("Question 1:")
console.log("High Temperature Array:",HighTemp)
console.log("Low Temperature Array:",LowTemp)

// Question 2
let Hcount = 0;
let HighAvg = 0;

while(Hcount < HighTemp.length){
    HighAvg += HighTemp[Hcount]/HighTemp.length;
    Hcount++;
}
console.log("Question 2:")
console.log("Average for High temperatures:" , HighAvg);

let Lcount = 0;
let LowAvg = 0;
while(Lcount < LowTemp.length){
    LowAvg += LowTemp[Lcount]/LowTemp.length;
    Lcount++;
}
console.log("Average for Low temperatures:",LowAvg);

//Question 3
console.log("Question 3:");
let forecast = ['Rain', 'Cloudy', 'Sunny', 'Mostly Sunny', 'Partly Cloudy', 'Mostly Sunny', 'Partly Cloudy', 'Partly Cloudy'];
console.log("Forecast description Array:",forecast);

//Question 4
console.log("Question 4:")
let temp;
let count = 0;
forecast.sort();

for (let i = 0; i < forecast.length; i++) {
    if (forecast[i] != temp) {
        if (count >= 2 ) {
            console.log(temp, "has a duplicate.");
        }
        temp = forecast[i];
        count = 1;
    } else {
        count++;
    }
}

//Question 5
console.log("Question 5:")
for (let i = 0; i < forecast.length; i++) {
    if (forecast[i] != temp) {
        if (count >= 2 ) {
            console.log('We will have ' + temp + ' for ' + count + ' days.');
        }
        temp = forecast[i];
        count = 1;
    } else {
        count++;
    }
}

//Question 6
console.log("Question 6:")
let HighTempC = [];
let LowTempC = [];

for (let i = 0; i < HighTemp.length; i++){
    let C = (HighTemp[i]-32)*(5/9);
    HighTempC.push(C);
}

for (let i = 0; i < LowTemp.length; i++){
    let C = (LowTemp[i]-32)*(5/9);
    LowTempC.push(C);
}
console.log("This is the array for High temperature in Celsius:" , HighTempC);
console.log("This is the array for Low temperature in Celsius:" ,LowTempC);

//Question 7
console.log("Question 7:")
for (let i=0; i<HighTemp.length; i++){
    let j =i+1;
    if (HighTemp[i] > HighTemp[j]){
        let Diff = HighTemp[i] - HighTemp[j];
        console.log("From Day", i ,"to Day", j, "Temperature Drop -" + Diff);
    }
    else if(HighTemp[i] < HighTemp[j]){
        let Diff = HighTemp[j] - HighTemp[i];
        console.log("From Day", i, "to Day", j,"Temperature Spike +" + Diff);
    }
    else if(HighTemp[j] == undefined){
        break;
    }
    else{
        console.log("No Temperature change in last two days");
    }
    
}