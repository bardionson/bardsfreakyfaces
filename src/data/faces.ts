export interface Face {
  id: string;
  name: string;
  file?: string;     // local image in /public/images/
  poster?: string;   // external thumbnail URL (for animated NFTs)
  video?: string;    // external MP4 URL (for animated NFTs)
  series?: string;
  opensea?: string;
}

const BASE = 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/';
const COL = 'https://opensea.io/collection/bards-freaky-faces?search[query]=';

export const faces: Face[] = [
  { id: 'g1a',  name: 'Freddy Freaky Face',           file: 'g1-FreakyFreddy.jpeg',               opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296121013361704961` },
  { id: 'g1b',  name: 'Sally is that you?',              file: 'g1-crooked3.jpg',                     opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296125411408216065` },
  { id: 'g2a',  name: 'Freaky Alien Face',              file: 'g2freakyAlien.jpg',                   opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296128709943099393` },
  { id: 'g2b',  name: 'Tristen Triclops',              file: 'g2freakyAliensteg.jpeg',              opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296122112873332737` },
  { id: 'g3',   name: 'Clyde the Cyclops',             file: 'g3-blinded-cyclopssteg.jpg',          opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296123212384960513` },
  { id: 'g4',   name: 'Gritty Freaky Face',            file: 'g4-grittyBigEarsteg.jpg',             opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296124311896588289` },
  { id: 'g5',   name: 'Sally is that you?',            file: 'g5-Sallysteg.jpeg',                   opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296125411408216065` },
  { id: 'g6',   name: 'Cyclops Mary',                  file: 'g6-mary-cyclopse2steg.jpg',           opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296126510919843841` },
  { id: 'g7',   name: 'Freaky Face 7',                 file: 'g7-cyclopseTwoMouthsteg.jpg',         opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296127610431471617` },
  { id: 'g8',   name: 'Freaky Alien Face',             file: 'g8-alienMoreEyesteg.jpg',             opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296128709943099393` },
  { id: 'g9',   name: 'Freaky Max',                    file: 'g9-max.jpg',                          opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296129809454727169` },
  { id: 'g10',  name: 'Charon the Cyclops',            file: 'g10-cyclops2mouth.jpg',               opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296130908966354945` },
  { id: 'g11',  name: 'Freaky Face 11',                file: 'g11-alien-threeEyes.jpg',             opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296132008477982721` },
  { id: 'g12',  name: 'Freaky Face 12',                file: 'g12-cyclops2mouth.jpg',               opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296133107989610497` },
  { id: 'g13',  name: 'Singer of Hope',                file: 'g13-singerOfHope.jpg',                opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296134207501238273` },
  { id: 'g14',  name: 'Freaky Faces 14',               file: 'g14-threeEyesRedLips.jpg',            opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296135307012866049` },
  { id: 'g15',  name: 'Freaky Faces 15',               file: 'g15-flatHead.jpg',                    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296136406524493825` },
  { id: 'g16',  name: 'All Seeing Eye',                file: 'g16-cyclopsAlienRedEye.jpg',          opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296137506036121601` },
  { id: 'g17',  name: "Bard's Freaky Face 17",         file: 'g17-cyclopseTwoMouthLongHair.jpg',    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296138605547749377` },
  { id: 'g18',  name: "Bard's Freaky Face 18",         file: 'g18-alienNoEye.jpg',                  opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296139705059377153` },
  { id: 'g19',  name: 'Freaky Face 19',                file: 'g19-SPADE-FACE-cyclopse3.jpeg.jpg',   opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296140804571004929` },
  { id: 'g20',  name: 'I See You',                     file: 'g20-threeEyesYellow.jpg',             opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296141904082632705` },
  { id: 'g21',  name: 'Singer',                        file: 'g21-freaky-face.jpg',                 opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296143003594260481` },
  { id: 'g22',  name: 'Three Eyed Eagle',              file: 'g22-alienThreeEyeEagle.jpg',          opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296144103105888257` },
  { id: 'g23',  name: 'One Eye Joe',                   file: 'g23-oneEyeJoe.jpg',                   opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296145202617516033` },
  { id: 'g24',  name: 'Zombie',                        file: 'g24-crooked.jpg',                     opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296146302129143809` },
  { id: 'g25',  name: 'Freaky Face 25',                file: 'g25-cyclopseTwoMouth3.jpg',           opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296147401640771585` },
  { id: 'g26',  name: 'Freaky Face 26',                file: 'g26-manafortTruth.jpg',               opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296148501152399361` },
  { id: 'g27',  name: 'Talos',                         file: 'g27-talos.jpg',                       opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296149600664027137` },
  { id: 'g28',  name: 'Freaky Faces 28',               file: 'g28-Freakyamerican.jpg',              opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296150700175654913` },
  { id: 'g29',  name: 'Nudes At The Beach',            file: 'g29-nudesBeach.jpg',                  opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296151799687282689` },
  { id: 'g30',  name: 'Freaky Faces 30',               file: 'g30-cyclopseTwoMouthLongHair4.jpg',   opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296152899198910465` },
  { id: 'g31',  name: 'Freaky Faces 31',               file: 'g31-alienEyeHole.jpg',                opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296153998710538241` },
  { id: 'g32',  name: 'Freaky Faces 32',               file: 'g32-alienOneEye.jpg',                 opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296155098222166017` },
  { id: 'g33',  name: 'Sally Says MmM',                file: 'g33-crooked4.jpg',                    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296156197733793793` },
  { id: 'g34',  name: 'Alien Teleport',                file: 'g34-alienThreeEye.jpg',               opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296157297245421569` },
  { id: 'g35',  name: 'Cy The Actor',                  file: 'g35-coolcyclopseClosedMouth.jpg',     opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296158396757049345` },
  { id: 'g36',  name: 'Cy The Actor II',               file: 'g36-cy-actor.jpg',                    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296159496268677121` },
  { id: 'g37',  name: 'Sally Thinks',                  file: 'g37-sally-crooked5.jpg',              opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296160595780304897` },
  { id: 'g38',  name: 'Sally',                         file: 'g38-sallyAgain.jpg',                  opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296161695291932673` },
  { id: 'g39',  name: 'Dr. Greenleaf',                 file: 'g39-cyclopseTwoMouth2.jpg',           opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296162794803560449` },
  { id: 'g40',  name: 'Freaky Face 40',                file: 'g40-cyclopseTwoMouthLongHair.jpg',    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296163894315188225` },
  { id: 'g41',  name: 'Zip It Sally',                  file: 'g41-zipItSally.jpg',                  opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296164993826816001` },
  { id: 'g42',  name: 'Rockstar',                      file: 'g42-rockstar.jpg',                    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296166093338443777` },
  { id: 'g43',  name: 'Style',                         file: 'g43-style.jpg',                       opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296167192850071553` },
  {
    id: 'g44', name: 'Sally Speaks to the Art Critics',
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/1936c78f24b128e823f9c7af5b9849/971936c78f24b128e823f9c7af5b9849.jpeg',
    video:  'https://raw2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/e816c71d902cac99eb22e491ae9186/bae816c71d902cac99eb22e491ae9186.mp4',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296168292361699329`,
  },
  {
    id: 'g45', name: 'Cy Says Under His Eye',
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/64dc0052bce44ec9b82e025b7a5275/4564dc0052bce44ec9b82e025b7a5275.gif',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296169391873327105`,
  },
  {
    id: 'g46', name: 'Max Says Hay',
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/693a8dcafd3ac179d5e51f767542b0/94693a8dcafd3ac179d5e51f767542b0.gif',
    video:  'https://raw2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/f784adc51511d42bb43368ce13ac13/fdf784adc51511d42bb43368ce13ac13.mp4',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296170491384954881`,
  },
  {
    id: 'g47', name: 'Zip it Sally',
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/0d0cc11070483fdfd186a103aa5fe2/8e0d0cc11070483fdfd186a103aa5fe2.gif',
    video:  'https://raw2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/3d0ad32f49367cea2c2a81834f12da/a23d0ad32f49367cea2c2a81834f12da.mp4',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296171590896582657`,
  },
  {
    id: 'g48', name: "Sally's Surprise",
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/3adc07e6f417a23cf11b8dd055b97a/e03adc07e6f417a23cf11b8dd055b97a.gif',
    video:  'https://raw2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/a010431162eb3fdf6fa349d11a74b6/21a010431162eb3fdf6fa349d11a74b6.mp4',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296172690408210433`,
  },
  {
    id: 'g49', name: 'Freaky Face 49',
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/4d9e2b58171d7b16f73c9119b1d9b0/b44d9e2b58171d7b16f73c9119b1d9b0.gif',
    video:  'https://raw2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/9311b7b322eb41b8844e4b60b7c68d/689311b7b322eb41b8844e4b60b7c68d.mp4',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296173789919838209`,
  },
  {
    id: 'g50', name: 'They say "Freaky Faces"',
    poster: 'https://i2c.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/a95a28b03f173986629f793b5b4419/9ba95a28b03f173986629f793b5b4419.gif',
    video:  'https://raw2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/f781c601d2638e12dc43be932f0d9e/baf781c601d2638e12dc43be932f0d9e.mp4',
    opensea: `${BASE}810997941458587079129982788559625180955273022260352246331296174889431465985`,
  },
];

