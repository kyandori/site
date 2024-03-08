class InputNumberControl {
  constructor (object) {
    const targetInput = document.getElementById(object['input_Id']);
    const targetElm = targetInput.parentNode;
    const stepUpElm = targetElm.querySelector(object['stepUpElm_Selector']);
    const stepDownElm = targetElm.querySelector(object['stepDownElm_Selector']);
    const clearButtonElm = targetElm.querySelector(object['clearButtonElm_Selector']);
    
    const step = targetInput.getAttribute('step');
    
    if (targetInput.hasAttribute('disabled')) {
      stepUpElm.setAttribute('disabled', '');
    };
    targetInput.addEventListener('blur', (e) => this.inputBlur(e, stepUpElm, stepDownElm, clearButtonElm));
    stepUpElm.addEventListener('click', (e) => this.clickHandlerUp(e, targetInput, stepDownElm, step, clearButtonElm));
    stepDownElm.addEventListener('click', (e) => this.clickHandlerDown(e, targetInput, stepUpElm, step, clearButtonElm));
    clearButtonElm.addEventListener('click', (e) => this.clickHandlerClear (e, targetInput, stepUpElm, stepDownElm, clearButtonElm));
  };
  
  inputBlur (e, stepUpElm, stepDownElm, clearButtonElm) {
    if (Math.floor(parseInt(e.currentTarget.value)) === parseInt(e.currentTarget.getAttribute('max'))) {
      e.currentTarget.value = parseInt(e.currentTarget.getAttribute('max'));
      
      if (stepUpElm.hasAttribute('disabled')) {
      } else {
        stepUpElm.setAttribute('disabled', '');
      };
      if (stepDownElm.hasAttribute('disabled')) {
        stepDownElm.removeAttribute('disabled');
      } else {
      };
      if (clearButtonElm.hasAttribute('disabled')) {
        clearButtonElm.removeAttribute('disabled');
      } else {
      };
    } else if (Math.floor(parseInt(e.currentTarget.value)) > parseInt(e.currentTarget.getAttribute('max'))) {
      e.currentTarget.value = parseInt(e.currentTarget.getAttribute('max'));
      if (stepUpElm.hasAttribute('disabled')) {
      } else {
        stepUpElm.setAttribute('disabled', '');
      };
      if (stepDownElm.hasAttribute('disabled')) {
        stepDownElm.removeAttribute('disabled');
      } else {
      };
      if (clearButtonElm.hasAttribute('disabled')) {
        clearButtonElm.removeAttribute('disabled');
      } else {
      };
    } else if (Math.floor(parseInt(e.currentTarget.value)) === parseInt(e.currentTarget.getAttribute('min'))) {
      e.currentTarget.value = parseInt(e.currentTarget.getAttribute('min'));
      if (stepDownElm.hasAttribute('disabled')) {
      } else {
        stepDownElm.setAttribute('disabled', '');
      };
      if (stepUpElm.hasAttribute('disabled')) {
        stepUpElm.removeAttribute('disabled');
      } else {
      };
      if (clearButtonElm.hasAttribute('disabled')) {
        clearButtonElm.removeAttribute('disabled');
      } else {
      };
    } else if (Math.floor(parseInt(e.currentTarget.value)) < parseInt(e.currentTarget.getAttribute('min'))) {
      e.currentTarget.value = parseInt(e.currentTarget.getAttribute('min'));
      if (stepDownElm.hasAttribute('disabled')) {
      } else {
        stepDownElm.setAttribute('disabled', '');
      };
      if (stepUpElm.hasAttribute('disabled')) {
        stepUpElm.removeAttribute('disabled');
      } else {
      };
      if (clearButtonElm.hasAttribute('disabled')) {
        clearButtonElm.removeAttribute('disabled');
      } else {
      };
    } else if (e.currentTarget.value === ""){
      if (stepDownElm.hasAttribute('disabled')) {
      } else {
        stepDownElm.setAttribute('disabled', '');
      };
      if (stepUpElm.hasAttribute('disabled')) {
        stepUpElm.removeAttribute('disabled');
      } else {
      };
      if (clearButtonElm.hasAttribute('disabled')) {
      } else {
        clearButtonElm.setAttribute('disabled', '');
      };
    } else {
      e.currentTarget.value = Math.floor(parseInt(e.currentTarget.value));
      if (stepDownElm.hasAttribute('disabled')) {
        stepDownElm.removeAttribute('disabled');
      } else {
      };
      if (stepUpElm.hasAttribute('disabled')) {
        stepUpElm.removeAttribute('disabled');
      } else {
      };
      if (clearButtonElm.hasAttribute('disabled')) {
        clearButtonElm.removeAttribute('disabled');
      } else {
      };
    };
  };
  
  clickHandlerUp (e, targetInput, stepDownElm, step, clearButtonElm) {
    if (targetInput.value !== "" && (parseInt(targetInput.getAttribute('max')) - parseInt(targetInput.value)) < parseInt(step)) {
      targetInput.value = parseInt(targetInput.getAttribute('max'));
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else if (targetInput.value !== "" && (parseInt(targetInput.getAttribute('max')) - parseInt(targetInput.value)) === parseInt(step)) {
      targetInput.value = parseInt(targetInput.value) + parseInt(step);
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else if (targetInput.value !== "" && parseInt(targetInput.value) === parseInt(targetInput.getAttribute('max'))) {
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else if (targetInput.value !== "" && parseInt(targetInput.value) === parseInt(targetInput.getAttribute('min'))) {
      targetInput.value = parseInt(targetInput.value) + parseInt(step);
      if (stepDownElm.hasAttribute('disabled')) {
        stepDownElm.removeAttribute('disabled');
      } else {
      };
    } else if (targetInput.value === "") {
      targetInput.value = parseInt(targetInput.getAttribute('min'));
      if (stepDownElm.hasAttribute('disabled')) {
      } else {
        stepDownElm.setAttribute('disabled', '');
      };
      if (clearButtonElm.hasAttribute('disabled')) {
        clearButtonElm.removeAttribute('disabled');
      } else {
      };
    } else {
      targetInput.value = parseInt(targetInput.value) + parseInt(step);
    };
  };
  clickHandlerDown (e, targetInput, stepUpElm, step, clearButtonElm) {
    if (targetInput.value !== "" && (parseInt(targetInput.value) - parseInt(targetInput.getAttribute('min'))) < parseInt(step)) {
      targetInput.value = parseInt(targetInput.getAttribute('min'));
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else if (targetInput.value !== "" && 
      (parseInt(targetInput.value) - parseInt(targetInput.getAttribute('min'))) === parseInt(step)) {
      targetInput.value = parseInt(targetInput.value) - parseInt(step);
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else if (targetInput.value !== "" && parseInt(targetInput.value) === parseInt(targetInput.getAttribute('min'))) {
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else if (targetInput.value !== "" && parseInt(targetInput.value) === parseInt(targetInput.getAttribute('max'))) {
      targetInput.value = parseInt(targetInput.value) - parseInt(step);
      if (stepUpElm.hasAttribute('disabled')) {
        stepUpElm.removeAttribute('disabled');
      } else {
      };
    } else if (targetInput.value === "") {
      if (e.currentTarget.hasAttribute('disabled')) {
      } else {
        e.currentTarget.setAttribute('disabled', '');
      };
    } else {
      targetInput.value = parseInt(targetInput.value) - parseInt(step);
    };
  };
  clickHandlerClear (e, targetInput, stepUpElm, stepDownElm, clearButtonElm) {    
    if (targetInput.value !== "") {
      targetInput.value = "";
      if (clearButtonElm.hasAttribute('disabled')) {
      } else {
        clearButtonElm.setAttribute('disabled', '');
      };
      if (stepDownElm.hasAttribute('disabled')) {
      } else {
        stepDownElm.setAttribute('disabled', '');
      };
      if (stepUpElm.hasAttribute('disabled')) {
        stepUpElm.removeAttribute('disabled');
      } else {
      };
    } else {
    };
  };
};

const propertyAge = new InputNumberControl (
  {
    input_Id:'input-number',
    stepUpElm_Selector:'button.number--up',
    stepDownElm_Selector:'button.number--down',
    clearButtonElm_Selector:'button.number--clear'
  }
);
