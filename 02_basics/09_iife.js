//     Immediately invoked function expression (IIFE)  EK FUNTION JISSE TURANT EXECUTE KRANA H USKE LIYE USE HOTA H
//     WHY USED    TURANT EXECUTE KRANE KE LIYE OR      GLOBAL SCOPE KE POLLUTIN KO HATANE KE LIYE KYUKI USSE PROBLEM HO JATI H

(function(){
    console.log("DB CONNECTED")
})();



(function CONNECTION(){                   //  NAMED IIFE
    console.log("DB CONNECTED TWO")
})();                                     // YE NHI CHALEGA AGR UPPAR WALA FUNCTION  ; SE END NA HO TOH BC INVOKE FUNCTION 
                                         // DON'T KNOW WHEN TO STOP HENCE TO STOP ; IS NEEDED

//  INVOKED FUNCTION OF ARROW FUNCTION 

(()=> {
    console.log("DB CONNECTED 3")
})();


// HOW TO PASS VALUE IN INVOKED FUNCITON OF ARROW FUNCTION

((name) => {
    console.log(`${name}, is DB 4 CONNECTED ??`)
})("SHUBHAM");