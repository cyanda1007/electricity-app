function Electricity() {
    
    let unitsAvailable = 0;
    let totalUnitsBought = 0;
    let totalAmountSpent = 0;
    let advanceUsed = false;

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {

        if (amount === "advance") 
        {
            if (!advanceUsed) {
              unitsAvailable += 21;
              advanceUsed = true;
            }
            
        } else {

            let units = 0;
            switch (amount) {
              case 10:
                units = 7;
                break;
              case 20:
                units = 14;
                break;
              case 50:
                units = 35;
                break;
              default:
                break;
            }
            unitsAvailable += units;
            totalUnitsBought += units;
            totalAmountSpent += amount;
        }

    }

    function getUnitsAvailable() {
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) 
    {
        if (unitsAvailable >= appliances[appliance]) {
          unitsAvailable -= appliances[appliance];
          return true;
        }
        return false;
    }

    function advanceTaken() {
        return advanceUsed;
    }

    function getTotalAmountSpent() {
        return totalAmountSpent;
      }
    
      function getTotalUnitsBought() {
        return totalUnitsBought;
      }
    
      return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        getTotalAmountSpent,
        getTotalUnitsBought,
    };
}