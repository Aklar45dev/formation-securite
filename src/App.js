import './App.css'
import $ from "jquery"
import React, { useRef, useState, useEffect } from 'react'


function App() {


  
  const chapter = [{question: "Quel aurait été la bonne attitude à adapté lors de la réunion du début de quart de travail ?", audio: "https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/paragraphe+1.wav", url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch1-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch1-2.mp4', choice1: 'Souhaitant clarifier ses incompréhensions rapidement, il intervient immédiatement dans le groupe afin de demander des précisions.', choice2: 'À la sortie, il demande au superviseur quand sera le bon moment pour lui parler avant la tâche. Le superviseur lui dit qu’il passera le voir rapidement. Il lui posera alors ses questions.', choice3: 'Il attend que la rencontre se termine et va valider les informations avec le superviseur lorsque tout le monde se dirige vers leur tâche à accomplir.', text: ["• Assurer votre sécurité et celles de vos collègues", "• Poser des questions", "• Choisissez le bon moment", "• Favoriser le dialogue"]},
                  {question: "Quel aurait été le bon comportement a adopté pour cette situation ?", audio: "https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/paragraphe+2.wav", url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch2-1V2.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch2-2.mp4', choice1: 'Incertain, il demande à son collègue qu`il détaille sa méthode et la raison qui le motive à l’utiliser, une fois les instructions reçues, il partage l’opinion de son collègue et décide donc de procéder selon cette méthode qu’ils considèrent toutes les deux comme efficace et sécuritaire.', choice2: 'Après avoir demandé des précisions à son collègue et avoir fait la lecture de la fiche de cadenassage, il choisit de faire un compromis entre les deux méthodes. Il considère que prendre le meilleur des deux solutions lui garantira un bon résultat.', choice3: 'Ne pas écouter son collègue, prendre la fiche de cadenassage et appliquer la procédure comme indiqué par le règlement.', text: ["• Exercer son jugement", "• Écouter son collègue", "• Collaborer pour trouver la solution la plus sécuritaire", "• Valider auprès de son superviseur"]},
                  {question: "Qu'est que Jeff aurait pu faire pour éviter que son collègue se blesse ?", audio: "https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/paragraphe+3.wav", url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch3-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch3-2.mp4', choice1: 'Nouveau en poste, il ne se sent pas à l’aise d’intervenir. Sans aviser son collègue de la situation à risque, il part rapidement aviser son superviseur avant que son collègue vive une situation potentiellement dangereuse.', choice2: 'Il intervient rapidement auprès de son collègue et lui demande d’arrêter sa tâche immédiatement, il avise son collègue que la situation est dangereuse en expliquant les risques d’un tel problème.', choice3: 'Sans trop donner de détails, il avise son collègue du risque d’utiliser une meuleuse portative en lui indiquant qu’il ne voudrait pas que quelque chose de malheureux arrive.', text: ["• Signaler le danger", "• Choisir le bon moment", "• Choisir …"]}]

  const selection = [{1: "Demander des précisions pendant la réunion préparatoire.", 2: "Demander de venir le superviseur voir rapidement pour des précisions.", 3: "Demander des renseignements au superviseur justes après la réunion préparatoire.", 4: 'Pas tout à fait...', 5: 'Bon choix!', 6: 'Pas tout à fait...'},
                    {1: "Considérer l’expérience de son collègue et suivre ses directives même si elles sont contraires à la procédure.", 2: "Prendre le meilleur des deux options.", 3: "Appliquer la procédure indiquer dans le règlement.", 4: 'Pas la bonne réponse...', 5: 'Pas tout à fait...', 6: 'Presque!'},
                    {1: "Aviser son superviseur sans prévenir le collègue.", 2: "Aviser son collègue et expliquer pourquoi c’est une situation à risque.", 3: "Aviser son collègue.", 4: 'Pas tout à fait...', 5: 'Presque!', 6: 'Mais encore...'}]

  const [url, setUrl] = useState(null)
  const [audio, setAudio] = useState(null)
  const [id, setId] = useState(0)
  const [ansid, setAnsid] = useState('1')
  const [retroid, setRetroid] = useState('4')

  useEffect(() => {
    if(url !== null){
      vidRef.current.play()
    }
  }, [url])

  const vidRef = useRef(null)
  const audioRef = useRef(null)

  const startvideo = (id) => {
    $("#video").css({display: "block"})
    $("#accueil").css({display: "none"})
    setId(id)
    setUrl(chapter[id].url)
    setAudio(chapter[id].audio)
  }

  const showQuestions = () => {
    $("#selector").css({display: "flex"})
  }

  const validate = (ans, retro) => {
    $("#video").css({display: "none"})
    $("#response").css({display: "flex"})
    setAnsid(ans)
    setRetroid(retro)
    audioRef.current.play()
  }

  const retour = () => {
    $("#response").css({display: "none"})
    $("#selector").css({display: "none"})
    $("#accueil").css({display: "block"})
    $("#retour").css({display: 'none'})
  }

  const showBtn = () => {
    $("#retour").css({display: 'block'})
  }
  
  return (
    <div className="App">
      <audio ref={audioRef} src={audio} onEnded={() => showBtn()} />
      <div id="accueil">
        <h1 className="title-font">Choisissez un chapitre</h1>
        <div className='btn-container'>
          <div>
            <button className="btn" onClick={() => startvideo(0)}>
              <img alt="pic" className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/frame1.png' />
            </button>
            <h2 className="btn-title">Chapitre 1</h2>
            <p className="btn-subtitle">Le briefing</p>
          </div>
          <div>
            <button className="btn" onClick={() => startvideo(1)}>
              <img alt="pic" className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/Ch2+freeze+frame+1.png' />
            </button>
            <h2 className="btn-title">Chapitre 2</h2>
            <p className="btn-subtitle">Le cadenassage</p>
          </div>
          <div>
            <button className="btn" onClick={() => startvideo(2)}>
              <img  alt="pic" className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/Ch3+freeze+frame+2.png' />
            </button>
            <h2 className="btn-title">Chapitre 3</h2>
            <p className="btn-subtitle">Comportement dangereux</p>
          </div>
        </div>
      </div>
      <div id="video">
        <video src={url} ref={vidRef} onEnded={showQuestions} />
        <div id="selector">
          <div className="select-title">{chapter[id].question}</div>
          <button className="selectBtn" onClick={() => validate('1','4')}>{chapter[id].choice1}</button>
          <button className="selectBtn" onClick={() => validate('2','5')}>{chapter[id].choice2}</button>
          <button className="selectBtn" onClick={() => validate('3','6')}>{chapter[id].choice3}</button>
        </div>
      </div>
      <div id="response">
        <div className="res-container">
          <div className="info">
            <div className="info-title">{selection[id][ansid]}</div>
            <div className="retro-subtitle">{selection[id][retroid]}</div>
            <div className="para">Les éléments clés :</div>
            <div className="para-list">{chapter[id].text[0] === undefined ? "" : chapter[id].text[0]}</div>
            <div className="para-list">{chapter[id].text[1] === undefined ? "" : chapter[id].text[1]}</div>
            <div className="para-list">{chapter[id].text[2] === undefined ? "" : chapter[id].text[2]}</div>
            <div className="para-list">{chapter[id].text[3] === undefined ? "" : chapter[id].text[3]}</div>
          </div>
          <div className='video-retro-container'>
            <video src={chapter[id].urlMuted} autoPlay muted loop />
            <button id="retour" className='retour' onClick={() => retour()}>Continuer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
