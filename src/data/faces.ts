export interface Face {
  id: string;
  name: string;
  file: string;
  series?: string;
  opensea?: string; // search query for opensea collection
}

const OS = 'https://opensea.io/collection/bards-freaky-faces?search[query]=';

export const faces: Face[] = [
  { id: 'g1a', name: 'Freaky Freddy', file: 'g1-FreakyFreddy.jpeg', opensea: `${OS}Freaky+Freddy` },
  { id: 'g1b', name: 'Crooked', file: 'g1-crooked3.jpg', opensea: `${OS}Crooked` },
  { id: 'g2a', name: 'Freaky Alien', file: 'g2freakyAlien.jpg', opensea: `${OS}Freaky+Alien` },
  { id: 'g2b', name: 'Tristen Triclops', file: 'g2freakyAliensteg.jpeg', opensea: `${OS}Tristen+Triclops` },
  { id: 'g3', name: 'Blinded Cyclops', file: 'g3-blinded-cyclopssteg.jpg', opensea: `${OS}Blinded+Cyclops` },
  { id: 'g4', name: 'Gritty Big Ears', file: 'g4-grittyBigEarsteg.jpg', opensea: `${OS}Gritty+Big+Ears` },
  { id: 'g5', name: 'Sally', file: 'g5-Sallysteg.jpeg', opensea: `${OS}Sally` },
  { id: 'g6', name: 'Mary Cyclopse', file: 'g6-mary-cyclopse2steg.jpg', opensea: `${OS}Mary+Cyclopse` },
  { id: 'g7', name: 'Cyclops Two Mouth', file: 'g7-cyclopseTwoMouthsteg.jpg', opensea: `${OS}Cyclops+Two+Mouth` },
  { id: 'g8', name: 'Freaky Face 8', file: 'g8-alienMoreEyesteg.jpg', opensea: `${OS}Freaky+Face+8` },
  { id: 'g9', name: 'Max', file: 'g9-max.jpg', opensea: `${OS}Max` },
  { id: 'g10', name: 'Cyclops Two Mouth II', file: 'g10-cyclops2mouth.jpg', opensea: `${OS}Cyclops+Two+Mouth` },
  { id: 'g11', name: 'Alien Three Eyes', file: 'g11-alien-threeEyes.jpg', opensea: `${OS}Alien+Three+Eyes` },
  { id: 'g12', name: 'Freaky Face 12', file: 'g12-cyclops2mouth.jpg', opensea: `${OS}Freaky+Face+12` },
  { id: 'g13', name: 'Singer of Hope', file: 'g13-singerOfHope.jpg', opensea: `${OS}Singer+of+Hope` },
  { id: 'g14', name: 'Three Eyes Red Lips', file: 'g14-threeEyesRedLips.jpg', opensea: `${OS}Three+Eyes+Red+Lips` },
  { id: 'g15', name: 'Max Freaky Face 15', file: 'g15-flatHead.jpg', opensea: `${OS}Max+Freaky+Face+15` },
  { id: 'g16', name: 'Cyclops Alien Red Eye', file: 'g16-cyclopsAlienRedEye.jpg', opensea: `${OS}Cyclops+Alien+Red+Eye` },
  { id: 'g17', name: 'Cyclopse Long Hair', file: 'g17-cyclopseTwoMouthLongHair.jpg', opensea: `${OS}Cyclopse+Long+Hair` },
  { id: 'g18', name: 'Alien No Eye', file: 'g18-alienNoEye.jpg', opensea: `${OS}Alien+No+Eye` },
  { id: 'g19', name: 'SPADE Cyclopse', file: 'g19-SPADE-FACE-cyclopse3.jpeg.jpg', opensea: `${OS}SPADE+Cyclopse` },
  { id: 'g20', name: 'I See You', file: 'g20-threeEyesYellow.jpg', opensea: `${OS}I+See+You` },
  { id: 'g21', name: 'Freaky Face 21', file: 'g21-freaky-face.jpg', opensea: `${OS}Freaky+Face+21` },
  { id: 'g22', name: 'Three Eyed Eagle', file: 'g22-alienThreeEyeEagle.jpg', opensea: `${OS}Three+Eyed+Eagle` },
  { id: 'g23', name: 'One Eyed Alien', file: 'g23-oneEyeJoe.jpg', opensea: `${OS}One+Eyed+Alien` },
  { id: 'g24', name: 'Crooked II', file: 'g24-crooked.jpg', opensea: `${OS}Crooked` },
  { id: 'g25', name: 'Freaky Face 25', file: 'g25-cyclopseTwoMouth3.jpg', opensea: `${OS}Freaky+Face+25` },
  { id: 'g26', name: 'Freaky Face 26', file: 'g26-manafortTruth.jpg', opensea: `${OS}Freaky+Face+26` },
  { id: 'g27', name: 'Talos', file: 'g27-talos.jpg', opensea: `${OS}Talos` },
  { id: 'g28', name: 'Freaky American', file: 'g28-Freakyamerican.jpg', opensea: `${OS}Freaky+American` },
  { id: 'g29', name: 'Nudes At The Beach', file: 'g29-nudesBeach.jpg', opensea: `${OS}Nudes+At+The+Beach` },
  { id: 'g30', name: 'Cyclopse Long Hair IV', file: 'g30-cyclopseTwoMouthLongHair4.jpg', opensea: `${OS}Cyclopse+Long+Hair` },
  { id: 'g31', name: 'Alien Eye Hole', file: 'g31-alienEyeHole.jpg', opensea: `${OS}Alien+Eye+Hole` },
  { id: 'g32', name: 'Freaky Faces 32', file: 'g32-alienOneEye.jpg', opensea: `${OS}Freaky+Faces+32` },
  { id: 'g33', name: 'Crooked IV', file: 'g33-crooked4.jpg', opensea: `${OS}Crooked` },
  { id: 'g34', name: 'Alien Three Eye', file: 'g34-alienThreeEye.jpg', opensea: `${OS}Alien+Three+Eye` },
  { id: 'g35', name: 'Cool Cyclopse', file: 'g35-coolcyclopseClosedMouth.jpg', opensea: `${OS}Cool+Cyclopse` },
  { id: 'g36', name: 'Cy Actor', file: 'g36-cy-actor.jpg', opensea: `${OS}Cy+Actor` },
  { id: 'g37', name: 'Sally Thinks', file: 'g37-sally-crooked5.jpg', opensea: 'https://opensea.io/item/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/810997941458587079129982788559625180955273022260352246331296160595780304897' },
  { id: 'g38', name: 'Sally Again', file: 'g38-sallyAgain.jpg', opensea: `${OS}Sally` },
  { id: 'g39', name: 'Cyclopse Two Mouth II', file: 'g39-cyclopseTwoMouth2.jpg', opensea: `${OS}Cyclopse+Two+Mouth` },
  { id: 'g40', name: 'Cyclopse Long Hair III', file: 'g40-cyclopseTwoMouthLongHair.jpg', opensea: `${OS}Cyclopse+Long+Hair` },
  { id: 'g41', name: 'Zip It Sally', file: 'g41-zipItSally.jpg', opensea: `${OS}Zip+It+Sally` },
  { id: 'g42', name: 'Rockstar', file: 'g42-rockstar.jpg', opensea: `${OS}Rockstar` },
  { id: 'g43', name: 'Style', file: 'g43-style.jpg', opensea: 'https://opensea.io/item/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/810997941458587079129982788559625180955273022260352246331296167192850071553' },
];

