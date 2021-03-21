
/*INTRO==========================================*/
const Intro = {
    getTimeline() {
        const timeLine = gsap.timeline({defaults: {ease: "power1.out"}})

        timeLine.to('.intro-text', {y: "0%", duration: 1, stagger: 0.25}) 
        /*stagger= textos aparecem um após o outro*/
        timeLine.to(".slider", {y:"-100%", duration: 1.5, delay: 1})
        timeLine.to(".intro", {y:"-100%", duration: 1}, "-=1") /*1sec faster*/
        timeLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.5})
        timeLine.fromTo("h1", {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
    }
}

/*NAVBAR==========================================*/
const NavbarScroll = {
    getScrolling() {
        window.addEventListener("scroll", function(){
            const navbar = document.querySelector("nav")
            navbar.classList.toggle("sticky", window.scrollY > 0)
        })
    }
}


/*LANGUAGES==========================================*/
const Languages = {
    
    english: {
        intro01: "for taught self learners,",
        intro02: "for everyday",
        intro03: "challenge.",
        home: "Taught self is the fast way to learn",
        checkOut: "Check out our content below",
        article: "The Future of Education",
        article01: "Before enrolling a college or online course, we got to think what is the best method to learn X or Z.",
        article02: "Is the traditional Education the best option and what to say about online learning? In this blog I will run over through those questions and give my sincere opinion about it.",
        article03: "Traditional Education",
        article04: "More I think about learning, less I become excited about traditional learning, if you ask me it is about to follow one pattern, a routine and most of the time to be forced to learning things you are not interesting and much worse, it will not be necessary for your career at all.  It is a very expense investment and require you to move around to be where the class will take over consuming more of your time.",
        article05: "The strongest defend to traditional learning would be the network, programs and internships offered from those institutes who has the power to partnership with companies. Oh yeah but those benefices are not for every alumnus, the most the time just few students are including to it. No really, the main aspect I would pick from the traditional education is the structure, I say it because there are some subjects, career we must use expense equipment, and the easiest example is to study medicine, I would say it is almost impossible to buy it to have a private laboratory. Even tough partial online course would to the job!",
        article06: "Online Learning",
        article07: "It can be so powerful, all we need to achieve that is a routine, like we do on the traditional learning, yeah exactly to have a specific time to study, manage the time could be the main point you will fail to have a success experience with online course.",
        article08: "This kind of mind is what I like, in this point you push yourself for another level! Because you are starting a become the boss of your learning, managing your time and being more independent, in some online curses you got classes on video and even you may interact with the lecture. The cool thing is you are managing a bit your flexible timetable, paying much less and you still have some support of the institution.",
        article09: "Happiness is the key to happiness.",
        article10: "The focus here in the end the day is to achieve our goal as soon as possible, and all the methods of education as your pros and cons, and more than that those we change for each person who apply it. In the way to potential your education we got know ourselves well to do it with happiness because believe does not matter you love the subject or not, the true is, hard times will come. It can be to understand one concert or lack of time to study, you might be frustrated then and be happy in what we are doing will surpass any frustration, because each hard time will be just a good challenge!",
        article11: "Your Opinion",
    },
    portuguese: {
        intro01: "para autoditadas",
        intro02: "para todos os dias",
        intro03: "de desafios",
        home: "Auto-didata é a maneira mais rápida de aprender ",
        checkOut: "Confira nosso conteúdo abaixo",
        article: "O Futuro da Educação",
        article01: "Antes de matricular-nos em uma faculdade ou curso online, devemos pensar qual é o melhor método para aprender X ou Z. ",
        article02: "A educação tradicional é a melhor opção? e o que dizer sobre o aprendizado online? Neste blog irei repassar essas perguntas e dar minha opinião sincera a respeito.",
        article03: "Educação tradicional ",
        article04: "Mais eu penso em aprender, menos fico empolgado com o aprendizado tradicional, se você quer saber se trata de seguir um padrão, uma rotina e na maioria das vezes ser forçado a aprender coisas que você não esta interessado e muito pior, não será necessário para a sua carreira. É um investimento muito caro e exige que você se desloque para estar onde a aula ocorrerá consumindo mais do seu tempo.",
        article05: "A defesa mais forte para o aprendizado tradicional seria a rede de contatos, programas e estágios oferecidos por instituições que têm poder de parcerias com empresas. Ah, mas esses benefícios não são para todos os alunos, na maioria das vezes, apenas alguns alunos são incluídos. Não mesmo este são os motivos para se matricular nesses intitutos, o principal aspecto que eu pegaria da educação tradicional é a estrutura, digo isso porque tem algumas disciplinas, ou carreira que temos que usar equipamento de carissimos, e um exemplo mais fácil seria estudar medicina, eu diria que é quase impossível comprar um laboratório privado. Porém até mesmo um curso online parcial faria o trabalho! ",
        article06: "Curso Online",
        article07: "Pode ser tão poderoso, tudo o que precisamos para conseguir isso é uma rotina, como fazemos no aprendizado tradicional, sim, exatamente ter um horário específico para estudar, administrar o tempo pode ser o ponto primodial você ter uma experiência de sucesso com um curso online. ",
        article08: "Este tipo de mentalidade que gosto muito, neste ponto você se esforça e entra em um outro nível! Porque você está começando a se tornar o chefe do seu aprendizado, administrando seu tempo e sendo mais independente, em alguns cursos online você tem aulas em vídeo e até pode interagir com a palestra. O legal é que você está administrando um pouco melhor o seu horário que é mais flexível, pagando muito menos e ainda tem algum apoio da instituição.",
        article09: "A felicidade é a chave da felicidade.",
        article10: "O foco aqui no final das contas é atingir nosso objetivo o mais rápido possível, e todos os métodos de educação tem seus prós e contras, e mais do que isso tudo muda conforme cada pessoa cada um de nós temos nossas caracteristicas. No caminho para potencializar nossa educação precisamos conhece-nos bem para fazê-lo com alegria, pois acredite que não importa se você ama ou não o assunto, a verdade é que difículdades virão. Pode ser por não entender um concerto ou falta de tempo para estudar, você pode ficar frustrado então esta determinado e feliz no que estamos fazendo superará qualquer frustração, pois cada momento difícil será apenas um bom desafio para ser superado!",
        article11: "Sua opinião",
    },
    french: {
        intro01: "pour les apprenants autodidactes",
        intro02: "pour tous les jours",
        intro03: "défis",
        home: "L'auto-apprentissage est le moyen le plus rapide d'apprendre",
        checkOut: "Découvrez notre contenu ci-dessous ",
        article: "L'avenir de l'éducation ",
        article01: "Avant de s'inscrire à un collège ou à un cours en ligne, nous devons réfléchir à la meilleure méthode pour apprendre X ou Z. ",
        article02: "L'éducation traditionnelle est-elle la meilleure option? et que dire de l'apprentissage en ligne? Dans ce blog, je vais parcourir ces questions et donner mon opinion sincère à ce sujet.",
        article03: "Éducation traditionnelle",
        article04: "Plus je pense à l'apprentissage, moins je deviens enthousiasmé par l'apprentissage traditionnel, si vous me demandez qu'il est sur le point de suivre un modèle, une routine et la plupart du temps d'être obligé d'apprendre des choses que vous n'êtes pas intéressantes et bien pire, ce ne sera pas être nécessaire pour votre carrière du tout. C'est un investissement très coûteux et vous oblige à vous déplacer pour être là où la classe prendra le relais en dépensant plus de temps. ",
        article05: "La meilleure défense contre l'apprentissage traditionnel serait le réseau, les programmes et les stages offerts par les instituts qui ont le pouvoir de s'associer avec les entreprises. Oh oui, mais ces avantages ne sont pas pour tous les anciens élèves, la plupart du temps, seuls quelques étudiants y participent. Non vraiment, le principal aspect que je choisirais dans l'enseignement traditionnel est la structure, je le dis car il y a des matières, car il y a des carrières, il faut utiliser du matériel de dépense, et l'exemple le plus simple est d'étudier la médecine, je dirais qu'il est presque impossible de achetez-le pour avoir un laboratoire privé. Même une malédiction partielle en ligne difficile ferait l'affaire! ",
        article06: "Apprentissage en ligne ",
        article07: "Cela peut être si puissant, tout ce dont nous avons besoin pour y parvenir est une routine, comme nous le faisons sur l'apprentissage traditionnel, ouais exactement pour avoir un temps spécifique pour étudier, gérer le temps pourrait être le point principal que vous échouerez à avoir une expérience réussie avec malédiction en ligne. ",
        article08: "Ce genre d'esprit est ce que j'aime, dans ce point vous vous poussez pour un autre niveau! Parce que vous commencez à devenir le patron de votre apprentissage, à gérer votre temps et à être plus indépendant, dans certaines malédictions en ligne, vous avez des cours sur vidéo et même vous pouvez interagir avec la conférence. Ce qui est cool, c'est que vous gérez un peu votre emploi du temps flexible, que vous payez beaucoup moins et que vous bénéficiez toujours du soutien de l'institution.",
        article09: "Le bonheur est la clé du bonheur.",
        article10: "L'objectif ici en fin de compte est d'atteindre notre objectif le plus rapidement possible, et toutes les méthodes d'éducation comme vos avantages et inconvénients, et plus que celles que nous changeons pour chaque personne qui l'applique. Dans la manière de valoriser votre éducation, nous nous savons bien le faire avec bonheur parce que croire que peu importe que vous aimez le sujet ou non, le vrai est que des temps difficiles viendront. Cela peut être pour comprendre un concert ou le manque de temps pour étudier, vous pourriez alors être frustré et être heureux dans ce que nous faisons surpassera toute frustration, car chaque moment difficile sera juste un bon défi! ",
        article11: "Votre opinion ",
    },
    german: {
        intro01: "für unterrichtete Selbstlerner",
        intro02: "für jeden Tag",
        intro03: "Herausforderungen ",
        home: "Selbstunterricht ist der schnelle Weg zu lernen ",
        checkOut: "Schauen Sie sich unseren Inhalt unten an ",
        article: "Die Zukunft der Bildung ",
        article01: "Bevor wir uns für ein College oder einen Online-Kurs anmelden, müssen wir uns überlegen, was die beste Methode ist, um X oder Z zu lernen. ",
        article02: "Ist die traditionelle Bildung die beste Option? und was soll man über Online-Lernen sagen? In diesem Blog werde ich diese Fragen durchgehen und meine aufrichtige Meinung dazu abgeben. ",
        article03: "Traditionelle Bildung ",
        article04: "Mehr denke ich über das Lernen nach, weniger freue ich mich über das traditionelle Lernen. Wenn Sie mich fragen, ob es einem Muster folgen soll, einer Routine und die meiste Zeit gezwungen sein muss, Dinge zu lernen, die Sie nicht interessant und viel schlimmer sind, wird es nicht für Ihre Karriere überhaupt notwendig sein. Es ist eine sehr kostspielige Investition und erfordert, dass Sie sich bewegen, um dort zu sein, wo die Klasse mehr Zeit in Anspruch nimmt.",
        article05: "Die stärkste Verteidigung gegen traditionelles Lernen wäre das Netzwerk, die Programme und Praktika, die von den Instituten angeboten werden, die die Macht haben, mit Unternehmen zusammenzuarbeiten. Oh ja, aber diese Vorteile gelten nicht für jeden Alumnus, meistens nur für wenige Studenten. Nein wirklich, der Hauptaspekt, den ich aus der traditionellen Ausbildung auswählen würde, ist die Struktur, ich sage es, weil es einige Fächer gibt, Karriere, die wir mit Kostenausrüstung verbringen müssen, und das einfachste Beispiel ist, Medizin zu studieren, ich würde sagen, es ist fast unmöglich, dies zu tun Kaufen Sie es, um ein privates Labor zu haben. Sogar ein harter teilweiser Online-Fluch würde den Job treffen!",
        article06: "Online lernen",
        article07: "Es kann so mächtig sein, alles, was wir brauchen, um dies zu erreichen, ist eine Routine, wie wir es beim traditionellen Lernen tun. Ja, genau, um eine bestimmte Zeit zum Lernen zu haben und die Zeit zu verwalten, könnte der Hauptpunkt sein, an dem Sie keine Erfolgserfahrung haben werden mit Online-Fluch.",
        article08: "Diese Art von Geist gefällt mir, an diesem Punkt drängst du dich auf eine andere Ebene! Da Sie anfangen, der Chef Ihres Lernens zu werden, Ihre Zeit zu verwalten und unabhängiger zu sein, haben Sie in einigen Online-Flüchen Unterricht auf Video erhalten und können sogar mit der Vorlesung interagieren. Das Coole ist, dass Sie Ihren flexiblen Zeitplan ein wenig verwalten, viel weniger bezahlen und immer noch Unterstützung von der Institution haben.",
        article09: "Glück ist der Schlüssel zum Glück. ",
        article10: "Am Ende des Tages geht es hier darum, unser Ziel so schnell wie möglich zu erreichen und alle Methoden der Bildung als Ihre Vor- und Nachteile zu betrachten. Darüber hinaus ändern wir diese für jede Person, die sie anwendet. Auf dem Weg zu einer potenziellen Ausbildung haben wir uns gut kennengelernt, um dies mit Glück zu tun, denn glauben, dass es keine Rolle spielt, ob Sie das Thema lieben oder nicht, es ist wahr, es werden schwere Zeiten kommen. Es kann sein, ein Konzert zu verstehen oder Zeit zum Lernen zu haben. Dann sind Sie vielleicht frustriert und glücklich darüber, was wir tun, wird jede Frustration übertreffen, denn jede schwere Zeit wird nur eine gute Herausforderung sein! ",
        article11: "Deine Meinung",
    }
}

