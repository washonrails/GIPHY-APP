const APIkey = 'yH0ctsYW1VyvkLZ0GbUk4GZ4tO4OVWnd'
const baseUrl = 'https://api.giphy.com/'

const form = document.querySelector('form')
const out = document.querySelector('.out')

form.addEventListener('submit', async evt => {
	evt.preventDefault()

	const giphyName = evt.target.search.value
	
	const response = await fetch(`${baseUrl}v1/gifs/search?api_key=${APIkey}&limit=1&q=${giphyName}`)
	const { data } = await response.json()
	const [{ embed_url }] = data
	
	const newGif = document.createElement('iframe')
	Object.assign(newGif, {
		src: embed_url,
		width: 480,
		height: 480,
		frameBorder: 0

	})
	out.insertBefore(newGif, out.firstChild)
	
	form.reset()
})
