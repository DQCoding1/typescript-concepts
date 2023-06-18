// GENERIC TYPES HTML ELEMENTS
const checkbox = document.querySelector(".span")
// infiere tipo de dato general Element o null
const checkbox2 = document.getElementById(".span")
// infiere tipo de dato general HTMLElement o null






// TYPES ASSERTION 
// 1 forma no recomendada 
// *porque si se busca la etiqueta y no la encuentra, 
// devuelve null y ese tipo de dato no se acepta en la variable
const tag = document.querySelector(".checkbox") as HTMLInputElement



// 2 forma no recomendada
// *porque si se busca la etiqueta y 
// tiene un tipo diferente a la que se espera, va a fallar
const etiqueta = document.querySelector(".span") 

if (etiqueta !== null){
  // aqui aunque es diferente de null puede ser otro type diferente de HTMLInputElement
  const isChecked = (etiqueta as HTMLInputElement).checked
}



// 3 forma recomendada instanceof  
const checkbox3 = document.querySelector(".span")

if (checkbox3 instanceof HTMLInputElement){
  const isChecked = checkbox3.checked
  // typescript infiere que si entra al if es un elemento HTMLInputElement
}





