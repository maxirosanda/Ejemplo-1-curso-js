const quizs = [
  {
    id:1,
    question:"esta es una pregunta para la quiz?",
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
    question:"esta es una pregunta para la quiz?",
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

const view = (id = 0) =>{
  let answer = document.getElementById("answer")
  let question = document.querySelector(".quiz h3")
  let quiz = quizs[id]
  question.innerText = `${quiz.question}`
  answer.innerHTML = `<input type="hidden" name"id" value="${id}">`
  for(const option in quiz.options){
    let label = document.createElement("label")
    label.innerHTML = `<input type="radio" name="answer" value="${quiz.options[option]}"> ${quiz.options[option]}`
    label.classList = "p-2 m-2"
    answer.append(label)
  }
}
view()

const next = () => {
  const next = document.getElementById("next")
  next.addEventListener("submit",(e)=>{
    e.preventDefault()
    let answer = e.target
    console.log(answer)
  })
}
next()