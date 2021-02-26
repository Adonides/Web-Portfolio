
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
    }
}


CaseStudy.rendPage()