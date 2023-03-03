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
    question:"esta es una pregunta para la quiz?2",
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
    question:"esta es una pregunta para la quiz?3",
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
    id:3,
    question:"esta es una pregunta para la quiz?4",
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

const title = ()=>{
  const questions = document.getElementById("questions")
  questions.innerText=`Total Questions: ${quizs.length}`
}

const view = (id = 0) =>{

  const viewQuizs = document.getElementById("viewQuizs")
  let answer = document.getElementById("answer")
  let question = document.querySelector(".quiz h3")
  const buttonPrevius = document.getElementById("buttonPrevius")
  let quiz = quizs[id]

  if(id == (quizs.length)){
    viewQuizs.style.display = "none"
    const main = document.getElementById("main")
    let table = document.createElement("table")
    table.classList = "m-4"
    quizs.forEach( (quiz)=> { 
      const tr = document.createElement("tr")
      tr.innerHTML = `
        <th class="p-3">${quiz.id+ 1}</th>
        <td class="p-3">Pregunta: ${quiz.question}</td>
        <td class="p-3">Respuesta: ${quiz.answer}
        <td class="p-3">${quiz.score ==1?"Correcta" :"incorrecta"}</td>
      `
      table.append(tr)
  } )
    main.append(table)
    return
  }
  question.innerText = `${quiz.question}`
  answer.innerHTML = `<input type="hidden" name"id-answer" id="id" value="${id}">`
  for(const option in quiz.options){
    let label = document.createElement("label")
    label.innerHTML = `<input type="radio" name="answer" value="${quiz.options[option].answer}" ${quiz.options[option].checked}  required> ${quiz.options[option].answer}`
    label.classList = "p-2 m-2"
    answer.append(label)
  }
  id == 0 ? buttonPrevius.disabled = true : buttonPrevius.disabled = false
}
    

const next = () => {
  const next = document.getElementById("next")
  next.addEventListener("submit",(e)=>{
    e.preventDefault()
    let answer = e.target["answer"].value
    let id = e.target[0].value
    quizs[id].answerCorrect == answer ? quizs[id].score = 1: false
    quizs[id].answer = answer
    for(const option in quizs[id].options){
      answer == quizs[id].options[option].answer ? quizs[id].options[option].checked= "checked": false
    }
    id++
    console.log(id)
    view(id)
  })
}

const previus = () => {
  
  const previus = document.getElementById("buttonPrevius")
  previus.addEventListener("click",()=>{
    let id = document.getElementById("id").value
    id--
    console.log(id)
    view(id)

  })
  
}
title()
view()
next()
previus()