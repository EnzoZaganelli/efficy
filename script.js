const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
];

  const Module = class {
    constructor() {
    }
    start() {
        // Start modifying the form elements here!
        //Declaring the variables
        var selectSelector = document.querySelector('[name="status"]');
        var numberValue = document.querySelector('[name="success"]');
        var btnSubmit = document.querySelector('[type="submit"]');
        var outputText = document.querySelector("div");
        var formSelector = document.querySelector("form");
        var optionValue;
        var successValue;
        var outputValue = JSON.stringify({"status": 1, "success": 0}); //default value of the output

        //Populating the select options with the objet data
        for(var i = 0; i < oppoStatus.length; i++) {
          var opt = oppoStatus[i].STATUS;
          var el = document.createElement("option");
          el.textContent = opt;
          el.value = oppoStatus[i].K_OPPO_STATUS;
          selectSelector.appendChild(el);
        };

        //Associating the value of the selected options its SUCCESS value in the object
        selectSelector.onchange = function(){
          optionValue = selectSelector.value-1;
          successValue = oppoStatus[optionValue].SUCCESS;
          numberValue.value = successValue;
          outputValue = JSON.stringify({"status": optionValue+1, "success": numberValue.value});
        };

        //prevents page refresh and outputs the form element values as JSON string on submit
        formSelector.onsubmit = function(btnSubmit){
          btnSubmit.preventDefault();
          outputText.innerHTML = outputValue;
        }
        // You are allowed to add extra methods and properties to this class
    }
  }
  const main = new Module();
  main.start();