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
  },
  {
    id: "lever",
    concept: "Se lever tôt",
    core: "sortir du lit — pronominal en FR/ES, séparable en DE (aufstehen)",
    tenses: [
      { name: "présent", nuance: "habitude ou ce matin",
        fr: "Je me lève tôt.", en: "I get up early.",
        de: "Ich stehe früh auf.", es: "Me levanto temprano." },
      { name: "passé ponctuel", nuance: "un matin précis",
        fr: "Je me suis levé tôt ce matin.", en: "I got up early this morning.",
        de: "Ich bin heute Morgen früh aufgestanden.", es: "Me levanté temprano esta mañana." },
      { name: "imparfait / décor", nuance: "habitude d'une époque",
        fr: "Je me levais tôt quand je travaillais.", en: "I used to get up early when I worked.",
        de: "Ich stand früh auf, als ich arbeitete.", es: "Me levantaba temprano cuando trabajaba." },
      { name: "futur", nuance: "matin à venir",
        fr: "Je me lèverai tôt demain.", en: "I will get up early tomorrow.",
        de: "Ich werde morgen früh aufstehen.", es: "Me levantaré temprano mañana." }
    ]
  },
  {
    id: "courir",
    concept: "Courir dans le parc",
    core: "se déplacer rapidement à pied",
    tenses: [
      { name: "présent", nuance: "action en cours ou habitude",
        fr: "Je cours dans le parc.", en: "I run in the park.",
        de: "Ich laufe im Park.", es: "Corro en el parque." },
      { name: "passé ponctuel", nuance: "une course précise",
        fr: "J'ai couru dans le parc ce matin.", en: "I ran in the park this morning.",
        de: "Ich bin heute Morgen im Park gelaufen.", es: "Corrí en el parque esta mañana." },
      { name: "imparfait / décor", nuance: "habitude passée",
        fr: "Je courais dans le parc chaque matin.", en: "I used to run in the park every morning.",
        de: "Ich lief jeden Morgen im Park.", es: "Corría en el parque cada mañana." },
      { name: "futur", nuance: "course prévue",
        fr: "Je courrai dans le parc demain.", en: "I will run in the park tomorrow.",
        de: "Ich werde morgen im Park laufen.", es: "Correré en el parque mañana." }
    ]
  },
  {
    id: "telephone",
    concept: "Téléphoner à sa mère",
    core: "communiquer à distance — anrufen séparable en DE, llamar en ES",
    tenses: [
      { name: "présent", nuance: "en train d'appeler ou habitude",
        fr: "J'appelle ma mère.", en: "I'm calling my mother.",
        de: "Ich rufe meine Mutter an.", es: "Llamo a mi madre." },
      { name: "passé ponctuel", nuance: "un appel précis",
        fr: "J'ai appelé ma mère hier soir.", en: "I called my mother last night.",
        de: "Ich habe meine Mutter gestern Abend angerufen.", es: "Llamé a mi madre anoche." },
      { name: "imparfait / décor", nuance: "habitude d'une époque",
        fr: "J'appelais ma mère tous les dimanches.", en: "I used to call my mother every Sunday.",
        de: "Ich rief meine Mutter jeden Sonntag an.", es: "Llamaba a mi madre todos los domingos." },
      { name: "futur", nuance: "appel prévu",
        fr: "J'appellerai ma mère demain.", en: "I will call my mother tomorrow.",
        de: "Ich werde meine Mutter morgen anrufen.", es: "Llamaré a mi madre mañana." }
    ]
  },
  {
    id: "train",
    concept: "Prendre le train",
    core: "utiliser le train comme moyen de transport",
    tenses: [
      { name: "présent", nuance: "projet imminent ou habitude",
        fr: "Je prends le train pour Paris.", en: "I'm taking the train to Paris.",
        de: "Ich nehme den Zug nach Paris.", es: "Tomo el tren a París." },
      { name: "passé ponctuel", nuance: "un voyage précis",
        fr: "J'ai pris le train ce matin.", en: "I took the train this morning.",
        de: "Ich habe heute Morgen den Zug genommen.", es: "Tomé el tren esta mañana." },
      { name: "imparfait / décor", nuance: "habitude de déplacement",
        fr: "Je prenais le train tous les jours.", en: "I used to take the train every day.",
        de: "Ich nahm jeden Tag den Zug.", es: "Tomaba el tren todos los días." },
      { name: "futur", nuance: "voyage prévu",
        fr: "Je prendrai le train demain.", en: "I will take the train tomorrow.",
        de: "Ich werde morgen den Zug nehmen.", es: "Tomaré el tren mañana." }
    ]
  },
  {
    id: "diner",
    concept: "Préparer le dîner",
    core: "cuisiner un repas du soir",
    tenses: [
      { name: "présent", nuance: "en train de cuisiner ou habitude",
        fr: "Je prépare le dîner.", en: "I'm making dinner.",
        de: "Ich koche das Abendessen.", es: "Preparo la cena." },
      { name: "passé ponctuel", nuance: "un repas précis, cuisiné",
        fr: "J'ai préparé le dîner hier.", en: "I made dinner yesterday.",
        de: "Ich habe gestern das Abendessen gekocht.", es: "Preparé la cena ayer." },
      { name: "imparfait / décor", nuance: "habitude d'autrefois",
        fr: "Je préparais le dîner pour toute la famille.", en: "I used to make dinner for the whole family.",
        de: "Ich kochte das Abendessen für die ganze Familie.", es: "Preparaba la cena para toda la familia." },
      { name: "futur", nuance: "repas à venir",
        fr: "Je préparerai le dîner ce soir.", en: "I will make dinner tonight.",
        de: "Ich werde heute Abend das Abendessen kochen.", es: "Prepararé la cena esta noche." }
    ]
  },
  {
    id: "eau",
    concept: "Boire de l'eau",
    core: "consommer un liquide",
    tenses: [
      { name: "présent", nuance: "habitude ou moment présent",
        fr: "Je bois de l'eau.", en: "I drink water.",
        de: "Ich trinke Wasser.", es: "Bebo agua." },
      { name: "passé ponctuel", nuance: "quantité précise, bue",
        fr: "J'ai bu beaucoup d'eau aujourd'hui.", en: "I drank a lot of water today.",
        de: "Ich habe heute viel Wasser getrunken.", es: "Bebí mucha agua hoy." },
      { name: "imparfait / décor", nuance: "action qui durait",
        fr: "Je buvais de l'eau toute la journée.", en: "I used to drink water all day.",
        de: "Ich trank den ganzen Tag Wasser.", es: "Bebía agua todo el día." },
      { name: "futur", nuance: "intention",
        fr: "Je boirai plus d'eau demain.", en: "I will drink more water tomorrow.",
        de: "Ich werde morgen mehr Wasser trinken.", es: "Beberé más agua mañana." }
    ]
  },
  {
    id: "pluie",
    concept: "Il pleut",
    core: "verbe impersonnel — 'il' en FR, 'it' en EN, 'es' en DE, aucun sujet en ES",
    tenses: [
      { name: "présent", nuance: "la pluie tombe maintenant",
        fr: "Il pleut.", en: "It's raining.",
        de: "Es regnet.", es: "Llueve." },
      { name: "passé ponctuel", nuance: "pluie ponctuelle, terminée",
        fr: "Il a plu toute la nuit.", en: "It rained all night.",
        de: "Es hat die ganze Nacht geregnet.", es: "Llovió toda la noche." },
      { name: "imparfait / décor", nuance: "pluie en toile de fond",
        fr: "Il pleuvait quand je suis sorti.", en: "It was raining when I went out.",
        de: "Es regnete, als ich rausging.", es: "Llovía cuando salí." },
      { name: "futur", nuance: "prévision",
        fr: "Il pleuvra demain.", en: "It will rain tomorrow.",
        de: "Es wird morgen regnen.", es: "Lloverá mañana." }
    ]
  },
  {
    id: "froid",
    concept: "Avoir froid",
    core: "quatre structures pour un même concept — FR/ES 'avoir/tener' + nom · EN 'be' + adj · DE datif impersonnel 'mir ist kalt'",
    tenses: [
      { name: "présent", nuance: "sensation actuelle",
        fr: "J'ai froid.", en: "I'm cold.",
        de: "Mir ist kalt.", es: "Tengo frío." },
      { name: "passé ponctuel", nuance: "moment précis de froid",
        fr: "J'ai eu froid hier soir.", en: "I was cold last night.",
        de: "Mir war gestern Abend kalt.", es: "Tuve frío anoche." },
      { name: "imparfait / décor", nuance: "état qui durait",
        fr: "J'avais froid tout l'hiver.", en: "I was cold all winter.",
        de: "Mir war den ganzen Winter kalt.", es: "Tenía frío todo el invierno." },
      { name: "futur", nuance: "en DE la construction bascule vers 'frieren' (verbe plein)",
        fr: "J'aurai froid demain.", en: "I will be cold tomorrow.",
        de: "Morgen werde ich frieren.", es: "Tendré frío mañana." }
    ]
  },
  {
    id: "cles",
    concept: "Trouver ses clés",
    core: "découvrir quelque chose qu'on cherchait",
    tenses: [
      { name: "présent", nuance: "moment de la découverte",
        fr: "Je trouve mes clés.", en: "I find my keys.",
        de: "Ich finde meine Schlüssel.", es: "Encuentro mis llaves." },
      { name: "passé ponctuel", nuance: "trouvaille précise",
        fr: "J'ai trouvé mes clés sous la table.", en: "I found my keys under the table.",
        de: "Ich habe meine Schlüssel unter dem Tisch gefunden.", es: "Encontré mis llaves debajo de la mesa." },
      { name: "imparfait / décor", nuance: "capacité qui durait",
        fr: "Je trouvais toujours mes clés au même endroit.", en: "I always used to find my keys in the same place.",
        de: "Ich fand meine Schlüssel immer am selben Ort.", es: "Siempre encontraba mis llaves en el mismo sitio." },
      { name: "futur", nuance: "anticipation",
        fr: "Je trouverai mes clés plus tard.", en: "I will find my keys later.",
        de: "Ich werde meine Schlüssel später finden.", es: "Encontraré mis llaves más tarde." }
    ]
  },
  {
    id: "perdre",
    concept: "Perdre son téléphone",
    core: "égarer quelque chose",
    tenses: [
      { name: "présent", nuance: "tendance habituelle",
        fr: "Je perds mon téléphone souvent.", en: "I lose my phone often.",
        de: "Ich verliere mein Handy oft.", es: "Pierdo mi teléfono a menudo." },
      { name: "passé ponctuel", nuance: "perte précise",
        fr: "J'ai perdu mon téléphone hier.", en: "I lost my phone yesterday.",
        de: "Ich habe gestern mein Handy verloren.", es: "Perdí mi teléfono ayer." },
      { name: "imparfait / décor", nuance: "tendance d'une époque",
        fr: "Je perdais toujours mes affaires quand j'étais enfant.", en: "I used to lose my things all the time as a child.",
        de: "Ich verlor immer meine Sachen, als ich ein Kind war.", es: "Siempre perdía mis cosas cuando era niño." },
      { name: "futur", nuance: "crainte ou prévision",
        fr: "Je perdrai encore mon téléphone un jour.", en: "I will lose my phone again one day.",
        de: "Ich werde mein Handy eines Tages wieder verlieren.", es: "Volveré a perder mi teléfono algún día." }
    ]
  },
  {
    id: "cadeau",
    concept: "Donner un cadeau",
    core: "offrir — datif du destinataire en DE (ihm, meinem Freund)",
    tenses: [
      { name: "présent", nuance: "don actuel ou habituel",
        fr: "Je donne un cadeau à mon ami.", en: "I give my friend a gift.",
        de: "Ich gebe meinem Freund ein Geschenk.", es: "Le doy un regalo a mi amigo." },
      { name: "passé ponctuel", nuance: "un cadeau précis, offert",
        fr: "Je lui ai donné un cadeau hier.", en: "I gave him a gift yesterday.",
        de: "Ich habe ihm gestern ein Geschenk gegeben.", es: "Le di un regalo ayer." },
      { name: "imparfait / décor", nuance: "habitude",
        fr: "Je lui donnais un cadeau chaque année.", en: "I used to give him a gift every year.",
        de: "Ich gab ihm jedes Jahr ein Geschenk.", es: "Le daba un regalo cada año." },
      { name: "futur", nuance: "cadeau prévu",
        fr: "Je lui donnerai un cadeau demain.", en: "I will give him a gift tomorrow.",
        de: "Ich werde ihm morgen ein Geschenk geben.", es: "Le daré un regalo mañana." }
    ]
  },
  {
    id: "demande",
    concept: "Demander de l'aide",
    core: "solliciter — DE 'bitten um' + acc., ES 'pedir' + objet direct",
    tenses: [
      { name: "présent", nuance: "requête actuelle",
        fr: "Je demande de l'aide.", en: "I ask for help.",
        de: "Ich bitte um Hilfe.", es: "Pido ayuda." },
      { name: "passé ponctuel", nuance: "une demande précise",
        fr: "J'ai demandé de l'aide à mon voisin.", en: "I asked my neighbor for help.",
        de: "Ich habe meinen Nachbarn um Hilfe gebeten.", es: "Pedí ayuda a mi vecino." },
      { name: "imparfait / décor", nuance: "habitude de solliciter",
        fr: "Je lui demandais de l'aide souvent.", en: "I used to ask him for help often.",
        de: "Ich bat ihn oft um Hilfe.", es: "Le pedía ayuda a menudo." },
      { name: "futur", nuance: "demande à venir",
        fr: "Je demanderai de l'aide demain.", en: "I will ask for help tomorrow.",
        de: "Ich werde morgen um Hilfe bitten.", es: "Pediré ayuda mañana." }
    ]
  },
  {
    id: "reponse",
    concept: "Répondre à une question",
    core: "donner une réponse — DE 'antworten auf' + acc., FR/ES préposition 'à/a'",
    tenses: [
      { name: "présent", nuance: "réaction actuelle",
        fr: "Je réponds à la question.", en: "I answer the question.",
        de: "Ich antworte auf die Frage.", es: "Respondo a la pregunta." },
      { name: "passé ponctuel", nuance: "une réponse précise, donnée",
        fr: "J'ai répondu à sa question.", en: "I answered his question.",
        de: "Ich habe auf seine Frage geantwortet.", es: "Respondí a su pregunta." },
      { name: "imparfait / décor", nuance: "manière habituelle de répondre",
        fr: "Je répondais toujours honnêtement.", en: "I always used to answer honestly.",
        de: "Ich antwortete immer ehrlich.", es: "Siempre respondía con honestidad." },
      { name: "futur", nuance: "réponse à venir",
        fr: "Je répondrai demain.", en: "I will answer tomorrow.",
        de: "Ich werde morgen antworten.", es: "Responderé mañana." }
    ]
  },
  {
    id: "penser",
    concept: "Penser à quelqu'un",
    core: "avoir quelqu'un en tête — prép. 'à' en FR, 'an' + acc. en DE, 'en' en ES, 'of' en EN",
    tenses: [
      { name: "présent", nuance: "pensée actuelle",
        fr: "Je pense à toi.", en: "I'm thinking of you.",
        de: "Ich denke an dich.", es: "Pienso en ti." },
      { name: "passé ponctuel", nuance: "moment précis de pensée",
        fr: "J'ai pensé à toi hier.", en: "I thought of you yesterday.",
        de: "Ich habe gestern an dich gedacht.", es: "Pensé en ti ayer." },
      { name: "imparfait / décor", nuance: "état mental qui durait",
        fr: "Je pensais à toi tous les jours.", en: "I used to think of you every day.",
        de: "Ich dachte jeden Tag an dich.", es: "Pensaba en ti todos los días." },
      { name: "futur", nuance: "projection",
        fr: "Je penserai à toi demain.", en: "I will think of you tomorrow.",
        de: "Ich werde morgen an dich denken.", es: "Pensaré en ti mañana." }
    ]
  },
  {
    id: "souvenir",
    concept: "Se souvenir de quelque chose",
    core: "avoir en mémoire — pronominal en FR/ES (me souviens / me acuerdo), DE 'sich erinnern an' + acc.",
    tenses: [
      { name: "présent", nuance: "accès mémoriel actuel",
        fr: "Je me souviens de cette chanson.", en: "I remember that song.",
        de: "Ich erinnere mich an dieses Lied.", es: "Me acuerdo de esa canción." },
      { name: "passé ponctuel", nuance: "moment où le souvenir est revenu",
        fr: "Je me suis souvenu de son nom hier.", en: "I remembered his name yesterday.",
        de: "Ich habe mich gestern an seinen Namen erinnert.", es: "Me acordé de su nombre ayer." },
      { name: "imparfait / décor", nuance: "capacité mémorielle qui durait",
        fr: "Je me souvenais de tout à cette époque.", en: "I used to remember everything back then.",
        de: "Ich erinnerte mich damals an alles.", es: "Me acordaba de todo en aquella época." },
      { name: "futur", nuance: "projection",
        fr: "Je m'en souviendrai longtemps.", en: "I will remember it for a long time.",
        de: "Ich werde mich lange daran erinnern.", es: "Me acordaré de eso por mucho tiempo." }
    ]
  },
  {
    id: "peur",
    concept: "Avoir peur du noir",
    core: "éprouver de la peur — FR/ES 'avoir/tener' + nom, EN 'be afraid of', DE 'Angst haben vor' + datif",
    tenses: [
      { name: "présent", nuance: "état actuel",
        fr: "J'ai peur du noir.", en: "I'm afraid of the dark.",
        de: "Ich habe Angst vor der Dunkelheit.", es: "Tengo miedo a la oscuridad." },
      { name: "passé ponctuel", nuance: "moment de peur ponctuel",
        fr: "J'ai eu peur quand j'ai entendu le bruit.", en: "I was scared when I heard the noise.",
        de: "Ich hatte Angst, als ich das Geräusch hörte.", es: "Tuve miedo cuando oí el ruido." },
      { name: "imparfait / décor", nuance: "état émotionnel d'une époque",
        fr: "J'avais peur du noir quand j'étais enfant.", en: "I used to be afraid of the dark as a child.",
        de: "Ich hatte Angst vor der Dunkelheit, als ich ein Kind war.", es: "Tenía miedo a la oscuridad cuando era niño." },
      { name: "futur", nuance: "anticipation",
        fr: "Je n'aurai pas peur demain.", en: "I won't be afraid tomorrow.",
        de: "Morgen werde ich keine Angst haben.", es: "No tendré miedo mañana." }
    ]
  },
  {
    id: "fatigue",
    concept: "Être fatigué",
    core: "manquer d'énergie — ES utilise 'estar' (état temporaire), pas 'ser'",
    tenses: [
      { name: "présent", nuance: "état actuel",
        fr: "Je suis fatigué.", en: "I'm tired.",
        de: "Ich bin müde.", es: "Estoy cansado." },
      { name: "passé ponctuel", nuance: "épisode de fatigue, délimité",
        fr: "J'ai été fatigué toute la journée.", en: "I was tired all day.",
        de: "Ich bin den ganzen Tag müde gewesen.", es: "Estuve cansado todo el día." },
      { name: "imparfait / décor", nuance: "état qui durait",
        fr: "J'étais fatigué quand je suis rentré.", en: "I was tired when I got home.",
        de: "Ich war müde, als ich nach Hause kam.", es: "Estaba cansado cuando llegué a casa." },
      { name: "futur", nuance: "anticipation",
        fr: "Je serai fatigué ce soir.", en: "I will be tired tonight.",
        de: "Ich werde heute Abend müde sein.", es: "Estaré cansado esta noche." }
    ]
  },
  {
    id: "voyage",
    concept: "Voyager à l'étranger",
    core: "se rendre dans un pays lointain",
    tenses: [
      { name: "présent", nuance: "habitude ou projet",
        fr: "Je voyage à l'étranger.", en: "I travel abroad.",
        de: "Ich reise ins Ausland.", es: "Viajo al extranjero." },
      { name: "passé ponctuel", nuance: "un voyage précis",
        fr: "J'ai voyagé en Italie l'année dernière.", en: "I traveled to Italy last year.",
        de: "Ich bin letztes Jahr nach Italien gereist.", es: "Viajé a Italia el año pasado." },
      { name: "imparfait / décor", nuance: "habitude d'une époque",
        fr: "Je voyageais beaucoup quand j'étais jeune.", en: "I used to travel a lot when I was young.",
        de: "Ich reiste viel, als ich jung war.", es: "Viajaba mucho cuando era joven." },
      { name: "futur", nuance: "projet",
        fr: "Je voyagerai en Asie l'année prochaine.", en: "I will travel to Asia next year.",
        de: "Ich werde nächstes Jahr nach Asien reisen.", es: "Viajaré a Asia el año que viene." }
    ]
  },
  {
    id: "nager",
    concept: "Apprendre à nager",
    core: "acquérir une compétence physique — 'apprendre à + inf.' en FR, 'lernen + inf.' en DE (sans 'zu')",
    tenses: [
      { name: "présent", nuance: "processus en cours",
        fr: "J'apprends à nager.", en: "I'm learning to swim.",
        de: "Ich lerne schwimmen.", es: "Aprendo a nadar." },
      { name: "passé ponctuel", nuance: "acquisition achevée",
        fr: "J'ai appris à nager à cinq ans.", en: "I learned to swim at five.",
        de: "Ich habe mit fünf Jahren schwimmen gelernt.", es: "Aprendí a nadar a los cinco años." },
      { name: "imparfait / décor", nuance: "apprentissage dans un cadre",
        fr: "J'apprenais à nager à la piscine municipale.", en: "I used to learn to swim at the public pool.",
        de: "Ich lernte schwimmen im städtischen Schwimmbad.", es: "Aprendía a nadar en la piscina municipal." },
      { name: "futur", nuance: "projet d'apprentissage",
        fr: "J'apprendrai à plonger l'été prochain.", en: "I will learn to dive next summer.",
        de: "Ich werde nächsten Sommer tauchen lernen.", es: "Aprenderé a bucear el próximo verano." }
    ]
  },
  {
    id: "rever",
    concept: "Rêver de quelque chose",
    core: "avoir un rêve — FR 'rêver de', DE 'träumen von' + datif, ES 'soñar con'",
    tenses: [
      { name: "présent", nuance: "rêve éveillé ou désir",
        fr: "Je rêve de voyager.", en: "I dream of traveling.",
        de: "Ich träume vom Reisen.", es: "Sueño con viajar." },
      { name: "passé ponctuel", nuance: "un rêve précis, fait",
        fr: "J'ai rêvé de toi hier soir.", en: "I dreamed of you last night.",
        de: "Ich habe gestern Abend von dir geträumt.", es: "Soñé contigo anoche." },
      { name: "imparfait / décor", nuance: "rêve récurrent ou aspiration d'enfance",
        fr: "Je rêvais d'être pilote.", en: "I used to dream of being a pilot.",
        de: "Ich träumte davon, Pilot zu werden.", es: "Soñaba con ser piloto." },
      { name: "futur", nuance: "projection",
        fr: "Je rêverai d'elle ce soir peut-être.", en: "Maybe I will dream of her tonight.",
        de: "Vielleicht werde ich heute Nacht von ihr träumen.", es: "Quizás sueñe con ella esta noche." }
    ]
  }
];
