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
    },

    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },

    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },

    {
        quote: "Everything you've ever wanted is on the other side of fear.",
        person: "George Addair"
    },

    {
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",     
        person: "C.S. Lewis"
    }, 

    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        person: "Christian D. Larson"
    },

    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "Sam Levenson"
    },


    {
        quote: "The only way to do great work is to love what you do.",

        person: "Steve Jobs"
    },

    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau"
    },

    {
        quote: "Opportunities don't happen. You create them.",
        person: "Chris Grosser"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        person: "John D. Rockefeller"
    },

    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        person: "Thomas Jefferson"
    }, 

    {
        quote: "Success is not in what you have, but who you are.",
        person: "Bo Bennett"
    },

    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        person: "Colin R. Davis"
    },


    {
        quote: "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.",
        person: "Zig Ziglar"
    }




];


btn.addEventListener('click', function(){

    const random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})