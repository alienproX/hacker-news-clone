function isEmpty (data) {
	if(data === undefined || !Object.keys(data).length ){
		return true
	}
	return false
}

function socialTime (date, full) {
	if (!date)
		return
	if (full) {
		let time = new Date(date * 1000)
		return time.getFullYear() + '-' + two(time.getMonth() + 1) + '-' + two(time.getDate()) + ' ' + two(time.getHours()) + ':' + two(time.getMinutes()) + ':' + two(time.getSeconds())
	}
	let seconds = Math.floor(((new Date().getTime() / 1000) - date)),
	interval = Math.floor(seconds / 31536000)
	if (interval > 1)
		return interval + " years ago"

	interval = Math.floor(seconds / 2592000)
	if (interval > 1)
		return interval + " mons ago"

	interval = Math.floor(seconds / 86400)
	if (interval >= 1)
		return interval + " days ago"

	interval = Math.floor(seconds / 3600)
	if (interval >= 1)
		return interval + " hrs ago"

	interval = Math.floor(seconds / 60)
	if (interval >= 1)
		return interval + " mins ago"

	return Math.floor(seconds) + " secs ago"
}

function getHost(url){
	let link = document.createElement("a")
	link.href = url
	return link.hostname
}

module.exports = { isEmpty,socialTime ,getHost}
