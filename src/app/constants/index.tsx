type Biodata = {
	nickname: string;
	fullName: string;
	address: string;
	fatherName: string;
	motherName: string;
	familyOrder: string;
};
const GROOM_BIODATA: Biodata = {
	nickname: 'wegen',
	fullName: 'I Gede Putu Wegen Wismaya',
	address: 'br. dukuh, desa sibetan, bebandem karangasem',
	fatherName: 'i nyoman windra',
	motherName: 'ni wayan wilatri',
	familyOrder: 'Anak pertama',
};
const BRIDE_BIODATA: Biodata = {
	nickname: 'devayu',
	fullName: 'putu devayu athareztta',
	address: 'br. dukuh, desa sibetan, bebandem, karangasem',
	motherName: 'dewa ayu putu tirtha',
	fatherName: 'i made suparyana',
	familyOrder: 'Anak kedua',
};
type PREPOSITION = {
	date: string;
	time: string;
	address: string;
	addressLink: string;
};
const PREPOSITION: PREPOSITION = {
	time: 'Pukul : 11.30 WITA - Selesai',
	date: 'kamis, 10 mei 2024',
	addressLink: '#',
	address: 'Bertempat di Br. Dajan Peken, Desa Timpag, Kerambitan, Tabanan',
};
export { GROOM_BIODATA, BRIDE_BIODATA, PREPOSITION };
