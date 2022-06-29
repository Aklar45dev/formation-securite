import './App.css'
import $ from "jquery"
import React, { useRef, useState, useEffect } from 'react'


function App() {

  const chapter = [{url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch1-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch1-2.mp4', choice1: 'Souhaitant rattraper son erreur rapidement, dès qu’il constate son inattention, il intervient dans le groupe afin de demander des précisions.', choice2: 'Il attend que la rencontre se termine et lorsque tout le monde se dirige vers sa prochaine tâche, il interrompt le superviseur dans sa tâche pour valider les informations qu’il n’avait pas compris durant la rencontre.', choice3: 'À la sortie, il demande au superviseur quand sera le bon moment pour lui parler avant la tâche. Le superviseur lui dit qu’il passera le voir immédiatement après X. Jeff lui posera alors ces questions.', text: 'Poser des questions lorsque l’on est dans le doute est important ! Chaque situation est différente et selon celle-ci choisir le bon moment pour demander des précisions, poser des questions peut faire la différence entre une question qui est répondue de façon rapide et imprécise ou qui est répondue avec clarté. Le choix d’attendre de parler à son superviseur en privé, de demander de répéter ou d’avoir plus de précision, permet un meilleur échange sur ce qui a été compris et pas. De plus, cela favorise le dialogue et permet de réduire le stress et les appréhensions face à sa première journée de travail.'},
                  {url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch2-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch2-2.mp4', choice1: 'Bien que l’expérience des collègues de travail est importante dans le milieu de travail, ce n’est pas parce leur méthode prend moins temps qu’elle est la meilleure. Au même titre que cette méthode a toujours été faite comme cela. Valider les méthodes de travail avec son superviseur est la chose à faire. ', choice2: 'Demander à son collègue qui explique en détail sa méthode de faire et la raison qui le motive à l’utiliser… Ce n’est pas parce que l’on est nouveau dans un milieu de travail que l’on ne peut pas demander plus d’explication sur une façon de faire qui de toute évidence va à l’encontre de la consigne qui est dite et écrite.', choice3: 'Ne pas écouter son collègue et faire comme s’il ne nous avait rien dit… Prendre la fiche de cadenassage et appliquer la procédure comme indiqué.', text: 'L’expérience des collègues et l’entraide sont une force dans un milieu de travail. Tous veulent être écoutés et respectés. Les ignorer lorsque leur choix et les nôtres sont contradictoires n’est pas un gage de bonne relation futur.  Cependant, prendre tout leur conseil comme de l’argent et oublier son sens critique peuvent mettre sa santé-sécurité et celle des autres en jeu. Lorsque nous sommes confrontés à ce type de situation, nous devons essayer de comprendre les motivations de nos collègues et valider avec son superviseur.'},
                  {url: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch3-1.mp4', urlMuted: 'https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/Ch3-2.mp4', choice1: 'Sans aviser son collègue de la situation à risque, il part rapidement aviser sont superviseur que son collègue pose une action potentiellement dangereuse.', choice2: ' Il avise son collègue que dans une situation semblable dans un autre emploi, il a vu un collègue se blesser de cette façon. Il donne beaucoup de détail sur les conséquences de l’événement et qu’il a même perdu sa femme à cause de cela.', choice3: 'Il avise son collègue du risque à utiliser une meuleuse portative sans garde de protection et sans visière. Sans donner trop de détail, il indique que par le passé, il a déjà vu un accident semblable et que même s’il ne connait pas beaucoup son nouveau collègue, il ne voudrait pas que cet événement lui arrive.', text: 'Aviser ses collègues lorsqu’ils sont dans une situation à risque est la chose à faire. Cela permet de prévenir de potentiel accident et permet de garder ses collègues au travail. Les sensibiliser sur les conséquences possibles d’un accident permet d’imaginer la situation, cependant trop donner de détail annule cet effet. Dans un milieu de travail nous sommes tous des adultes responsables, favorisé le dialogue entre les personnes permet de mieux comprendre les situations vécues de par chacun. Si l’écoute du collègue en question n’est pas présente, il faut aviser son superviseur.'}]

  const selection = [{1: "Demander des précisions pendant le briefing.", 2: "Demander des renseignements juste après le briefing.", 3: "Demander de venir le voir rapidement pour des précisions."},
                    {1: "Valider avec le superviseur.", 2: "Discuter pour comprendre pourquoi il ne suit pas la procédure.", 3: "Appliquer la procédure tel qu’indiqué."},
                    {1: "Aviser son collègue et son superviseur.", 2: "Aviser son collègue et expliquer pourquoi c’est une situation à risque.", 3: "Aviser son collègue et parler de son expérience passée."}]

  const [url, setUrl] = useState(null)
  const [id, setId] = useState(0)
  const [ansid, setAnsid] = useState('1')

  useEffect(() => {
    if(url !== null){
      vidRef.current.play()
    }
  }, [url])

  const vidRef = useRef(null)

  const startvideo = (id) => {
    $("#video").css({display: "block"})
    $("#accueil").css({display: "none"})
    setId(id)
    setUrl(chapter[id].url)
    vidRef.current.play()
  }

  const showQuestions = () => {
    $("#selector").css({display: "flex"})
  }

  const validate = (ans) => {
    $("#video").css({display: "none"})
    $("#response").css({display: "flex"})
    setAnsid(ans)
  }

  const retour = () => {
    $("#response").css({display: "none"})
    $("#selector").css({display: "none"})
    $("#accueil").css({display: "block"})
  }
  
  return (
    <div className="App">
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
          <button className="selectBtn" onClick={() => validate('1')}>{chapter[id].choice1}</button>
          <button className="selectBtn" onClick={() => validate('2')}>{chapter[id].choice2}</button>
          <button className="selectBtn" onClick={() => validate('3')}>{chapter[id].choice3}</button>
        </div>
      </div>
      <div id="response">
        <div className="res-container">
          <div className="info">
            <div className="info-title">{selection[id][ansid]}</div>
            <div className="para">{chapter[id].text}</div>
          </div>
            <video src={chapter[id].urlMuted} autoPlay muted loop />
        </div>
        <button className='retour' onClick={() => retour()}>Continuer</button>
      </div>
    </div>
  )
}

export default App