const Translate = {
    english() {
        if (window.location.hash) {
            if (window.location.hash === "#eng") {
                introduction.textContent = Languages.english.intro01
                everyday.textContent = Languages.english.intro02
                challenge.textContent = Languages.english.intro03
                slogan.textContent = Languages.english.home
                contentBtn.textContent = Languages.english.checkOut
                title.textContent = Languages.english.article
                subtitle.textContent = Languages.english.article01
                p01.textContent = Languages.english.article02
                te.textContent = Languages.english.article03
                p02.textContent = Languages.english.article04
                p03.textContent = Languages.english.article05
                ol.textContent = Languages.english.article06
                p04.textContent = Languages.english.article07
                p05.textContent = Languages.english.article08
                happiness.textContent = Languages.english.article09
                p06.textContent = Languages.english.article10
                opinion.textContent = Languages.english.article11
            }
            
        }
        
    },
    portuguese() {
        if (window.location.hash) {
            if (window.location.hash === "#por") {
                introduction.textContent = Languages.portuguese.intro01
                everyday.textContent = Languages.portuguese.intro02
                challenge.textContent = Languages.portuguese.intro03
                slogan.textContent = Languages.portuguese.home
                contentBtn.textContent = Languages.portuguese.checkOut
                title.textContent = Languages.portuguese.article
                subtitle.textContent = Languages.portuguese.article01
                p01.textContent = Languages.portuguese.article02
                te.textContent = Languages.portuguese.article03
                p02.textContent = Languages.portuguese.article04
                p03.textContent = Languages.portuguese.article05
                ol.textContent = Languages.portuguese.article06
                p04.textContent = Languages.portuguese.article07
                p05.textContent = Languages.portuguese.article08
                happiness.textContent = Languages.portuguese.article09
                p06.textContent = Languages.portuguese.article10
                opinion.textContent = Languages.portuguese.article11

                
            }
            
        }
        
    },
    french() {
        if (window.location.hash) {
            if (window.location.hash === "#fr") {
                introduction.textContent = Languages.french.intro01
                everyday.textContent = Languages.french.intro02
                challenge.textContent = Languages.french.intro03
                slogan.textContent = Languages.french.home
                contentBtn.textContent = Languages.french.checkOut
                title.textContent = Languages.french.article
                subtitle.textContent = Languages.french.article01
                p01.textContent = Languages.french.article02
                te.textContent = Languages.french.article03
                p02.textContent = Languages.french.article04
                p03.textContent = Languages.french.article05
                ol.textContent = Languages.french.article06
                p04.textContent = Languages.french.article07
                p05.textContent = Languages.french.article08
                happiness.textContent = Languages.french.article09
                p06.textContent = Languages.french.article10
                opinion.textContent = Languages.french.article11

                
            }
            
        }
        
    },
    german() {
        if (window.location.hash) {
            if (window.location.hash === "#de") {
                introduction.textContent = Languages.german.intro01
                everyday.textContent = Languages.german.intro02
                challenge.textContent = Languages.german.intro03
                slogan.textContent = Languages.german.home
                contentBtn.textContent = Languages.german.checkOut
                title.textContent = Languages.german.article
                subtitle.textContent = Languages.german.article01
                p01.textContent = Languages.german.article02
                te.textContent = Languages.german.article03
                p02.textContent = Languages.german.article04
                p03.textContent = Languages.german.article05
                ol.textContent = Languages.german.article06
                p04.textContent = Languages.german.article07
                p05.textContent = Languages.german.article08
                happiness.textContent = Languages.german.article09
                p06.textContent = Languages.german.article10
                opinion.textContent = Languages.german.article11
            }
            
        }
        
    },
    reload() {
        const translateReload = document.querySelectorAll("[data-reload]")
        translateReload.forEach(element => {
            element.addEventListener('click', () => {
                Translate.portuguese()
                Translate.french()
                Translate.german()
                Translate.english()

            })
        })
       
        
    }
}


