
const arrayOfQuotes = [
    {'author': '--Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
    },
    {'author': '--Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': '--Hannibal Lecter', 
     'quote': 'The Tragedy is not to die , But to be wasted'
    },
    {'author': '--Robert Frost', 
     'quote': 'In three words I can sum up everything I have learned about life: it goes on.'
    },
    {'author': '--Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': '--Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random =Math.floor(Math.random()*arrayOfQuotes.length);
    document.getElementById("random_quote").innerHTML= arrayOfQuotes[random].quote;
    document.getElementById("random_author").innerHTML= arrayOfQuotes[random].author;

    
}
