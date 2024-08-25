function bio(len){
    if (len === 'short'){
        $('.about-me').html(`<p>Hello there, my name is SyntaxError52.<br>
        I love Coding, History, and Gaming.<br>
        I hope you like this website</p>`)
    } else if (len === 'long'){
        $('.about-me').html(`<p>Hello there! My name is SyntaxError52, and I’m thrilled to be a part of this online community.<br>
        I’m a passionate coder, history enthusiast, and avid gamer. I’ve been coding for a year and have a particular interest<br>
        in python and web development. History has always fascinated me, especially anchient history and anthropology.<br> 
        As for gaming, I love Assassin's Creed, Fortnite, and Minecraft. I hope you find this website informative, engaging,<br>
        and enjoyable. Feel free to reach out if you have any questions or would like to chat!</p>`)
    };
};

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

document.querySelector('h1').onmouseover = event => {
    let iterations = 0;

    const interval = setInterval( () => {
        event.target.innerText = event.target.innerText.split('')
        .map((letter, index) => {
            if (index < iterations) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]
        }).join('');

        if (iterations > 12) {clearInterval(interval)};
        
        iterations++;
    }, 30)
};