import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {HeroStatsContext} from '../context/Heroescontext';

export default function HeroSearch(){
	const [search, setSearch] = useState();
	const {searchByName} = useContext(HeroStatsContext);

	useEffect(()=>{
		setSearch();
	}, [search])

	return (
		<div>
			<input type="text" placeholder="Search Hero" value={search} onChange={(e)=> setSearch(e.target.value)}/>
			<button onClick={()=> searchByName(search)}>Search</button>
		</div>
	)
}