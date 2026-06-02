import { useState } from 'react'
import Home from './components/Home/Home'
import Incorrect from './components/Result/Incorrect'
import Correct from './components/Result/Correct'
import Gameover from './components/Gameover/Gameover'
import Gamescreen from './components/Gamescreen/Gamescreen'
import Background from './Background/Background'

const MOVIES = [
  {
    "id": 1,
    "movie_name": "Sholay",
    "release_year": 1975,
    "movie_image": "./images/sholay.JPG",
    "options": [
      "Zanjeer",
      "Don",
      "Sholay",
      "Deewaar"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmI1NTRmMWQtNDJlZC00MGIzLWEwYzctYTQwNTI2NWNjM2MwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 2,
    "movie_name": "Dilwale Dulhania Le Jayenge",
    "release_year": 1995,
    "movie_image": "./images/ddlj.jpg",
    "options": [
      "Chennai Express",
      "Dilwale Dulhania Le Jayenge",
      "Veer-Zaara",
      "Om Shanti Om"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDQyMDI4ZGMtYjI5MS00YTk1LTk3ZDgtZTA3MzQ5YWQ4Y2Q4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 3,
    "movie_name": "Lagaan",
    "release_year": 2001,
    "movie_image": "./images/lagaan.jpg",
    "options": [
      "Lagaan",
      "Sarfarosh",
      "Dangal",
      "Dil Chahta Hai"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2FmODM4OTktOTRjOS00ZTIzLWIzZjAtMDBhOGEzYThkNzMzXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 4,
    "movie_name": "3 Idiots",
    "release_year": 2009,
    "movie_image": "./images/3_idiots.jpg",
    "options": [
      "Dil Chahta Hai",
      "3 Idiots",
      "Sarfarosh",
      "Ghajini"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 5,
    "movie_name": "Dangal",
    "release_year": 2016,
    "movie_image": "./images/dangal.webp",
    "options": [
      "Lagaan",
      "Dangal",
      "Dil Chahta Hai",
      "Sarfarosh"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"
  },
  {
    "id": 6,
    "movie_name": "Gangs of Wasseypur",
    "release_year": 2012,
    "movie_image": "./images/gangs_of_wasseypur.jpg",
    "options": [
      "Special 26",
      "Aligarh",
      "Gangs of Wasseypur",
      "Kasam Paida Karne Wali Ki"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_SX300.jpg"
  },
  {
    "id": 7,
    "movie_name": "Hera Pheri",
    "release_year": 1976,
    "movie_image": "./images/hera_pheri.jpg",
    "options": [
      "Deewaar",
      "Hera Pheri",
      "Muqaddar Ka Sikandar",
      "Anand"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWM1ZTQwNjAtNGQzNC00YzYzLWFmMjQtZmJiZjUwZTcxMWU0XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 8,
    "movie_name": "Kabhi Khushi Kabhie Gham...",
    "release_year": 2001,
    "movie_image": "./images/k3g.jpg",
    "options": [
      "Om Shanti Om",
      "Kabhi Khushi Kabhie Gham...",
      "My Name Is Khan",
      "Veer-Zaara"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2MyZGVhNmMtY2JkNy00ZmIzLTkwOGItY2NiM2MyOGMxODkzXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 9,
    "movie_name": "Swades",
    "release_year": 2004,
    "movie_image": "./images/swades.jpg",
    "options": [
      "Veer-Zaara",
      "Pardes",
      "Swades",
      "My Name Is Khan"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWJlNmQ2NmQtM2U3Yi00MTZjLWI1YzktY2I2MmExMzgwNmE3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 10,
    "movie_name": "Chak De! India",
    "release_year": 2007,
    "movie_image": "./images/chak_de_india.avif",
    "options": [
      "Marry Kom",
      "Chak De! India",
      "Dangal",
      "ABCD"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjYyOTdmYTYtYjQ4Ni00ZmFiLWJlZjYtZmJkNDI5MmNlNjMyXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 11,
    "movie_name": "Taare Zameen Par",
    "release_year": 2007,
    "movie_image": "./images/taare_zameen_par.jpg",
    "options": [
      "Dil Chahta Hai",
      "3 Idiots",
      "Taare Zameen Par",
      "Sarfarosh"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzE4NmNmZGItYTUxOS00ZDRlLWI0NjktOTYxOWNlMDE1MzRiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 12,
    "movie_name": "Rang De Basanti",
    "release_year": 2006,
    "movie_image": "./images/rang_de_basanti.jpg",
    "options": [
      "Rang De Basanti",
      "Golmaal",
      "Dil Chahta Hai",
      "3 Idiots"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTJhZTdmODctZWY3Zi00MGI3LThiZDMtZWQ5ZjNkYzQyMTI3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 13,
    "movie_name": "Zindagi Na Milegi Dobara",
    "release_year": 2011,
    "movie_image": "./images/znmd.jpg",
    "options": [
      "Krrish",
      "Zindagi Na Milegi Dobara",
      "War",
      "Dhoom 2"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGIzYzg5NzItNDRkYS00NmIzLTk3NzQtZWYwY2VlZDhiYWQ4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 14,
    "movie_name": "Kuch Kuch Hota Hai",
    "release_year": 1998,
    "movie_image": "./images/kuch_kuch_hota_hai.jpg",
    "options": [
      "Veer-Zaara",
      "Chennai Express",
      "Kuch Kuch Hota Hai",
      "Om Shanti Om"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmQ0ZjliZTgtMjQ3NC00N2NiLTkxNjktY2VkOTQ2N2QyODNkXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 15,
    "movie_name": "Yeh Jawaani Hai Deewani",
    "release_year": 2013,
    "movie_image": "./images/yjhd.jpg",
    "options": [
      "Bachna Ae Haseeno",
      "Yeh Jawaani Hai Deewani",
      "Barfi!",
      "Tamasha"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_SX300.jpg"
  },
  {
    "id": 16,
    "movie_name": "PK",
    "release_year": 2014,
    "movie_image": "./images/pk.png",
    "options": [
      "Sarfarosh",
      "Rang De Basanti",
      "PK",
      "Dil Chahta Hai"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg"
  },
  {
    "id": 17,
    "movie_name": "Bajrangi Bhaijaan",
    "release_year": 2015,
    "movie_image": "./images/bajrangi_bhaijaan.jpg",
    "options": [
      "Ek Tha Tiger",
      "Dabangg",
      "Bajrangi Bhaijaan",
      "Sultan"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzVjMjZiNGUtZjZiNy00Yzg4LWEzYzYtMmI1NDg5NWNiNjUwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 18,
    "movie_name": "Chennai Express",
    "release_year": 2013,
    "movie_image": "./images/chennai_express.jpg",
    "options": [
      "Chennai Express",
      "Veer-Zaara",
      "Om Shanti Om",
      "DDLJ"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjE2OTEyOTA3OV5BMl5BanBnXkFtZTcwNjI4MDk3OQ@@._V1_SX300.jpg"
  },
  {
    "id": 19,
    "movie_name": "Gully Boy",
    "release_year": 2019,
    "movie_image": "./images/gully_boy.jpg",
    "options": [
      "Simmba",
      "Bajirao Mastani",
      "Gully Boy",
      "Padmaavat"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWFkY2M3NDctZGEzMS00M2VmLTgzMTAtZWFiNjVmZDc5NWFjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "id": 20,
    "movie_name": "Welcome",
    "release_year": 2007,
    "movie_image": "./images/welcome.jpg",
    "options": [
      "Welcome to Jungle",
      "Housefull",
      "Welcome",
      "Welcome 2"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzMwYmEzYTktY2M4YS00Y2I0LTk3ODMtYTY4NjU3YWJhMzM2XkEyXkFqcGc@._V1_SX300.jpg"
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
    <div className=' text-white h-screen flex justify-center items-center'>
      <Background/>
      <div>
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
    </div>
  )
}

export default App
