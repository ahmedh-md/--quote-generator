//DOM
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


//Functions
function newQuote() {
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];

  //Quote Text
  quoteText.textContent = quote.text;

  //Quote Author
  if (quote.author === null) {
    quoteAuthor.textContent = 'Unknown...';
  } else {
    quoteAuthor.textContent = quote.author;
  }
  // console.log(quote)
};

function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterURL, '_blank');
};


// Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


//On Loading Browser
newQuote();