// // ASSIGNMENT # 38 - 44
// // TASK # 1
// function power(a,b){
//     var total = 1;
//     for(var i = 1; i <= b; i++){
//         total = total * a;
//     }
//     return total;
// }
// document.write(power(4,3))

// // TASK # 2
// function leapYear(){
//     var year = +prompt("Enter any year to check if it is leap", "2020");
//     var result = year;
//     if(result % 400 === 0){
//         alert(result + " is a leap year")
//     }
//     else if(result % 100 === 0){
//         alert(result + " is not a leap year")
//     }
//     else if(result % 4 === 0){
//         alert(result + " is a leap year")
//     }
//     else{
//         alert(result + " is not a leap year")
//     }
// }
// leapYear();

// // TASK # 3
// function findArea(a,b,c){
//     var a, b, c, s;
//     if (a < 0 || b < 0 || c < 0 || (a+b <= c) || (a+c <=b) || (b+c <=a)){
//     alert("Not aid Triangle")
//     }
//     s = (a + b + c) / 2;
//     var area = (s * (s-a) * (s-b) * (s-c)) ** 0.5
//     console.log('The Area of a triangle with side length ' + a + ", " + b + " and " + c + " is " + area)
// }
// findArea(3,4,5);

// // TASK # 4
// function mainFunction(){
//     var name, sub1, sub2, sub3, obtained, total = 300;  
//     name = prompt("Enter your Name");
//     sub1 = +prompt("Enter 1st Subject marks")
//     sub2 = +prompt("Enter 2nd Subject marks")
//     sub3 = +prompt("Enter 3rd Subject marks")
//     obtained = sub1 + sub2 + sub3;
//     console.log("Student Name: " + name)
//     console.log("1st Subject: " + sub1)
//     console.log("2nd Subject: " + sub2)
//     console.log("3rd Subject: " + sub3)
//     function average(){
//         var average = obtained / 3;
//         console.log("Average of your received marks are " + average.toFixed(2))
//     }
//     average();

//     function percentage(){
//         var percent = obtained / total  * 100;
//         console.log("You received " + percent.toFixed(3) + "% in 3 Subjects")
//     }
//     percentage();
// }
// mainFunction();

// // TASK # 5
// function indexof(value){
//     var value = 
// }

// // TASK # 6
// function removeVowel(str){
//     var vowels = ['a','e','i','o','u'];
//     return str.split('').filter(function(el){
//         return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
// }

// var string = "Quick brown fox jumps over dog";

// console.log(string)
// console.log(removeVowel(string))

