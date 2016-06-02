$(function(){


  $("form").submit(function(event){

    event.preventDefault();

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());

    // alert(sideA);
    // alert(sideB);
    // alert(sideC);


    if ((sideA === sideB) && (sideB === sideC)) {
      alert("you have an equilateral triangle!");
    }

    else if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
        alert("you do not have a triangle!");
    }

    else if (sideA === sideB && sideB !== sideC || sideA === sideC && sideC !== sideB || sideB === sideC && sideC !== sideA) {
        alert("you have an isosceles triangle!");
    }


    else if (sideA !== sideB && sideB !== sideC && sideC !== sideA){
        alert("you have an scalene triangle!");
    }


  });

});
