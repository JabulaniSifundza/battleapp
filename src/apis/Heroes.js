import axios from 'axios';



export default axios.create({
	baseURL: "https://gateway.marvel.com:443/v1/public/",
	params: {
		apikey: 'b835727d095e2f8cf6f9c7e0c028c46f',
	}
})


