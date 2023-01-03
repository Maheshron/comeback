
let quotes = [
    {
        quote:"The journey of a thousand miles begins with one step.",
        person:"Lao Tzu"
    },
    {
        quote:"That which does not kill us makes us stronger.",
        person:"Friedrich Nietzsche"
    },
    {
        quote:"Life is what happens when you’re busy making other plans.",
        person:"John Lennon"
    },
    {
        quote:"When the going gets tough, the tough get going.",
        person:"Joe Kennedy",
    },
    {
        quote:"You must be the change you wish to see in the world.",
        person:"Mahatma Gandhi"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        person:"Mae West"
    },
    {
        quote:"Tough times never last but tough people do.",
        person:"Robert H. Schuller"
    },
    {
        quote:"Get busy living or get busy dying.",
        person:"Stephen King"
    },
    {
        quote:"Whether you think  you can or you think you can’t, you’re right.",
        person:"Henry Ford"
    },
    {
        quote:"Tis better to have loved and lost than to have never loved at all.",
        person:"Alrded Lord Tennyson"
    },



];

var quote = document.getElementById('quote');
var randomInteger = document.getElementById('random');
document.getElementById('dice').addEventListener("click",function(){
    var number = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[number].quote;
    randomInteger.textContent = number;


})