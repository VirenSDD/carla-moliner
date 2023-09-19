export const json = {
  "title": "Cuestionario exclusivo para Carla Moliner Serrano",
  "showProgressBar": "bottom",
  "showTimerPanel": "top",
  "maxTimeToFinishPage": 25,
  "maxTimeToFinish": 60,
  "firstPageIsStarted": true,
  "startSurveyText": "Empezar",
  "pages": [
    {
      "elements": [
        {
          "type": "html",
          "html": "Te voy a hacer un par de preguntas que deberías saber responder. <br>Introduce la contraseña y dale a <b>Empezar</b>."
        },
        {
          "type": "text",
          "name": "username",
          "titleLocation": "hidden",
          "isRequired": true,
          "maxLength": 25
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "civilwar",
          "title": "¿Sobre qué fue nuestra primera conversación?",
          "choices": [
            "Barbie",
            "La La Land",
            "Balada",
            "Babylon"
          ],
          "correctAnswer": "La La Land"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "libertyordeath",
          "title": "¿Dónde fue nuestro primer beso?",
          "choicesOrder": "random",
          "choices": [
            "En un parque",
            "En un museo",
            "En un cine",
            "En una playa"
          ],
          "correctAnswer": "En un parque"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "color",
          "title": "¿Cuál es tu color favorito?",
          "choicesOrder": "random",
          "choices": [
            "Verde",
            "Amarillo",
            "Rojo",
            "Azul"
          ],
          "correctAnswer": "Amarillo"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "canario",
          "title": "¿Cómo se dice palomitas en canario?",
          "choicesOrder": "random",
          "choices": [
            "Cotufas",
            "Totufos",
            "Baifos",
            "Guaguas"
          ],
          "correctAnswer": "Cotufas"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "other",
          "title": "¿Quieres salir conmigo?",
          "choicesOrder": "random",
          "choices": [
            "SÍ",
            "NO"
          ],
          "correctAnswer": "SÍ"
        }
      ]
    }
  ],
  "completedHtml": "<h4>Acertaste <b>{correctAnswers}</b> de <b>{questionCount}</b> preguntas.</h4>",
  "completedHtmlOnCondition": [
    {
      "expression": "{correctAnswers} == 0",
      "html": "<h4>No has acertado ninguna pregunta :(</h4>"
    },
    {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Acertaste <b>{correctAnswers}</b> de <b>{questionCount}</b> preguntas :D</h4>"
    },
    {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Acertaste <b>{correctAnswers}</b> de <b>{questionCount}</b> preguntas :D</h4>"
    }
  ]
};