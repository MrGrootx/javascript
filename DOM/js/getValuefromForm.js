// Way 1
const formEll = document.forms.agentForm; // form Name
const agencyNameEl = formEll.elements.agencyName; // input 

// Way 2
const { inputName1, inputName2 } = formEll.elements; // from main form formEll.element

/** Value access ( inputName1.value ) */


// way 3 
formEll.addEventListener("submit", handleFormDatas);
const handleFormDatas = () => {
   const formData = new FormData(formEll); //  // main form Name as perameter
   console.log([...formData.values()]);
   console.log(formData.get("agencyName")) // get values from specific input
 };

