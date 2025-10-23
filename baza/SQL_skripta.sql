create table if not exists korisnik(
korisnik_id int primary key auto_increment,
ime_prezime varchar(50) not null,
slika_korisnika_krug varchar(200) unique, 
slika_korisnika_bez_pozadine varchar(200) unique, 
opis_korisnika varchar(500) not null
);

create table if not exists kategorija (
  kategorija_id int primary key auto_increment,
  naziv_kategorije varchar(50) not null unique
);

create table if not exists recept (
  recept_id int primary key auto_increment,
  naslov_recepta varchar(100) not null,
  opis_recepta varchar(500) not null,
  sastojci_recepta JSON not null,
  vrijeme_pripreme varchar(10) not null,
  datum_objavljivanja_recepta date not null,
  ocjena int(1) not null,
  kategorija_id int not null,
  korisnik_id int not null,
  index korisnik_id_inx(korisnik_id),
  index kategorija_id_inx(kategorija_id),
  foreign key (korisnik_id) references korisnik (korisnik_id) on delete cascade on update cascade,
  foreign key (kategorija_id) references kategorija (kategorija_id) on delete cascade on update cascade
  );

create table if not exists fotografije_recept (
  fotografija_recept_id int primary key auto_increment,
  naziv_slike varchar(100) not null,
  url_slike varchar(200) not null unique,
  recept_id int not null,
  index recept_id_inx(recept_id),
  foreign key (recept_id) references recept (recept_id) on delete cascade on update cascade
);

create table if not exists objava (
  objava_id int primary key auto_increment,
  naslov_objave varchar(100) not null,
  opis_objave varchar(3000) not null,
  datum_objavljivanja_objave date not null,
  korisnik_id int not null,
  index korisnik_id_inx(korisnik_id),
  foreign key (korisnik_id) references korisnik (korisnik_id) on delete cascade on update cascade
  );

create table if not exists fotografije_objava (
  fotografija_objava_id int primary key auto_increment,
  naziv_slike varchar(100) not null,
  url_slike varchar(200) not null unique,
  predstavljajuca_fotografija int(1) not null,
  objava_id int not null,
  index objava_id_inx(objava_id),
  foreign key (objava_id) references objava (objava_id) on delete cascade on update cascade
);
  

insert into korisnik (ime_prezime,slika_korisnika_krug,slika_korisnika_bez_pozadine,opis_korisnika) values
('Lara Larić','Slike/Kuhari/Lara Larić Krug.png','Slike/Kuhari/Lara Larić noBg.png','Lara Larić radila je u različitim dijelovima svijeta kao spisateljica kuharica, kritičarka restorana i novinarka. Napisala je niz vrlo hvaljenih knjiga o klasičnim kuhinjama Bliskog istoka i jugoistočne Azije.'),
('Ante Antić','Slike/Kuhari/Ante Antić Krug.png','Slike/Kuhari/Ante Antić noBg.png', '“Mi smo ono što se događa kada angažirate vrhunski kulinarski talent današnjice da ponovno osmisli hamburger... i zatim primijenite tu nevjerojatnu razinu umjetnosti na sve ostalo što poslužujete. Inzistiramo na istim izvanrednim, kvalitetnim sastojcima i posvećenosti detaljima u kojima uživate u svom omiljeni vrhunski restoran.”'),
('Ana Anić','Slike/Kuhari/Ana Anić Krug.png','Slike/Kuhari/Ana Anić noBg.png', 'Ana donosi svoje recepte pod utjecajem Maroka i Mediterana svjetskoj publici iz svog doma u Jeruzalemu. Ana je gotovo uvijek s ​​ogromnim osmijehom, puca od smijeha i puna je ubojite hrane!'),
('Bobo Bobić','Slike/Kuhari/Bobo Bobić Krug.png','Slike/Kuhari/Bobo Bobić noBg.png', 'Bobo Bobić je odrastao u Izraelu u velikoj kulinarskoj marokanskoj obitelji na farmi punoj hrane bogate okusima i tradicijom svijeta. Bobo je naučila umjetnost marokanskog kuhanja, ukrašavanja i dizajna od svojih roditelja.'),
('Pero Perić','Slike/Kuhari/Pero Perić Krug.png','Slike/Kuhari/Pero Perić noBg.png', 'Kuhar Pero Perić diplomirao je na Kulinarskom institutu Amerike i autor je dviju kuharskih knjiga. Također radi kao konzultant za razvoj restorana i konzultant za razvoj proizvoda u prehrambenoj industriji.');



