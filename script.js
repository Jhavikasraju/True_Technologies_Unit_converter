function convertLength() {
    const lengthInput = document.getElementById("length");
    const unitSelect = document.getElementById("unit");
    const resultElement = document.getElementById("convertedLength");
  
    const length = parseFloat(lengthInput.value);
    const selectedUnit = unitSelect.value;
  
    let convertedLength;
  
    switch (selectedUnit) {
      case "cm":
        convertedLength = length * 100;
        break;
      case "km":
        convertedLength = length / 1000;
        break;
      case "mm":
        convertedLength = length * 1000;
        break;
      default:
        convertedLength = "Invalid unit";
    }
  
    if (!isNaN(convertedLength)) {
      resultElement.textContent = `${convertedLength} ${selectedUnit}`;
    } else {
      resultElement.textContent = "Invalid input";
    }
  }
  