// DOM element(s) references
// Factory Function instance 
// DOM events here
document.addEventListener("DOMContentLoaded", function () {
    const electricity = Electricity();
  
    const unitsAvailableElement = document.querySelector(".unitsAvailable");
    const totalUnitsElement = document.querySelector(".totalUnits");
    const totalAmountElement = document.querySelector(".totalAmount");
    const advanceTakenElement = document.querySelector(".advanceTaken");
  
    function updateDOM() {
      unitsAvailableElement.textContent = electricity.getUnitsAvailable();
      totalUnitsElement.textContent = electricity.getTotalUnitsBought();
      totalAmountElement.textContent = electricity.getTotalAmountSpent().toFixed(
        2
      );
      advanceTakenElement.classList.toggle("hidden", !electricity.advanceTaken());
    }
  
    const topUpButtons = document.querySelectorAll(".topup");
    topUpButtons.forEach((button) => {
      button.addEventListener("change", function (event) {
        const amount = parseInt(event.target.value);
        electricity.topUpElectricity(amount);
        updateDOM();
      });
    });
  
    const useButtons = document.querySelectorAll(".usage");
    useButtons.forEach((button) => {
      button.addEventListener("change", function (event) {
        const appliance = event.target.value;
        if (electricity.useAppliance(appliance)) {
          updateDOM();
        } else {
          event.preventDefault();
        }
      });
    });
  
    updateDOM();
  });
  
  