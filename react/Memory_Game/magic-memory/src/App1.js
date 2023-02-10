import React,{useState,useEffect} from 'react';
import './App.css';
import SingleCard from './components1/singleCard';

const cardImages = [
    {"src":"/img/helmet-1.png",match:false},
    {"src":"/img/potion-1.png",match:false},
    {"src":"/img/ring-1.png",match:false},
    {"src":"/img/scroll-1.png",match:false},
    {"src":"/img/shield-1.png",match:false},
    {"src":"/img/sword-1.png",match:false}
]

function App1() {
    
        const [cards,setCards] = useState([]);
        const [turns,setTurns] = useState(0);

        const [choiceOne,setChoiceOne] = useState(null);
        const [choiceTwo,setChoiceTwo] = useState(null);
        
        const  shuffleCards = () =>{
            const shuffledCards = [...cardImages,...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card,id:Math.random()} ));
            setCards(shuffledCards);
            setTurns(0);
            console.log(cards)

        }

        const handleChoice = (card) =>{
            choiceOne  ? setChoiceTwo(card):setChoiceOne(card);
        }

        useEffect(() =>{
            if(choiceOne && choiceTwo){
                if(choiceOne.src === choiceTwo.src){
                    setCards((prevCards) =>{
                        return prevCards.map((card) => {
                            if(card.src === choiceOne.src){
                                return {...card,match:true}
                            }
                            else{
                                return card
                            }
                        })
                    })
                    reset();
                }
                else{
                   setTimeout(() => reset(),1000)
                }
            }
        },[choiceOne,choiceTwo])
        

        const reset = () =>{
            setChoiceOne(null);
            setChoiceTwo(null);
            setTurns(turns => turns + 1)
        }

    return (
    <div className="App">
        <h1>Memory Game</h1>
        <button onClick={shuffleCards}>Start Game</button>
        <div className='card-grid'>
        {
            cards.map((card) =>(
                <SingleCard 
                key={card.id}
                card = {card}
                handleChoice = {handleChoice}
                flipped = {card === choiceOne || card === choiceTwo || card.match }
                />
            ))
        }
        </div>
        <h1>Your Turns {turns}</h1>
    </div>
  )
}

export default App1