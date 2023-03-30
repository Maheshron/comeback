import { useEffect,useState } from "react";
import './App.css';

const cardImages = [
    {"src":"/img/helmet-1.png",match:false},
    {"src":"/img/potion-1.png",match:false},
    {"src":"/img/ring-1.png",match:false},
    {"src":"/img/scroll-1.png",match:false},
    {"src":"/img/shield-1.png",match:false},
    {"src":"/img/sword-1.png",match:false},
]

function App() {
    const [cards,setCards] = useState([]);
    const [turns,setTurns] = useState(0);

    const [choiceOne,setChoiceOne] = useState(null);
    const [choiceTwo,setChoiceTwo] = useState(null);

    const shuffleCards = () =>{
        const shuffledCards = [...cardImages,...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card,id:Math.random()}))
        setCards(shuffledCards,turns);
        setTurns(0)
    }

    const handleChoice =(card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if(choiceOne && choiceTwo){

            if(choiceOne.src === choiceTwo.src){
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            return {...card,match:true}
                        }
                        else{
                            return card;
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

    return(
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>
        </div>
    )
}