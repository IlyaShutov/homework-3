let all = ['строка', 3,1,2];

let words = all[0].split(' ');

for(let i = 0; i <= words.length; i++){
	let time = all[i+1]*1000;
	let word = words[i]

	setTimeout(()=> {
		console.log(word);
	}, time);
		
	};
