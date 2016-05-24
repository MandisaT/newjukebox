document.getElementById("play").addEventListener("click" , function(){
 jukebox.play();
})

///////////////

document.getElementById("pause").addEventListener("click" , function(){
	jukebox.pause();
});

///////////////////

document.getElementById("stop").addEventListener("click" , function(){
	jukebox.stop();
});

//////

function NewTrack (title , artist ,url){
	this.album = document.getElementById("album").value,
	this.artist= document.getElementById("artist").value, 
	this.url = document.getElementById("url").value
}

//////////////////////

function Album(title,artist,url){
	this.title = [];
	this.artist = [];
	this.url =   [];
	Jukebox.apply(this, arguments);
}

////////////////////////

var Jukebox = function() {
	var currentSong = 0;

	this.songs = [];
	var player = document.getElementById('song1')

	this.play= function(){
		document.getElementById('song1').play();	
	}

	this.pause = function(){
		document.getElementById('song1').pause();	
	}

	this.stop = function(){
		document.getElementById('song1').pause();	
		document.getElementById('song1').currentTime=0;	
	}

	this.preload = function(song){
		this.songs.push(song)
	}		

	this.addSong = function(song){
		NewTrack.apply(this, arguments)
		song = new NewTrack();
 		this.songs.push(song);


 		// this makes the newly added song play right meow
 		//pauses the player
 		player.pause();
 		//changes the source of the audio tag to the song we just added
 		player.setAttribute('src', this.songs[currentSong].url)

 		//plays the song!
 		player.play();
 		console.log(this.songs);
	}
//////////////no idea what this means 
	this.song = function(){
		document.getElementById(this.song[currentSong]).add 
	}
}
	
var jukebox = new Jukebox();
	

var song1 = new Album();



// 	$("#playsong").on("click" , function(){

// 		Jukebox.play()
// 	})document.getElementById("stop").addEventListener("click" , function(){

//   jukebox.stop();

// });
	





	// jukebox.push(song);






