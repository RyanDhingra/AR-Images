// src/components/ImageGallery.js

//name convention examples:
// 2. if another racket of same model comes, prefix the numebers starting from 1

import React from 'react';

const ImageGallery = () => {
  const images = [                     
    '100ZZBlueSP_1.png',   
    '100ZZBlueSP_2.png',
    '100ZZBlueSP_3.png',
    '100ZZKurenaiSP_1.png',
    '100ZZKurenaiSP_2.png',
    '70IInstinct_1.png',
    '70IInstinct_2.png',
    '70IInstinct_3.png',
    '88DGame_1.png',
    '88DGame_2.png',
    '88DGame_3.png',
    'ArcSaber11Pro_1.png',
    'Astrox99Game_1.png',
    'Astrox99Game_2.png',
    'Astrox99Game_3.png',
    'Astrox99Game_4.png',
    'Astrox99Game_5.png',
    'Astrox99Tour_1.png',
    'Astrox99Tour_2.png',
    'Astrox99Tour_3.png',
    'Astrox99Tour_4.png',
    'Astrox99Tour_5.png',
    'Astrox99_1.png',
    'Astrox99_2.png',
    'Astrox99_3.png',
    'Astrox99_4.png',
    'Astrox99_5.png',
    'Astrox99_6.png',
    'Auraspeed80X_1.jpg',
    'Auraspeed80X_2.png',
    'Auraspeed80X_3.png',
    'Auraspeed80X_4.png',
    'Bravesword_1.jpg',
    'Bravesword_2.png',
    'Claw_1.png',
    'Claw_2.png',
    'Duora10_1.png',
    'Duora10_2.png',
    'Duora10_3.png',
    'Duora10_4.png',
    'Duora10_5.png',
    'DuoraZStrike_1.png',
    'HeadMonster_1.png',
    'HeadMonster_2.png',
    'HeadMonster_3.png',
    'HeadMonster_4.png',
    'HighCarbon_1.png',
    'HighCarbon_2.png',
    'HighCarbon_3.png',
    'Jetspeed12_1.png',
    'Jetspeed12_2.png',
    'Jetspeed12_3.png',
    'Maxbolt_1.png',
    'NanoFlare1000Z_1.png',
    'NanoFlare1000Z_2.png',
    'NanoFlare1000Z_3.png',
    'NanoFlare700_1.png',
    'NanoFlare800LT_1.png',
    'NanoFlare800LT_2.png',
    'NanoFlare800LT_3.png',
    'NanoFlare800Pro_1.png',
    'NanoFlare800Pro_2.png',
    'NanoFlare800Pro_3.png',
    'Nextage_1.png',
    'Onigiri_1.jpg',
    'RyugaII_1.png',
    'RyugaII_2.png',
    'RyugaII_3.png',
    'ThrusterKEnhanced_1.png',
    'ThrusterKEnhanced_2.png',
    'TurboForce_1.png',
    'TurboForce_2.png'
  ];

  return (
    <div>
      <h1>AR Rackets Image Gallery</h1>
      <div>
        {images.map((imageName, index) => (
          <img
            style={{width: '250px', height: 'auto'}}
            key={index}
            src={`/images/${imageName}`}
            alt={`Display ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
