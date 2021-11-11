var canhao, imagemDoCanhao
var bolaVerde, bolaVermelha, bolaAzul
var rua, imagemDaRua
var imagemBolaVerde, imagemBolaVermelha, imagemBolaAzul
var fireball, grupoFireball
var nuvem1, nuvem2, nuvem3
var imagemDaNuvem1, imagemDaNuvem2, imagemDaNuvem3
var imagemFireball
var grupoVermelho, grupoVerde, grupoAzul;
var placar = 0;

function preload() {
  imagemDoCanhao = loadAnimation("canhao1.png","canhao2.png");
  imagemDaRua = loadImage("rua.png");
  imagemBolaVermelha = loadImage("bolavermelha.png");
  imagemBolaVerde = loadImage("bolaverde.png");
  imagemBolaAzul = loadImage("bolaazul.png");
  imagemFireball = loadImage("fireball.png");
  imagemDaNuvem1 = loadImage("nuvem1.png");
  imagemDaNuvem2 = loadImage("nuvem2.png");
  imagemDaNuvem3 = loadImage("nuvem3.png");
}

function setup() {
  createCanvas(400, 500);
  canhao = createSprite(200,373,10,10)
  canhao.addAnimation("canhao", imagemDoCanhao)
  canhao.scale = 0.35
  rua = createSprite(200,318,100,60)
  rua.addImage(imagemDaRua)
  rua.scale = 0.40;
  rua.depth = canhao.depth
  canhao.depth = canhao.depth +1; 
  nuvem1 = createSprite(190, 50, 10, 10)
  nuvem1.addImage("nuvem1", imagemDaNuvem1)
  nuvem1.scale = 0,30
  grupoFireball = createGroup()
  grupoVermelho  = createGroup();
  grupoVerde  = createGroup();
  grupoAzul = createGroup();
}

function draw() {
  background(150,230,500);

  text("Placar: " + placar, 150, 20);

  Edge = createEdgeSprites(); 
  
  canhao.bounceOff(Edge)

  if(keyDown(LEFT_ARROW)){
    canhao.x = canhao.x - 9;
  }
  if(keyDown(RIGHT_ARROW)){
    canhao.x = canhao.x + 9;
  }

  canhao.setCollider("rectangle", 0,0,70,70)

  var selecionarBola = Math.round(random(1,3));
  
  if (frameCount % 120 == 0) {
    if (selecionarBola == 1 ) {
      bolaVerde();
    }
    if (selecionarBola == 2 ) {
      bolaAzul();
    }
    if (selecionarBola == 3 ) {
      bolaVermelha();
    }
  }

  if (grupoFireball.isTouching(grupoVermelho)) {
    grupoVermelho.destroyEach();
    grupoFireball.destroyEach();
    placar = placar + 1;
  }
    
    if (grupoFireball.isTouching(grupoVerde)) {
    grupoVerde.destroyEach();
    grupoFireball.destroyEach();
    placar = placar + 3;
  }
    
    if (grupoFireball.isTouching(grupoAzul)) {
      grupoAzul.destroyEach();
      grupoFireball.destroyEach();
    placar = placar + 2;
  }
  
  if (keyWentDown("SPACE")) {
    criarFireball();
    
  }
drawSprites()
    
}

function criarFireball() {
  fireball = createSprite(100, 100, 5, 5);
  fireball.addImage(imagemFireball);
  fireball.x = canhao.x;
  fireball.y = canhao.y - 40;
  fireball.velocityY = -12;
  fireball.lifetime = 100;
  fireball.scale = 0.3;
  fireball.setCollider("circle", -9, -70, 50);
  grupoFireball.add(fireball);
  console.log(grupoFireball)
}

function bolaVermelha() {
  var Vermelho = createSprite(Math.round(random(15, 385)), -10, 10, 10);
  Vermelho.debug = true;
  Vermelho.setCollider("circle", 0, 0, 60);
  Vermelho.addImage(imagemBolaVermelha);
  Vermelho.velocityY = 4;
  Vermelho.lifetime = 150;
  Vermelho.scale = 0.27;
  grupoVermelho.add(Vermelho);
}

function bolaVerde() {
  var Verde = createSprite(Math.round(random(15, 385)), 0, 10, 10);
  Verde.debug = true;
  Verde.setCollider("circle", 0, 0, 60);
  Verde.addImage(imagemBolaVerde);
  Verde.velocityY = 3.5;
  Verde.lifetime = 150;
  Verde.scale = 0.27;
  grupoVerde.add(Verde);
}

function bolaAzul() {
  var Azul = createSprite(Math.round(random(15, 385)), 0, 10, 10);
  Azul.debug = true;
  Azul.setCollider("circle", 0, 0, 60);
  Azul.addImage(imagemBolaAzul);
  Azul.velocityY = 3.5;
  Azul.lifetime = 150;
  Azul.scale = 0.27;
  grupoAzul.add(Azul)
}