insert into kategorija (naziv_kategorije) values 
('Juhe'),
('Glavna Jela'),
('Deserti');


insert into recept (naslov_recepta,opis_recepta,sastojci_recepta,vrijeme_pripreme,datum_objavljivanja_recepta,ocjena,korisnik_id,kategorija_id) values 
('Goveđa juha','Ova goveđa juha od rajčice i patlidžana istovremeno je drugačija i bogatog okusa. Pečeno povrće i goveđe kosti pojačavaju okus i čine ovu juhu ukusnom!','["8 plum rajčica", "2 patlidžana", "1 luk", "1 paket goveđih kostiju", "4 žličice soli", "1 pastrnjak", "12 čaša vode", "3 žličice šećera"]','4h', '2022-08-01',3,2,1),
('5-minutna ukusna piletina','Ovaj super-jednostavni recept dat će vam odgovor "To je-super-mogu-ja-imam-recept" - a priprema vam ne oduzima gotovo nimalo vremena','["1 pile izrezano na osmine", "1 luk", "1/2 šalice kečapa", "1/2 šalice smeđeg šećera", "sol", "papar"]', '55min', '2022-09-01',2,1,2),
('Kolač od limuna','Ovo je lijep i ukusan dodatak svakom pladnju za kolače, a može poslužiti i kao desert. Tko je probao, imao je najmanje dva komada!','["2 i 1/2 šalice brašna", "1 i 1/2 šalice šećera"," 3/4 šalice soka od naranče", "2 žličice ekstrakta limuna", "3/4 čaše soka od naranče", "4 jaja"]', '55min', '2022-06-01',1,3,3),
('Juha od gljiva i celera','Brza i ukusna juha!','["6 stabljika celera", "1/2 kg gljivanarezanih na ploške", "6 šalica vode", "3/4 šalice zobi", "sol", "papar"]', '1h', '2022-02-01',5,5,1),
('Juha od krumpira i poriluka','Klasična juha od poriluka, krumpira i luka pirjanih u temeljcu od povrća!','["3 veća poriluka očišćena i narezana", "3 žličice ulja", "3 velika krumpira", "sol", "papar", "4 šalice juhe od povrća", "mladi luk"]', '1h', '2022-01-01',5,4,1),
('Lažni ziti','Ovo je moj Faked Ziti (Pečeni Ziti). Nema cijeđenja i pečenja i najlakše je napraviti za večeru!','["1/2kg tjestenine", "2 šalice punomasnog mlijeka", "1/2 staklenke Gefen Marinara umaka", "200g nasjeckanog sira"]', '55min', '2022-07-01',4,5,2),
('Svakodnevna piletina s kurkumom','Ako je kurkuma glavni u našem ormariću sa začinima, ovo jednostavno i ukusno jelo od piletine s kurkumom je radni konj naših vikenda!','["10 pilećih bataka bez kože", "1 žličica mljevene kurkume", "papar", "luk", "2 žlice svježeg soka od limuna", "3 žlice maslinovog ulja"]', '1h', '2022-04-01',4,1,2),
('Južnjačka pržena piletina','Nevjerojatna pečena piletina s puno okusa!','["4 šalice Gefen sojinog mlijeka", "4 žlice svježeg soka od limuna", "piletina", "uljane repice za prženje", "rajčica", "paprika", "origano"]', '9h', '2022-03-01',4,2,2),
('Sladoledna torta od jagoda','Kombinacija kore kolačića, sladoleda od vanilije i mrvljenog kolačića s okusom jagode čini ovo idealnim desertom!','["24 Golden Oreos ili sendvič kolačića od vanilije", "1 posuda sladoleda od vanilije", "1 kutija želea od jagode", "roza ili crvena prehrambena boja"]', '40min', '2022-02-01',3,3,3),
('Čokoladna torta','Veoma ukusan i sočan kolač','["3/4 šalice ulja", "3 velika jaja", "3/4 šalice kakaa", "1/2 žličice soli", "1/2 šalice soka od naranče", "1 šalica mlijeka"]', '1h', '2022-06-01',5,3,3);

