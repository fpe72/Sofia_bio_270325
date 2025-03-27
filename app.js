// CONTENIDO DE LOS MÓDULOS Y PREGUNTAS
const contenido = {
  estimulos: {
    title: "🌍 Estímulos y Receptores",
    content: "Tipos según origen:\n- Externos: Sentidos (vista, oído, tacto, olfato, gusto).\n- Internos: Órganos internos y propioceptores.\n\nTipos por naturaleza:\n- Termorreceptores (temperatura).\n- Nociceptores (dolor).\n- Mecanorreceptores (presión, vibración).\n- Quimiorreceptores (sustancias químicas).",
    questions: [
      { question: "¿Qué receptores detectan la posición y movimiento del cuerpo?", options: ["Propioceptores", "Nociceptores", "Termorreceptores"], answer: 0, explanation: "Los propioceptores informan sobre la posición y movimientos corporales." },
      { question: "Los receptores que detectan sustancias químicas se llaman:", options: ["Quimiorreceptores", "Mecanorreceptores", "Termorreceptores"], answer: 0, explanation: "Correcto, los quimiorreceptores detectan sustancias químicas." },
      { question: "¿Qué tipo de receptores detectan cambios de temperatura?", options: ["Termorreceptores", "Nociceptores", "Mecanorreceptores"], answer: 0, explanation: "Correcto, los termorreceptores perciben los cambios térmicos." },
      { question: "¿Qué detectan los mecanorreceptores?", options: ["Luz", "Presión y vibraciones", "Sustancias químicas"], answer: 1, explanation: "Correcto, los mecanorreceptores responden a estímulos mecánicos como presión y vibraciones." },
      { question: "¿Qué función tienen los nociceptores?", options: ["Perciben el sonido", "Detectan el dolor", "Detectan el movimiento"], answer: 1, explanation: "Exacto, los nociceptores están especializados en percibir el dolor." }
    ]
  },

  vista: {
    title: "👁️ La Vista",
    content: "Partes principales del ojo:\n- Córnea: capa externa transparente.\n- Retina: contiene fotorreceptores (conos para color, bastones para visión nocturna).\n- Cristalino: enfoca la luz sobre la retina.\n- Nervio óptico: lleva la información visual al cerebro.\n\nDefectos visuales:\n- Miopía: dificultad para ver lejos.\n- Hipermetropía: dificultad para ver cerca.\n- Astigmatismo: visión distorsionada por curvatura irregular.",
    questions: [
      { question: "¿Qué células permiten la visión en color?", options: ["Conos", "Bastones", "Cristalino"], answer: 0, explanation: "Correcto, los conos permiten la percepción del color." },
      { question: "¿Qué estructura ocular enfoca la luz en la retina?", options: ["Cristalino", "Córnea", "Iris"], answer: 0, explanation: "El cristalino ajusta el enfoque de la luz sobre la retina." },
      { question: "¿Qué parte del ojo es responsable de detectar la luz?", options: ["Retina", "Cristalino", "Córnea"], answer: 0, explanation: "La retina contiene los fotorreceptores que captan la luz." },
      { question: "¿Qué defecto visual se produce por un globo ocular alargado?", options: ["Miopía", "Hipermetropía", "Astigmatismo"], answer: 0, explanation: "La miopía se debe a que el ojo es más largo de lo normal." },
      { question: "¿Cuál es el nombre del nervio que transmite la información visual al cerebro?", options: ["Nervio óptico", "Nervio auditivo", "Nervio olfativo"], answer: 0, explanation: "El nervio óptico conecta el ojo con el cerebro." }
    ]
  },

  oido: {
    title: "👂 El Oído",
    content: "El oído se divide en tres partes:\n- Oído externo: recoge el sonido.\n- Oído medio: contiene los huesecillos (martillo, yunque y estribo).\n- Oído interno: convierte el sonido en señales nerviosas (cóclea).",
    questions: [
      { question: "¿Qué parte del oído recoge las ondas sonoras?", options: ["Oído externo", "Oído medio", "Oído interno"], answer: 0, explanation: "El oído externo capta las ondas sonoras del ambiente." },
      { question: "¿Qué función tiene la cóclea?", options: ["Equilibrio", "Transmitir señales visuales", "Transformar sonidos en señales nerviosas"], answer: 2, explanation: "La cóclea convierte las vibraciones en señales eléctricas." },
      { question: "¿Qué hueso del oído es el más pequeño del cuerpo humano?", options: ["Martillo", "Yunque", "Estribo"], answer: 2, explanation: "El estribo es el hueso más pequeño del cuerpo humano." },
      { question: "¿Dónde se encuentran los huesecillos del oído?", options: ["Oído interno", "Oído medio", "Oído externo"], answer: 1, explanation: "Los huesecillos están en el oído medio y transmiten el sonido." },
      { question: "¿Qué conecta el oído con el cerebro?", options: ["Nervio óptico", "Nervio auditivo", "Nervio motor"], answer: 1, explanation: "El nervio auditivo lleva la información sonora al cerebro." }
    ]
  },

  tacto: {
    title: "✋ El Tacto",
    content: "La piel contiene diferentes tipos de receptores:\n- Mecanorreceptores: detectan presión y vibración.\n- Termorreceptores: detectan calor y frío.\n- Nociceptores: detectan el dolor.",
    questions: [
      { question: "¿Cuál es el órgano principal del sentido del tacto?", options: ["La piel", "La lengua", "La nariz"], answer: 0, explanation: "La piel es el órgano principal del sentido del tacto." },
      { question: "¿Qué tipo de receptores detectan la presión?", options: ["Quimiorreceptores", "Mecanorreceptores", "Termorreceptores"], answer: 1, explanation: "Los mecanorreceptores perciben la presión." },
      { question: "¿Qué receptores captan el dolor?", options: ["Nociceptores", "Conos", "Bastones"], answer: 0, explanation: "Los nociceptores detectan estímulos dolorosos." },
      { question: "¿Qué detectan los termorreceptores?", options: ["Luz", "Temperatura", "Vibración"], answer: 1, explanation: "Detectan los cambios de temperatura (frío y calor)." },
      { question: "¿Dónde se encuentran los receptores del tacto?", options: ["En la retina", "En la piel", "En los músculos"], answer: 1, explanation: "Los receptores del tacto están en la piel." }
    ]
  },

  olfato: {
    title: "👃 El Olfato",
    content: "El sentido del olfato se encuentra en la cavidad nasal.\nLos quimiorreceptores olfativos detectan sustancias químicas presentes en el aire y envían señales al cerebro a través del nervio olfativo.",
    questions: [
      { question: "¿Dónde se localizan los quimiorreceptores del olfato?", options: ["En la lengua", "En la cavidad nasal", "En la piel"], answer: 1, explanation: "Los receptores del olfato están en la cavidad nasal." },
      { question: "¿Qué tipo de receptores actúan en el olfato?", options: ["Mecanorreceptores", "Quimiorreceptores", "Fotorreceptores"], answer: 1, explanation: "El olfato utiliza quimiorreceptores para detectar olores." },
      { question: "¿Qué nervio lleva la información olfativa al cerebro?", options: ["Nervio óptico", "Nervio olfativo", "Nervio auditivo"], answer: 1, explanation: "El nervio olfativo transmite los estímulos del olfato." },
      { question: "¿Qué estimula los receptores olfativos?", options: ["Ondas sonoras", "Moléculas químicas en el aire", "Presión"], answer: 1, explanation: "Los olores son provocados por moléculas químicas volátiles." },
      { question: "¿Qué ocurre si los receptores del olfato se dañan?", options: ["Se pierde el sentido del gusto", "Se pierde la vista", "Se pierde el equilibrio"], answer: 0, explanation: "El olfato y el gusto están muy relacionados." }
    ]
  },
 gusto: {
    title: "👅 El Gusto",
    content: "Sentido que permite percibir sabores.\n- Las papilas gustativas están en la lengua.\n- Detectan sustancias disueltas en la saliva.\n- Tipos de sabores: dulce, salado, ácido, amargo y umami.",
    questions: [
      { question: "¿Dónde se encuentran las papilas gustativas?", options: ["En la lengua", "En el oído", "En la nariz"], answer: 0, explanation: "Las papilas gustativas se localizan en la lengua." },
      { question: "¿Qué tipo de sustancia detectan las papilas gustativas?", options: ["Sólidas", "Gaseosas", "Disueltas"], answer: 2, explanation: "Deben estar disueltas en la saliva para ser detectadas." },
      { question: "¿Cuál de los siguientes no es un sabor primario?", options: ["Dulce", "Picante", "Amargo"], answer: 1, explanation: "El picante no es un sabor, es una sensación de dolor." },
      { question: "¿Qué nervios llevan la información gustativa al cerebro?", options: ["Auditivo", "Gustativos", "Olfativos"], answer: 1, explanation: "Los nervios gustativos llevan la señal al cerebro." },
      { question: "¿Qué sabor detecta el umami?", options: ["Sabor a hierro", "Sabor ácido", "Sabor a proteínas o glutamato"], answer: 2, explanation: "El umami detecta proteínas o glutamato, como en el queso o tomate." }
    ]
  },
  locomotor: {
    title: "🦴 Aparato Locomotor",
    content: "Formado por:\n- Sistema óseo: huesos.\n- Sistema muscular: músculos.\nFunción: permite el movimiento y da soporte y protección al cuerpo.",
    questions: [
      { question: "¿Qué estructuras forman el aparato locomotor?", options: ["Huesos y nervios", "Huesos y músculos", "Músculos y piel"], answer: 1, explanation: "El aparato locomotor está compuesto por huesos y músculos." },
      { question: "¿Qué función tiene el sistema óseo?", options: ["Controlar hormonas", "Proteger órganos y dar soporte", "Transportar nutrientes"], answer: 1, explanation: "El esqueleto protege órganos internos y da soporte al cuerpo." },
      { question: "¿Qué une el músculo al hueso?", options: ["Cartílago", "Ligamento", "Tendón"], answer: 2, explanation: "Los tendones unen músculo con hueso." },
      { question: "¿Qué tipo de tejido es el músculo esquelético?", options: ["Epitelial", "Muscular voluntario", "Muscular involuntario"], answer: 1, explanation: "Es un tejido muscular voluntario controlado por el sistema nervioso." },
      { question: "¿Qué protege el cráneo?", options: ["Corazón", "Pulmones", "Cerebro"], answer: 2, explanation: "El cráneo protege el encéfalo o cerebro." }
    ]
  },
  coordinacion: {
    title: "🧩 Sistemas de Coordinación",
    content: "El cuerpo humano coordina sus funciones mediante:\n- Sistema nervioso.\n- Sistema endocrino.\nAmbos trabajan juntos para responder a estímulos internos y externos.",
    questions: [
      { question: "¿Cuáles son los sistemas de coordinación del cuerpo humano?", options: ["Respiratorio y circulatorio", "Nervioso y endocrino", "Digestivo y excretor"], answer: 1, explanation: "Nervioso y endocrino se encargan de coordinar funciones." },
      { question: "¿Qué sistema coordina las respuestas rápidas?", options: ["Endocrino", "Nervioso", "Excretor"], answer: 1, explanation: "El sistema nervioso actúa rápidamente ante estímulos." },
      { question: "¿Qué sistema utiliza hormonas para coordinar funciones?", options: ["Nervioso", "Digestivo", "Endocrino"], answer: 2, explanation: "El sistema endocrino usa hormonas para regular procesos." },
      { question: "¿Qué parte del encéfalo coordina movimientos?", options: ["Cerebelo", "Bulbo raquídeo", "Hipotálamo"], answer: 0, explanation: "El cerebelo coordina movimientos voluntarios e involuntarios." },
      { question: "¿Qué órgano actúa en ambos sistemas de coordinación?", options: ["Páncreas", "Cerebro", "Hipotálamo"], answer: 2, explanation: "El hipotálamo conecta el sistema nervioso con el endocrino." }
    ]
  },
  endocrino: {
    title: "💡 Sistema Endocrino y Control Hormonal",
    content: "Formado por glándulas que secretan hormonas:\n- Hormonas: mensajeros químicos que regulan funciones.\n- Glándulas principales: hipófisis, tiroides, páncreas, suprarrenales, gónadas.",
    questions: [
      { question: "¿Qué secretan las glándulas endocrinas?", options: ["Sangre", "Hormonas", "Vitaminas"], answer: 1, explanation: "Secretan hormonas directamente a la sangre." },
      { question: "¿Qué glándula regula otras glándulas?", options: ["Tiroides", "Hipotálamo", "Hipófisis"], answer: 2, explanation: "La hipófisis controla otras glándulas endocrinas." },
      { question: "¿Qué hormona produce el páncreas?", options: ["Insulina", "Adrenalina", "Melatonina"], answer: 0, explanation: "La insulina regula los niveles de glucosa en sangre." },
      { question: "¿Qué glándulas producen hormonas sexuales?", options: ["Tiroides", "Gónadas", "Suprarrenales"], answer: 1, explanation: "Las gónadas (ovarios y testículos) producen hormonas sexuales." },
      { question: "¿Qué glándula produce adrenalina?", options: ["Tiroides", "Suprarrenales", "Páncreas"], answer: 1, explanation: "Las glándulas suprarrenales liberan adrenalina en situaciones de estrés." }
    ]
  },
  drogas: {
    title: "🚫 Drogas y Salud",
    content: "Las drogas son sustancias que alteran el funcionamiento del sistema nervioso.\nPueden ser legales o ilegales.\n- Afectan la coordinación, percepción, emociones.\n- Pueden causar dependencia física y psicológica.",
    questions: [
      { question: "¿Qué sistema afecta principalmente una droga?", options: ["Digestivo", "Nervioso", "Endocrino"], answer: 1, explanation: "Las drogas alteran el funcionamiento del sistema nervioso." },
      { question: "¿Qué tipo de dependencia pueden causar las drogas?", options: ["Psicológica y física", "Visual y auditiva", "Solo física"], answer: 0, explanation: "Pueden causar dependencia tanto física como psicológica." },
      { question: "¿Qué tipo de droga es el alcohol?", options: ["Estimulante", "Depresora", "Alucinógena"], answer: 1, explanation: "El alcohol es una droga depresora del sistema nervioso." },
      { question: "¿Cuál es una consecuencia del consumo de drogas?", options: ["Mejora la memoria", "Aumenta la concentración", "Deterioro de la salud"], answer: 2, explanation: "El consumo de drogas perjudica la salud general." },
      { question: "¿Cuál es un ejemplo de droga legal?", options: ["Marihuana", "Heroína", "Tabaco"], answer: 2, explanation: "El tabaco es legal pero perjudicial para la salud." }
    ]
  },
  sistema_nervioso: {
    title: "🧠 Sistema Nervioso",
    content: "Formado por:\n- Sistema nervioso central (cerebro y médula espinal).\n- Sistema nervioso periférico (nervios).\nFunciones:\n- Recibir estímulos.\n- Interpretar información.\n- Generar respuestas.",
    questions: [
      { question: "¿Qué órganos forman el sistema nervioso central?", options: ["Cerebro y médula espinal", "Cerebro y corazón", "Médula ósea y pulmones"], answer: 0, explanation: "El sistema nervioso central está compuesto por el cerebro y la médula espinal." },
      { question: "¿Qué función cumple el sistema nervioso?", options: ["Respirar", "Reproducirse", "Coordinar respuestas del cuerpo"], answer: 2, explanation: "Coordina todas las funciones del cuerpo humano." },
      { question: "¿Qué parte del sistema nervioso interpreta la información?", options: ["La piel", "El cerebro", "Los músculos"], answer: 1, explanation: "El cerebro analiza e interpreta la información que recibe." },
      { question: "¿Qué transporta el sistema nervioso periférico?", options: ["Hormonas", "Impulsos nerviosos", "Oxígeno"], answer: 1, explanation: "El sistema nervioso periférico transporta información al y desde el sistema central." },
      { question: "¿Qué unidad básica forma el sistema nervioso?", options: ["Neuronas", "Glóbulos", "Músculos"], answer: 0, explanation: "Las neuronas son las células principales del sistema nervioso." }
    ]
  }
};


