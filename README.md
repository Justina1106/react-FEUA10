Nusiklonuoti aplikaciją iš githubo naudoju "git clone https://github.com/rokasandreikenas/react-FEUA10.git"
Pereiti kitą folderį per terminalą "cd folderio_pavadinimas"
Pamatyti visus folderio failus "ls" arba "dir"
"npm create vite" arba "npm create vite@latest"
"npm install" - komanda kuri įrąšo reikalingus modulius t.y. node_modules folderis
"npm run dev" - komanda kuri paleidžia Vite projektą
JSX - Javascript extension (XML) Javascript + HTML
komponento pavadinimas visada iš didžiosios raidės (CamelCase) pvz. arba
komponento ir failo pavadinimas turi sutapti
eslint - taisyklių rinkinys palaikyti kodo tvarką/struktūrą
.gitignore - sąrašas failų/folderių pavadinimų kurie nekeliaus į git
package.json - informacinis failas apie mūsų projektą (node based projektai)
package.json scripts - sąrašas komandų kurias galime leisti projekte
package.json depenedencies - mūsų naudojami moduliai projekte. Įrašius "npm install" žiūrima į dependencies sąrašą ir surašomi node_modules
package.json devDependencies - mūsų naudojami moduliai skirti tik development(programavimui)
node modules sąrašas https://www.npmjs.com/
css reset https://www.joshwcomeau.com/css/custom-css-reset/#our-finished-product-10
"npm install package_name" - įrašo į projektą modulį iš npmjs pvz. "npm install react-icons"
Beautiful CSS box-shadow examples https://getcssscan.com/css-box-shadow-examples
Ternary operators: ? : if else; && if
JSX nepriima if else operatorių, todėl turime naudoti ternary operatorius
"children" prop - parametras paduodas į komponento vidų children
"npm install prop-types" įrašo proptypes biblioteką.
import PropTypes from "prop-types"; importuoja proptypes biblioteką
Button.propTypes = { onClick: PropTypes.func.isRequired, color: PropTypes.strings } panaudoja proptypes
proptypes: number (skaičius), string (tekstas), func (funkcija), node (bet koks elementas), shape (objektas)
elementai turi savo onClick handlerį - funkcija kuri bus iškviesta kai bus nuspaustas elementas <button onClick={() => setValue("labas")}> Say hello
useState hooksas - React aplinkoje naudajamas funkcionalumas duomenims manipuliuoti pvz. const [state, setState] = useState(0);
state yra reikšmė, setState yra update funkcija. Panaudojimas setState("nauja reikšmė")
.map() - iteruoja per elementus ir grąžina naują masyvą. const users = ["Tomas", "Rokas"]; users.map(user =>
{user}
)
useEffect - tuščias dependency masyvas reiškia, kad hooksas suveiks tik vieną kartą pvz. useEffect(() => {}, []);
.map() būtinas key parametras - kiekvienas iteruojamas itemas turi turėti unikalų raktą, kad nustatyti, kurie sąrašo elementai yra pakeisti, atnaujinti ar ištrinti. kokį raktą naudojate (dažniausiai unikalų itemo id)? ar galime naudoti index kaip raktą (nepatartina, nes gali susimaišyti raktai darant edit arba delete)? jeigu neturime id ir negalime naudoti index, tai kokį raktą naudoti?
