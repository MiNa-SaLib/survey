let goto2 = document.querySelector("form div p.goto2");
let goto3 = document.querySelector("form div p.goto3");
let goto4 = document.querySelector("form div p.goto4");
let goto5 = document.querySelector("form div p.goto5");
let goto6 = document.querySelector("form div p.goto6");
let goto7 = document.querySelector("form div p.goto7");
let goto8 = document.querySelector("form div p.goto8");
let goto9 = document.querySelector("form div p.goto9");
let goto10 = document.querySelector("form div p.goto10");


let backto9 = document.querySelector(".backto9");
let backto8 = document.querySelector(".backto8");
let backto7 = document.querySelector(".backto7");
let backto6 = document.querySelector(".backto6");
let backto5 = document.querySelector(".backto5");
let backto4 = document.querySelector(".backto4");
let backto3 = document.querySelector(".backto3");
let backto2 = document.querySelector(".backto2");
let backto1 = document.querySelector(".backto1");
// questions .,

let one = document.querySelector("form .one");
let two = document.querySelector("form .two");
let three = document.querySelector("form .three");
let four = document.querySelector("form .four");
let five = document.querySelector("form .five");
let six = document.querySelector("form .six");
let seven = document.querySelector("form .seven");
let eight = document.querySelector("form .eight");
let nine = document.querySelector("form .nine");
let ten = document.querySelector("form .ten");

inputs1 = document.querySelectorAll("form .one input");
inputs2 = document.querySelectorAll("form .two input");
inputs3 = document.querySelectorAll("form .three input");
inputs4 = document.querySelectorAll("form .four input");
inputs5 = document.querySelectorAll("form .five input");
inputs6 = document.querySelectorAll("form .six input");
inputs7 = document.querySelectorAll("form .seven input");
inputs8 = document.querySelectorAll("form .eight input");
inputs9 = document.querySelectorAll("form .nine input");
inputs10 = document.querySelectorAll("form .ten input");

// NEXT
goto2.addEventListener("click", function () {
    if (inputs1[0].checked || inputs1[1].checked || inputs1[2].checked) {
        one.classList.remove("validiteanimation");
        one.classList.add("heidden");
        one.classList.remove("visible");
        two.classList.remove("heidden");
        two.classList.add("visible");
        three.classList.add("heidden");
        four.classList.add("heidden");
        five.classList.add("heidden");
        six.classList.add("heidden");
        seven.classList.add("heidden");
        eight.classList.add("heidden");
        nine.classList.add("heidden");
        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            one.classList.toggle("validiteanimation");

        }, 300);


    }

})
goto3.addEventListener("click", function () {


    if (inputs2[0].checked || inputs2[1].checked || inputs2[2].checked) {
        two.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("heidden");
        three.classList.add("visible");
        four.classList.add("heidden");
        five.classList.add("heidden");
        six.classList.add("heidden");
        seven.classList.add("heidden");
        eight.classList.add("heidden");
        nine.classList.add("heidden");
        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            two.classList.toggle("validiteanimation");

        }, 300);


    }

})
goto4.addEventListener("click", function () {

    if (inputs3[0].checked || inputs3[1].checked || inputs3[2].checked) {
        three.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.add("heidden");
        three.classList.remove("visible");
        four.classList.remove("heidden");
        four.classList.add("visible");
        five.classList.add("heidden");
        six.classList.add("heidden");
        seven.classList.add("heidden");
        eight.classList.add("heidden");
        nine.classList.add("heidden");
        ten.classList.add("heidden");


    } else {
        setTimeout(() => {

            three.classList.toggle("validiteanimation");

        }, 300);


    }


})
goto5.addEventListener("click", function () {
    if (inputs4[0].checked || inputs4[1].checked || inputs4[2].checked) {
        four.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("visible");
        three.classList.add("heidden");
        four.classList.remove("visible");
        four.classList.add("heidden");
        five.classList.remove("heidden");
        five.classList.add("visible");
        six.classList.add("heidden");
        seven.classList.add("heidden");
        eight.classList.add("heidden");
        nine.classList.add("heidden");
        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            four.classList.toggle("validiteanimation");

        }, 300);


    }



})
goto6.addEventListener("click", function () {
    if (inputs5[0].checked || inputs5[1].checked || inputs5[2].checked) {
        five.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("visible");
        three.classList.add("heidden");
        four.classList.remove("visible");
        four.classList.add("heidden");
        five.classList.remove("visible");
        five.classList.add("heidden");

        six.classList.remove("heidden");
        six.classList.add("visible");

        seven.classList.add("heidden");
        eight.classList.add("heidden");
        nine.classList.add("heidden");
        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            five.classList.toggle("validiteanimation");

        }, 300);


    }


})
goto7.addEventListener("click", function () {
    /*
  if (oneinputs[0].checked || oneinputs[1].checked || oneinputs[2].checked) {
  } else {
      setTimeout(() => {

          one.classList.toggle("validiteanimation");

      }, 300);


  }
  */
    if (inputs6[0].checked || inputs6[1].checked || inputs6[2].checked) {
        six.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("visible");
        three.classList.add("heidden");
        four.classList.remove("visible");
        four.classList.add("heidden");
        five.classList.remove("visible");
        five.classList.add("heidden");
        six.classList.remove("visible");
        six.classList.add("heidden");

        seven.classList.remove("heidden");
        seven.classList.add("visible");

        eight.classList.add("heidden");
        nine.classList.add("heidden");
        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            six.classList.toggle("validiteanimation");

        }, 300);


    }


})
goto8.addEventListener("click", function () {
    if (inputs7[0].checked || inputs7[1].checked || inputs7[2].checked) {
        seven.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("visible");
        three.classList.add("heidden");
        four.classList.remove("visible");
        four.classList.add("heidden");
        five.classList.remove("visible");
        five.classList.add("heidden");
        six.classList.remove("visible");
        six.classList.add("heidden");
        seven.classList.remove("visible");
        seven.classList.add("heidden");

        eight.classList.remove("heidden");
        eight.classList.add("visible");

        nine.classList.add("heidden");
        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            seven.classList.toggle("validiteanimation");

        }, 300);


    }


})
goto9.addEventListener("click", function () {
    if (inputs8[0].checked || inputs8[1].checked || inputs8[2].checked) {
        eight.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("visible");
        three.classList.add("heidden");
        four.classList.remove("visible");
        four.classList.add("heidden");
        five.classList.remove("visible");
        five.classList.add("heidden");
        six.classList.remove("visible");
        six.classList.add("heidden");
        seven.classList.remove("visible");
        seven.classList.add("heidden");
        eight.classList.remove("visible");
        eight.classList.add("heidden");

        nine.classList.remove("heidden");
        nine.classList.add("visible");

        ten.classList.add("heidden");
    } else {
        setTimeout(() => {

            eight.classList.toggle("validiteanimation");

        }, 300);


    }


})
goto10.addEventListener("click", function () {
    if (inputs9[0].checked || inputs9[1].checked || inputs9[2].checked) {
        nine.classList.remove("validiteanimation");
        one.classList.add("heidden");
        two.classList.remove("visible");
        two.classList.add("heidden");
        three.classList.remove("visible");
        three.classList.add("heidden");
        four.classList.remove("visible");
        four.classList.add("heidden");
        five.classList.remove("visible");
        five.classList.add("heidden");
        six.classList.remove("visible");
        six.classList.add("heidden");
        seven.classList.remove("visible");
        seven.classList.add("heidden");
        eight.classList.remove("visible");
        eight.classList.add("heidden");

        nine.classList.remove("visible");
        nine.classList.add("heidden");

        ten.classList.remove("heidden");
        ten.classList.add("visible");

    } else {
        setTimeout(() => {

            nine.classList.toggle("validiteanimation");

        }, 300);


    }

})

