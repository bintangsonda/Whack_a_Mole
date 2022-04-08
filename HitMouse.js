const tanah=document.querySelectorAll('.tanah');
const mouse=document.querySelectorAll('.mouse');
const skorpapan=document.querySelector('.scoreBoard');
const pop= document.querySelector('#pop');
//ini smua variable yg akan digunakan berbeda beda
//pop buat efek suara
//skorpapan buat skor
//tanah dan mouse buat tanah dan tikus nya

let previousLand;
let finish; 
let skor; 

//untuk ngebuat angka random 
//random floor untuk pembulatan kebawah
function angkaRandom(tanah){
	const bintang= Math.floor(Math.random() * tanah.length);
	const randomAng = tanah[bintang];
	if (randomAng == previousLand){
		angkaRandom(tanah);
	}
	previousLand= randomAng;
	return randomAng;

}
//ini untuk lama waktu random tikus tersebut kluar masuk
//ada rumus untuk menentukan bilangan random dri berapa sampe berapa 
function randomTime(min, max){
	return Math.round(Math.random()*(max-min)+min); 
}

//fungsi untuk munculin tikus keluar
function showingupMouse(){
	const randomAng = angkaRandom(tanah);
	//ini durasi muncul dri 0.3 smpe 1.4 detik
	const randomW = randomTime(300, 1400);
	randomAng.classList.add('showup');

	//set time out buat ngilangin tikus yg udh muncul
	setTimeout(() => {
		randomAng.classList.remove('showup');
		if(!finish){
			showingupMouse();
		}
	}, 600);
	//ini 600 dalam milisecond muncul nya
}
//untuk mulai game nya dari skor 0 dan hanya sampai 10 detik gamenya
function mulai() {
	finish=false;
	skor=0;
	skorpapan.textContent = 0;
	showingupMouse();
	setTimeout(()=>{
		finish=true;
	}, 10000); 
	
}
//fungsi untuk pukul ke tikus biar ada skor
//nambah 1 angka tiap kena hit 
function hit(){
	skor++
	skorpapan.textContent = skor; 
	pop.play();
	this.parentNode.classList.remove('muncul');
}

//jadi klo di klik akan jalanin fungsi hit dan fungsi hit akan nambahin skor
mouse.forEach(bintang =>{
	bintang.addEventListener('click', hit);

});