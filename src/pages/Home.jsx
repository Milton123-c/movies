import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import '../styles/carrousel.css'
import Carrousel from '../components/carrousel/Carrousel'
import { useSelector } from 'react-redux'
import HomeComponent from '../components/home/HomeComponent'
import CarrouselMovies from '../components/carrousel/CarrouselMovies'


const Home = () => {
    
    const { movies, genres } = useSelector(state => state);
    const [moviesFiltered, setMoviesFiltered] = useState([]);

    //top movies 
    const [topMovies, setTopMovies] = useState()

  


    useEffect(() => setMoviesFiltered(movies), [movies]);

    useEffect(()=>{
        
        if(movies){
             
            const images = [movies[1],movies[5],movies[6]]
            setTopMovies(movies)
            
        }

    }, [movies])
  return (
    <section className='home__container'>
        
        <article className="home__carrousel">
            
             <CarrouselMovies  />
        
        </article>

        <article className='home__movies'>
            <HomeComponent />
        </article>

    </section>
  )
}

export default Home