// PERIVIOUS
backto1.addEventListener("click", function () {

    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("heidden");
    one.classList.add("visible");


})
backto2.addEventListener("click", function () {


    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("heidden");
    two.classList.add("visible");


})
backto3.addEventListener("click", function () {
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("heidden");
    three.classList.add("visible");


})
backto4.addEventListener("click", function () {

    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("heidden");
    four.classList.add("visible");


})
backto5.addEventListener("click", function () {
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("heidden");
    five.classList.add("visible");

})
backto6.addEventListener("click", function () {

    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("heidden");
    six.classList.add("visible");
})
backto7.addEventListener("click", function () {
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("heidden");
    seven.classList.add("visible");
})
backto8.addEventListener("click", function () {

    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("heidden");
    eight.classList.add("visible");

})
backto9.addEventListener("click", function () {

    nine.classList.remove("visible");
    nine.classList.add("heidden");
    ten.classList.remove("visible");
    ten.classList.add("heidden");
    one.classList.remove("visible");
    one.classList.add("heidden");
    two.classList.remove("visible");
    two.classList.add("heidden");
    three.classList.remove("visible");
    three.classList.add("heidden");
    four.classList.remove("visible");
    four.classList.add("heidden");
    five.classList.remove("visible");
    five.classList.add("heidden");
    six.classList.remove("visible");
    six.classList.add("heidden");
    seven.classList.remove("visible");
    seven.classList.add("heidden");
    eight.classList.remove("visible");
    eight.classList.add("heidden");
    nine.classList.remove("heidden");
    nine.classList.add("visible");


})
name1 = document.getElementsByName("one");
name2 = document.getElementsByName("two");
name3 = document.getElementsByName("three");
name4 = document.getElementsByName("four");
name5 = document.getElementsByName("five");
name6 = document.getElementsByName("six");
name7 = document.getElementsByName("seven");
name8 = document.getElementsByName("eight");
name9 = document.getElementsByName("nine");
name10 = document.getElementsByName("ten");
let val1, val2, val3, val4, val5, val6, val7, val8, val9, val10;




document.querySelector("form").onsubmit = function (e) {
    name1.forEach(element => {
        if (element.checked) {
            val1 = (element.value);
        }
    });
    name2.forEach(element => {
        if (element.checked) {
            val2 = (element.value);
        }
    });
    name3.forEach(element => {
        if (element.checked) {
            val3 = (element.value);
        }
    });
    name4.forEach(element => {
        if (element.checked) {
            val4 = (element.value);
        }
    });
    name5.forEach(element => {
        if (element.checked) {
            val5 = (element.value);
        }
    });
    name6.forEach(element => {
        if (element.checked) {
            val6 = (element.value);
        }
    });
    name7.forEach(element => {
        if (element.checked) {
            val7 = (element.value);
        }
    });
    name8.forEach(element => {
        if (element.checked) {
            val8 = (element.value);
        }
    });
    name9.forEach(element => {
        if (element.checked) {
            val9 = (element.value);
        }
    });
    name10.forEach(element => {
        if (element.checked) {
            val10 = (element.value);
        }
    });
    e.preventDefault();
    var params = {
        one: val1,
        two: val2,
        three: val3,
        four: val4,
        five: val5,
        six: val6,
        seven: val7,
        eight: val8,
        nine: val9,
        ten: val10,

    }
    emailjs.send("service_j5ijgxa", "template_i2nkmto", params).then(function (res) {
        alert("success")

    })

}