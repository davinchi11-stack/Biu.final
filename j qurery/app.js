 var balance = 15000;

 var  customer_request = 5000;

 var limit= "insufficient funds";
 var withdraw = 5000;
 
 var send_d = "debit_alert";
 
 var new_balance = balance - customer_request


 console.log(balance+ " naira ")
 

 if ( customer_request< balance ){
     console.log(withdraw)
    
 } else{
    console.log(limit);
 }


 if (withdraw< balance ){
    console.log(new_balance)
    console.log(send_d)
    console.log("Dr Amt:5000.00 AC: *9015* BAL: XXXX  ")

 } else{
    console.log("transaction error")
 }
 alert("accept cookies");
