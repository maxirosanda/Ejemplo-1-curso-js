const quizs = [
  {
    id:0,
    question:"esta es una pregunta para la quiz?",
    options:{
      option1:{
        answer:"esta es la respuesta 1",
        checked:""
      },
      option2:{
        answer:"esta es la respuesta 2",
        checked:""
      },
      option3:{
        answer:"esta es la respuesta 3",
        checked:""
      },
     
    },
    answerCorrect:"esta es la respuesta 1",
    answer:"",
    score:0
  },
  {
    id:1,
    question:"esta es una pregunta para la quiz?",
    options:{
      option1:{
        answer:"esta es la respuesta 1",
        checked:""
      },
      option2:{
        answer:"esta es la respuesta 2",
        checked:""
      },
      option3:{
        answer:"esta es la respuesta 3",
        checked:""
      },
      option4:{
        answer:"esta es la respuesta 4",
        checked:""
      },
    },
    answerCorrect:"esta es la respuesta 1",
    answer:"",
    score:0
  },
  {
    id:2,
    question:"esta es una pregunta para la quiz?",
    options:{
      option1:{
        answer:"esta es la respuesta 1",
        checked:""
      },
      option2:{
        answer:"esta es la respuesta 2",
        checked:""
      },
      option3:{
        answer:"esta es la respuesta 3",
        checked:""
      },
    },
    answerCorrect:"esta es la respuesta 1",
    answer:"",
    score:0
  }
]

const view = (id = 0) =>{
  if(id == (quizs.length)){
    const viewQuizs = document.getElementById("viewQuizs")
    viewQuizs.style.display = "none"
    return
  }
  const next = document.getElementById("next")
  let answer = document.getElementById("answer")
  let previus = document.getElementById("previus")
  let question = document.querySelector(".quiz h3")
  const buttonPrevius = document.getElementById("buttonPrevius")
  let quiz = quizs[id]
  question.innerText = `${quiz.question}`
  answer.innerHTML = `<input type="hidden" name"id-answer" value="${id}">`
  for(const option in quiz.options){
    let label = document.createElement("label")
    label.innerHTML = `<input type="radio" name="answer" value="${quiz.options[option].answer}" ${quiz.options[option].checked}  required> ${quiz.options[option].answer}`
    label.classList = "p-2 m-2"
    answer.append(label)
  }
  previus.elements[0].value = id
  id == 0 ? buttonPrevius.disabled = true : buttonPrevius.disabled = false
}
    

const next = () => {
  const next = document.getElementById("next")
  next.addEventListener("submit",(e)=>{
    e.preventDefault()
    let answer = e.target["answer"].value
    let id = e.target[0].value
    quizs[id].answerCorrect == answer ? quizs[id].score = 1: false
    for(const option in quizs[id].options){
      console.log(typeof option)
      answer == quizs[id].options[option].answer ? quizs[id].options[option].checked= "checked": false
    }
    id++
    view(id)
    console.log(quizs)
  })
}

const previus = () => {
  const previus = document.getElementById("previus")
  previus.addEventListener("submit",(e)=>{
    e.preventDefault()
    let id = e.target[0].value
    id--
    view(id)

  })
}

view()
next()
previus()