import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDirectorsThunk } from "../../store/slices/directors.slice";
import 'boxicons'
import '../../../node_modules/boxicons/css/boxicons.css'

const Carrousel = () => {
    
    const {directors} = useSelector(state => state)
    const [topDirectors, setTopDirectors] = useState()
    const [moveSlide, setMoveSlide] = useState({transform: 'translateX(calc(-2/3 * 100%))'})
    const [moveInt, setMoveInt] = useState(0);


    const dispath = useDispatch()

    useEffect(()=> dispath(getDirectorsThunk()), [])
    
    useEffect(()=>{

        if(directors){

            const dire = []
            
            for(let i = 0; i < 3; i++){
                dire.push(directors[i])
            }
            setTopDirectors(dire)
        }

    }, [directors])

    const handlePreviws = () => {
        if(moveInt - 1 < 0) {
            setMoveInt(2)
        }else{
            setMoveInt(moveInt -1)
        }
           
    }

    
    const handleNex = () => {
        if(moveInt + 1 > 2) {
            setMoveInt(0)
        }else{
            setMoveInt(moveInt + 1)
        }
           
    }

    useEffect(()=> {

        

        const styles = {transform: `translateX(calc(-${moveInt}/3 * 100%))`}
        setMoveSlide(styles)

    }, [moveInt])

   

  return (
    <section className="carrousel">
      <article className="carrousel__inferior" style={moveSlide} >
        {/* one */}
        {
            topDirectors?.map(element => (
                <article key={element?.id} className="carrousel__container">
                {/* information  */}
                <article className="carrousel__information">
                  <h2>Director</h2>
      
                  <article className="carrousel__body">
                    <article className="carrousel__body-item">
                      <p>Name</p>
                      <p>{element?.firstName} {element?.lastName}</p>
                    </article>
                    <article className="carrousel__body-item">
                      <p>Nationality</p>
                      <p>{element?.nationality}</p>
                    </article>
                    <article className="carrousel__body-item">
                      <p>Birthday</p>
                      <p>{element?.birthday}</p>
                    </article>
                  </article>
                </article>
      
                {/* information image */}
                <article className="carrousel__image">
                    <img src={element?.image} alt="" />
                </article>
      
              </article>
            ))
        }

      </article>

      <article className="carrousel__back">
        <button onClick={handlePreviws}>
        <i className='bx bx-skip-previous'></i>
        </button>
      </article>
      <article className="carrousel__next">
      <button onClick={handleNex}>
      <i className='bx bx-skip-next'></i>
        </button>
      </article>

      <article className="carrousel__nave">
        <span onClick={()=> setMoveInt(0)} className={moveInt == 0 && "span__active"}></span>
        <span onClick={()=> setMoveInt(1)} className={moveInt == 1 && "span__active"}></span>
        <span onClick={()=> setMoveInt(2)} className={moveInt == 2 && "span__active"}></span>
      </article>
    </section>
  );
};

export default Carrousel;