// // TASK # 7
// var string = "Pleases read this application and give me gratuity";
// function findOccurence(){
//     var count = 0;
//     var hasVowel = false;
//     for(var letter of string.toLowerCase()){
//         switch(letter){
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if(hasVowel) {
//                         count++;
//                         hasVowel = false;
//                     }
//                     else{
//                         hasVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 hasVowel = false
//         }
//     }
//     return count;
// }
// console.log(string)
// console.log(findOccurence())

// // TASK # 8
// var input = +prompt("Enter distance between Karachi and Islamabad (in km)")
// function meter(){
//     var meter = input * 1000;
//     document.write("<br>Distance in meters are " + meter)
// }

// function feet(){
//     var feet = input * 3280.84;
//     document.write("<br>Distance in feets are " + feet)
// }

// function inch(){
//     var inch = input * 39370.1;
//     document.write("<br>Distance in inches are " + inch)
// }

// function centimeter(){
//     var centimeter = input * 100000;
//     document.write("<br>Distance in centimeters are " + centimeter)
// }
// meter();
// feet();
// inch();
// centimeter();

// // TASK # 9
// var count = 1, workHour, overTime, overTimePay;
// while(count<=3)
// {
//     workHour = +prompt("Enter Working hours of employee no " + count)
//     if(workHour > 40){
//         overTime = workHour - 40;
//         overTimePay = overTime * 12.00;
//         document.write("<br>Employee No " + count + " overtime pay is" + overTimePay.toFixed(2))
//     }
//     else{
//         document.write("<br>You have to work for more than 40 hours to get over time pay<br>")
//     }
//     count++
// }

// // TASK # 10
// function countCurrency(){
//     var amount = +prompt("Enter amount to withdraw!!")
//     document.write("<br>Required notes of Rs. 100: " + Math.floor(amount / 100))
//     document.write("<br>Required notes of Rs. 50: " + Math.floor((amount % 100) / 50))
//     document.write("<br>Required notes of Rs. 10: " + Math.floor((((amount % 100) % 50) / 10)))
//     document.write("<br>Amount still remaining Rs.: " + Math.floor((((amount % 100) % 50) % 10)))
// }

// countCurrency()


// // ASSIGNMENT  # 43 - 48
// // TASK # 1
// from here all HTML data is written in index.html please check that also I've mentioned all task with there task numbers.
// function showMessage(){
//     alert("You clicked a link")
// }

// // TASK # 2
// function mobile(){
//     alert("Thanks for purchasing mobile from us")
// }

// // TASK # 3
// function deleted(rowdel){
//     var empTab = document.getElementById("table")
//     empTab.deleteRow(rowdel.parentNode.parentNode.rowIndex);
// }

// // TASK # 4
// function changeImage(id,src){
//     var images = document.getElementById(id);
//     images.src = src;
// }

// // TASK # 5
// var x = 0;
// document.getElementById('value').innerHtml = x;
// function increment(){
//     document.getElementById('value').innerHTML = ++x;
// }

// function decrement(){
//     document.getElementById('value').innerHTML = --x;
// }

// // ASSIGNMENT # 49 - 52
// // TASK # 1
// function displayForm(){
//     var fname = document.getElementById("fname") 
//     var lname = document.getElementById("lname")
//     var email = document.getElementById('email')
//     var password = document.getElementById('password')
//     var p1 = document.createElement('p')
//     var p2 = document.createElement('p')
//     var p3 = document.createElement('p')
//     var p4 = document.createElement('p')
//     var first = document.createTextNode(fname.value)
//     var last = document.createTextNode(lname.value)
//     var email1 = document.createTextNode(email.value)
//     var pass = document.createTextNode(password.value)
//     p1.appendChild(first)
//     p2.appendChild(last)
//     p3.appendChild(email1)
//     p4.appendChild(pass)
//     var formDetail = document.getElementById("formDetails")
//     formDetail.appendChild(p1)
//     formDetail.appendChild(p2)
//     formDetail.appendChild(p3)
//     formDetail.appendChild(p4)
// }

// // TASK # 2
// function readMore(){
//     var p = "Infinix Hot 8 4GB price in Pakistan Infinix Hot 8 4GB price in Pakistan is Rs. 18,999. Official dealers and warranty providers regulate the retail price of Infinix mobile products in official warranty. Price of Infinix Hot 8 4GB in Pakistan is Rs. 18,999. Price of Infinix in USD is $142. Infinix Hot 8 Price in Pakistan & Specs - The Budget Smartphone Infinix is going to bring Hot 8 the budget variant coming with 4GB RAM. This is an mid-range handset that will be carrying almost th same specs like its standard variant. The price of the phone will b higher as compared to the previous variant. The Infinix Hot 8 4GB wil be powered by 1.8GHz octacore Mediatek Helio P22 chipset that is  good chipset for the entry-level smartphones. This is also used in th mid-range smartphones. The Infinix's Hot 8 4GB Price in Pakistan is very attractive considering the specs like bringing you full HD plus resolution. The aspect ratio of the phone is going to be 20:9. The design of the screen will remain the same which means that the Infinix Hot 8's having a water-drop notch that holds the selfie shooter of the phone. The variant is coming with 4 gigabytes of RAM and the internal storage of the phone will be 64 gigabytes. The coming Hot 8 4GB by Infinix has a dedicated slot that can be used for enhancing the storage capacity of the phone. The has got triple rear camera setup. The primary sensor is 13 megapixels and the depth sensor of the Infinix 8 4GB is 2 megapixels along with a VGA Low light Sensor and there will be an LED flash right under the rear camera setup. The selfie shooter of the Infinix Hot 8 4GB is eight megapixels. The XOS 5 based on Android 9.0 Pie OS will be software to run the smartphone. The battery of the phone is a gigantic one. The 5000 mAh battery will provide Infinix Hot 8 4GB with enough power. The rear-mounted fingerprint sensor is there to enhance the security of the phone. Samsung and other tech giant will now face some serious competition once the 8 4GB will launch. Considering what this amazing handset has to offer it is a bargain as Infinix Hot 8 Price in Pakistan is the lowest."
//     document.getElementById("specs").innerHTML = p;
// }

// TASK # 3
function deleteRow(no){
    document.getElementById("row"+no+"").outerHTML="";
}

function addRow(){
    var newfName = document.getElementById("newfName").value;
    var newlName = document.getElementById("newlName").value;
    var newClass = document.getElementById("newClass").value;
    var newAge = document.getElementById("newAge").value;
    var newPhone = document.getElementById("newPhone").value;

    var table = document.getElementById("data_table");
    var tableLen = (table.rows.length)-1;
    var row = table.insertRow(tableLen).outerHTML = "<tr id='row" + tableLen + "'><td id='fname"+tableLen+"'>"+newfName+"</td><td id='lname"+tableLen+"'>"+newlName+"</td><td id='classes"+tableLen+"'>"+newClass+"</td><td id='age"+tableLen+"'>"+newAge+"</td><td id='phone"+tableLen+"'>"+newPhone+"</td><td><input type='button' id=edit"+tableLen+"' value='Edit' class='edit' onclick='editRow("+tableLen+")'> <input type='button' id=save"+tableLen+"' value='Save' class='save' onclick='saveRow("+tableLen+")'><input type='button' value='Delete' class='delete' onclick='deleteRow("+tableLen+")'></td></tr>";

    document.getElementById("newfName").value = "";
    document.getElementById("newlName").value = "";
    document.getElementById("newClass").value = "";
    document.getElementById("newAge").value = "";
    document.getElementById("newPhone").value = "";
}

function editRow(no){
    document.getElementById('edit'+no).style.display="none";
    document.getElementById("save"+no).style.display="block";
    
    var fname = document.getElementById("fname"+no);
    var lname = document.getElementById("lname"+no);
    var classes = document.getElementById("classes"+no);
    var age = document.getElementById("age"+no);
    var phone = document.getElementById("phone"+no);

    var fnameData = fname.innerHTML;
    var lnameData = lname.innerHTML;
    var classesData = classes.innerHTML;
    var ageData = age.innerHTML;
    var phoneData = phone.innerHTML;

    fname.innerHTML = "<input type='text id='fname" + no + "' value='" + fnameData + "'>";
    lname.innerHTML = "<input type='text id='lname" + no + "' value='" + lnameData + "'>";
    classes.innerHTML = "<input type='text id='classes" + no + "' value='" + classesData + "'>";
    age.innerHTML = "<input type='text id='age" + no + "' value='" + ageData + "'>";
    phone.innerHTML = "<input type='text id='phone" + no + "' value='" + phoneData + "'>";
}

function saveRow(no){
    var fnameVal = document.getElementById("fname"+no).value;
    var lnameVal = document.getElementById("lname"+no).value;
    var classesVal = document.getElementById("classes"+no).value;
    var ageVal = document.getElementById("age"+no).value;
    var phoneVal = document.getElementById("phone"+no).value;

    document.getElementById("fname"+no).innerHTML=fnameVal;
    document.getElementById("lname"+no).innerHTML=lnameVal;
    document.getElementById("classes"+no).innerHTML=classesVal;
    document.getElementById("age"+no).innerHTML=ageVal;
    document.getElementById("phone"+no).innerHTML=phoneVal;

    document.getElementById("edit"+no).style.display="block";
    document.getElementById("save"+no).style.display="none";
}



// DOM ASSIGNMENT
// ASSIGNMENT # 58 - 67
// TASK # 1
// (i)
// var main = document.getElementById("main-content");

// (ii)
// console.log(document.childNodes[1].childNodes[1].childNodes[1].childNodes[4])

// (iii)
// var x = document.getElementById("main-content");
// var y = x.getElementsByClassName("render");
// document.write("<h3>(iii) innerHTML of class = 'render'</h3>")
// for(var i = 0; i < y.length; i++){
//     var z = y[i].innerHTML;
//     document.write(z+"<br>");
// }

// (iv)
// var firstName = document.getElementById("first-name").value = "Shehzad";

// (v)
// var lastName = document.getElementById("last-name").value = "Khan";
// var email = document.getElementById("email").value = "shahzad.sk046@gmail.com";

// TASK # 2
// (i)
// var form = document.getElementById("form-content");
// console.log(form.nodeType)

// (ii)
// var lastName = document.getElementById("lastName");
// console.log(lastName.nodeType)
// console.log(lastName.childNodes[0])
// console.log(lastName.childNodes.nodeType)
// console.log(lastName.childNodes)

// (iii)
// var lastName = document.getElementById("lastName");
// var newName = "last Name: Shehzad"
// var update = lastName.childNodes[0].nodeValue = newName;
// console.log(lastName.childNodes[0])

// (iv)
// var main = document.getElementById("main-content");
// var first = main.firstChild;
// var last = main.lastChild;
// console.log(first)
// console.log(last)

// (v)
// var lastName = document.getElementById("lastName");
// console.log(lastName.previousSibling)
// console.log(lastName.nextSibling)

// (vi)
// var email = document.getElementById("email");
// console.log(email.parentNode)
// console.log(email.nodeType)