// const window = {
// 	width: 1080,
// 	height: 780,
// 	localStorage: function(arg1, arg2){ ... }
// }

window.localStorage.setItem('userName', 'Mike')


const userName = window.localStorage.getItem('userName');

document.getElementById('userName').innerHTML = userName;