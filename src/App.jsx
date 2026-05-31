import { useState } from 'react'
import Home from './components/Home/Home'
import Incorrect from './components/Result/Incorrect'
import Correct from './components/Result/Correct'
import Gameover from './components/Gameover/Gameover'
import Gamescreen from './components/Gamescreen/Gamescreen'
const MOVIES = [
  {
    "id": 1,
    "movie_name": "Sholay",
    "release_year": 1975,
    "movie_image": "./images/sholay.JPG",
    "options": ["Zanjeer", "Don", "Sholay", "Deewaar"]
  },
  {
    "id": 2,
    "movie_name": "Dilwale Dulhania Le Jayenge",
    "release_year": 1995,
    "movie_image": "./images/ddlj.jpg",
    "options": ["My Name Is Khan", "Dilwale Dulhania Le Jayenge", "Veer-Zaara", "Om Shanti Om"]
  },
  {
    "id": 3,
    "movie_name": "Lagaan",
    "release_year": 2001,
    "movie_image": "./images/lagaan.jpg",
    "options": ["Lagaan", "Sarfarosh", "Dangal", "Dil Chahta Hai"]
  },
  {
    "id": 4,
    "movie_name": "3 Idiots",
    "release_year": 2009,
    "movie_image": "./images/3_idiots.jpg",
    "options": ["Dil Chahta Hai", "3 Idiots", "Sarfarosh", "Ghajini"]
  },
  {
    "id": 5,
    "movie_name": "Dangal",
    "release_year": 2016,
    "movie_image": "./images/dangal.webp",
    "options": ["Lagaan", "Dangal", "Dil Chahta Hai", "Sarfarosh"]
  },
  {
    "id": 6,
    "movie_name": "Gangs of Wasseypur",
    "release_year": 2012,
    "movie_image": "./images/gangs_of_wasseypur.jpg",
    "options": ["Special 26", "Aligarh", "Gangs of Wasseypur", "Satya"]
  },
  {
    "id": 7,
    "movie_name": "Hera Pheri",
    "release_year": 1976,
    "movie_image": "./images/hera_pheri.jpg",
    "options": ["Deewaar", "Hera Pheri", "Muqaddar Ka Sikandar", "Anand"]
  },
  {
    "id": 8,
    "movie_name": "Kabhi Khushi Kabhie Gham...",
    "release_year": 2001,
    "movie_image": "./images/k3g.jpg",
    "options": ["Om Shanti Om", "Kabhi Khushi Kabhie Gham...", "My Name Is Khan", "Veer-Zaara"]
  },
  {
    "id": 9,
    "movie_name": "Swades",
    "release_year": 2004,
    "movie_image": "./images/swades.jpg",
    "options": ["Veer-Zaara", "Pardes", "Swades", "My Name Is Khan"]
  },
  {
    "id": 10,
    "movie_name": "Chak De! India",
    "release_year": 2007,
    "movie_image": "./images/chak_de_india.avif",
    "options": ["Marry Kom", "Chak De! India", "Dangal", "ABCD"]
  },
  {
    "id": 11,
    "movie_name": "Taare Zameen Par",
    "release_year": 2007,
    "movie_image": "./images/taare_zameen_par.jpg",
    "options": ["Dil Chahta Hai", "Ghajini", "Taare Zameen Par", "Sarfarosh"]
  },
  {
    "id": 12,
    "movie_name": "Rang De Basanti",
    "release_year": 2006,
    "movie_image": "./images/rang_de_basanti.jpg",
    "options": ["Rang De Basanti", "Sarfarosh", "Dil Chahta Hai", "Ghajini"]
  },
  {
    "id": 13,
    "movie_name": "Zindagi Na Milegi Dobara",
    "release_year": 2011,
    "movie_image": "./images/znmd.jpg",
    "options": ["Krrish", "Zindagi Na Milegi Dobara", "War", "Dhoom 2"]
  },
  {
    "id": 14,
    "movie_name": "Kuch Kuch Hota Hai",
    "release_year": 1998,
    "movie_image": "./images/kuch_kuch_hota_hai.jpg",
    "options": ["Veer-Zaara", "My Name Is Khan", "Kuch Kuch Hota Hai", "Om Shanti Om"]
  },
  {
    "id": 15,
    "movie_name": "Yeh Jawaani Hai Deewani",
    "release_year": 2013,
    "movie_image": "./images/yjhd.jpg",
    "options": ["Rockstar", "Yeh Jawaani Hai Deewani", "Barfi!", "Sanju"]
  },
  {
    "id": 16,
    "movie_name": "PK",
    "release_year": 2014,
    "movie_image": "./images/pk.jpg",
    "options": ["Sarfarosh", "Ghajini", "PK", "Dil Chahta Hai"]
  },
  {
    "id": 17,
    "movie_name": "Bajrangi Bhaijaan",
    "release_year": 2015,
    "movie_image": "./images/bajrangi_bhaijaan.jpg",
    "options": ["Ek Tha Tiger", "Dabangg", "Bajrangi Bhaijaan", "Sultan"]
  },
  {
    "id": 18,
    "movie_name": "Chennai Express",
    "release_year": 2013,
    "movie_image": "./images/chennai_express.jpg",
    "options": ["Chennai Express", "Veer-Zaara", "Om Shanti Om", "My Name Is Khan"]
  },
  {
    "id": 19,
    "movie_name": "Gully Boy",
    "release_year": 2019,
    "movie_image": "./images/gully_boy.jpg",
    "options": ["Simmba", "Bajirao Mastani", "Gully Boy", "Padmaavat"]
  },
  {
    "id": 20,
    "movie_name": "Welcome",
    "release_year": 2007,
    "movie_image": "./images/welcome.jpg",
    "options": ["Rowdy Rathore", "Airlift", "Welcome", "Bhool Bhulaiyaa"]
  }
]


function App() {
  const [screen, setScreen] = useState("HOME");
  const [currentRound, setCurrentRound] = useState(0);
  const [movies, setMovies] = useState([]);
  const [score, setScore] = useState(0)

  const currentMovie = movies[currentRound];
  
  const startGame = () => {
    const shuffled = [...MOVIES].sort(()=>Math.random()-0.5).slice(0,10);
    setCurrentRound(0)
    setScore(0);
    setScreen("PLAYING")
    setMovies(shuffled)
  }
  const nextRound = () =>{
    if(currentRound +1 >= movies.length){
      setScreen("GAMEOVER")
      return;
    }
    setCurrentRound(i => i+1)
    setScreen("PLAYING")
  }
  const goHome = () =>{
    setScreen("HOME")
    setCurrentRound(0)
    setMovies([])
  }

  return (
    <div className='bg-[#000000] text-white h-screen flex justify-center items-center'>
      {movies.length}
      {screen === "HOME" && (
        <Home startGame ={startGame}/>
      )}
      {screen === "PLAYING" && (
        <Gamescreen score={score} setScore={setScore} currentMovie={currentMovie} currentRound={currentRound} setScreen = {setScreen}/>
      )}
      {screen === "INCORRECT" && (
        <Incorrect currentMovie={currentMovie} currentRound={currentRound} nextRound={nextRound}/>
      )}
      {screen === "CORRECT" && (
        <Correct currentMovie={currentMovie} currentRound={currentRound} nextRound={nextRound}/>
      )}
      {screen === "GAMEOVER" && (
        <Gameover score={score} startGame={startGame} goHome = {goHome}/>
      )}
    </div>
  )
}

export default App
