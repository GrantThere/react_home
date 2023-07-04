import './App.css';
import Simpson from "./components/simpson/simpson";
import CharFromRick from "./components/ricksChar/charFromRick";


function App() {
    const simFam = [
        {
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];
    const characterR = {id:671,
                        name:"New Improved Galactic Federation Guard",
                        status:"Dead","species":"Alien",
                        type:"Gromflomite",
                        gender:"Male",
                        origin:{  "name":"Gromflom Prime",
                                    "url":"https://rickandmortyapi.com/api/location/19"},
                        location:{name:"NX-5 Planet Remover",
                                    url:"https://rickandmortyapi.com/api/location/105"},
                                    image:"https://rickandmortyapi.com/api/character/avatar/671.jpeg",
                                    episode:["https://rickandmortyapi.com/api/episode/41"],
                                    url:"https://rickandmortyapi.com/api/character/671",
                                    created:"2020-08-13T12:57:08.113Z"};
  return (
      <>
        <Simpson name={simFam[0].name} surname={simFam[0].surname} age={simFam[0].age} sex={'male'} info={simFam[0].info} photo={simFam[0].photo}/>
        <Simpson name={simFam[1].name} surname={simFam[1].surname} age={simFam[1].age} sex={'male'} info={simFam[1].info} photo={simFam[1].photo}/>
        <Simpson name={simFam[2].name} surname={simFam[2].surname} age={simFam[2].age} sex={'female'} info={simFam[2].info} photo={simFam[2].photo}/>
        <Simpson name={simFam[3].name} surname={simFam[3].surname} age={simFam[3].age} sex={'female'} info={simFam[3].info} photo={simFam[3].photo}/>
        <Simpson name={simFam[4].name} surname={simFam[4].surname} age={simFam[4].age} sex={'female'} info={simFam[4].info} photo={simFam[4].photo}/>
        <CharFromRick
            id={characterR.id}
            name={characterR.name}
            status={characterR.status}
            type={characterR.type}
            gender={characterR.gender}
            alt={characterR.origin.name}
            image={characterR.image}
        />
      </>
  );
}

export default App;