insert into fotografije_recept (naziv_slike,url_slike,recept_id) values
('Goveđa juha 1','Slike/Jela/govedaJuha1.jpg',1),
('Goveđa juha 2','Slike/Jela/govedaJuha2.jpg',1),
('Goveđa juha 3','Slike/Jela/govedaJuha3.jpg',1),
('5min ukusna piletina 1','Slike/Jela/5minUkusnaPiletina1.jpg',2),
('5min ukusna piletina 2','Slike/Jela/5minUkusnaPiletina2.jpg',2),
('5min ukusna piletina 3','Slike/Jela/5minUkusnaPiletina3.jpg',2),
('Kolač od limuna 1','Slike/Jela/kolacOdLimuna1.jpg',3),
('Kolač od limuna 2','Slike/Jela/kolacOdLimuna2.jpg',3),
('Kolač od limuna 3','Slike/Jela/kolacOdLimuna3.jpg',3),
('Juha gljiva celer 1','Slike/Jela/juhaGljivaCeler1.jpg',4),
('Juha gljiva celer 2','Slike/Jela/juhaGljivaCeler2.jpg',4),
('Juha gljiva celer 3','Slike/Jela/juhaGljivaCeler3.jpg',4),
('Juha krumpir poriluk 1','Slike/Jela/juhaKrumpirPoriluk1.jpg',5),
('Juha krumpir poriluk 2','Slike/Jela/juhaKrumpirPoriluk2.jpg',5),
('Juha krumpir poriluk 3','Slike/Jela/juhaKrumpirPoriluk3.jpg',5),
('Lazni ziti 1','Slike/Jela/lazniZiti1.jpeg',6),
('Lazni ziti 2','Slike/Jela/lazniZiti2.jpg',6),
('Lazni ziti 3','Slike/Jela/lazniZiti3.jpg',6),
('Piletina kurkuma 1','Slike/Jela/piletinaKurkuma1.jpg',7),
('Piletina kurkuma 2','Slike/Jela/piletinaKurkuma2.jpg',7),
('Piletina kurkuma 3','Slike/Jela/piletinaKurkuma3.jpg',7),
('Juznjacka piletina 1','Slike/Jela/juznjackaPiletina1.jpg',8),
('Juznjacka piletina 2','Slike/Jela/juznjackaPiletina2.jpg',8),
('Juznjacka piletina 3','Slike/Jela/juznjackaPiletina3.jpg',8),
('Torta jagoda 1','Slike/Jela/tortaOdJagoda1.jpg',9),
('Torta jagoda 2','Slike/Jela/tortaOdJagoda2.jpg',9),
('Torta jagoda 3','Slike/Jela/tortaOdJagoda3.jpg',9),
('Čokoladna torta 1','Slike/Jela/cokoladnaTorta1.jpg',10),
('Čokoladna torta 2','Slike/Jela/cokoladnaTorta2.jpg',10),
('Čokoladna torta 3','Slike/Jela/cokoladnaTorta3.jpg',10);