export const trippinFaces: Face[] = [
  { id: 'cx10', name: 'Crucifix 10',           file: 'Crucifix-Faces_70_0010.jpeg', series: 'crucifix', opensea: `${COL}Crucifix` },
  { id: 'cx17', name: 'Crucifix 17',           file: 'Crucifix-Faces_70_0017.jpeg', series: 'crucifix', opensea: `${COL}Crucifix` },
  { id: 'cx36', name: 'Skull Warp',            file: 'Crucifix-Faces_70_0036.jpeg', series: 'crucifix', opensea: `${COL}Skull+Warp` },
  { id: 'cx40', name: 'Crucifix 40',           file: 'Crucifix-Faces_70_0040.jpeg', series: 'crucifix', opensea: `${COL}Crucifix` },
  { id: 'cx48', name: 'Mind Warp',             file: 'Crucifix-Faces_70_0048.jpeg', series: 'crucifix', opensea: `${COL}Mind+Warp` },
  { id: 'mx1',  name: 'Mix 1',                 file: 'mix-image-2068-116341083.jpeg', series: 'mix',    opensea: `${COL}Mix` },
  { id: 'mx2',  name: 'Mix 2',                 file: 'mix-image-2068-116341338.jpeg', series: 'mix',    opensea: `${COL}Mix` },
  { id: 'mx3',  name: 'Abstraction of Identity', file: 'mix-image-2068-116344421.jpeg', series: 'mix', opensea: `${COL}Abstraction+of+Identity` },
  { id: 'mx4',  name: 'Mind Trip',             file: 'mix-image-2068-116423210.jpeg', series: 'mix',    opensea: `${COL}Mind+Trip` },
  { id: 'mx5',  name: 'Mix 5',                 file: 'mix-image-2068-116423415.jpeg', series: 'mix',    opensea: `${COL}Mix` },
  { id: 'mx6',  name: 'Ego Dissolved',         file: 'mix-image-2068-116423464.jpeg', series: 'mix',    opensea: `${COL}Ego+Dissolved` },
];
