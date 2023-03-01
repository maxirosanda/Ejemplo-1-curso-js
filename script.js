const datos = [
  {
    pregunta:"esta es una pregunta para la quiz?",
    repuestas:{
      respuesta1:"esta es la respuesta 1?",
      respuesta2:"esta es la respuesta 2?",
      respuesta3:"esta es la respuesta 3?",
      respuesta3:"esta es la respuesta 4?",
    },
    answer:"esta es la respuesta 1",
    score:0,
    status:""
  },
  {
    pregunta:"esta es una pregunta para la quiz?",
    repuestas:{
      respuesta1:"esta es la respuesta 1?",
      respuesta2:"esta es la respuesta 2?",
      respuesta3:"esta es la respuesta 3?",
      respuesta3:"esta es la respuesta 4?",
    },
    answer:"esta es la respuesta 1",
    score:0,
    status:""
  }
]

const view = () =>{
  let answer = document.getElementById("answer")
  let label = document.createElement("label")
  label.classList = "p-2 m-2"
  label.innerText="esta es una respuesta"
  console.log(label)
  answer.innerHTML = label
  console.log(answer)

}
view()