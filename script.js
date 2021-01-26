class Converter {
  constructor(output) {
    this.output = equals;
  }

  inputValue(input) {
    this.input = input;
  }
  calculateInput(inputMethod, outputMethod) {

    this.inputMethod = inputMethod;
    this.outputMethod = outputMethod;

    if (this.inputMethod === "meter" && this.outputMethod === "kilometer") {
      this.result = this.input / 1000;
    }
    //convert to centimeter
    else if (
      this.inputMethod === "meter" &&
      this.outputMethod === "centimeter"
    ) {
      this.result = this.input * 100;
    }
    //convert to miles
    else if (this.inputMethod === "meter" && this.outputMethod === "miles") {
      (this.result = this.input / 1), 609.344;
    }
    //convert to meter
    else if (this.inputMethod === this.outputMethod) {
      this.result = this.input;
    }

    //Converting from meter
    //convert to kilometer
    if (this.inputMethod === "meter" && this.outputMethod === "kilometer") {
      this.result = this.input / 1000;
    }
    //convert to centimeter
    else if (
      this.inputMethod === "meter" &&
      this.outputMethod === "centimeter"
    ) {
      this.result = this.input * 100;
    }
    //convert to miles
    else if (this.inputMethod === "meter" && this.outputMethod === "miles") {
      (this.result = this.input / 1), 609.344;
    }
    //convert to meter
    else if (this.inputMethod === this.outputMethod) {
      this.result = this.input;
    }

    //Converting from kilometer
    //convert to meter
    if (this.inputMethod === "kilometer" && this.outputMethod === "meter") {
      this.result = this.input * 1000;
    }
    //convert to centimeter
    else if (
      this.inputMethod === "kilometer" &&
      this.outputMethod === "centimeter"
    ) {
      this.result = this.input * 100000;
    }
    //convert to miles
    else if (
      this.inputMethod === "kilometer" &&
      this.outputMethod === "miles"
    ) {
      this.result = this.input * 0.62137;
    }

    //Converting from centimeter
    //convert to meter
    if (this.inputMethod === "centimeter" && this.outputMethod === "meter") {
      this.result = this.input * 0.01;
    }
    //convert to kilometer
    else if (
      this.inputMethod === "centimeter" &&
      this.outputMethod === "kilometer"
    ) {
      this.result = this.input * 0.000001;
    }
    //convert to miles
    else if (
      this.inputMethod === "centimeter" &&
      this.outputMethod === "miles"
    ) {
      this.result = this.input * 160934.4;
    }

    //Converting from miles
    //convert to meter
    if (this.inputMethod === "miles" && this.outputMethod === "meter") {
      (this.result = this.input * 1), 609.344;
    }
    //convert to kilometer
    else if (
      this.inputMethod === "miles" &&
      this.outputMethod === "kilometer"
    ) {
      this.result = this.input * 1.609344;
    }
    //convert to centimeter
    else if (
      this.inputMethod === "miles" &&
      this.outputMethod === "centimeter"
    ) {
      (this.result = this.input * 160), 934.4;
    }
  }

  displayInput() {  if (this.input === '0' || this.input === '') return
    this.output.innerHTML = `Answer is: <br> ${this.input} ${this.inputMethod} = <br> ${this.result} ${this.outputMethod}`;
    

  }

  clearFunction() {
    equals.innerHTML = "";
    input.value = "";
  }
}

const input = document.querySelector("#input");
const equals = document.querySelector("#equals");
const inputType = document.querySelector("#input-type");
const outputType = document.querySelector("#output-type");
const clearBtn = document.querySelector("#clear-btn");
const totalBtn = document.querySelector("#total-btn");

const converter = new Converter();

totalBtn.addEventListener("click", function () {
  converter.inputValue(input.value);
  converter.calculateInput(inputType.value, outputType.value);
  converter.displayInput();
});

clearBtn.addEventListener("click", converter.clearFunction);
