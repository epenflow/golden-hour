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
	motherName: 'ida pandita mpu wiradnyanananda',
	fatherName: 'ida pandita mpu stri wiradnyanananda ',
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
	addressLink: '#',
	address:
		'Bertempat di Toyapakeh, Nusa Penida, Klungkung, Bali (Dava Villa Ocean View)',
};
export { GROOM_BIODATA, BRIDE_BIODATA, PREPOSITION };
