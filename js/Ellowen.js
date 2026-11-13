import * as THREE from "./three.module.js";
    import{ RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

export default function Ellowen(x,y,z){
// PERSONAJE
// CABEZA
var esferacabeza = new THREE.SphereGeometry(50, 25, 20);
var colorcabeza = new THREE.MeshLambertMaterial({color:0xE5BFA3});
var cabeza = new THREE.Mesh(esferacabeza,colorcabeza);
cabeza.scale.set(1,1.03,0.7);
cabeza.position.set(0,88,6);
//scene.add(cabeza);


// FLEQUILLO IZQUIERDO 
var esferaflequillo1 = new THREE.SphereGeometry(30,5,20);
var colorflequillo = new THREE.MeshLambertMaterial({color:0x9CA63C});
var flequillo1 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillo1.scale.set(0.3,1.8,0.3);
flequillo1.position.set(-45,80,25);
//scene.add(flequillo1);

var flequillot1 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot1.scale.set(0.3,1.5,0.3);
flequillot1.position.set(-45,85,15);
//scene.add(flequillot1);

var flequillot2 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot2.scale.set(0.3,1.5,0.3);
flequillot2.position.set(-45,85,10);
//scene.add(flequillot2);

var flequillot3 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot3.scale.set(0.3,1.5,0.3);
flequillot3.position.set(-45,85,5);
//scene.add(flequillot3);

var flequillot4 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot4.scale.set(0.3,1.5,1);
flequillot4.position.set(-45,85,0);
//scene.add(flequillot4);

var flequillot5 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot5.scale.set(0.6,1.5,0.5);
flequillot5.position.set(-45,85,-5);
//scene.add(flequillot5);

var flequillot6 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot6.scale.set(0.5,1.6,0.3);
flequillot6.position.set(-45,85,-15);
//scene.add(flequillot6);

var flequillot7 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillot7.scale.set(0.3,1.7,0.3);
flequillot7.position.set(-45,85,-20);
//scene.add(flequillot7);

// FLEQUILLO DERECHO
var esferaflequillo2 = new THREE.SphereGeometry(30,5,20);
var flequillo2 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillo2.scale.set(0.3,1.8,0.5);
flequillo2.position.set(45,80,25);
//scene.add(flequillo2);

var flequillos1 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillos1.scale.set(0.3,1.5,0.5);
flequillos1.position.set(45,85,15);
//scene.add(flequillos1);

var flequillos2 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillos2.scale.set(0.7,1.5,0.5);
flequillos2.position.set(45,85,10);
//scene.add(flequillos2);

var flequillos3 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillos3.scale.set(0.7,1.5,0.5);
flequillos3.position.set(45,85,5);
//scene.add(flequillos3);

var flequillos4 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillos4.scale.set(0.7,1.5,0.5);
flequillos4.position.set(45,85,0);
//scene.add(flequillos4);

var flequillos5 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillos5.scale.set(0.7,1.5,0.5);
flequillos5.position.set(45,85,-5);
//scene.add(flequillos5);

var flequillos6 = new THREE.Mesh(esferaflequillo2,colorflequillo);
flequillos6.scale.set(0.7,1.6,0.4);
flequillos6.position.set(45,85,-10);
//scene.add(flequillos6);

var flequillos7 = new THREE.Mesh(esferaflequillo1,colorflequillo);
flequillos7.scale.set(0.3,1.7,0.4);
flequillos7.position.set(45,85,-20);
//scene.add(flequillos7);

//FLECO FRENTE
var esferaflequillo3 = new THREE.SphereGeometry(32,5,20);
var flequillo3 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo3.scale.set(0.5,1,0.5);
flequillo3.rotation.set(-0.25,0.25,1);
flequillo3.position.set(25,118,36);
//scene.add(flequillo3);

var esferaflequillo4 = new THREE.SphereGeometry(32,5,20);
var flequillo4 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo4.scale.set(0.5,1,0.5);
flequillo4.rotation.set(0,-0.4,-1);
flequillo4.position.set(-25,118,36);
//scene.add(flequillo4);

var esferaflequillo5 = new THREE.SphereGeometry(32,5,20);
var flequillo5 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo5.scale.set(0.5,1,0.5);
flequillo5.rotation.set(0,-0.6,-1.3);
flequillo5.position.set(-25,129.5,25.5);
//scene.add(flequillo5);

var esferaflequillo6 = new THREE.SphereGeometry(32,5,20);
var flequillo6 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo6.scale.set(0.5,1,0.5);
flequillo6.rotation.set(1.5,-0.5,1.1);
flequillo6.position.set(25,129.5,20);
//scene.add(flequillo6);

var esferaflequillo7 = new THREE.SphereGeometry(32,5,20);
var flequillo7 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo7.scale.set(0.5,1,0.5);
flequillo7.rotation.set(1.5,-0.5,1.1);
flequillo7.position.set(25,129.5,15);
//scene.add(flequillo7);

var esferaflequillo8 = new THREE.SphereGeometry(32,5,20);
var flequillo8 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo8.scale.set(0.5,1,0.5);
flequillo8.rotation.set(1.5,-0.5,1.1);
flequillo8.position.set(25,129.5,-5);
//scene.add(flequillo8);

var esferaflequillo9 = new THREE.SphereGeometry(32,5,20);
var flequillo9 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo9.scale.set(0.5,1,0.5);
flequillo9.rotation.set(1.5,-0.5,1.1);
flequillo9.position.set(25,130.5,-10);
//scene.add(flequillo9);

var esferaflequillo10 = new THREE.SphereGeometry(32,5,20);
var flequillo10 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo10.scale.set(0.5,1,0.5);
flequillo10.rotation.set(1.5,-0.5,1.1);
flequillo10.position.set(20,130,-20);
//scene.add(flequillo10);

var esferaflequillo11 = new THREE.SphereGeometry(32,5,20);
var flequillo11 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo11.scale.set(0.5,1,0.5);
flequillo11.rotation.set(0,-0.6,-1.3);
flequillo11.position.set(-25,129.5,20);
//scene.add(flequillo11);

var esferaflequillo12 = new THREE.SphereGeometry(32,5,20);
var flequillo12 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo12.scale.set(0.5,1,0.5);
flequillo12.rotation.set(0,-0.6,-1.3);
flequillo12.position.set(-25,129.5,-15);
//scene.add(flequillo12);

var esferaflequillo13 = new THREE.SphereGeometry(32,5,20);
var flequillo13 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo13.scale.set(0.5,1,0.5);
flequillo13.rotation.set(0,-0.6,-1.3);
flequillo13.position.set(-25,129.5,-5);
//scene.add(flequillo13);

var esferaflequillo14 = new THREE.SphereGeometry(32,5,20);
var flequillo14 = new THREE.Mesh(esferaflequillo3,colorflequillo);
flequillo14.scale.set(0.5,1,0.5);
flequillo14.rotation.set(0,-0.6,-1.3);
flequillo14.position.set(-25,129.5,0);
//scene.add(flequillo14);

var cabelloatras= new RoundedBoxGeometry(99,40,100,30,100);
var coloratras = new THREE.MeshLambertMaterial({color:0x9CA63C});
var cabellot = new THREE.Mesh(cabelloatras,coloratras);
cabellot.rotation.set(-1.5,0,0);
cabellot.position.set(-0,85,-20);
//scene.add(cabellot);


// OREJA IZQUIERDA
var orejageometria1 = new THREE.ConeGeometry(22,50,20);
var colororeja = new THREE.MeshLambertMaterial({color:0xE5BFA3});
var oreja1 = new THREE.Mesh(orejageometria1,colororeja);
oreja1.scale.set(0.8,1,0.5);
oreja1.rotation.set(-0.25,0.25,1);
oreja1.position.set(-60,110,0);
//scene.add(oreja1);

// OREJA DERECHA
var oreja2 = new THREE.Mesh(orejageometria1,colororeja);
oreja2.scale.set(0.8,1,0.5);
oreja2.rotation.set(0.25,0.25,-1);
oreja2.position.set(60,110,0);
//scene.add(oreja2);

// IRIS OJO IZQUIERDO
var esferairis = new THREE.SphereGeometry(15,28,25);
var coloriris= new THREE.MeshLambertMaterial({color:0x65C902});
var iris1= new THREE.Mesh(esferairis,coloriris);
iris1.scale.set(1,1,0.6);
iris1.position.set(20,85,33);
//scene.add(iris1);

// IRIS OJO DERECHO
var iris2 = new THREE.Mesh(esferairis,coloriris);
iris2.scale.set(1,1,0.6);
iris2.position.set(-20,85,33);
//scene.add(iris2);

// PUPILA OJO IZQUIERDO
var esferapupila = new THREE.SphereGeometry(9,28,25);
var colorpupila= new THREE.MeshLambertMaterial({color:0x080107});
var pupila1= new THREE.Mesh(esferapupila,colorpupila);
pupila1.scale.set(1,1,0.4);
pupila1.position.set(20,85,39);
//scene.add(pupila1);

// PUPILA OJO DERECHO
var pupila2 = new THREE.Mesh(esferapupila,colorpupila);
pupila2.scale.set(1,1,0.4);
pupila2.position.set(-20,85,39);
//scene.add(pupila2);

// BRILLO OJO IZQUIERDO
var esferabrillo1 = new THREE.SphereGeometry(5,10,10);
var colorbrillo = new THREE.MeshLambertMaterial({color:0xffffff});
var brillo1 = new THREE.Mesh(esferabrillo1,colorbrillo);
brillo1.scale.set(1,1,0.4);
brillo1.position.set(-25,88,41);
//scene.add(brillo1);

// BRILLO OJO DERECHO
var brillo2 = new THREE.Mesh(esferabrillo1,colorbrillo);
brillo2.scale.set(1,1,0.4);
brillo2.position.set(25,88,41);
//scene.add(brillo2);

// MEJILLA IZQUIERDA
var esferamejilla1 = new THREE.SphereGeometry(7.5,12,12);
var colormejilla = new THREE.MeshLambertMaterial({color:0xF18F86});
var mejilla1 = new THREE.Mesh(esferamejilla1,colormejilla);
mejilla1.scale.set(1.2,0.9,0.6);
mejilla1.position.set(-25,65,30);
//scene.add(mejilla1);

// MEJILLA DERECHA
var mejilla2 = new THREE.Mesh(esferamejilla1,colormejilla);
mejilla2.scale.set(1.2,0.9,0.6);
mejilla2.position.set(25,65,30);
//scene.add(mejilla2);

// NARIZ
var esferanariz = new THREE.SphereGeometry(5,10,10);
var colornariz = new THREE.MeshLambertMaterial({color:0xD99C83});
var nariz = new THREE.Mesh(esferanariz,colornariz);
nariz.scale.set(1,0.7,0.75);
nariz.position.set(0,75,41);
//scene.add(nariz);

// BOCA
var esferaboca = new THREE.SphereGeometry(6,10,10);
var colorboca = new THREE.MeshLambertMaterial({color:0x9E0B44});
var boca = new THREE.Mesh(esferaboca,colorboca);
boca.scale.set(1.6,0.9,0.4);
boca.position.set(0,61,35);
//scene.add(boca);

var boca1 = new THREE.Mesh(esferaboca,colorboca);
boca1.scale.set(1,0.9,0.6);
boca1.position.set(-2,65,35);
//scene.add(boca1);

var boca2 = new THREE.Mesh(esferaboca,colorboca);
boca2.scale.set(1,0.9,0.6);
boca2.position.set(2,65,35);
//scene.add(boca2);

// CUELLO
var cilindrocuello = new THREE.CylinderGeometry(10,12,25,50);
var colorcuello = new THREE.MeshLambertMaterial({color:0xE5BFA3});
var cuello = new THREE.Mesh(cilindrocuello,colorcuello);
cuello.position.set(0,30,0);
//scene.add(cuello);
// FLOR - CENTRO
var centroflor = new THREE.CylinderGeometry(0.35,0.35,0.2,6);
var colorcentroflor = new THREE.MeshLambertMaterial({color:0xF2D34F});
var centroflor = new THREE.Mesh(centroflor,colorcentroflor);
centroflor.rotation.x = Math.PI/2;
centroflor.position.set(1.8,5.4,1.5);
//scene.add(centroflor);

// PÉTALO SUPERIOR
var petalo = new THREE.SphereGeometry(0.65,10,10);
var colorpetalo = new THREE.MeshLambertMaterial({color:0xE98EAA});
var petalo1 = new THREE.Mesh(petalo,colorpetalo);
petalo1.scale.set(0.8,1,0.3);
petalo1.position.set(1.8,6.05,1.45);
//scene.add(petalo1);

// PÉTALO INFERIOR
var petalo2 = new THREE.Mesh(petalo,colorpetalo);
petalo2.scale.set(0.8,1,0.3);
petalo2.position.set(1.8,4.75,1.45);
//scene.add(petalo2);

// PÉTALO IZQUIERDO
var petalo3 = new THREE.Mesh(petalo,colorpetalo);
petalo3.scale.set(1,0.8,0.3);
petalo3.position.set(1.15,5.4,1.45);
//scene.add(petalo3);

// PÉTALO DERECHO
var petalo4 = new THREE.Mesh(petalo,colorpetalo);
petalo4.scale.set(1,0.8,0.3);
petalo4.position.set(2.45,5.4,1.45);
//scene.add(petalo4);

//🌸AGRUPAR FLOR
var flor= new THREE.Group();
flor.add(petalo4,petalo3,petalo2,petalo1,centroflor);
//scene.add(flor);
flor.scale.set(20,20,20);
flor.position.set(0,12,21);


//AGRUPAR CABEZA

var cabelloellowen= new THREE.Group();
cabelloellowen.add(cabeza,flequillo1,flequillot1,flequillot2,flequillot3,flequillot4,
    flequillot5,flequillot6,flequillot7,flequillo2,flequillos1,flequillos2,flequillos3,
    flequillos4,flequillos5,flequillos6,flequillos7,flequillo3,flequillo4,flequillo5,flequillo6,
    flequillo7,flequillo8,flequillo9,flequillo10,flequillo11,flequillo12,flequillo13,flequillo14,
    cabellot,oreja1,oreja2,iris1,iris2,pupila1,pupila2,brillo1,brillo2,mejilla1,mejilla2,nariz,boca,
    boca1,boca2,cuello
);
//scene.add(cabelloellowen);
cabelloellowen.position.set(0,0,0);

// CUERPO
var esferacuerpo = new THREE.SphereGeometry(32,30,50);
var texturavestido= new THREE.TextureLoader().load("./assets/verde.jpg"); 
var colorvestido = new THREE.MeshLambertMaterial({map:texturavestido});
var cuerpo = new THREE.Mesh(esferacuerpo,colorvestido);
cuerpo.scale.set(1,1,0.9);
cuerpo.position.set(0,-2,0);
//scene.add(cuerpo);

// PARTE SUPERIOR DEL VESTIDO
var cilindrovestido = new THREE.CylinderGeometry(26,38,16,35);
var vestido = new THREE.Mesh(cilindrovestido,colorvestido);
vestido.position.set(0,-17,0);
//scene.add(vestido);

// BOTON SUPERIOR
var esferaboton1 = new THREE.SphereGeometry(4,10,10);
var colorboton = new THREE.MeshLambertMaterial({color:0xE5B52D});
var boton1 = new THREE.Mesh(esferaboton1,colorboton);
boton1.position.set(0,-1,27);
//scene.add(boton1);

// BOTON INFERIOR
var boton2 = new THREE.Mesh(esferaboton1,colorboton);
boton2.position.set(0,9,25);
//scene.add(boton2);

// BRAZO IZQUIERDO
var esferabrazo1 = new THREE.SphereGeometry(15,16,12);
var texturabrazos= new THREE.TextureLoader().load("./assets/mayas.jpg"); 
var colorbrazos = new THREE.MeshLambertMaterial({map:texturabrazos});
var brazo1 = new THREE.Mesh(esferabrazo1,colorbrazos);
brazo1.scale.set(0.65,1.8,0.7);
brazo1.rotation.z=-0.7;
brazo1.position.set(-30,4,0);
//scene.add(brazo1);

// BRAZO DERECHO
var brazo2 = new THREE.Mesh(esferabrazo1,colorbrazos);
brazo2.scale.set(0.65,1.8,0.7);
brazo2.rotation.z = 0.7;
brazo2.position.set(30,4,0);
//scene.add(brazo2);

var brazosup = new THREE.Mesh(esferabrazo1,colorbrazos);
brazosup.scale.set(0.5,1.5,0.6);
brazosup.rotation.z = 0.7;
brazosup.position.set(49,-17,0);
//scene.add(brazosup);

var brazosup1 = new THREE.Mesh(esferabrazo1,colorbrazos);
brazosup1.scale.set(0.5,1.5,0.6);
brazosup1.rotation.z = -0.7;
brazosup1.position.set(-49,-17,0);
//scene.add(brazosup1);

//MANGAS
var cilindromanga = new THREE.CylinderGeometry(3,16,13,35);
var colormanga = new THREE.MeshLambertMaterial({color:0x428057});
var manga = new THREE.Mesh(cilindromanga,colormanga);
manga.rotation.z = -0.7;
manga.position.set(-60,-30,0);
//scene.add(manga);

var manga1 = new THREE.Mesh(cilindromanga,colormanga);
manga1.rotation.z =0.7;
manga1.position.set(60,-30,0);
//scene.add(manga1);

// MANO IZQUIERDA
var esferamano1 = new THREE.SphereGeometry(10,12,12);
var colormano = new THREE.MeshLambertMaterial({color:0xE5BFA3});
var mano1 = new THREE.Mesh(esferamano1,colormano);
mano1.scale.set(0.9,1.2,0.5);
mano1.rotation.z =-0.7;
mano1.position.set(-65,-35,0);
//scene.add(mano1);

// MANO DERECHA
var mano2 = new THREE.Mesh(esferamano1,colormano);
mano2.scale.set(0.8,1.2,0.7);
mano2.rotation.z =0.7;
mano2.position.set(65,-35,0);
//scene.add(mano2);

var dedoi = new THREE.Mesh(esferamano1,colormano);
dedoi.scale.set(0.5,0.5,0.2);
dedoi.rotation.z =0.7;
dedoi.position.set(-75,-32,0);
//scene.add(dedoi);

var dedod = new THREE.Mesh(esferamano1,colormano);
dedod.scale.set(0.5,0.5,0.2);
dedod.rotation.z =0.7;
dedod.position.set(75,-32,0);
//scene.add(dedod);

// FALDA
var esferafalda = new THREE.SphereGeometry(37.5,16,12,1);
var texturafalda= new THREE.TextureLoader().load("./assets/hojitas.jpg"); 
var colorfalda = new THREE.MeshLambertMaterial({map:texturafalda});
var falda = new THREE.Mesh(esferafalda,colorfalda);
falda.scale.set(1.60,1,1.4);
falda.position.set(0,-55,0);
//scene.add(falda);

// PIERNA IZQUIERDA
var cilindropierna1 = new THREE.CylinderGeometry(10,15,70,50);
var texturapierna= new THREE.TextureLoader().load("./assets/mayas.jpg"); 
var colorpierna = new THREE.MeshLambertMaterial({map:texturapierna});
var pierna1 = new THREE.Mesh(cilindropierna1,colorpierna);
pierna1.position.set(-20,-120,0);
//scene.add(pierna1);

// PIERNA DERECHA
var pierna2 = new THREE.Mesh(cilindropierna1,colorpierna);
pierna2.position.set(20,-120,0);
//scene.add(pierna2);

// BOTA IZQUIERDA
var cilindrobota1 = new THREE.CylinderGeometry(19,16,20,50);
var colorbota = new THREE.MeshLambertMaterial({color:0x315C45});
var bota1 = new THREE.Mesh(cilindrobota1,colorbota);
bota1.scale.set(1,1,0.9);
bota1.position.set(-20,-155,0);
//scene.add(bota1);

// BOTA DERECHA
var bota2 = new THREE.Mesh(cilindrobota1,colorbota);
bota2.scale.set(1,1,0.9);
bota2.position.set(20,-155,0);
//scene.add(bota2);

var botafrente = new RoundedBoxGeometry(35,25,65,20,20);
var colorbota = new THREE.MeshLambertMaterial({color:0x315744});
var frente1 = new THREE.Mesh(botafrente,colorbota);
frente1.position.set(-20,-175,10);
//scene.add(frente1);

var frente2 = new THREE.Mesh(botafrente ,colorbota);
frente2.position.set(20,-175,10);
//scene.add(frente2);

// SUELA BOTA IZQUIERDA
var suela = new RoundedBoxGeometry(36,25,70,20,20);
var colorsuela = new THREE.MeshLambertMaterial({color:0x133B06});
var suela1 = new THREE.Mesh(suela,colorsuela);
suela1.scale.set(1,1,0.9);
suela1.position.set(-20,-180,10);
//scene.add(suela1);

var suela2 = new THREE.Mesh(suela,colorsuela);
suela2.scale.set(1,1,0.9);
suela2.position.set(20,-180,10);
//scene.add(suela2);

//AGRUPAR PIERNAS
var piernaizqellowen= new THREE.Group();
piernaizqellowen.add(pierna1,bota1,frente1,suela1);
//scene.add(piernaizqellowen);
piernaizqellowen.position.set(0,0,0);

var piernaderellowen= new THREE.Group();
piernaderellowen.add(pierna2,bota2,frente2,suela2);
//scene.add(piernaderellowen);
piernaderellowen.position.set(0,0,0);


    //CUERPO ELLOWEN
    var ellowen= new THREE.Group();
    ellowen.add(cuerpo,vestido,boton1,boton2,brazo1,brazo2,brazosup,brazosup1,manga,
    manga1,mano1,mano2,dedoi,dedod,falda,flor,piernaizqellowen,piernaderellowen,cabelloellowen);
    //scene.add(ellowen);
    ellowen.position.set(0,250,0);

    ellowen.scale.set(1.1,1.1,1.1);

    // GUARDAR LAS PIERNAS PARA LA ANIMACION
    ellowen.userData.piernas1 = piernaizqellowen;
    ellowen.userData.piernas2 = piernaderellowen;
   
    return ellowen;
}
