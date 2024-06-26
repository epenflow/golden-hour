type Biodata = {
	nickname: string;
	fullName: string;
	address: string;
	fatherName: string;
	motherName: string;
	familyOrder: string;
};
const GROOM_BIODATA: Biodata = {
	nickname: 'Ngurah',
	fullName: 'ngurah diva merta yoga',
	address: 'banjar nyuh, nusa penida, klungkung, bali',
	fatherName: 'i made arsa artika',
	motherName: 'ni made warsiki',
	familyOrder: 'Putra pertama',
};
const BRIDE_BIODATA: Biodata = {
	nickname: 'Ayu',
	fullName: 'ayu purnama ningsih S.M',
	address: 'dusun gaga, tamanbali, bangli (griya nataran tamanbali)',
	motherName: 'ida pandita mpu stri wiradnyanananda',
	fatherName: 'ida pandita mpu wiradnyanananda',
	familyOrder: 'Putri pertama',
};
type PREPOSITION = {
	date: string;
	time: string;
	address: string;
	addressLink: string;
};
const PREPOSITION: PREPOSITION = {
	time: 'Pukul : 10.00 WITA - Selesai',
	date: 'sabtu, 25 juni 2024',
	addressLink:
		'https://www.google.com/maps/place/Dava+Villa+Ocean+View/@-8.6837996,115.4861449,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd2726fcc53cb1b:0x8cfe9bfe33728928!8m2!3d-8.6837996!4d115.4861449!16s%2Fg%2F11g03mgqtl?entry=ttu',
	address:
		'Bertempat di Toyapakeh, Nusa Penida, Klungkung, Bali (Dava Villa Ocean View)',
};
export { GROOM_BIODATA, BRIDE_BIODATA, PREPOSITION };
