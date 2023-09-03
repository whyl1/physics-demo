let peg, block;

function setup() {
	new Canvas(1575, 1000);
	world.gravity.y = 2;
	noStroke();

	block = new Sprite();
	block.w = 25;
	block.h = 25;
	block.y = 0;
	block.x = 10;
	block.collider = 'dynamic';

	block1 = new Sprite();
	block1.w = 10;
	block1.h = 30;
	block1.x = 450;
	block1.y = 490;

	block2 = new Sprite();
	block2.w = 10;
	block2.h = 35;
	block2.x = 480;
	block2.y = 490;

	block3 = new Sprite();
	block3.w = 10;
	block3.h = 40;
	block3.x = 510;
	block3.y = 490;

	block4 = new Sprite();
	block4.w = 10;
	block4.h = 45;
	block4.x = 540;
	block4.y = 490;

	block5 = new Sprite();
	block5.w = 10;
	block5.h = 50;
	block5.x = 570;
	block5.y = 490;

	block6 = new Sprite();
	block6.w = 10;
	block6.h = 55;
	block6.x = 600;
	block6.y = 490;

	block7 = new Sprite();
	block7.w = 10;
	block7.h = 60;
	block7.x = 630;
	block7.y = 490;

	block8 = new Sprite();
	block8.w = 10;
	block8.h = 75;
	block8.x = 660;
	block8.y = 490;

	block9 = new Sprite();
	block9.w = 10;
	block9.h = 80;
	block9.x = 690;
	block9.y = 490;

	block10 = new Sprite();
	block10.w = 13;
	block10.h = 225;
	block10.x = 720;
	block10.y = 490;

	wall = new Sprite();
	wall.w = 7;
	wall.h = 40;
	wall.x = 800;
	wall.y = 490;

	wall2 = new Sprite();
	wall2.w = 7;
	wall2.h = 40;
	wall2.x = 825;
	wall2.y = 490;

	platform = new Sprite();
	platform.w = 7;
	platform.h = 50;
	platform.x = 812;
	platform.y = 440;
	platform.rotation = 90;

	wall3 = new Sprite();
	wall3.w = 7;
	wall3.h = 40;
	wall3.x = 860;
	wall3.y = 490;

	wall4 = new Sprite();
	wall4.w = 7;
	wall4.h = 40;
	wall4.x = 885;
	wall4.y = 490;

	platform2 = new Sprite();
	platform2.w = 7;
	platform2.h = 50;
	platform2.x = 872;
	platform2.y = 440;
	platform2.rotation = 90;

	wall5 = new Sprite();
	wall5.w = 7;
	wall5.h = 50;
	wall5.x = 810;
	wall5.y = 410;

	wall6 = new Sprite();
	wall6.w = 7;
	wall6.h = 50;
	wall6.x = 880;
	wall6.y = 410;

	platform3 = new Sprite();
	platform3.w = 7;
	platform3.h = 100;
	platform3.x = 845;
	platform3.y = 380;
	platform3.rotation = 90;

	wall7 = new Sprite();
	wall7.w = 7;
	wall7.h = 50;
	wall7.x = 865;
	wall7.y = 410;

	wall8 = new Sprite();
	wall8.w = 7;
	wall8.h = 50;
	wall8.x = 825;
	wall8.y = 410;

	wall9 = new Sprite();
	wall9.w = 7;
	wall9.h = 50;
	wall9.x = 860;
	wall9.y = 360;

	wall10 = new Sprite();
	wall10.w = 7;
	wall10.h = 50;
	wall10.x = 825;
	wall10.y = 360;

	platform4 = new Sprite();
	platform4.w = 7;
	platform4.h = 50;
	platform4.x = 843;
	platform4.y = 320;
	platform4.rotation = 90;

	domino = new Sprite();
	domino.w = 4;
	domino.h = 40;
	domino.x = 1070;
	domino.y = 475;

	domino2 = new Sprite();
	domino2.w = 4;
	domino2.h = 40;
	domino2.x = 1090;
	domino2.y = 475;

	domino3 = new Sprite();
	domino3.w = 4;
	domino3.h = 40;
	domino3.x = 1110;
	domino3.y = 475;

	domino4 = new Sprite();
	domino4.w = 4;
	domino4.h = 40;
	domino4.x = 1130;
	domino4.y = 475;

	domino5 = new Sprite();
	domino5.w = 4;
	domino5.h = 40;
	domino5.x = 1150;
	domino5.y = 475;

	domino6 = new Sprite();
	domino6.w = 4;
	domino6.h = 40;
	domino6.x = 1170;
	domino6.y = 475;

	domino7 = new Sprite();
	domino7.w = 4;
	domino7.h = 40;
	domino7.x = 1190;
	domino7.y = 475;

	domino8 = new Sprite();
	domino8.w = 4;
	domino8.h = 40;
	domino8.x = 1210;
	domino8.y = 475;

	domino9 = new Sprite();
	domino9.w = 4;
	domino9.h = 40;
	domino9.x = 1230;
	domino9.y = 475;

	domino10 = new Sprite();
	domino10.w = 4;
	domino10.h = 40;
	domino10.x = 1250;
	domino10.y = 475;

	domino11 = new Sprite();
	domino11.w = 4;
	domino11.h = 40;
	domino11.x = 1270;
	domino11.y = 475;

	domino12 = new Sprite();
	domino12.w = 4;
	domino12.h = 40;
	domino12.x = 1290;
	domino12.y = 475;

	domino13 = new Sprite();
	domino13.w = 4;
	domino13.h = 40;
	domino13.x = 1310;
	domino13.y = 475;

	domino14 = new Sprite();
	domino14.w = 4;
	domino14.h = 40;
	domino14.x = 1330;
	domino14.y = 475;

	domino15 = new Sprite();
	domino15.w = 4;
	domino15.h = 40;
	domino15.x = 1350;
	domino15.y = 475;

	domino16 = new Sprite();
	domino16.w = 5;
	domino16.h = 40;
	domino16.x = 1400;
	domino16.y = 640;

	domino17 = new Sprite();
	domino17.w = 5;
	domino17.h = 40;
	domino17.x = 1380;
	domino17.y = 640;

	domino18 = new Sprite();
	domino18.w = 5;
	domino18.h = 40;
	domino18.x = 1360;
	domino18.y = 640;

	domino19 = new Sprite();
	domino19.w = 5;
	domino19.h = 40;
	domino19.x = 1340;
	domino19.y = 640;

	domino20 = new Sprite();
	domino20.w = 5;
	domino20.h = 40;
	domino20.x = 1320;
	domino20.y = 640;

	domino21 = new Sprite();
	domino21.w = 5;
	domino21.h = 40;
	domino21.x = 1300;
	domino21.y = 640;

	domino22 = new Sprite();
	domino22.w = 5;
	domino22.h = 40;
	domino22.x = 1280;
	domino22.y = 640;

	domino23 = new Sprite();
	domino23.w = 5;
	domino23.h = 40;
	domino23.x = 1260;
	domino23.y = 640;

	domino24 = new Sprite();
	domino24.w = 5;
	domino24.h = 40;
	domino24.x = 1240;
	domino24.y = 640;

	domino25 = new Sprite();
	domino25.w = 5;
	domino25.h = 40;
	domino25.x = 1220;
	domino25.y = 640;

	domino26 = new Sprite();
	domino26.w = 5;
	domino26.h = 40;
	domino26.x = 1200;
	domino26.y = 640;

	domino27 = new Sprite();
	domino27.w = 5;
	domino27.h = 40;
	domino27.x = 1180;
	domino27.y = 640;

	domino28 = new Sprite();
	domino28.w = 5;
	domino28.h = 40;
	domino28.x = 1160;
	domino28.y = 640;

	domino29 = new Sprite();
	domino29.w = 5;
	domino29.h = 40;
	domino29.x = 1140;
	domino29.y = 640;

	domino30 = new Sprite();
	domino30.w = 5;
	domino30.h = 40;
	domino30.x = 1120;
	domino30.y = 640;

	domino31 = new Sprite();
	domino31.w = 5;
	domino31.h = 40;
	domino31.x = 1100;
	domino31.y = 640;

	domino32 = new Sprite();
	domino32.w = 5;
	domino32.h = 40;
	domino32.x = 1080;
	domino32.y = 640;

	domino33 = new Sprite();
	domino33.w = 5;
	domino33.h = 40;
	domino33.x = 1060;
	domino33.y = 640;

	domino34 = new Sprite();
	domino34.w = 5;
	domino34.h = 40;
	domino34.x = 1040;
	domino34.y = 640;

	domino35 = new Sprite();
	domino35.w = 5;
	domino35.h = 40;
	domino35.x = 1020;
	domino35.y = 640;

	domino36 = new Sprite();
	domino36.w = 5;
	domino36.h = 40;
	domino36.x = 1000;
	domino36.y = 640;

	domino37 = new Sprite();
	domino37.w = 5;
	domino37.h = 40;
	domino37.x = 980;
	domino37.y = 640;

	domino38 = new Sprite();
	domino38.w = 5;
	domino38.h = 40;
	domino38.x = 960;
	domino38.y = 640;

	domino39 = new Sprite();
	domino39.w = 5;
	domino39.h = 40;
	domino39.x = 940;
	domino39.y = 640;

	domino40 = new Sprite();
	domino40.w = 5;
	domino40.h = 40;
	domino40.x = 920;
	domino40.y = 640;

	domino41 = new Sprite();
	domino41.w = 5;
	domino41.h = 40;
	domino41.x = 900;
	domino41.y = 640;

	domino42 = new Sprite();
	domino42.w = 5;
	domino42.h = 40;
	domino42.x = 880;
	domino42.y = 640;

	domino43 = new Sprite();
	domino43.w = 5;
	domino43.h = 40;
	domino43.x = 860;
	domino43.y = 640;

	domino44 = new Sprite();
	domino44.w = 5;
	domino44.h = 40;
	domino44.x = 840;
	domino44.y = 640;

	domino45 = new Sprite();
	domino45.w = 5;
	domino45.h = 40;
	domino45.x = 820;
	domino45.y = 640;

	domino46 = new Sprite();
	domino46.w = 5;
	domino46.h = 40;
	domino46.x = 800;
	domino46.y = 640;

	domino47 = new Sprite();
	domino47.w = 5;
	domino47.h = 40;
	domino47.x = 780;
	domino47.y = 640;

	domino48 = new Sprite();
	domino48.w = 5;
	domino48.h = 40;
	domino48.x = 760;
	domino48.y = 640;

	domino49 = new Sprite();
	domino49.w = 5;
	domino49.h = 40;
	domino49.x = 740;
	domino49.y = 640;

	domino50 = new Sprite();
	domino50.w = 5;
	domino50.h = 40;
	domino50.x = 720;
	domino50.y = 640;

	domino51 = new Sprite();
	domino51.w = 5;
	domino51.h = 40;
	domino51.x = 700;
	domino51.y = 640;

	domino52 = new Sprite();
	domino52.w = 5;
	domino52.h = 40;
	domino52.x = 680;
	domino52.y = 640;

	domino53 = new Sprite();
	domino53.w = 5;
	domino53.h = 40;
	domino53.x = 660;
	domino53.y = 640;

	domino54 = new Sprite();
	domino54.w = 5;
	domino54.h = 40;
	domino54.x = 640;
	domino54.y = 640;

	domino55 = new Sprite();
	domino55.w = 5;
	domino55.h = 40;
	domino55.x = 620;
	domino55.y = 640;

	domino56 = new Sprite();
	domino56.w = 5;
	domino56.h = 40;
	domino56.x = 600;
	domino56.y = 640;

	domino57 = new Sprite();
	domino57.w = 5;
	domino57.h = 40;
	domino57.x = 580;
	domino57.y = 640;

	domino58 = new Sprite();
	domino58.w = 5;
	domino58.h = 40;
	domino58.x = 560;
	domino58.y = 640;

	domino59 = new Sprite();
	domino59.w = 5;
	domino59.h = 40;
	domino59.x = 540;
	domino59.y = 640;

	domino60 = new Sprite();
	domino60.w = 5;
	domino60.h = 40;
	domino60.x = 520;
	domino60.y = 640;

	domino61 = new Sprite();
	domino61.w = 5;
	domino61.h = 40;
	domino61.x = 500;
	domino61.y = 640;

	domino62 = new Sprite();
	domino62.w = 5;
	domino62.h = 40;
	domino62.x = 480;
	domino62.y = 640;

	domino63 = new Sprite();
	domino63.w = 5;
	domino63.h = 40;
	domino63.x = 460;
	domino63.y = 640;

	domino64 = new Sprite();
	domino64.w = 5;
	domino64.h = 40;
	domino64.x = 440;
	domino64.y = 640;

	domino65 = new Sprite();
	domino65.w = 5;
	domino65.h = 40;
	domino65.x = 420;
	domino65.y = 640;

	domino66 = new Sprite();
	domino66.w = 5;
	domino66.h = 40;
	domino66.x = 400;
	domino66.y = 640;

	domino67 = new Sprite();
	domino67.w = 5;
	domino67.h = 40;
	domino67.x = 380;
	domino67.y = 640;

	domino68 = new Sprite();
	domino68.w = 5;
	domino68.h = 40;
	domino68.x = 360;
	domino68.y = 640;

	domino69 = new Sprite();
	domino69.w = 5;
	domino69.h = 40;
	domino69.x = 340;
	domino69.y = 640;

	domino70 = new Sprite();
	domino70.w = 5;
	domino70.h = 40;
	domino70.x = 320;
	domino70.y = 640;

	domino71 = new Sprite();
	domino71.w = 5;
	domino71.h = 40;
	domino71.x = 300;
	domino71.y = 640;

	domino72 = new Sprite();
	domino72.w = 5;
	domino72.h = 40;
	domino72.x = 280;
	domino72.y = 640;

	domino73 = new Sprite();
	domino73.w = 5;
	domino73.h = 40;
	domino73.x = 260;
	domino73.y = 640;

	domino74 = new Sprite();
	domino74.w = 5;
	domino74.h = 40;
	domino74.x = 240;
	domino74.y = 640;

	domino75 = new Sprite();
	domino75.w = 5;
	domino75.h = 40;
	domino75.x = 220;
	domino75.y = 640;

	domino76 = new Sprite();
	domino76.w = 5;
	domino76.h = 40;
	domino76.x = 200;
	domino76.y = 640;

	domino78 = new Sprite();
	domino78.w = 5;
	domino78.h = 40;
	domino78.x = 180;
	domino78.y = 640;

	domino79 = new Sprite();
	domino79.w = 5;
	domino79.h = 37;
	domino79.x = 152;
	domino79.y = 780;

	domino80 = new Sprite();
	domino80.w = 5;
	domino80.h = 40;
	domino80.x = 180;
	domino80.y = 780;

	circle = new Sprite();
	circle.d = 40;
	circle.x = 850;
	circle.y = 290;

	circle2 = new Sprite();
	circle2.d = 25;
	circle2.x = 1400;
	circle2.y = 475;

	floor = new Sprite();
	floor.w = 1100;
	floor.h = 10;
	floor.y = 490;
	floor.x = 850;
	floor.collider = 'static';

	floor2 = new Sprite();
	floor2.w = 1275;
	floor2.h = 10;
	floor2.y = 650;
	floor2.x = 800;
	floor2.collider = 'static';

	floor3 = new Sprite();
	floor3.w = 3000;
	floor3.h = 10;
	floor3.y = 995;
	floor3.x = 1500;
	floor3.collider = 'static';

	floor4 = new Sprite();
	floor4.w = 1250;
	floor4.h = 10;
	floor4.y = 800;
	floor4.x = 770;
	floor4.collider = 'static';

	bigwall = new Sprite();
	bigwall.w = 8;
	bigwall.h = 490;
	bigwall.x = 1400;
	bigwall.y = 900;
	bigwall.collider = 'static';

	bigwall2 = new Sprite();
	bigwall2.w = 8;
	bigwall2.h = 490;
	bigwall2.x = 1570;
	bigwall2.y = 900;
	bigwall2.collider = 'static';

	towerwall = new Sprite();
	towerwall.w = 4;
	towerwall.h = 40;
	towerwall.x = 1530;
	towerwall.y = 975;

	towerwall2 = new Sprite();
	towerwall2.w = 4;
	towerwall2.h = 40;
	towerwall2.x = 1500;
	towerwall2.y = 975;

	towerwall3 = new Sprite();
	towerwall3.w = 4;
	towerwall3.h = 40;
	towerwall3.x = 1470;
	towerwall3.y = 975;

	towerwall4 = new Sprite();
	towerwall4.w = 4;
	towerwall4.h = 40;
	towerwall4.x = 1440;
	towerwall4.y = 975;

	towerroof = new Sprite();
	towerroof.w = 4;
	towerroof.h = 20;
	towerroof.x = 1470;
	towerroof.y = 945;
	towerroof.rotation = 90;

	towerroof2 = new Sprite();
	towerroof2.w = 4;
	towerroof2.h = 40;
	towerroof2.x = 1440;
	towerroof2.y = 945;
	towerroof2.rotation = 90;

	towerroof3 = new Sprite();
	towerroof3.w = 4;
	towerroof3.h = 40;
	towerroof3.x = 1500;
	towerroof3.y = 945;
	towerroof3.rotation = 90;

	towerroof4 = new Sprite();
	towerroof4.w = 4;
	towerroof4.h = 20;
	towerroof4.x = 1530;
	towerroof4.y = 945;
	towerroof4.rotation = 90;

	towerwall5 = new Sprite();
	towerwall5.w = 4;
	towerwall5.h = 40;
	towerwall5.x = 1440;
	towerwall5.y = 925;

	towerwall6 = new Sprite();
	towerwall6.w = 4;
	towerwall6.h = 40;
	towerwall6.x = 1470;
	towerwall6.y = 925;

	towerwall7 = new Sprite();
	towerwall7.w = 4;
	towerwall7.h = 40;
	towerwall7.x = 1500;
	towerwall7.y = 925;

	towerwall8 = new Sprite();
	towerwall8.w = 4;
	towerwall8.h = 40;
	towerwall8.x = 1530;
	towerwall8.y = 925;

	towerroof5 = new Sprite();
	towerroof5.w = 4;
	towerroof5.h = 40;
	towerroof5.x = 1440;
	towerroof5.y = 900;
	towerroof5.rotation = 90;

	towerroof6 = new Sprite();
	towerroof6.w = 4;
	towerroof6.h = 20;
	towerroof6.x = 1470;
	towerroof6.y = 900;
	towerroof6.rotation = 90;

	towerroof7 = new Sprite();
	towerroof7.w = 4;
	towerroof7.h = 40;
	towerroof7.x = 1500;
	towerroof7.y = 900;
	towerroof7.rotation = 90;

	towerroof8 = new Sprite();
	towerroof8.w = 4;
	towerroof8.h = 20;
	towerroof8.x = 1530;
	towerroof8.y = 900;
	towerroof8.rotation = 90;

	towerwall9 = new Sprite();
	towerwall9.w = 4;
	towerwall9.h = 40;
	towerwall9.x = 1440;
	towerwall9.y = 880;

	towerwall10 = new Sprite();
	towerwall10.w = 4;
	towerwall10.h = 40;
	towerwall10.x = 1470;
	towerwall10.y = 880;

	towerwall11 = new Sprite();
	towerwall11.w = 4;
	towerwall11.h = 40;
	towerwall11.x = 1500;
	towerwall11.y = 880;

	towerwall12 = new Sprite();
	towerwall12.w = 4;
	towerwall12.h = 40;
	towerwall12.x = 1530;
	towerwall12.y = 880;

	towerroof9 = new Sprite();
	towerroof9.w = 4;
	towerroof9.h = 40;
	towerroof9.x = 1440;
	towerroof9.y = 860;
	towerroof9.rotation = 90;

	towerroof10 = new Sprite();
	towerroof10.w = 4;
	towerroof10.h = 20;
	towerroof10.x = 1470;
	towerroof10.y = 860;
	towerroof10.rotation = 90;

	towerroof11 = new Sprite();
	towerroof11.w = 4;
	towerroof11.h = 40;
	towerroof11.x = 1500;
	towerroof11.y = 860;
	towerroof11.rotation = 90;

	towerroof12 = new Sprite();
	towerroof12.w = 4;
	towerroof12.h = 20;
	towerroof12.x = 1530;
	towerroof12.y = 860;
	towerroof12.rotation = 90;

	towerwall13 = new Sprite();
	towerwall13.w = 4;
	towerwall13.h = 40;
	towerwall13.x = 1440;
	towerwall13.y = 835;

	towerwall14 = new Sprite();
	towerwall14.w = 4;
	towerwall14.h = 40;
	towerwall14.x = 1470;
	towerwall14.y = 835;

	towerwall15 = new Sprite();
	towerwall15.w = 4;
	towerwall15.h = 40;
	towerwall15.x = 1500;
	towerwall15.y = 835;

	towerwall16 = new Sprite();
	towerwall16.w = 4;
	towerwall16.h = 40;
	towerwall16.x = 1530;
	towerwall16.y = 835;

	towerroof13 = new Sprite();
	towerroof13.w = 4;
	towerroof13.h = 40;
	towerroof13.x = 1440;
	towerroof13.y = 810;
	towerroof13.rotation = 90;

	towerroof14 = new Sprite();
	towerroof14.w = 4;
	towerroof14.h = 20;
	towerroof14.x = 1470;
	towerroof14.y = 810;
	towerroof14.rotation = 90;

	towerroof15 = new Sprite();
	towerroof15.w = 4;
	towerroof15.h = 40;
	towerroof15.x = 1500;
	towerroof15.y = 810;
	towerroof15.rotation = 90;

	towerroof16 = new Sprite();
	towerroof16.w = 4;
	towerroof16.h = 20;
	towerroof16.x = 1530;
	towerroof16.y = 812;
	towerroof16.rotation = 90;

	ramp = new Sprite();
	ramp.w = 350;
	ramp.h = 10;
	ramp.rotation = 45;
	ramp.collider = 'static';
	ramp.y = 100;
	ramp.x = 50;

	ramp2 = new Sprite();
	ramp2.w = 65;
	ramp2.h = 5;
	ramp2.rotation = 45;
	ramp2.collider = 'static';
	ramp2.x = 1420;
	ramp2.y = 510;

	ramp3 = new Sprite();
	ramp3.w = 65;
	ramp3.h = 5;
	ramp3.rotation = 135;
	ramp3.x = 1475;
	ramp3.y = 550;
	ramp3.collider = 'static';
}

function draw() {
	background(200);
	// background(0, 0, 0, 20);
	//world.step(1 / 240);
}