let chapterKeys = Object.keys(contenido);
let currentChapter = 0, currentQuestion = 0, score = 0;

function init() {
  renderChapters();
  document.querySelector('.back-btn').onclick = () => {
    document.querySelector('.celebration').classList.add('hidden');
    document.querySelector('.chapters-container').classList.remove('hidden');
  };
}

function renderChapters() {
  const container = document.querySelector('.chapters-container');
  container.innerHTML = '';

  chapterKeys.forEach((key, index) => {
    let chapter = contenido[key];
    let card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `<h3>${chapter.title}</h3><p>${chapter.content.replace(/\n/g, '<br>')}</p>`;
    card.onclick = () => startChapter(index);
    container.append(card);
  });
}

function startChapter(index) {
  currentChapter = index;
  currentQuestion = 0;
  document.querySelector('.chapters-container').classList.add('hidden');
  document.querySelector('.question-container').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  let chapter = contenido[chapterKeys[currentChapter]];
  let q = chapter.questions[currentQuestion];

  document.querySelector('.chapter-title').innerText = chapter.title;
  document.querySelector('.question-body').innerHTML = `
    <h3>${q.question}</h3>
    ${q.options.map((op, idx) => `<div class='option' onclick='checkAnswer(${idx})'>${op}</div>`).join('')}`;
  document.querySelector('.explanation').classList.add('hidden');
  document.querySelector('.next-btn').classList.add('hidden');
}

function checkAnswer(selected) {
  let q = contenido[chapterKeys[currentChapter]].questions[currentQuestion];
  let correct = selected === q.answer;

  document.querySelectorAll('.option').forEach((el, idx) => {
    el.classList.add('disabled');
    if (idx === q.answer) el.classList.add('correct');
    else if (idx === selected) el.classList.add('wrong');
  });

  document.querySelector('.explanation').innerHTML = `${correct ? '🎉 Correcto!' : '❌ Incorrecto!'} ${q.explanation}`;
  document.querySelector('.explanation').classList.remove('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');

  if (correct) score += 100;
  document.querySelector('.score span').innerText = score;
}

document.querySelector('.next-btn').onclick = () => {
  if (++currentQuestion < contenido[chapterKeys[currentChapter]].questions.length)
    showQuestion();
  else finishChapter();
};

function finishChapter() {
  document.querySelector('.celebration').classList.remove('hidden');
  document.querySelector('.question-container').classList.add('hidden');
  updateProgress();
}

function updateProgress() {
  let prog = ((currentChapter + 1) / chapterKeys.length) * 100;
  document.querySelector('.progress').style.width = prog + '%';
}

init();