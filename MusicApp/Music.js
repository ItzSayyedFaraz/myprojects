const musicContainer=document.querySelector('.music-container');
const playBtn=document.querySelector("#play");
const prevBtn=document.querySelector("#prev");
const nextBtn=document.querySelector("#next");
const audio=document.querySelector("#audio");
const progress=document.querySelector(".progress");
const progressContainer=document.querySelector(".progress-container");
const title=document.querySelector("#title");
const cover=document.querySelector("#cover");
const range=document.querySelector("#range");
const mute=document.querySelector(".mute");

//Song titles
const songs=["01-Tumhi Ho","02-Amplifier","03-toh phir aao.mp3","04-zara sa.mp3"]

//keeping track of songs
let songIndex=0

//initially load songs
loadSong(songs[songIndex])

//Update song details
function loadSong(song){
    title.innerText=song;
    audio.src=`gaana/${song}.mp3`;
    cover.src=`images/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

function prevSong(){
    songIndex--
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    if(songIndex>songs.length-1){
        songIndex=0;
    }
    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e){
    // const {duration,currentTime}=audio; or
    const {duration,currentTime}=e.srcElement;
    
    // console.log(e.srcElement);
    const progressPercent=(currentTime/duration)*100;
    // console.log(progressPercent);
    progress.style.width=`${progressPercent}%`;
}

function setProgress(e){
   console.log(audio.duration);
    
const width=this.clientWidth
const clickX=e.offsetX;
const duration=audio.duration;
audio.currentTime=(clickX/width)*duration
}


//Event listener
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
}
)

audio.addEventListener('timeupdate',updateProgress)
audio.addEventListener('ended',nextSong)

progressContainer.addEventListener('click',setProgress)

//Change song Events
prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)

function vol(){
    // console.log(range.value);
    const set=range.value;
    audio.volume=set/100;
}
 function mut(){
    if(audio.volume==true){;
    // document.querySelector("yes").classList.remove("fa-regular")
    // document.querySelector("yes").classList.add("fa-solid")
    audio.volume=0
    document.querySelector("#volume").src="volumeOff.svg";
    }
    else{
        // audio.volume=;
        // document.querySelector("yes").classList.remove("fa-solid")
        // document.querySelector("yes").classList.add("fa-regular")
        audio.volume=1;
        document.querySelector("#volume").src="volumeOn.svg";
    }
    
 }


