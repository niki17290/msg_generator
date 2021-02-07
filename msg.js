let randomNumbers = num => {
	return Math.floor(Math.random()* num);
};
const msg = {
	sign:['star','sun','moon','earth','neptune'],
	fortune:['Good Luck','Good Day','Great Future','Good Luck','Good Day'],
	advice: ['stay safe','stay healthy','stay happy','stay cool','stay calm']
}
let output = [];
for(let a in msg){
	let index = randomNumbers(msg[a].length);
	
     
    switch(a) {
      case 'sign':
        output.push(`Your sign is "${msg[a][index]}".`);
        break
      case 'fortune':
        output.push(`You will have a "${msg[a][index]}".`);
        break
      case 'advice':
        output.push(`Enjoy to "${msg[a][index]}".`);
        break
      default:
        output.push('There is not enough info.')
    }
}
let formatWisdom = wisdom => {
    
    const formatted = wisdom.join('\n')
    console.log(formatted)
  };
  
  formatWisdom(output);