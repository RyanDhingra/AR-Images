import React from 'react';
import img01 from './images/100ZZBlueSP_1.png';
import img02 from './images/100ZZBlueSP_2.png';
import img03 from './images/100ZZBlueSP_3.png';
import img04 from './images/100ZZKurenaiSP_1.png';
import img05 from './images/100ZZKurenaiSP_2.png';
import img06 from './images/70IInstinct_1.png';
import img07 from './images/70IInstinct_2.png';
import img08 from './images/70IInstinct_3.png';
import img09 from './images/88DGame_1.png';
import img10 from './images/88DGame_2.png';
import img11 from './images/88DGame_3.png';
import img12 from './images/ArcSaber11Pro_1.png';
import img13 from './images/Astrox99Game_1.png';
import img14 from './images/Astrox99Game_2.png';
import img15 from './images/Astrox99Game_3.png';
import img16 from './images/Astrox99Game_4.png';
import img17 from './images/Astrox99Game_5.png';
import img18 from './images/Astrox99Tour_1.png';
import img19 from './images/Astrox99Tour_2.png';
import img20 from './images/Astrox99Tour_3.png';
import img21 from './images/Astrox99Tour_4.png';
import img22 from './images/Astrox99Tour_5.png';
import img23 from './images/Astrox99_1.png';
import img24 from './images/Astrox99_2.png';
import img25 from './images/Astrox99_3.png';
import img26 from './images/Astrox99_4.png';
import img27 from './images/Astrox99_5.png';
import img28 from './images/Astrox99_6.png';
import img29 from './images/Auraspeed80X_1.jpg';
import img30 from './images/Auraspeed80X_2.png';
import img31 from './images/Auraspeed80X_3.png';
import img32 from './images/Auraspeed80X_4.png';
import img33 from './images/Bravesword_1.jpg';
import img34 from './images/Bravesword_2.png';
import img35 from './images/Claw_1.png';
import img36 from './images/Claw_2.png';
import img37 from './images/Duora10_1.png';
import img38 from './images/Duora10_2.png';
import img39 from './images/Duora10_3.png';
import img40 from './images/Duora10_4.png';
import img41 from './images/Duora10_5.png';
import img42 from './images/DuoraZStrike_1.png';
import img43 from './images/HeadMonster_1.png';
import img44 from './images/HeadMonster_2.png';
import img45 from './images/HeadMonster_3.png';
import img46 from './images/HeadMonster_4.png';
import img47 from './images/HighCarbon_1.png';
import img48 from './images/HighCarbon_2.png';
import img49 from './images/HighCarbon_3.png';
import img50 from './images/Jetspeed12_1.png';
import img51 from './images/Jetspeed12_2.png';
import img52 from './images/Jetspeed12_3.png';
import img53 from './images/Maxbolt_1.png';
import img54 from './images/NanoFlare1000Z_1.png';
import img55 from './images/NanoFlare1000Z_2.png';
import img56 from './images/NanoFlare1000Z_3.png';
import img57 from './images/NanoFlare700_1.png';
import img58 from './images/NanoFlare800LT_1.png';
import img59 from './images/NanoFlare800LT_2.png';
import img60 from './images/NanoFlare800LT_3.png';
import img61 from './images/NanoFlare800Pro_1.png';
import img62 from './images/NanoFlare800Pro_2.png';
import img63 from './images/NanoFlare800Pro_3.png';
import img64 from './images/Nextage_1.png';
import img65 from './images/Onigiri_1.jpg';
import img66 from './images/RyugaII_1.png';
import img67 from './images/RyugaII_2.png';
import img68 from './images/RyugaII_3.png';
import img69 from './images/ThrusterKEnhanced_1.png';
import img70 from './images/ThrusterKEnhanced_2.png';
import img71 from './images/TurboForce_1.png';
import img72 from './images/TurboForce_2.png';

const ImageGallery = () => {

  const images = [
    img01, 
    img02, 
    img03, 
    img04, 
    img05, 
    img06, 
    img07, 
    img08, 
    img09, 
    img10, 
    img11, 
    img12, 
    img13, 
    img14, 
    img15, 
    img16, 
    img17, 
    img18, 
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,
    img71,
    img72
  ];

  return (
      <div>
        <h1>AR Rackets Image Gallery</h1>
        <div>
          {images.map((imageName, index) => (
            <img
              style={{width: '250px', height: 'auto'}}
              key={index}
              src={imageName}
              alt={`Display ${index}`}
            />
          ))}
        </div>
      </div>
    );
};

export default ImageGallery;