const DataReload = {
    NewReload: document.querySelectorAll("[data-reload]"),
    onclickReload() {
        for (i = 0; i <= this.NewReload.length; i++) {
            this.NewReload[i].onclick = function() {
                location.reload()
            }
        }
    },
}


/*COMMENTS==========================================*/
const Comments = {
    nameInput: document.querySelector('#comments-name'),
    commentInput: document.querySelector('#comments-area'),
    commentButton: document.querySelector('#comment-btn'),
    commentList: document.querySelector('.comment-list'),
    getComment() {
        Comments.commentButton.addEventListener('click', Comments.addComment)
    },
    addComment(event) {
        event.preventDefault()
        const containerDiv = document.createElement("div")
        containerDiv.classList.add("comment")

        const newName = document.createElement('li')
        newName.classList.add("user-name")
        newName.innerText = 'Adonides'
        containerDiv.appendChild(newName)

        const newDate = document.createElement('li')
        newDate.classList.add("post-date")
        newDate.innerText = 'February 28th, 2021'
        containerDiv.appendChild(newDate)

        const newComment = document.createElement('li')
        newComment.classList.add("user-comment")
        newComment.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis incidunt sunt voluptate vitae ducimus fuga, quae numquam obcaecati veniam totam in eligendi, molestias vel veritatis minima accusamus.'
        containerDiv.appendChild(newComment)

        const btnReply = document.createElement('button')
        btnReply.classList.add("btn-reply")
        btnReply.innerText = 'REPLY'
        containerDiv.appendChild(btnReply)

        Comments.commentList.appendChild(containerDiv)
    }
}

const CaseStudy = {
    rendPage() {

        Intro.getTimeline()

        NavbarScroll.getScrolling()

        Comments.getComment()

        Translate.reload()
        Translate.portuguese()
        Translate.french()
        Translate.german()
        Translate.english()
        
    },
    
}


CaseStudy.rendPage()
