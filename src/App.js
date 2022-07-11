import './App.css'
import $ from "jquery"
import React, { useRef, useState, useEffect } from 'react'


function App() {

  const chapter = [{audio: "https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/paragraphe+1.wav", url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch1-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch1-2.mp4', choice1: 'Souhaitant clarifier ses incompréhensions rapidement, il intervient immédiatement dans le groupe afin de demander des précisions.', choice2: 'À la sortie, il demande au superviseur quand sera le bon moment pour lui parler avant la tâche. Le superviseur lui dit qu’il passera le voir rapidement. Il lui posera alors ses questions.', choice3: 'Il attend que la rencontre se termine et va valider les informations avec le superviseur lorsque tout le monde se dirige vers leur tâche à accomplir.', text: 'En tant que responsable de sa propre sécurité, un travailleur ou une travailleuse qui a des interrogations ou des doutes au sujet de sa carte de travail, de sa tâche, ou autres questions pouvant affecter l’accomplissement de son travail, se doit d’interroger son supérieur afin d’obtenir des précisions. Chaque situation est différente et, choisir le bon moment pour demander des précisions ou poser des questions peut faire la différence entre une réponse qui n’est pas suffisamment précise et une réponse claireé. Faire le choix d’attendre de parler à son superviseur à la fin de la rencontre, permet un meilleur échange sur ce qui a été compris ou non. De plus, cela favorise le dialogue, permet de réduire le stress et les appréhensions face à sa première journée de travail.'},
                  {audio: "https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/paragraphe+2.wav", url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch2-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch2-2.mp4', choice1: 'Incertain, il demande à son collègue qu`il détaille sa méthode et la raison qui le motive à l’utiliser, une fois les instructions reçues, il partage l’opinion de son collègue et décide donc de procéder selon cette méthode qu’ils considèrent toutes les deux comme efficace et sécuritaire.', choice2: 'Après avoir demandé des précisions à son collègue et avoir fait la lecture de la fiche de cadenassage, il choisit de faire un compromis entre les deux méthodes. Il considère que prendre le meilleur des deux solutions lui garantira un bon résultat.', choice3: 'Ne pas écouter son collègue, prendre la fiche de cadenassage et appliquer la procédure comme indiqué par le règlement.', text: 'L’expérience des collègues et l’entraide sont une force dans un milieu de travail. Tous aspirent à être écoutés et respectés. De plus, vos collègues ont certainement des choses à vous apprendre. Cependant, suivre aveuglément le conseil d’un collègue qui nous invite à ne pas respecter une règle de sécurité, ou même choisir délibérément de ne pas suivre une procédure, peut mettre la santé et la sécurité de tous en danger. Lorsque nous sommes confrontés à ce type de situation, l’important est d’exercer son sens critique et son jugement, il faut d’abord essayer de comprendre les motivations de nos collègues par la discussion, puis trouver la solution la plus sécuritaire et la valider auprès de son superviseur.'},
                  {audio: "https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/paragraphe+3.wav", url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch3-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch3-2.mp4', choice1: 'Nouveau en poste, il ne se sent pas à l’aise d’intervenir. Sans aviser son collègue de la situation à risque, il part rapidement aviser son superviseur avant que son collègue vive une situation potentiellement dangereuse.', choice2: 'Il intervient rapidement auprès de son collègue et lui demande d’arrêter sa tâche immédiatement, il avise son collègue que la situation est dangereuse en expliquant les risques d’un tel problème.', choice3: 'Sans trop donner de détails, il avise son collègue du risque d’utiliser une meuleuse portative en lui indiquant qu’il ne voudrait pas que quelque chose de malheureux arrive.', text: 'Aviser ses collègues lorsqu’ils sont dans une situation à risque est la chose à faire. Cela permet de prévenir de potentiels accidents et permet de garder ses collègues en sécurité. Encore une fois, il est important de le faire au bon moment et surtout de la bonne façon. Les sensibiliser sur les conséquences possibles d’un accident permet d’imaginer la situation et d’en comprendre la gravité, cela donnera de la crédibilité à votre intervention. Dans un milieu de travail nous sommes tous responsables, favoriser le dialogue entre les personnes permet de mieux comprendre les situations vécues par chacun et d’éviter de futurs dangers. Si le collègue ne semble pas ouvert à la discussion, il faut en aviser le superviseur. Lui parler de votre intention de le protéger peut contribuer à convaincre la personne d’adapter son comportement.'}]

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
              <img className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/frame1.png' />
            </button>
            <h2 className="btn-title">Chapitre 1</h2>
            <p className="btn-subtitle">Le briefing</p>
          </div>
          <div>
            <button className="btn" onClick={() => startvideo(1)}>
              <img className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/Ch2+freeze+frame+1.png' />
            </button>
            <h2 className="btn-title">Chapitre 2</h2>
            <p className="btn-subtitle">Le cadenassage</p>
          </div>
          <div>
            <button className="btn" onClick={() => startvideo(2)}>
              <img className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/Ch3+freeze+frame+2.png' />
            </button>
            <h2 className="btn-title">Chapitre 3</h2>
            <p className="btn-subtitle">Comportement dangereux</p>
          </div>
        </div>
      </div>
      <div id="video">
        <video src={url} ref={vidRef} onEnded={showQuestions} />
        <div id="selector">
          <div className="select-title">Quel aurait été la bonne attitude à adopté?</div>
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
            <div className="para">{chapter[id].text}</div>
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