insert into objava (naslov_objave,opis_objave,datum_objavljivanja_objave,korisnik_id) values 
('Ovo je jedini recept za krafne koji vam je potreban!', '["Je li uopće Hanuka bez sjajne krafne pržene u ulju? Većina bi rekla ne, a mi bismo se složili. Ali također imamo oklijevanje koje dolazi zajedno s njihovom izradom. Zato posvećujemo cijeli članak jednostavnom, klasičnom receptu za krafne bez greške i VISOKO ocijenjenim receptom za krafne na našoj stranici. Ovaj nam recept godinama donosi pozitivne kritike čitatelja, obitelji i prijatelja! To je pravi pobjednik svaki put.", "1. Kvasac otopiti u vodi ili soku, pa sjediniti ostale sastojke. Mijesite tijesto dok ne postane glatko. Ostavite da se diže 30 minuta. 2. Stavite tijesto na dobro pobrašnjenu dasku. Oblikujte kuglice od jednog i pol inča i ostavite da se dižu još 15 minuta. 3. Zagrijte dva i pol cm ulja u dubljoj tavi. Pržite u dubokom ulju, jednom okrećući, dok ne porumene. Ocijediti na upijajućem papiru. 4. Obilno pospite slastičarskim šećerom."]', '2022-01-01', 2),
('Najbolji način da jedete lubenicu ovog ljeta!', '["Voli li vaša obitelj lubenicu? Onda će im se svidjeti ova klasična ljetna poslastica prepuna okusa. To je lubenica posuta solju čili limete i UKUSNA je. Toplina, ljutina i slatkoća voća čine nevjerojatnu kombinaciju! Dobro služi kao prilog, desert ili međuobrok, a tako je osvježavajuće i zabavno.", "Savjet: Odaberite čili u prahu koji ima malo više slatkoće i manje topline. Ako možete pronaći samo alepski ili kajenski papar, samo dodajte manje količine, po ukusu."]', '2022-03-02', 3),
('Je li med zapravo zdrav?', '["Ako jedete med kao zdravu hranu, što jedete kao nezdravu hranu? Med ima aureolu da se smatra “zdravom hranom“. Što hranu čini zdravom? Radna definicija koju volim koristiti jest da neka hrana mora imati zdravstvene dobrobiti da bi bila zdrava. Prilično jednostavno, zar ne? Postoje četiri parametra koja možemo promatrati kako bismo jednostavno identificirali hranu koja našim tijelima donosi bitne hranjive tvari. Prva i najosnovnija mjera iskoristivosti hrane je energija, koju mjerimo jedinicom koja se zove kalorija. Zvuči li vam taj pojam poznato? Energija, iako neophodna za naše zdravlje, općenito se konzumira u prekomjernim količinama u američkoj prehrani i stoga je u zasebnoj kategoriji od ostalih esencijalnih nutrijenata.", "Stoga će se onaj u potrazi za zdravom prehranom obično usredotočiti na to sadrži li hrana vitamine, minerale i hidrataciju.Osim toga, konzumiranje meda pod pretpostavkom da je zdrav riskantan je posao. Pretjerana konzumacija šećera definitivno je povezana s mnogim lošim zdravstvenim ishodima. Pokušaj predstavljanja meda kao zdrave hrane ili tvrdnja da je recept zdrav jer sadrži med kao sastojak uzrokuje mnogo više štete od jednostavnog priznanja da je med vrlo ukusna poslastica i da se prema njoj tako treba i odnositi."]', '2022-03-05', 4),
('Jesu li žitarice za doručak zdrave?', '["Žitarice za doručak su odlična tema, jer doručak je važan obrok. A ponekad to može biti težak obrok. Dakle, zdrava, praktična opcija doručka zvuči kao ostvarenje sna za veliki dio stanovništva koji se bore s pronalaženjem vremena ili inicijative da pripreme i pojedu dobar doručak svaki dan.", "Dakle, ukratko, način da žitarice za doručak učinite dobrim izborom je odabrati žitarice s niskim sadržajem šećera, s puno vlakana i jesti ih kao preljev (veličina male porcije) za drugu, zdraviju hranu. Ili jednostavno posegnite za tvrdo kuhanim jajetom."]', '2023-01-01', 5),
('Što može potaknuti čuda?', '["Nisam rebecin niti vodič za meditaciju. Nakon što sam pristao pisati o temi “Što može donijeti čuda“, zapitao sam se kako sam kvalificiran? Ja sam samo obična žena koja provodi puno vremena ostavljajući online povrate. Dao sam mu malo vremena, znajući da će mi ovaj članak dulje proći u glavi prije nego što ga sastavim. Počeo sam samo razmišljajući, koja je riječ “čudo?“ Hebrejska riječ “nes“, koju prevodimo kao čudo, znači “barjak“. To je poput zastave koja govori: “Ovdje se nešto dogodilo; X označava mjesto; Ovdje primjećujemo Hašema; Nešto se promijenilov“ itd. Razmišljao sam o tome neko vrijeme.", "Kako to “probuditi“, osim čežnjom?, Što je nes nego novi način gledanja na stvari? Pogledaj dvaput. Pogledaj dublje, pogledaj ponovo. Drugi pogled! Baš kao što plamen nije isti plamen iz sekunde u sekundu - on se troši i obnavlja - naša djeca, naše duše, naši odnosi nisu isti iz trenutka u trenutak - ili ne moraju biti. Svakog trenutka možemo ih ponovno pogledati, u novom svjetlu, svježim očima."]', '2023-03-02', 1),
('Što je bolje: smrznuto, sušeno ili konzervirano voće?', '["Svježe, cijelo voće sadrži mnogo hranjivih tvari. Najosnovniji, ali ipak istaknuti, hranjivi sastojak voća su ugljikohidrati – i jednostavni šećeri (kratki šećerni lanci), kao i ugljikohidrati koji su vlakna. Većina voća ne sadrži škrob, te duge lance šećera koji se nalaze u mnogim drugim izvorima ugljikohidrata. Ugljikohidrati koji se nalaze u voću nalaze se u super hranjivom i šarenom paketu hidratacije, vitamina, minerala i fitokemikalija. Nevjerojatno, prekrasne, različite boje prirodnih proizvoda označavaju da sadrže snažan paket hranjivih tvari, a svaka boja povezana je s različitim dobrobitima.", "Iako su različite zdravstvene dobrobiti ovih hranjivih tvari izvan opsega ovog članka, suština je da je dokazano da zamjena voća za drugu hranu u ljudskoj prehrani poboljšava zdravlje srca, crijeva i smanjuje upale. Osim toga, uživanje u slatkoći hrskavog voća jarkih boja može stvarno popraviti raspoloženje!, Kad je voće određeno za zamrzavanje, bere se na vrhuncu svoje zrelosti (kada je nutritivno najbogatije) i odmah se zamrzava, čime se zadržavaju hranjive tvari. Stoga će smrznuto voće općenito imati barem onoliko hranjivih tvari koliko i svježe voće, sve dok nije zaslađeno bez dodataka."]', '2023-02-02', 2);

insert into fotografije_objava (naziv_slike,url_slike,predstavljajuca_fotografija,objava_id) values
('Krafne 1','Slike/Objave/objaveKrafne1.jpg',1,1),
('Krafne 1','Slike/Objave/objaveKrafne2.jpg',1,1),
('Lubenica 1','Slike/Objave/objaveLubenica1.jpg',1,2),
('Lubenica 2','Slike/Objave/objaveLubenica2.jpg',0,2),
('Med 1','Slike/Objave/objaveMed1.jpg',1,3),
('Med 2','Slike/Objave/objaveMed2.jpg',0,3),
('Žitarice 1','Slike/Objave/objaveZitarice1.jpg',1,4),
('Žitarice 2','Slike/Objave/objaveZitarice2.jpg',0,4),
('Čuda 1','Slike/Objave/objaveCuda1.jpg',1,5),
('Čuda 2','Slike/Objave/objaveCuda2.jpg',0,5),
('Smrznuto voće 1','Slike/Objave/objaveSmrznutoVoce1.jpg',1,6),
('Smrznuto voće 1','Slike/Objave/objaveSmrznutoVoce2.jpg',1,6);