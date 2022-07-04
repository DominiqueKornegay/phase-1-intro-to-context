// Your code here


function createEmployeeRecord(record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (recordArr){
    return recordArr.map(rec => createEmployeeRecord(rec))
}

function createTimeInEvent(empRec, dateStamp) {
    const [date, hour] = dateStamp.split(" ")

    const inTime = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }

    empRec.timeInEvents.push(inTime)
    
    return empRec
  
    
}

function createTimeOutEvent(empRec, dateStamp) {
    const [date, hour] = dateStamp.split(" ")

    const outTime = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }

    empRec.timeOutEvents.push(outTime)
    
    return empRec
  
    
}

function hoursWorkedOnDate (empRec, empDate) {
   
    recInTime = empRec.find((rec) => rec.inTime.hour === empDate)
    recOutTime = empRec.find((rec) => rec.outTime.hour === empDate)

    const hoursWorked = (recOutTime.hour - recInTime.hour) / 100

   return hoursWorked
}