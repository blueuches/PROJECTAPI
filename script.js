const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8013101efmsh34bba0bee0dded3p17ea41jsn63cf5df15f5b',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function getQuote(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    //console.log(result.content); //wala ni apil
    document.getElementById('quote').innerHTML = '"'+result.content+'"';
    document.getElementById('author').innerHTML = '- ' + result.originator.name + ' -';
} catch (error) {
	console.error(error);
}
}

getQuote();

document.getElementById('refresh-btn').addEventListener('click',getQuote);
