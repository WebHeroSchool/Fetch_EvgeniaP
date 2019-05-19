const body = document.body;
const name = document.getElementById('name');
const avatar = document.getElementById('avatar');
const bio = document.getElementById('bio');
const user = window.location.search.replace('?username=', '');
const url = 'https://api.github.com/users/' + user;
fetch(url)
	.then (res => res.json())
	.then (json => {
		if (json.message == 'Not Found') {
			const notFound = document.createElement('div');
			notFound.className = 'name';
			notFound.innerHTML= 'Информация о пользователе не доступна';
			body.replaceChild(notFound, name);
		} else {
			name.innerHTML=json.name;
			bio.innerHTML=json.bio;
			avatar.setAttribute('src', json.avatar_url);
			name.setAttribute('href', json.html_url);
			avatar.className='avatar_active';
		}
	});

