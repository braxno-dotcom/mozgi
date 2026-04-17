// Scènes parallèles. Ordre de révélation pédagogique : FR (modèle) → EN (pont germanique) → DE (cible) → ES (contrôle roman).
// Jamais de russe — l'accès au sens passe par le français.
const SCENES = [
  {
    id: "marche",
    concept: "Aller au marché",
    core: "se déplacer vers un lieu précis",
    tenses: [
      { name: "présent", nuance: "habitude ou action en cours",
        fr: "Je vais au marché.", en: "I go to the market.",
        de: "Ich gehe auf den Markt.", es: "Voy al mercado." },
      { name: "passé ponctuel", nuance: "une fois, action achevée — indefinido / Perfekt",
        fr: "Je suis allé au marché hier.", en: "I went to the market yesterday.",
        de: "Ich bin gestern auf den Markt gegangen.", es: "Fui al mercado ayer." },
      { name: "imparfait / décor", nuance: "habitude passée ou toile de fond — imperfecto / Präteritum",
        fr: "J'allais au marché le samedi.", en: "I used to go to the market on Saturdays.",
        de: "Ich ging samstags auf den Markt.", es: "Iba al mercado los sábados." },
      { name: "futur", nuance: "action prévue",
        fr: "J'irai au marché demain.", en: "I will go to the market tomorrow.",
        de: "Ich werde morgen auf den Markt gehen.", es: "Iré al mercado mañana." }
    ]
  },
  {
    id: "restaurant",
    concept: "Manger au restaurant",
    core: "prendre un repas dans un lieu public",
    tenses: [
      { name: "présent", nuance: "action en cours ou habitude",
        fr: "Je mange au restaurant.", en: "I eat at the restaurant.",
        de: "Ich esse im Restaurant.", es: "Como en el restaurante." },
      { name: "passé ponctuel", nuance: "un repas précis, terminé",
        fr: "J'ai mangé au restaurant hier soir.", en: "I ate at the restaurant last night.",
        de: "Ich habe gestern Abend im Restaurant gegessen.", es: "Comí en el restaurante anoche." },
      { name: "imparfait / décor", nuance: "habitude ou contexte qui durait",
        fr: "Je mangeais souvent dans ce restaurant.", en: "I used to eat at that restaurant often.",
        de: "Ich aß oft in diesem Restaurant.", es: "Comía a menudo en aquel restaurante." },
      { name: "futur", nuance: "repas à venir",
        fr: "Je mangerai au restaurant ce soir.", en: "I will eat at the restaurant tonight.",
        de: "Ich werde heute Abend im Restaurant essen.", es: "Comeré en el restaurante esta noche." }
    ]
  },
  {
    id: "ami",
    concept: "Parler avec un ami",
    core: "échanger des paroles avec quelqu'un de proche",
    tenses: [
      { name: "présent", nuance: "maintenant ou d'habitude",
        fr: "Je parle avec mon ami.", en: "I talk with my friend.",
        de: "Ich spreche mit meinem Freund.", es: "Hablo con mi amigo." },
      { name: "passé ponctuel", nuance: "une conversation précise",
        fr: "J'ai parlé avec mon ami hier.", en: "I talked with my friend yesterday.",
        de: "Ich habe gestern mit meinem Freund gesprochen.", es: "Hablé con mi amigo ayer." },
      { name: "imparfait / décor", nuance: "quelque chose qu'on faisait régulièrement",
        fr: "Je parlais avec lui tous les jours.", en: "I used to talk with him every day.",
        de: "Ich sprach jeden Tag mit ihm.", es: "Hablaba con él todos los días." },
      { name: "futur", nuance: "conversation à venir",
        fr: "Je lui parlerai demain.", en: "I will talk to him tomorrow.",
        de: "Ich werde morgen mit ihm sprechen.", es: "Hablaré con él mañana." }
    ]
  },
  {
    id: "dormir",
    concept: "Dormir tard",
    core: "rester au lit au-delà de l'heure habituelle",
    tenses: [
      { name: "présent", nuance: "maintenant ou en général",
        fr: "Je dors tard.", en: "I sleep late.",
        de: "Ich schlafe lange.", es: "Duermo hasta tarde." },
      { name: "passé ponctuel", nuance: "un matin précis",
        fr: "J'ai dormi tard dimanche.", en: "I slept late on Sunday.",
        de: "Ich habe am Sonntag lange geschlafen.", es: "Dormí hasta tarde el domingo." },
      { name: "imparfait / décor", nuance: "habitude révolue, période de la vie",
        fr: "Je dormais tard quand j'étais étudiant.", en: "I used to sleep late when I was a student.",
        de: "Ich schlief lange, als ich Student war.", es: "Dormía hasta tarde cuando era estudiante." },
      { name: "futur", nuance: "un matin à venir",
        fr: "Je dormirai tard demain.", en: "I will sleep late tomorrow.",
        de: "Ich werde morgen lange schlafen.", es: "Dormiré hasta tarde mañana." }
    ]
  },
  {
    id: "bureau",
    concept: "Travailler au bureau",
    core: "accomplir son travail dans un lieu précis",
    tenses: [
      { name: "présent", nuance: "situation actuelle",
        fr: "Je travaille au bureau.", en: "I work at the office.",
        de: "Ich arbeite im Büro.", es: "Trabajo en la oficina." },
      { name: "passé ponctuel", nuance: "une journée précise",
        fr: "J'ai travaillé au bureau lundi.", en: "I worked at the office on Monday.",
        de: "Ich habe am Montag im Büro gearbeitet.", es: "Trabajé en la oficina el lunes." },
      { name: "imparfait / décor", nuance: "période prolongée au passé",
        fr: "Je travaillais dans ce bureau pendant trois ans.", en: "I used to work at that office for three years.",
        de: "Ich arbeitete drei Jahre in diesem Büro.", es: "Trabajaba en aquella oficina durante tres años." },
      { name: "futur", nuance: "prévu pour la suite",
        fr: "Je travaillerai au bureau la semaine prochaine.", en: "I will work at the office next week.",
        de: "Ich werde nächste Woche im Büro arbeiten.", es: "Trabajaré en la oficina la semana que viene." }
    ]
  },
  {
    id: "livre",
    concept: "Lire un livre le soir",
    core: "parcourir un texte imprimé pour le plaisir",
    tenses: [
      { name: "présent", nuance: "habitude",
        fr: "Je lis un livre le soir.", en: "I read a book in the evening.",
        de: "Ich lese abends ein Buch.", es: "Leo un libro por la noche." },
      { name: "passé ponctuel", nuance: "un livre précis, fini",
        fr: "J'ai lu ce livre hier soir.", en: "I read that book last night.",
        de: "Ich habe dieses Buch gestern Abend gelesen.", es: "Leí ese libro anoche." },
      { name: "imparfait / décor", nuance: "habitude révolue",
        fr: "Je lisais chaque soir avant de dormir.", en: "I used to read every night before sleep.",
        de: "Ich las jeden Abend vor dem Schlafen.", es: "Leía cada noche antes de dormir." },
      { name: "futur", nuance: "lecture prévue",
        fr: "Je lirai ce livre demain.", en: "I will read this book tomorrow.",
        de: "Ich werde dieses Buch morgen lesen.", es: "Leeré este libro mañana." }
    ]
  },
  {
    id: "message",
    concept: "Écrire un message",
    core: "rédiger un court texte pour quelqu'un",
    tenses: [
      { name: "présent", nuance: "en train d'écrire",
        fr: "Je lui écris un message.", en: "I'm writing him a message.",
        de: "Ich schreibe ihm eine Nachricht.", es: "Le escribo un mensaje." },
      { name: "passé ponctuel", nuance: "un message précis, envoyé",
        fr: "Je lui ai écrit un message ce matin.", en: "I wrote him a message this morning.",
        de: "Ich habe ihm heute Morgen eine Nachricht geschrieben.", es: "Le escribí un mensaje esta mañana." },
      { name: "imparfait / décor", nuance: "habitude d'écrire",
        fr: "Je lui écrivais souvent.", en: "I used to write to him often.",
        de: "Ich schrieb ihm oft.", es: "Le escribía a menudo." },
      { name: "futur", nuance: "message à venir",
        fr: "Je lui écrirai un message demain.", en: "I will write him a message tomorrow.",
        de: "Ich werde ihm morgen eine Nachricht schreiben.", es: "Le escribiré un mensaje mañana." }
    ]
  },
  {
    id: "pain",
    concept: "Acheter du pain",
    core: "se procurer un produit de base",
    tenses: [
      { name: "présent", nuance: "ce que je fais d'habitude",
        fr: "J'achète du pain à la boulangerie.", en: "I buy bread at the bakery.",
        de: "Ich kaufe Brot in der Bäckerei.", es: "Compro pan en la panadería." },
      { name: "passé ponctuel", nuance: "un achat précis",
        fr: "J'ai acheté du pain ce matin.", en: "I bought bread this morning.",
        de: "Ich habe heute Morgen Brot gekauft.", es: "Compré pan esta mañana." },
      { name: "imparfait / décor", nuance: "habitude passée",
        fr: "J'achetais du pain chaque matin.", en: "I used to buy bread every morning.",
        de: "Ich kaufte jeden Morgen Brot.", es: "Compraba pan cada mañana." },
      { name: "futur", nuance: "achat prévu",
        fr: "J'achèterai du pain demain.", en: "I will buy bread tomorrow.",
        de: "Ich werde morgen Brot kaufen.", es: "Compraré pan mañana." }
    ]
  },
  {
    id: "bus",
    concept: "Attendre le bus",
    core: "patienter qu'un véhicule arrive",
    tenses: [
      { name: "présent", nuance: "en ce moment",
        fr: "J'attends le bus.", en: "I'm waiting for the bus.",
        de: "Ich warte auf den Bus.", es: "Espero el autobús." },
      { name: "passé ponctuel", nuance: "une attente précise, terminée",
        fr: "J'ai attendu le bus vingt minutes.", en: "I waited for the bus for twenty minutes.",
        de: "Ich habe zwanzig Minuten auf den Bus gewartet.", es: "Esperé el autobús veinte minutos." },
      { name: "imparfait / décor", nuance: "habitude, ambiance qui durait",
        fr: "J'attendais le bus chaque jour sous la pluie.", en: "I used to wait for the bus every day in the rain.",
        de: "Ich wartete jeden Tag im Regen auf den Bus.", es: "Esperaba el autobús todos los días bajo la lluvia." },
      { name: "futur", nuance: "attente à venir",
        fr: "J'attendrai le bus ici.", en: "I will wait for the bus here.",
        de: "Ich werde hier auf den Bus warten.", es: "Esperaré el autobús aquí." }
    ]
  },
  {
    id: "explication",
    concept: "Comprendre une explication",
    core: "saisir le sens de ce qu'on te dit",
    tenses: [
      { name: "présent", nuance: "maintenant, état mental",
        fr: "Je comprends l'explication.", en: "I understand the explanation.",
        de: "Ich verstehe die Erklärung.", es: "Entiendo la explicación." },
      { name: "passé ponctuel", nuance: "moment précis de compréhension",
        fr: "J'ai compris ce que tu as dit.", en: "I understood what you said.",
        de: "Ich habe verstanden, was du gesagt hast.", es: "Entendí lo que dijiste." },
      { name: "imparfait / décor", nuance: "état qui durait — non ponctuel",
        fr: "Je ne comprenais rien au premier cours.", en: "I didn't understand anything in the first class.",
        de: "Ich verstand in der ersten Stunde nichts.", es: "No entendía nada en la primera clase." },
      { name: "futur", nuance: "compréhension à venir",
        fr: "Je le comprendrai bientôt.", en: "I will understand it soon.",
        de: "Ich werde es bald verstehen.", es: "Lo entenderé pronto." }
    ]
  },
  {
    id: "ville",
    concept: "Habiter en ville",
    core: "avoir sa résidence dans un lieu",
    tenses: [
      { name: "présent", nuance: "situation actuelle",
        fr: "J'habite en ville.", en: "I live in the city.",
        de: "Ich wohne in der Stadt.", es: "Vivo en la ciudad." },
      { name: "passé ponctuel", nuance: "période délimitée, vue comme un bloc",
        fr: "J'ai vécu deux ans à Madrid.", en: "I lived in Madrid for two years.",
        de: "Ich habe zwei Jahre in Madrid gewohnt.", es: "Viví en Madrid dos años." },
      { name: "imparfait / décor", nuance: "époque de la vie",
        fr: "J'habitais à la campagne quand j'étais enfant.", en: "I used to live in the countryside when I was a child.",
        de: "Ich wohnte auf dem Land, als ich ein Kind war.", es: "Vivía en el campo cuando era niño." },
      { name: "futur", nuance: "projet de vie",
        fr: "J'habiterai à Berlin l'année prochaine.", en: "I will live in Berlin next year.",
        de: "Ich werde nächstes Jahr in Berlin wohnen.", es: "Viviré en Berlín el año que viene." }
    ]
  },
  {
    id: "film",
    concept: "Regarder un film",
    core: "suivre un récit visuel",
    tenses: [
      { name: "présent", nuance: "action en cours",
        fr: "Je regarde un film.", en: "I'm watching a film.",
        de: "Ich schaue einen Film.", es: "Veo una película." },
      { name: "passé ponctuel", nuance: "un film précis, vu",
        fr: "J'ai vu un très bon film hier soir.", en: "I watched a great film last night.",
        de: "Ich habe gestern Abend einen sehr guten Film gesehen.", es: "Vi una película buenísima anoche." },
      { name: "imparfait / décor", nuance: "habitude, souvenir d'enfance",
        fr: "Je regardais des films chaque samedi avec mon père.", en: "I used to watch films every Saturday with my father.",
        de: "Ich schaute jeden Samstag Filme mit meinem Vater.", es: "Veía películas cada sábado con mi padre." },
      { name: "futur", nuance: "projet de visionnage",
        fr: "Je verrai le nouveau film vendredi.", en: "I will watch the new film on Friday.",
        de: "Ich werde den neuen Film am Freitag sehen.", es: "Veré la nueva película el viernes." }
    ]
  },
  {
    id: "musique",
    concept: "Écouter de la musique",
    core: "prêter attention à des sons",
    tenses: [
      { name: "présent", nuance: "en ce moment",
        fr: "J'écoute de la musique.", en: "I listen to music.",
        de: "Ich höre Musik.", es: "Escucho música." },
      { name: "passé ponctuel", nuance: "épisode précis, fini",
        fr: "J'ai écouté un disque entier hier.", en: "I listened to a whole record yesterday.",
        de: "Ich habe gestern eine ganze Platte gehört.", es: "Escuché un disco entero ayer." },
      { name: "imparfait / décor", nuance: "activité en arrière-plan d'une autre",
        fr: "J'écoutais la radio en cuisinant.", en: "I used to listen to the radio while cooking.",
        de: "Ich hörte Radio, während ich kochte.", es: "Escuchaba la radio mientras cocinaba." },
      { name: "futur", nuance: "écoute prévue",
        fr: "J'écouterai cette chanson plus tard.", en: "I will listen to that song later.",
        de: "Ich werde dieses Lied später hören.", es: "Escucharé esa canción más tarde." }
    ]
  },
  {
    id: "vacances",
    concept: "Partir en vacances",
    core: "quitter son lieu habituel pour se reposer",
    tenses: [
      { name: "présent", nuance: "départ imminent ou général",
        fr: "Je pars en vacances.", en: "I'm going on vacation.",
        de: "Ich fahre in den Urlaub.", es: "Me voy de vacaciones." },
      { name: "passé ponctuel", nuance: "un voyage précis",
        fr: "Nous sommes partis en vacances en juillet.", en: "We went on vacation in July.",
        de: "Wir sind im Juli in den Urlaub gefahren.", es: "Nos fuimos de vacaciones en julio." },
      { name: "imparfait / décor", nuance: "rituel familial",
        fr: "Nous partions en vacances chaque été.", en: "We used to go on vacation every summer.",
        de: "Wir fuhren jeden Sommer in den Urlaub.", es: "Nos íbamos de vacaciones cada verano." },
      { name: "futur", nuance: "voyage prévu",
        fr: "Je partirai en vacances en août.", en: "I will go on vacation in August.",
        de: "Ich werde im August in den Urlaub fahren.", es: "Me iré de vacaciones en agosto." }
    ]
  },
  {
    id: "retard",
    concept: "Arriver en retard",
    core: "parvenir plus tard que prévu",
    tenses: [
      { name: "présent", nuance: "constat actuel",
        fr: "J'arrive en retard au travail.", en: "I'm late for work.",
        de: "Ich komme zu spät zur Arbeit.", es: "Llego tarde al trabajo." },
      { name: "passé ponctuel", nuance: "un matin précis",
        fr: "Je suis arrivé en retard ce matin.", en: "I was late this morning.",
        de: "Ich bin heute Morgen zu spät gekommen.", es: "Llegué tarde esta mañana." },
      { name: "imparfait / décor", nuance: "habitude d'une époque",
        fr: "J'arrivais toujours en retard quand j'étais jeune.", en: "I was always late when I was young.",
        de: "Ich kam immer zu spät, als ich jung war.", es: "Siempre llegaba tarde cuando era joven." },
      { name: "futur", nuance: "retard anticipé",
        fr: "J'arriverai en retard demain.", en: "I will be late tomorrow.",
        de: "Ich werde morgen zu spät kommen.", es: "Llegaré tarde mañana." }
    ]
  },
  {
    id: "rencontre",
    concept: "Rencontrer quelqu'un",
    core: "faire la connaissance d'une personne — attention : conocer / kennenlernen changent de sens selon le temps",
    tenses: [
      { name: "présent", nuance: "faire connaissance aujourd'hui",
        fr: "Aujourd'hui je rencontre quelqu'un de nouveau.", en: "Today I'm meeting someone new.",
        de: "Heute lerne ich jemand Neuen kennen.", es: "Hoy conozco a alguien nuevo." },
      { name: "passé ponctuel", nuance: "première rencontre — moment précis",
        fr: "J'ai rencontré Maria à la fête.", en: "I met Maria at the party.",
        de: "Ich habe Maria auf der Party kennengelernt.", es: "Conocí a María en la fiesta." },
      { name: "imparfait / décor", nuance: "ici conocía = \"connaissais\", pas \"rencontrais\" — l'imparfait bascule du sens ponctuel vers l'état",
        fr: "Je connaissais beaucoup de gens à cette époque.", en: "I knew many people at that time.",
        de: "Ich kannte damals viele Leute.", es: "Conocía a mucha gente en aquella época." },
      { name: "futur", nuance: "rencontre à venir",
        fr: "Demain je rencontrerai ses parents.", en: "Tomorrow I will meet his parents.",
        de: "Morgen werde ich seine Eltern kennenlernen.", es: "Mañana conoceré a sus padres." }
    ]
  },
  {
    id: "langue",
    concept: "Apprendre une langue",
    core: "acquérir progressivement une compétence linguistique",
    tenses: [
      { name: "présent", nuance: "processus en cours",
        fr: "J'apprends l'espagnol.", en: "I'm learning Spanish.",
        de: "Ich lerne Spanisch.", es: "Aprendo español." },
      { name: "passé ponctuel", nuance: "période délimitée, bilan",
        fr: "J'ai beaucoup appris l'année dernière.", en: "I learned a lot last year.",
        de: "Ich habe letztes Jahr viel gelernt.", es: "Aprendí mucho el año pasado." },
      { name: "imparfait / décor", nuance: "apprentissage situé dans un cadre",
        fr: "J'apprenais le français à l'école.", en: "I used to learn French at school.",
        de: "Ich lernte Französisch in der Schule.", es: "Aprendía francés en el colegio." },
      { name: "futur", nuance: "projet d'apprentissage",
        fr: "J'apprendrai l'allemand l'année prochaine.", en: "I will learn German next year.",
        de: "Ich werde nächstes Jahr Deutsch lernen.", es: "Aprenderé alemán el próximo año." }
    ]
  },
  {
    id: "cafe",
    concept: "Prendre un café",
    core: "consommer une boisson chaude",
    tenses: [
      { name: "présent", nuance: "habitude",
        fr: "Je prends un café le matin.", en: "I have a coffee in the morning.",
        de: "Ich trinke morgens einen Kaffee.", es: "Tomo un café por la mañana." },
      { name: "passé ponctuel", nuance: "un café précis, bu",
        fr: "J'ai pris un café ce matin.", en: "I had a coffee this morning.",
        de: "Ich habe heute Morgen einen Kaffee getrunken.", es: "Tomé un café esta mañana." },
      { name: "imparfait / décor", nuance: "rituel",
        fr: "Je prenais un café chaque matin.", en: "I used to have a coffee every morning.",
        de: "Ich trank jeden Morgen einen Kaffee.", es: "Tomaba un café cada mañana." },
      { name: "futur", nuance: "à venir",
        fr: "Je prendrai un café plus tard.", en: "I will have a coffee later.",
        de: "Ich werde später einen Kaffee trinken.", es: "Tomaré un café más tarde." }
    ]
  },
  {
    id: "aide",
    concept: "Aider un ami",
    core: "apporter son soutien — attention : helfen + datif en allemand",
    tenses: [
      { name: "présent", nuance: "action actuelle",
        fr: "J'aide mon ami.", en: "I help my friend.",
        de: "Ich helfe meinem Freund.", es: "Ayudo a mi amigo." },
      { name: "passé ponctuel", nuance: "un coup de main précis",
        fr: "Je l'ai aidé hier.", en: "I helped him yesterday.",
        de: "Ich habe ihm gestern geholfen.", es: "Le ayudé ayer." },
      { name: "imparfait / décor", nuance: "habitude, disponibilité constante",
        fr: "Je l'aidais souvent.", en: "I used to help him often.",
        de: "Ich half ihm oft.", es: "Le ayudaba a menudo." },
      { name: "futur", nuance: "aide prévue",
        fr: "Je l'aiderai demain.", en: "I will help him tomorrow.",
        de: "Ich werde ihm morgen helfen.", es: "Le ayudaré mañana." }
    ]
  },
  {
    id: "maison",
    concept: "Rentrer à la maison",
    core: "revenir chez soi",
    tenses: [
      { name: "présent", nuance: "maintenant ou d'habitude",
        fr: "Je rentre à la maison.", en: "I'm going home.",
        de: "Ich komme nach Hause.", es: "Vuelvo a casa." },
      { name: "passé ponctuel", nuance: "un retour précis",
        fr: "Je suis rentré tard à la maison.", en: "I got home late.",
        de: "Ich bin spät nach Hause gekommen.", es: "Volví a casa tarde." },
      { name: "imparfait / décor", nuance: "habitude d'une époque",
        fr: "Je rentrais à pied.", en: "I used to walk home.",
        de: "Ich kam zu Fuß nach Hause.", es: "Volvía a casa a pie." },
      { name: "futur", nuance: "retour à venir",
        fr: "Je rentrerai bientôt.", en: "I will come home soon.",
        de: "Ich werde bald nach Hause kommen.", es: "Volveré a casa pronto." }
    ]
  }
];
