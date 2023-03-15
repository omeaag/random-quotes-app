let button = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {quote:'"The way to get started is to quit talking and begin doing."', person:"Walt Disney"},
    {quote:'"Your time is limited, so dont waste it living someone else is life. Dont be trapped by dogma – which is living with the results of other people is thinking."', person:"Steve Jobs"},
    {quote:'"If life were predictable it would cease to be life, and be without flavor."', person:"Eleanor Roosevelt"},
    {quote:'"If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough."', person:"Oprah Winfrey"},
    {quote:'"If you set your goals ridiculously high and it is a failure, you will fail above everyone else is success."',person:"James Cameron"},
    {quote:'"Life is what happens when you are busy making other plans."', person:"John Lennon"},
    {quote:'"Spread love everywhere you go. Let no one ever come to you without leaving happier."', person:"Mother Teresa"},
    {quote:'"When you reach the end of your rope, tie a knot in it and hang on."', person:"Franklin D. Roosevelt"},
    {quote:'"Always remember that you are absolutely unique. Just like everyone else."', person:"Margaret Mead"},
    {quote:'"Dont judge each day by the harvest you reap but by the seeds that you plant."', person:"Robert Louis Stevenson"},
    {quote:'"It is during our darkest moments that we must focus to see the light."',person:"Aristotle"},
    {quote:'"Do not go where the path may lead, go instead where there is no path and leave a trail."', person:"Ralph Waldo Emerson"},
    {quote:'"Life is never fair, and perhaps it is a good thing for most of us that it is not."', person:"Oscar Wilde"},
    {quote:'"The only impossible journey is the one you never begin."', person:"Tony Robbins"},
    {quote:'"Only a life lived for others is a life worthwhile."', person:"Albert Einstein"},
    {quote:'"Go confidently in the direction of your dreams! Live the life you have imagined."' , person:"Henry David Thoreau"},
    {quote:'"Life is really simple, but we insist on making it complicated."', person:"Confucius"},
    {quote:'"Life itself is the most wonderful fairy tale."', person:"Hans Christian Andersen"}
];

button.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});