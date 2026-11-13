import * as THREE from "./three.module.js";
    import{ RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

export default function Vesper(x,y,z){
    // CARA
    var esfera1 = new THREE.SphereGeometry(5,50,50);
    var color1 = new THREE.MeshLambertMaterial({color:0xFFF8F0});
    var cara = new THREE.Mesh(esfera1,color1);
    //scene.add(cara);
    cara.position.set(0,5,0);
    cara.scale.set(1.05,0.95,0.5);

    // OJO IZQUIERDO
    var cubo1 = new RoundedBoxGeometry(1.55,1.9,1,2,4);
    var color4 = new THREE.MeshLambertMaterial({color:0x6B2028});
    var ojo1 = new THREE.Mesh(cubo1,color4);
    //scene.add(ojo1);
    ojo1.position.set(-1.32,4.35,2);
    ojo1.rotation.set(0,0,1.45);
    ojo1.scale.set(1,0.9,0.5);

    var esfera01 = new THREE.SphereGeometry(1.01,50,50);
    var ojo01 = new THREE.Mesh(esfera01,color4);
    //scene.add(ojo01);
    ojo01.position.set(-1.45,4.5,2);
    ojo01.scale.set(1,0.9,0.4);

    // PUPILA IZQUIERDA
    var esfera4 = new THREE.SphereGeometry(0.65,30,30);
    var color5 = new THREE.MeshLambertMaterial({color:0xFFD66B});
    var pupila1 = new THREE.Mesh(esfera4,color5);
    //scene.add(pupila1);
    pupila1.position.set(-1.3,4.6,2.2);
    pupila1.scale.set(0.8,0.8,0.4);
    
    var esfera04 = new THREE.SphereGeometry(0.65,30,30);
    var pupila01 = new THREE.Mesh(esfera4,color5);
    //scene.add(pupila01);
    pupila01.position.set(-1.6,4,2.2);
    pupila01.scale.set(0.5,0.4,0.4);

        //AGRUPAR OJO DERECHO
        var ojoi = new THREE.Group();
        ojoi.add(ojo01,ojo1,pupila1,pupila01);
        //scene.add(ojoi);
        ojoi.position.set(-0.5,0,0.3);
    
    // OJO DERECHO
    var ojo2 = new THREE.Mesh(cubo1,color4);
    //scene.add(ojo2);
    ojo2.position.set(1.32,4.35,2);
    ojo2.rotation.set(0,0,1.45);
    ojo2.scale.set(-1,0.9,0.5);
    
    var esfera01 = new THREE.SphereGeometry(1.01,50,50);
    var ojo02 = new THREE.Mesh(esfera01,color4);
    //scene.add(ojo02);
    ojo02.position.set(1.45,4.5,2);
    ojo02.scale.set(1,0.9,0.4);

    // PUPILA DERECHA
    var pupila2 = new THREE.Mesh(esfera4,color5);
    //scene.add(pupila2);
    pupila2.position.set(1.3,4.6,2.2);
    pupila2.scale.set(0.8,0.8,0.4);

    var esfera04 = new THREE.SphereGeometry(0.65,30,30);
    var pupila02 = new THREE.Mesh(esfera4,color5);
    //scene.add(pupila02);
    pupila02.position.set(1.6,4,2.2);
    pupila02.scale.set(0.5,0.4,0.4);

        //AGRUPAR OJO DERECHO
        var ojod = new THREE.Group();
        ojod.add(ojo02,ojo2,pupila2,pupila02);
        //scene.add(ojod);
        ojod.position.set(0.5,0,0.3);
    
    // BOCA
    var cubo2 = new RoundedBoxGeometry(1,0.35,0.4,2,0.5);
    var boca = new THREE.Mesh(cubo2,color4);
    //scene.add(boca);
    boca.position.set(0,2.5,2.1);
    boca.scale.set(1,0.5,0.5);

    //CHAPITAS
    var esfera5 = new THREE.SphereGeometry(1.05,50,50);
    var color6 = new THREE.MeshLambertMaterial({color:0xEB9B9B});
    var chapita1 = new THREE.Mesh(esfera5,color6);
    //scene.add(chapita1);
    chapita1.position.set(2.5,3.5,2);
    chapita1.scale.set(0.6,0.6,0.2);
    
    var chapita2 = new THREE.Mesh(esfera5,color6);
    //scene.add(chapita2);
    chapita2.position.set(-2.5,3.5,2);
    chapita2.scale.set(0.6,0.6,0.2);

        //AGRUPAR CARA
        var caraf = new THREE.Group();
        caraf.add(cara,ojoi,ojod,boca,chapita1,chapita2);
        //scene.add(caraf);
        caraf.position.set(0,0,0);
   
    // OREJA IZQUIERDA
    var cilindro1 = new THREE.CylinderGeometry(0.1,2,3,30);
    var color7 = new THREE.MeshLambertMaterial({color:0x690505});
    var oreja1 = new THREE.Mesh(cilindro1,color7);
    //scene.add(oreja1);
    oreja1.position.set(-5,9.5,-0.5);
    oreja1.rotation.set(0,0,0.8);
    
    // OREJA DERECHA
    var oreja2 = new THREE.Mesh(cilindro1,color7);
    //scene.add(oreja2);
    oreja2.position.set(5,9.5,-0.5);
    oreja2.rotation.set(0,0,-0.8);
    
   /// INTERIOR DE LA CAPUCHA
    var esfera3 = new THREE.SphereGeometry(4,50,50);
    var color3 = new THREE.MeshLambertMaterial({color:0x65152D});
    var interior = new THREE.Mesh(esfera3,color3);
    //scene.add(interior);
    interior.position.set(0,3,-0.5);
    interior.scale.set(1.3,1.05,0.5);
   
    // CAPUCHA
    var esfera2 = new THREE.SphereGeometry(5,50,50);
    var color2 = new THREE.MeshLambertMaterial({color:0xE8BFC9});
    var capucha = new THREE.Mesh(esfera2,color2);
    //scene.add(capucha);
    capucha.position.set(0,6,-0.5);
    capucha.scale.set(1.08,0.95,0.5);

    var capucha1 = new THREE.Mesh(esfera2,color2);
    //scene.add(capucha1);
    capucha1.position.set(-3,6,-0.5);
    capucha1.scale.set(1,0.5,0.5);
    capucha1.rotation.set(0,-0.5,0.9);

    var capucha2 = new THREE.Mesh(esfera2,color2);
    //scene.add(capucha2);
    capucha2.position.set(3,6,-0.5);
    capucha2.scale.set(1,0.5,0.5);
    capucha2.rotation.set(0,0.5,-0.9);

    var capucha3 = new THREE.Mesh(esfera2,color2);
    //scene.add(capucha3);
    capucha3.position.set(0,4,-1.8);
    capucha3.scale.set(1.3,1.3,0.58);
    capucha3.rotation.set(0,0,0.8);

    var capa5 = new THREE.Mesh(esfera2,color2);
    //scene.add(capa5);
    capa5.position.set(0,0.5,-1);
    capa5.scale.set(0.9,0.3,0.5);
    capa5.rotation.set(0.5,0,0);
    
        //AGRUPAR CAPUCHA
        var capaGorro = new THREE.Group();
        capaGorro.add(interior,capucha,capucha1,capucha2,capucha3,capa5);
        //scene.add(capaGorro);
        capaGorro.position.set(0,0,0);
   
    // CUERPO
    var cilindro3 = new THREE.CylinderGeometry(3,3.5,6,30);
    var color9 = new THREE.MeshLambertMaterial({color:0x8A183B});
    var cuerpo = new THREE.Mesh(cilindro3,color9);
    //scene.add(cuerpo);
    cuerpo.position.set(0,-4.5,0);
    cuerpo.scale.set(1.1,1,0.8);
    
    // CAPA
    var esfera6 = new THREE.SphereGeometry(4.5,50,50);
    var capa1 = new THREE.Mesh(esfera6,color9);
    //scene.add(capa1);
    capa1.position.set(2,-1,-2);
    capa1.scale.set(0.7,0.3,0.6);

    var capa2 = new THREE.Mesh(esfera6,color9);
    //scene.add(capa2);
    capa2.position.set(-2,-1,-2);
    capa2.scale.set(0.7,0.3,0.6);

    var capa3 = new THREE.Mesh(esfera6,color9);
    //scene.add(capa3);
    capa3.position.set(2.5,-1,1);
    capa3.scale.set(0.5,0.3,0.25);

    var capa4 = new THREE.Mesh(esfera6,color9);
    //scene.add(capa4);
    capa4.position.set(-2.5,-1,1);
    capa4.scale.set(0.5,0.3,0.25);

        //AGRUPAR CAPA SUPERIOR
        var capaArriba = new THREE.Group();
        capaArriba.add(cuerpo,capa1,capa2,capa3,capa3,capa4);
        //scene.add(capaArriba);
        capaArriba.position.set(0,0,0);
   
    // PARTE FRONTAL DE LA CAPA
    var esfera7 = new THREE.SphereGeometry(3.5,40,40);
    var textura01 = new THREE.TextureLoader().load("./assets/capa.png");
    var material1 = new THREE.MeshLambertMaterial({map:textura01});

    //var color11 = new THREE.MeshLambertMaterial({color:0xC52D35});
    var capaFrontal = new THREE.Mesh(esfera7,material1);
    //scene.add(capaFrontal);
    capaFrontal.position.set(0,-5,2);
    capaFrontal.scale.set(0.75,1.32,0.5);
    capaFrontal.rotation.set(-0.2,0,0);

    var capaTreaseo = new THREE.Mesh(esfera7,material1);
    //scene.add(capaTreaseo);
    capaTreaseo.position.set(0,-5.5,-4.5);
    capaTreaseo.scale.set(0.75,1.4,0.5);
    capaTreaseo.rotation.set(0.2,0,0);
   
  // CAPA IZQUIERDA
    var esfera8 = new THREE.SphereGeometry(3,40,40);
    var capaIzq1 = new THREE.Mesh(esfera8,material1);
    //scene.add(capaIzq1);
    capaIzq1.position.set(-3.5,-6,-2);
    capaIzq1.scale.set(0.7,1.40,0.8);

    var capaIzq2 = new THREE.Mesh(esfera8,material1);
    //scene.add(capaIzq2);
    capaIzq2.position.set(-3.2,-5.8,1.5);
    capaIzq2.scale.set(0.7,1.38,0.7);
    capaIzq2.rotation.set(-0.1,0,0);
   
    // CAPA DERECHA
    var capaDer1 = new THREE.Mesh(esfera8,material1);
    //scene.add(capaDer1);
    capaDer1.position.set(3.5,-6,-2);
    capaDer1.scale.set(0.7,1.40,0.8);

    var capaDer2 = new THREE.Mesh(esfera8,material1);
    //scene.add(capaDer2);
    capaDer2.position.set(3.2,-5.8,1.5);
    capaDer2.scale.set(0.7,1.38,0.7);
    capaDer2.rotation.set(-0.1,0,0);

        //AGRUPAR CAPA SUPERIOR
        var capaAbajo = new THREE.Group();
        capaAbajo.add(capaFrontal,capaTreaseo,capaIzq1,capaIzq2,capaDer1,capaDer2);
        //scene.add(capaAbajo);
        capaAbajo.position.set(0,0,0);
   
   // var color12 = new THREE.MeshLambertMaterial({color:0x531329});

   // PIE IZQUIERDO
    var cilindro4 = new THREE.CylinderGeometry(1.5,1,4,30); 
    var pie1 = new THREE.Mesh(cilindro4,color1);
    //scene.add(pie1);
    pie1.position.set(-1.5,-9,0);
    pie1.scale.set(0.8,1,0.8);
   
    // PIE DERECHO
    var pie2 = new THREE.Mesh(cilindro4,color1);
    //scene.add(pie2);
    pie2.scale.set(0.8,1,0.8);
    pie2.position.set(1.5,-9,0);
    
    // PIE LATERAL IZQUIERDO
    var esfera9 = new THREE.SphereGeometry(0.8,30,30);
    var pie3 = new THREE.Mesh(esfera9,color1);
    //scene.add(pie3);
    pie3.position.set(-1.5,-11,0.2);
    pie3.scale.set(1,1.2,0.8);
    pie3.rotation.set(-1.4,0,0);
   
    // PIE LATERAL DERECHO
    var pie4 = new THREE.Mesh(esfera9,color1);
    //scene.add(pie4);
    pie4.position.set(1.5,-11,0.2);
    pie4.scale.set(1,1.2,0.8);
    pie4.rotation.set(-1.4,0,0);
    

        //AGRUPAR PIERNAS
        var pierna01 = new THREE.Group();
        pierna01.add(pie1,pie3);
        //scene.add(pierna01);
        pierna01.position.set(0,0,0);

        var pierna02 = new THREE.Group();
        pierna02.add(pie2,pie4);
        //scene.add(pierna02);
        pierna02.position.set(0,0,0);

        var vesper = new THREE.Group();
        vesper.add(caraf,oreja1,oreja2,capaGorro,capaArriba,capaAbajo,pierna01,pierna02);
        //scene.add(vesper);
        vesper.position.set(0,150,0);

        vesper.scale.set(10, 10, 10);

        // GUARDAR LAS PIERNAS PARA LA ANIMACION
        vesper.userData.piernas1 = pierna01;
        vesper.userData.piernas2 = pierna02;

    return vesper;
}

