var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "gram") {
        result.value = input.value;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "tons") {
        result.value = Number(input.value) * 1000000;
    }
    if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000000;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "kilogram") {
        result.value = input.value;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "tons") {
        result.value = Number(input.value) * 0.00110231;
    }
    if (inputTypeValue === "milligram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "milligram" &&
        resultTypeValue === "milligram") {
        result.value = input.value;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.000001;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "tons") {
        result.value = Number(input.value) * 0.000000001;
    }
    if (inputTypeValue === "tons" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 907185;
    }
    else if (inputTypeValue === "tons" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 907184740;
    }
    else if (inputTypeValue === "tons" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 907.185;
    }
    else if (inputTypeValue === "tons" && resultTypeValue === "tons") {
        result.value = input.value;
    }
}
