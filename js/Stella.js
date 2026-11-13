import * as THREE from "./three.module.js";
    import{ RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

export default function Stella(x,y,z){
    // CABEZA
    var esfera1 = new THREE.SphereGeometry(5,50,50);
    var color1 = new THREE.MeshLambertMaterial({color:0xF4CBB8});
    var mesh = new THREE.Mesh(esfera1,color1);
    //scene.add(mesh);
    mesh.scale.set(1.0,1,0.9);
    mesh.position.set(0,1.5,0);

    // OJO IZQUIERDO
    var color2 = new THREE.MeshLambertMaterial({color:0xFCFCFC});
    var esfera01 = new THREE.SphereGeometry(1.01,50,50);
    var ojo01 = new THREE.Mesh(esfera01,color2);
    //scene.add(ojo01);
    ojo01.position.set(-1.45,4.5,2);
    ojo01.scale.set(1,0.9,0.4);

    var esfera02 = new THREE.SphereGeometry(1.01,50,50);
    var color3 = new THREE.MeshLambertMaterial({color:0x8F6127});
    var ojo001 = new THREE.Mesh(esfera02,color3);
    //scene.add(ojo001);
    ojo001.position.set(-1.55,4.5,2.1);
    ojo001.scale.set(0.65,0.65,0.4);

    // PUPILA IZQUIERDA cafe
    var esfera03 = new THREE.SphereGeometry(0.65,30,30);
    var color4 = new THREE.MeshLambertMaterial({color:0x5A3824});
    var pupila1 = new THREE.Mesh(esfera03,color4);
    //scene.add(pupila1);
    pupila1.position.set(-1.55,4.5,2.31);
    pupila1.scale.set(0.5,0.55,0.4);
    
    //pupila blanca
    var esfera04 = new THREE.SphereGeometry(0.65,30,30);
    var pupila01 = new THREE.Mesh(esfera04,color2);
    //scene.add(pupila01);
    pupila01.position.set(-1.7,4.6,2.3);
    pupila01.scale.set(0.3,0.3,0.4);

        //AGRUPAR OJO DERECHO
        var ojoi = new THREE.Group();
        ojoi.add(ojo01,pupila1,pupila01,ojo001);
        //scene.add(ojoi);
        ojoi.position.set(0,-4.5,2.1);
        ojoi.scale.set(1,1.3,1);
    
    // OJO DERECHO
    var ojo02 = new THREE.Mesh(esfera01,color2);
    //scene.add(ojo02);
    ojo02.position.set(1.45,4.5,2);
    ojo02.scale.set(1,0.9,0.4);

    var ojo002 = new THREE.Mesh(esfera02,color3);
    //scene.add(ojo002);
    ojo002.position.set(1.55,4.5,2.1);
    ojo002.scale.set(0.65,0.65,0.4);

    // PUPILA IZQUIERDA cafe
    var pupila2 = new THREE.Mesh(esfera03,color4);
    //scene.add(pupila2);
    pupila2.position.set(1.55,4.5,2.31);
    pupila2.scale.set(0.5,0.55,0.4);
    
    //pupila blanca
    var pupila02 = new THREE.Mesh(esfera04,color2);
    //scene.add(pupila02);
    pupila02.position.set(1.7,4.6,2.31);
    pupila02.scale.set(0.3,0.3,0.4);

        //AGRUPAR OJO DERECHO
        var ojod = new THREE.Group();
        ojod.add(ojo02,pupila2,pupila02,ojo002);
        //scene.add(ojod);
        ojod.position.set(0,-4.5,2.1);
        ojod.scale.set(1,1.3,1);

    //BOQUITA
    var cubo2 = new RoundedBoxGeometry(1.3,0.5,1,1.5,5);
    var color5 = new THREE.MeshLambertMaterial({color:0xF06C6C});
    var boca1 = new THREE.Mesh(cubo2,color5);
    //scene.add(boca1);
    boca1.position.set(0,-1,3.5);

    //NARIZ
    var esfera6 = new THREE.SphereGeometry(1,50,50);
    var nariz = new THREE.Mesh(esfera6,color1);
    //scene.add(nariz);
    nariz.position.set(0,0,4);
    nariz.scale.set(0.5,0.5,0.5);

    // CUELLO
    var cilindro1 = new THREE.CylinderGeometry(0.8,0.8,1.2,30);
    var cuello = new THREE.Mesh(cilindro1,color1);
    //scene.add(cuello);
    cuello.position.set(0,-3.5,0);

        //AGRUPAR CARA 
        var cara = new THREE.Group();
        cara.add(mesh,ojod,ojoi,boca1,nariz,cuello);
        //scene.add(cara);
        cara.position.set(0,0,0);

    //CABELLO
    var esfera2 = new THREE.SphereGeometry(5,50,50);
    var color6 = new THREE.MeshLambertMaterial({color:0xF6D878});
    var cabello = new THREE.Mesh(esfera2,color6);
    //scene.add(cabello);
    cabello.position.set(0,3,-0.5);
    cabello.scale.set(1.2,1,0.9);
   

    // CHONGO IZQUIERDO
    var esfera3 = new THREE.SphereGeometry(1.8,50,50);
    var chongo1 = new THREE.Mesh(esfera3,color6);
    //scene.add(chongo1);
    chongo1.position.set(-4.5,7,0);

    var chongo2 = new THREE.Mesh(esfera3,color6);
    //scene.add(chongo2);
    chongo2.position.set(-4.5,7,-2.5);

    var chongo3 = new THREE.Mesh(esfera3,color6);
    //scene.add(chongo3);
    chongo3.position.set(-5.8,5,-1);

    // CHONGO DERECHO
    var chongo4 = new THREE.Mesh(esfera3,color6);
    //scene.add(chongo4);
    chongo4.position.set(4.5,7,0);

    var chongo5 = new THREE.Mesh(esfera3,color6);
    //scene.add(chongo5);
    chongo5.position.set(4.5,7,-2.5);

    var chongo6 = new THREE.Mesh(esfera3,color6);
    //scene.add(chongo6);
    chongo6.position.set(5.8,5,-1);

    // FLECO CENTRAL
    var esfera4 = new THREE.SphereGeometry(2,40,40);
    var color06 = new THREE.MeshLambertMaterial({color:0xF6D878});
    var fleco1 = new THREE.Mesh(esfera4,color06);
    //scene.add(fleco1);
    fleco1.position.set(0,4,4.3);
    fleco1.scale.set(0.9,1,0.3);
    fleco1.rotation.set(-0.2,0,0.28);

    // FLECO IZQUIERDO
    var fleco2 = new THREE.Mesh(esfera4,color6);
    //scene.add(fleco2);
    fleco2.position.set(-1.9,4,4);
    fleco2.scale.set(0.7,1,0.2);
    fleco2.rotation.set(-0.2,-0.5,0);

    // FLECO DERECHO
    var fleco3 = new THREE.Mesh(esfera4,color6);
    //scene.add(fleco3);
    fleco3.position.set(1.9,4,4);
    fleco3.scale.set(0.7,1,0.2);
    fleco3.rotation.set(-0.2,0.5,0);

    //LIGAS
    var esfera5 = new THREE.SphereGeometry(2,40,40);
    var color7 = new THREE.MeshLambertMaterial({color:0x315A9B});
    var liga1 = new THREE.Mesh(esfera5,color7);
    //scene.add(liga1);
    liga1.position.set(-4.2,5.5,-1);
    liga1.scale.set(1.8,0.5,1.65);
    liga1.rotation.set(-0.1,0,1);

    var liga2 = new THREE.Mesh(esfera5,color7);
    //scene.add(liga2);
    liga2.position.set(4.2,5.5,-1);
    liga2.scale.set(1.8,0.5,1.65);
    liga2.rotation.set(-0.1,0,-1);

    //ESTRELLAS 
    var color8 = new THREE.MeshLambertMaterial({color:0xFFC014});
    var cono = new THREE.ConeGeometry(4,10,10);

    // punta arriba
    var mesh01 = new THREE.Mesh(cono,color8);
   //scene.add(mesh01);
    mesh01.position.set(0,11,25);

    // punta izquierda
    var mesh02 = new THREE.Mesh(cono,color8);
    //scene.add(mesh02);
    mesh02.position.set(-3,1,25);
    mesh02.rotation.set(0,0,2.5);

    // punta derecha
    var mesh03 = new THREE.Mesh(cono,color8);
    //scene.add(mesh03);
    mesh03.position.set(3,1,25);
    mesh03.rotation.set(0,0,-2.5);

    // punta abajo izquierda
    var mesh04 = new THREE.Mesh(cono,color8);
    //scene.add(mesh04);
    mesh04.position.set(-5,8,25);
    mesh04.rotation.set(0,0,1);

    // punta abajo derecha
    var mesh05 = new THREE.Mesh(cono,color8);
    //scene.add(mesh05);
    mesh05.position.set(5,8,25);
    mesh05.rotation.set(0,0,-1);

        //AGRUPAR ESTRELLA 
        var estrella01 = new THREE.Group();
        estrella01.add(mesh01,mesh02,mesh03,mesh04,mesh05);
        //scene.add(estrella01);
        estrella01.position.set(3,4,-1.3);
        estrella01.scale.set(0.15,0.15,0.15);
        estrella01.rotation.set(-0.2,0.6,0.5);

        var estrella02 = estrella01.clone();
        estrella02.position.set(-3,4,-1);
        //scene.add(estrella02);
        estrella02.scale.set(0.15,0.15,0.15);
        estrella02.rotation.set(-0.2,-0.6,0.5);

        //AGRUPAR CABELLO
        var cabello1 = new THREE.Group();
        cabello1.add(cabello,chongo1,chongo2,chongo3,chongo4,chongo5,chongo6,fleco1,fleco2,fleco3,liga1,liga2,estrella01,estrella02);
        //scene.add(cabello1);
        cabello1.position.set(0,0,0);

    // CUERPO
    var cubo3 = new RoundedBoxGeometry(6,3,4,5,5);
    var hombros = new THREE.Mesh(cubo3,color1);
    //scene.add(hombros);
    hombros.position.set(0,-5.5,0);
    hombros.scale.set(0.98,1,1);

    //VESTIDO BASE
    var color9 = new THREE.MeshLambertMaterial({color:0xB9DDF2});
    var vestido1 = new THREE.Mesh(cubo3,color9);
    //scene.add(vestido1);
    vestido1.position.set(0,-7.25,0);
    vestido1.scale.set(1,2,1.2);

    //PARTE SUPERIOR DEL VESTIDO
    var esfera7 = new THREE.SphereGeometry(2,40,40);
    var color10 = new THREE.MeshLambertMaterial({color:0xC7E8F7});
    var pecho1 = new THREE.Mesh(esfera7,color10);
    //scene.add(pecho1);
    pecho1.position.set(0,-6,1.8);
    pecho1.scale.set(0.4,0.7,0.3);
    
    var pecho2 = new THREE.Mesh(esfera7,color10);
    //scene.add(pecho2);
    pecho2.position.set(1,-6,1.8);
    pecho2.scale.set(0.4,0.6,0.3);
    pecho2.rotation.set(0,0,-0.5);

    var pecho3 = new THREE.Mesh(esfera7,color10);
    //scene.add(pecho3);
    pecho3.position.set(-1,-6,1.8);
    pecho3.scale.set(0.4,0.6,0.3);
    pecho3.rotation.set(0,0,0.5);
    
    // CINTURA 
    var esfera8 = new THREE.SphereGeometry(5.2,40,40);
    var cintura = new THREE.Mesh(esfera8,color7);
    //scene.add(cintura);
    cintura.position.set(0,-9.2,0);
    cintura.scale.set(0.75,0.25,0.68);

    // FALDA ENFRENTE
   // var cilindro = new THREE.CylinderGeometry(3.2,5,3.5,30);
    var esfera8 = new THREE.SphereGeometry(3,40,40);
    var textura01 = new THREE.TextureLoader().load("./assets/nube.png");
    var material1 = new THREE.MeshLambertMaterial({map:textura01});

    
   /* var falda1 = new THREE.Mesh(cilindro,material1);
    //scene.add(falda1);
    falda1.position.set(0,-11,0);
    falda1.scale.set(1.15,1.15,1);*/

    var falda1 = new THREE.Mesh(esfera8,material1);
    //scene.add(falda1);
    falda1.position.set(0,-12,2.5);
    falda1.scale.set(1.15,1.15,1);
   
    // IZQUIERDA
    var falda2 = new THREE.Mesh(esfera8,material1);
    //scene.add(falda2);
    falda2.position.set(-2.3,-12,0.5);
    falda2.scale.set(1.15,1.15,1.3);

    // DERECHA
    var falda3 = new THREE.Mesh(esfera8,material1);
    //scene.add(falda3);
    falda3.position.set(2.3,-12,0.5);
    falda3.scale.set(1.15,1.15,1.3);

    //FALDA ATRAS
    var falda4 = new THREE.Mesh(esfera8,material1);
    //scene.add(falda4);
    falda4.position.set(0,-12,-2.5);
    falda4.scale.set(1.15,1.15,1);

        //AGRUPAR CABELLO
        var vestido = new THREE.Group();
        vestido.add(hombros,vestido1,pecho1,pecho2,pecho3,cintura,falda1,falda2,falda3,falda4);
        //scene.add(vestido);
        vestido.position.set(0,0,0);

    // BRAZO IZQUIERDO
    var cilindro2 = new THREE.CylinderGeometry(0.7,0.5,5.5,30);
    var brazo1 = new THREE.Mesh(cilindro2,color1);
    //scene.add(brazo1);
    brazo1.position.set(-3.8,-6.4,0);
    brazo1.rotation.set(0,0,-0.9);

    // BRAZO DERECHO
    var brazo2 = new THREE.Mesh(cilindro2,color1);
    //scene.add(brazo2);
    brazo2.position.set(3.8,-6.4,0);
    brazo2.rotation.set(0,0,0.9);

    // MANO IZQUIERDA
    var esfera9 = new THREE.SphereGeometry(0.7,30,30);
    var mano1 = new THREE.Mesh(esfera9,color1);
    //scene.add(mano1);
    mano1.position.set(-5.8,-8,0);
    mano1.scale.set(1.5,0.8,0.9);
    mano1.rotation.set(0,0,0.5);

    // MANO DERECHA
    var mano2 = new THREE.Mesh(esfera9,color1);
    //scene.add(mano2);
    mano2.position.set(5.8,-8,0);
    mano2.scale.set(1.5,0.8,0.9);
    mano2.rotation.set(0,0,-0.5);

    //DEDOS DERECHOS
    var cubo4 = new RoundedBoxGeometry(1.1,1.5,1,2,2);
    var dedos1 = new THREE.Mesh(cubo4,color1);
    //scene.add(dedos1);
    dedos1.position.set(6,-8,0.6);
    dedos1.rotation.set(-0.8,0,0.2);
    dedos1.scale.set(0.5,0.5,0.5);

    //DEDOS IZQUIERDOS
    var dedos2 = new THREE.Mesh(cubo4,color1);
   // scene.add(dedos2);
    dedos2.position.set(-6,-8,0.6);
    dedos2.rotation.set(-0.8,0,0.2);
    dedos2.scale.set(0.5,0.5,0.5);

        //AGRUPAR MANOS
        var brazos = new THREE.Group();
        brazos.add(brazo1,brazo2,mano1,mano2,dedos1,dedos2);
        //scene.add(brazos);
        brazos.position.set(0,0,0);

    // PIERNA IZQUIERDA
    var cilindro3 = new THREE.CylinderGeometry(1.2,0.7,4,30);
    var pierna1 = new THREE.Mesh(cilindro3,color1);
    //scene.add(pierna1);
    pierna1.position.set(-1.5,-16,0);

    // PIERNA DERECHA
    var pierna2 = new THREE.Mesh(cilindro3,color1);
    //scene.add(pierna2);
    pierna2.position.set(1.5,-16,0);

    // BOTAS
    var cubo5 = new RoundedBoxGeometry(1.4,1,2,2,0.4);
    var color9 = new THREE.MeshLambertMaterial({color:0x315A9B});
    var bota1 = new THREE.Mesh(cubo5,color7);
    //scene.add(bota1);
    bota1.position.set(-1.5,-20,0.5);
    bota1.scale.set(1,1,1.2);

    var bota2 = new THREE.Mesh(cubo5,color7);
    //scene.add(bota2);
    bota2.position.set(1.5,-20,0.5);
    bota2.scale.set(1,1,1.2);

    var cilindro4 = new THREE.CylinderGeometry(0.7,0.6,2,30);
    var bota3 = new THREE.Mesh(cilindro4,color7);
    //scene.add(bota3);
    bota3.position.set(1.5,-19,0);

    var bota4 = new THREE.Mesh(cilindro4,color7);
    //scene.add(bota4);
    bota4.position.set(-1.5,-19,0);

        //AGRUPAR PIES
        var piernas1 = new THREE.Group();
        piernas1.add(pierna1,bota1,bota4);
        //scene.add(piernas1);
        piernas1.position.set(0,0,0);

        var piernas2 = new THREE.Group();
        piernas2.add(pierna2,bota2,bota3);
        //scene.add(piernas2);
        piernas2.position.set(0,0,0);

    // ALA IZQUIERDA
    var esfera10 = new THREE.SphereGeometry(2,40,40);
    var material = new THREE.MeshLambertMaterial({
        color: 0xBFE3DF,
        transparent:true,
        opacity:0.5});
    var cristal02 = new THREE.Mesh(esfera10,material);
    var ala1 = new THREE.Mesh(esfera10,material);
    //scene.add(ala1);
    ala1.position.set(-3,-5,-2);
    ala1.scale.set(1.2,0.5,0.15);
    ala1.rotation.set(0,0,-0.25);

    var ala01 = new THREE.Mesh(esfera10,material);
    //scene.add(ala01);
    ala01.position.set(-2.5,-6,-2);
    ala01.scale.set(0.75,0.5,0.15);
    ala01.rotation.set(0,0,-0.27);

    // ALA DERECHA
    var ala2 = new THREE.Mesh(esfera10,material);
    //scene.add(ala2);
    ala2.position.set(3,-5,-2);
    ala2.scale.set(1.2,0.5,0.15);
    ala2.rotation.set(0,0,0.25);

    var ala02 = new THREE.Mesh(esfera10,material);
    //scene.add(ala02);
    ala02.position.set(2.5,-6,-2);
    ala02.scale.set(0.75,0.5,0.15);
    ala02.rotation.set(0,0,-0.27);

        //AGRUPAR PIES
        var alas = new THREE.Group();
        alas.add(ala01,ala02,ala1,ala2);
        //scene.add(alas);
        alas.position.set(0,0,0);


        //AGRUPAR PERSONAJE
        var stella = new THREE.Group();
        stella.add(cara,cabello1,vestido,brazos,piernas1,piernas2,alas);
        //scene.add(stella);
        stella.position.set(0,250,0);
        stella.scale.set(10,10,10);

        stella.userData.piernas1 = piernas1;
        stella.userData.piernas2 = piernas2;    

    return stella;
}
