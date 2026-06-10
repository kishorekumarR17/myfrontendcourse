

//task 1 voting eligibility
{
let  age =20;
if(age>=18){
    console.log("Eligible to vote")
}
else if(age<=18){
    console.log("Not eligible to vote")
}
}


//task 2 login access
 {
let isloggedIn = true

if(isloggedIn=true) {
    console.log("Welcome User")
}
else if(isloggedIn=false){
    console.log("not found")
}
}


//task3 Even or odd
{
let num = 15;

if(num %2===0){
  console.log("even")
}
else if(num){
    console.log("odd")
}
}


//task4  positive or Negative
{
let num =-10;

if(num>=0){
    console.log("postive")
}
else if(num<0)
{
    console.log("negative")
}
}


//task5 pass or fail
{
let mark = 40;


if (mark>=35){
    console.log("Pass")
}
else
{
    console.log("Fail")
}

}


//task6 Grade Calculator 
{
    let mark = 85;

    if(mark>90){
        console.log("A Grade")
    }
    else if(mark>80){
        console.log("B Grade")
    }
    else if(mark>70){
          console.log("C Grade")
    }
     else
     {
        console.log("Fail")
    }
 
   
}
//task7 Largest of Two number

{
    let a = 50
    let b = 100

    if(a>b){
        console.log(a)
    }
    else if (a<b){
        console.log(b)
    }
}

//task8 ATM Withdrawal

{
    let balance = 5000
    let amount = 2000

    if(balance>amount){
        console.log("Withdrawal success")

    }
    else{
        console.log("Insufficent Balance")
    }
}

//Task9 user role system 

{
    let role = "admin"
    switch(role){
    case "admin":
     console.log("Admin panel")
    break ;
    case "Trainer":
        console.log("Trainer Panel")
        break;
        case "student":
            console.log("Student Panel")
            break;
}
     
}

//Task10 Day Finder

{
let day =3

switch(day){
    case 3 :
        console.log("monday")
        break;
        case 2:
            console.log(Tuesday);
            break;
            case 1:
                console.log("Wednesday")
                break;
            
}

}

//Task11 Print NUMBER 1 to 10 

{
    let a = 1

    for(a;a<=10;a++)
    {
        console.log(a)
    }
}

//Task12 Multiplication Table 
{
    let num = 5

    for (let a=1 ;a<=10;a++)
    {
        console.log(num+"x"+a+"="+(num*a))
    }

}

//Task13 Print EVEN NUMBERS

{
    let a = 1

    for(a;a<=10;a++){
        if(a%2===0){
            console.log(a)

        }
    }
    
    
}
 