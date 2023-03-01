const quizs = [
  {
    id:1,
    questions:"esta es una pregunta para la quiz?",
    options:{
      option1:"esta es la respuesta 1?",
      option2:"esta es la respuesta 2?",
      option3:"esta es la respuesta 3?"
    },
    answer:"esta es la respuesta 1",
    score:0,
    status:""
  },
  {
    id:2,
    questions:"esta es una pregunta para la quiz?",
    options:{
      option1:"esta es la respuesta 1?",
      option2:"esta es la respuesta 2?",
      option3:"esta es la respuesta 3?",
      option4:"esta es la respuesta 4?",
    },
    answer:"esta es la respuesta 1",
    score:0,
    status:""
  }
]

const view = () =>{
  let answer = document.getElementById("answer")
  let quiz = quizs[0]
  let label = document.createElement("label")
  label.classList = "p-2 m-2"
  for(const option in quiz.options){
      label.innerText = option
  }
  answer.append(label)


}
view()