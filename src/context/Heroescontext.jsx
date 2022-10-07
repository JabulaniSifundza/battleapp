import {createContext, useState, useEffect} from 'react';
import Heroes from '../apis/Heroes';

export const HeroStatsContext = createContext();

export const HeroesContextProvider = ({children})=>{


const searchByName = async (name) =>{
	
	const response = await Heroes.get(`/characters`,{
		params: {
			name: `${name}`
		}
	})
	const data = response;
	console.log(data);
	
}

return <HeroStatsContext.Provider value={{searchByName}}>
{children}
</HeroStatsContext.Provider>

}