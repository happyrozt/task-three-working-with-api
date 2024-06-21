import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Loader from '../Loader/Loader';
import { getJsonData } from '../ApiRequest/ApiService';
import './card.css'
export default function Card({ page }) {

    return (
        <div className='contentContainer'>

            {page.map(character => (
                <div key={character.id} className='characterCard'>
                    <img src={character.image} alt={character.name} className='characterImage' />
                    <div className='characterDetails'>
                        <h2 onClick={() => getJsonData(`character/${character.id}`)}>{character.name}</h2>

                        {character.status === "Alive" ? (
                            <div className='aliveDiv'>
                                <div className='status'></div>
                                <div>{character.status} - {character.species}</div>
                            </div>
                        ) : (
                            <div className='aliveDiv'>
                                <div className='status2'></div>
                                <div>{character.status} - {character.species}</div>
                            </div>
                        )}

                        <div>
                            <div className='locationLevel'>Last known location</div>
                            <div className='location' onClick={() => getJsonData(`location/${character.id}`)}>
                                {character.location.name}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