export const trippinFaces: Face[] = [
  { id: 'cx10', name: 'Crucifix 10', file: 'Crucifix-Faces_70_0010.jpeg', series: 'crucifix', opensea: `${OS}Crucifix` },
  { id: 'cx17', name: 'Crucifix 17', file: 'Crucifix-Faces_70_0017.jpeg', series: 'crucifix', opensea: `${OS}Crucifix` },
  { id: 'cx36', name: 'Skull Warp', file: 'Crucifix-Faces_70_0036.jpeg', series: 'crucifix', opensea: `${OS}Skull+Warp` },
  { id: 'cx40', name: 'Crucifix 40', file: 'Crucifix-Faces_70_0040.jpeg', series: 'crucifix', opensea: `${OS}Crucifix` },
  { id: 'cx48', name: 'Mind Warp', file: 'Crucifix-Faces_70_0048.jpeg', series: 'crucifix', opensea: `${OS}Mind+Warp` },
  { id: 'mx1', name: 'Mix 1', file: 'mix-image-2068-116341083.jpeg', series: 'mix', opensea: `${OS}Mix` },
  { id: 'mx2', name: 'Mix 2', file: 'mix-image-2068-116341338.jpeg', series: 'mix', opensea: `${OS}Mix` },
  { id: 'mx3', name: 'Abstraction of Identity', file: 'mix-image-2068-116344421.jpeg', series: 'mix', opensea: `${OS}Abstraction+of+Identity` },
  { id: 'mx4', name: 'Mind Trip', file: 'mix-image-2068-116423210.jpeg', series: 'mix', opensea: `${OS}Mind+Trip` },
  { id: 'mx5', name: 'Mix 5', file: 'mix-image-2068-116423415.jpeg', series: 'mix', opensea: `${OS}Mix` },
  { id: 'mx6', name: 'Ego Dissolved', file: 'mix-image-2068-116423464.jpeg', series: 'mix', opensea: `${OS}Ego+Dissolved` },
];
