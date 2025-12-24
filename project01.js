const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');


const quotes = [
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        person: "Albert Einstein"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        person: "Steve Jobs"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        person: "Steve Jobs"
    },
    {
        quote: "Stay hungry, stay foolish.",
        person: "Steve Jobs"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        person: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."    
    },

    {
        quote: "Do not watch the clock. Do what it does. Keep going.",
        person: "Sam Levenson"
    },

    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },

    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },

    {
        quote: "Act as if what you do makes a difference. It does.",
        person: "William James"
    },

    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        person: "Zig Ziglar"
    }
];


btn.addEventListener('click', function(){

    const random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})