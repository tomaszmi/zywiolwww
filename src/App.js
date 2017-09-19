import React, { Component } from 'react';
import './App.css';
import { Tab, Image, Row, Col, Grid, Nav, NavItem, NavDropdown, MenuItem, Panel, Accordion, Well, Table, Media, Thumbnail} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import ReactTooltip from 'react-tooltip'
import { SocialIcon } from 'react-social-icons';
//import ReactSVG from 'react-svg'

//-------------------------------------------------------------------------------

function SocialProfiles(props) {
    return (
        <SocialIcon url="https://www.facebook.com/zywiol.obornikislaskie/"/>
    )
}

//-------------------------------------------------------------------------------

function Start(props) {
    return (
        <div>
            <h4>
                <b>Żywioł</b>
            </h4>
            <p>To autorska szkoła społeczna, w której dzieci edukują się zgodnie ze swoimi naturalnymi potrzebami, odkrywając swój własny żywioł.</p>
            <br/>
            <br/>
            <svg version="1.1"
                baseProfile="full"
                width="100%" height="100%"
                viewBox="0, 0, 1000, 360"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g data-tip="Chcemy uczyć dążenia do celu poprzez współpracę, a nie rywalizację">
                    <circle cx={140} cy={90} r={80} fill="#2873B9" opacity="0.7"/>
                    <text x="100" y="80" text-anchor="middle" fill="white">współpraca
                        <tspan x="110" y="100" text-anchor="middle" fill="white">zamiast</tspan>
                        <tspan x="100" y="120" text-anchor="middle" fill="white">rywalizacji</tspan>
                    </text>
                </g>
                <g data-tip="Bazujemy na motywacji wewnętrznej (chęci poznania, chęci realizacji swoich potrzeb), a nie zewnętrznej (ocen, kar i nagród)">
                    <circle cx={220} cy={210} r={70} fill="#FBBB25" opacity="0.7"/>
                    <text x="180" y="200" text-anchor="middle" fill="white">motywacja
                        <tspan x="180" y="220" text-anchor="middle" fill="white">wewnętrzna</tspan>
                    </text>
                </g>
                <g data-tip="Chcemy, aby było go tak dużo, jak tylko się da. Inspirujemy się szkołami i przedszkolami leśnymi">
                    <circle cx={300} cy={120} r={60} fill="#9EC428" opacity="0.7"/>
                    <text x="275" y="110" text-anchor="middle" fill="white">kontakt
                        <tspan x="275" y="130" text-anchor="middle" fill="white">z naturą</tspan>
                    </text>
                </g>
                <g data-tip="Zajecia projektowe">
                    <circle cx={300} cy={290} r={50} fill="#EE7B8D" opacity="0.7"/>
                    <text x="280" y="280" text-anchor="middle" fill="white">zajęcia 
                        <tspan x="260" y="300" text-anchor="middle" fill="white">projektowe</tspan>
                    </text>
                </g>
                <g data-tip="Chcemy, aby ruch fizyczny był narzędziem na niemal każdych zajęciach">
                    <circle cx={380} cy={240} r={50} fill="#56C0D3" opacity="0.7"/>
                    <text x="360" y="230" text-anchor="middle" fill="white">dużo
                        <tspan x="360" y="250" text-anchor="middle" fill="white">ruchu</tspan>
                    </text>
                </g>
                <g data-tip="Chcemy pracować nad tym, aby porozumienie bez przemocy stało się naszym językiem codziennym">
                    <circle cx={420} cy={100} r={70} fill="#FBBB25" opacity="0.7"/>
                    <text x="380" y="90" text-anchor="middle" fill="white">porozumienie
                        <tspan x="380" y="110" text-anchor="middle" fill="white">bez przemocy</tspan>
                        <tspan x="400" y="130" text-anchor="middle" fill="white">(NVC)</tspan>
                    </text>
                </g>
                <g data-tip="Brak prac domowych">
                    <circle cx={520} cy={170} r={60} fill="#2873B9" opacity="0.7"/>
                    <text x="490" y="160" text-anchor="middle" fill="white">brak prac
                        <tspan x="490" y="180" text-anchor="middle" fill="white">domowych</tspan>
                    </text>
                </g>
                <g data-tip="Brak testów i klasówek">
                    <circle cx={540} cy={280} r={60} fill="#9EC428" opacity="0.7"/>
                    <text x="500" y="270" text-anchor="middle" fill="white">brak testów
                        <tspan x="505" y="290" text-anchor="middle" fill="white">i klasówek</tspan>
                    </text>
                </g>
                <g data-tip="Chcemy, aby dzieci traktowane były podmiotowo, a relacje pomiędzy dorosłymi a dziećmi były partnerskie i oparte na zaufaniu, a nie hierarchii">
                    <circle cx={580} cy={90} r={50} fill="#C069A6" opacity="0.7"/>
                    <text x="550" y="95" text-anchor="middle" fill="white">szacunek</text>
                </g>
                <g data-tip="Chcemy, aby rozwój dotyczył nie tylko intelektu, ale też emocji i relacji społecznych">
                    <circle cx={670} cy={160} r={70} fill="#56C0D3" opacity="0.7"/>
                     <text x="630" y="140" text-anchor="middle" fill="white">harmonijny
                        <tspan x="645" y="160" text-anchor="middle" fill="white">rozwój</tspan>
                        <tspan x="640" y="180" text-anchor="middle" fill="white">dziecka</tspan>
                    </text>
                </g>
                <g data-tip="Chcemy, aby było to miejsce dzieci, rodziców i nauczycieli">
                    <circle cx={770} cy={90} r={60} fill="#FBBB25" opacity="0.7"/>
                    <text x="745" y="80" text-anchor="middle" fill="white">szkoła
                        <tspan x="735" y="100" text-anchor="middle" fill="white">społeczna</tspan>
                    </text>
                </g>
                <g data-tip="Wierzymy, że świat otwartych i tolerancyjnych dzieci byłby światem bez wojen">
                    <circle cx={790} cy={200} r={60} fill="#9EC428" opacity="0.7"/>
                    <text x="755" y="190" text-anchor="middle" fill="white">tolerancja
                        <tspan x="755" y="210" text-anchor="middle" fill="white">i otwartość</tspan>
                    </text>
                </g>

                <g data-tip="Indywidualne podejście">
                    <circle cx={720} cy={290} r={60} fill="#C069A6" opacity="0.7"/>
                    <text x="675" y="285" text-anchor="middle" fill="white">indywidualne
                        <tspan x="685" y="305" text-anchor="middle" fill="white">podejście</tspan>
                    </text>
                </g>

                <g data-tip="Chcemy, aby edukacja była wspaniałą przygodą">
                    <circle cx={860} cy={270} r={50} fill="#2873B9" opacity="0.7"/>
                    <text x="830" y="270" text-anchor="middle" fill="white">przygoda</text>
                </g>
                <g data-tip="Wartościowe, sezonowe, lokalne i smaczne">
                    <circle cx={870} cy={60} r={50} fill="#EE7B8D" opacity="0.7"/>
                    <text x="845" y="50" text-anchor="middle" fill="white">zdrowe
                        <tspan x="835" y="70" text-anchor="middle" fill="white">odżywianie</tspan>
                    </text>
                </g>
            </svg>
            <ReactTooltip/>
            <p><i><b>Żywioł</b> to miejsce, w którym to, co kochamy robić spotyka się z tym, w czym jesteśmy dobrzy.</i></p>
            <p>Ken Robinson (“Uchwycić żywioł. O tym, jak znalezienie pasji zmienia wszystko”).</p>
        </div>
    )
}

//-------------------------------------------------------------------------------

function Warsztaty(props) {
    return (
        <div>
            <p>
                <a href="/docs/zywiol-zajecia_popoludniowe.pdf">Opis zajęć popołudniowych</a>
            </p>
            <p><a href="https://warsztaty.zywiol.edu.pl/">Rejestracja on-line</a></p>
        </div>
    )
}

//-------------------------------------------------------------------------------

function Zapisy(props) {
    return (
        <div>
            <h3>Zapisy</h3>
<p>
Obecnie prowadzimy nabór do klas 0-5
</p>
<p>
Przyjmujemy także zapisy na zajęcia całodniowe oraz popołudniowe (poszkolne) - <a href="/docs/zywiol-zajecia_popoludniowe.pdf">zobacz załącznik</a>.
</p>
<p>
Dzieci uczące się w Żywiole w formie całodniowej uczą się w ramach realizacji obowiązku szkolnego poza szkołą zgodnie z art. 16 ust. 8 Ustawy o Systemie Oświaty.
Oznacza to, że zapisane są do zaprzyjaźnionej z nami szkoły macierzystej, która wydaje świadectwa i przeprowadza coroczny egzamin z wypełniania podstawy programowej MEN.
Oferujemy pomoc z wszelkimi formalnościami.
</p>
<p>
Dzieci dochodzące do nas popołudniami dołączają po czasie spędzonym w swojej szkole. Wówczas dodatkowe formalności nie są konieczne.
</p>
<p>
Pierwszym krokiem w rekrutacji jest kontakt. Napisz na adres: <a href="mailto:kontakt@zywiol.edu.pl">kontakt@zywiol.edu.pl</a>, pozostaw kontakt, w tym nr telefonu, a my zadzwonimy, umówimy się na spotkanie, w czasie którego porozmawiamy o wzajemnych oczekiwaniach i pomożemy przeprowadzić Was przez proces rekrutacji.
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Cennik(props) {
    return (
        <div>
            <h3>Cennik</h3>
            <Table striped condensed hover>
                <tbody>
                    <tr>
                        <td>700 zł</td>
                        <td>Podstawowe czesne dla dzieci całodziennych</td>
                    </tr>
                    <tr>
                        <td>500 zł</td>
                        <td>Obniżone czesne dla dzieci całodziennych (skontaktuj się z nami, powiemy więcej)</td>
                    </tr>
                    <tr>
                        <td>500 zł</td>
                        <td>Podstawowe czesne dla dzieci uczęszczających na zajęcia popołudniowe (po godzinie 13)</td>
                    </tr>
                    <tr>
                        <td>400 zł</td>
                        <td>Promocyjne czesne dla dzieci uczęszczających na zajęcia popołudniowe <b>we wrześniu</b></td>
                    </tr>
                    <tr>
                        <td>500 zł / 400 zł</td>
                        <td>Jednorazowe wpisowe (dzieci dzienne / zajęcia popołudniowe)</td>
                    </tr>
                    <tr>
                        <td>80 zł</td>
                        <td>Abonament na pojedyncze zajęcia (czyli jeden warsztat co tydzień)</td>
                    </tr>
                    <tr>
                        <td>25 zł</td>
                        <td>Udział w pojedynczych zajęciach popołudniowych</td>
                    </tr>
                </tbody>
            </Table>
            <p>
                <a href="/docs/zywiol-zajecia_popoludniowe.pdf">Zobacz opis zajęć popołudniowych.</a>
            </p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function HelpUs(props) {
    return (
        <div>
            <h3>Zaangażuj się</h3>
            <p>
Szkoła Autorska Żywioł nie jest punktem usługowym, ale miejscem budującym społeczność. Dlatego też zachęcamy rodziców do zaangażowania się w tworzenie tej inicjatywy. Niektórzy, posiadający dobry kontakt z dziećmi i indywidualne talenty, zapraszani są do prowadzenia warsztatów, inni do pomocy w organizacji wycieczek czy codziennego wsparcia szkoły w inny sposób. Ci, którym czas na to nie pozwala, zapraszani są do stałego kontaktu, tak żeby dziecko mogło rozwijać się swobodnie i harmonijnie. Raz na jakiś czas organizujemy dla rodziców wykłady i szkolenia, w trakcie których mogą się oni dowiedzieć co robić, aby wspierać szeroko rozumiany rozwój dziecka.
            </p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Downloads(props) {
    return (
        <div>
            <h3>Pliki do pobrania</h3>
            <ul>
                <li><p><a href="/docs/zywiol-zajecia_popoludniowe.pdf">Opis zajęć popołudniowych</a></p></li>
                <li><p><a href="/docs/zywiol-informacje_o_dziecku.pdf">Informacje o dziecku</a></p></li>
                <li><p><a href="/docs/zywiol-regulamin.pdf">Regulamin Autorskiej Szkoły <b>Żywioł</b></a></p></li>
                <li><p><a href="/docs/fundacja_drzewo-statut.pdf">Statut Fundacji <b>Drzewo</b></a></p></li>
                <li><p><a href="/docs/fundacja_drzewo-KRS.pdf">Fundacja <b>Drzewo</b> - KRS, wyciąg z sądu</a></p></li>
            </ul>
        </div>
    );
}

//-------------------------------------------------------------------------------

function PlanDnia(props) {
    return (
        <div>
            <h3>Plan dnia</h3>
<p>
<Image src="/img/zywiol_plan_dnia.jpg" rounded/>
</p>
<p>
Żywioł otwarty jest od 8 do 17.
</p>
<p>
Pierwsze półtorej godziny to czas na swobodną integrację, gdzie w swobodnej atmosferze powoli wchodzimy w dzień. Jest to też czas na spóźnienia, tak, żeby nie zaczynać dnia od niepotrzebnego pośpiechu, oraz na wymianę informacji pomiędzy rodzicami a nauczycielami.
</p>
<p>
Do 13 prowadzimy zajęcia wynikające z podstawy programowej, a więc zajmujemy się przyrodą, matematyką, językiem, językami obcymi. Oczywiście, jak wszędzie, wykorzystujemy tu aktywne metody nauczania, w tym metodę projektową, czy metody Montessori w młodszych klasach.
</p>
<p>
Po obiedzie, a więc od 14 do 17, prowadzimy zajęcia warsztatowe. W tej części chodzi o wyszukiwanie talentów dzieci i wykorzystywanie talentów otaczających nas ludzi. Zapraszamy różnorodnych warsztatowców, mających znakomity kontakt z dziećmi i pasję, którą potrafią się dzielić. <a href="/docs/zywiol-zajecia_popoludniowe.pdf">Zobacz opis zajęć popołudniowych</a>.
</p>
<p>
Raz w tygodniu wyjeżdżamy lub wychodzimy poza szkołę – jedziemy na rowerową wyprawę do lasu, odwiedzamy ciekawe miejsca w okolicy, wizytujemy Narodowe Forum Muzyki, Teatr Lalek, Humanitarium czy Ogród Botaniczny we Wrocławiu i realizujemy wiele innych pomysłów, które można zrealizować w najbliższej okolicy.
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Aktualnosci(props) {
    return (
        <div>
            <h3>Aktualności</h3>
<p>
    <b><a href="http://nowagazeta.pl/2017/07/zywiol-szkola-bez-lawek/">Żywioł - szkoła bez ławek</a></b> - przeczytaj artykuł o naszej szkole opublikowany w gazecie Nowa.
</p>
<p>
    Zapraszamy do zapoznania się z ubiegłymi i nadchodzącymi wydarzeniami na naszym profilu Facebook: <br/><a href="https://pl-pl.facebook.com/zywiol.obornikislaskie/">https://pl-pl.facebook.com/zywiol.obornikislaskie/</a>
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Miejsce(props) {
    return (
        <div>
            <h3>Miejsce</h3>
            <p>
                <a href="https://www.google.pl/maps/place/%C5%BBywio%C5%82/@51.2971011,16.9254947,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x470f927834420d91:0x2ffa71c9b58b57ef!2s55-120+Oborniki+%C5%9Al%C4%85skie!3b1!8m2!3d51.3009866!4d16.9148091!3m4!1s0x470f9280fe9796bd:0x2b1ac88528785113!8m2!3d51.2971011!4d16.9260419">Ul. Wita Stwosza 6, Oborniki Śląskie</a><br/>
                I piętro, w tym samym budynku co Papugarnia
            </p>
            <p>
Zajęcia będą odbywały się także regularnie poza budynkiem szkoły m.in. w <a href="https://minizoogaja.wordpress.com">MiniZoo</a> w <a href="https://www.google.pl/maps/place/Mini+Zoo+Gaja/@51.2582262,16.9277616,17z/data=!3m1!4b1!4m5!3m4!1s0x470f93ad42199607:0xf0f0b6cde5759ea1!8m2!3d51.2582229!4d16.9299504">Golędzinowie</a> oraz w okolicznych obornickich lasach.
            </p>
            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail href="https://minizoogaja.wordpress.com" alt="171x180" src="/img/zywiol-minizoo_gaja.jpg" />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src="/img/zywiol-w_lesie.jpg" />
                    </Col>
                </Row>
            </Grid>
            <p><br/><br/><br/></p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function MetodyEdukacyjne(props) {
    return (
        <div>
            <h3>Metody edukacyjne</h3>
<p>
    <br/>
<Accordion>
    <Panel header="Metodologia" eventKey="1">
        <p>
            Metody edukacyjne wykorzystywane w Szkole Autorskiej Żywioł wynikają z doświadczenia edukatorów i nauczycieli pracujących wg niekonwencjonalnych metod, takich jak <b>szkoły Montessori</b>, <b>pedagogika waldorfska</b>, <b>szkoły wolnościowe</b>, czy <b>szkoły demokratyczne</b>. Ich spostrzeżenia, że dzieci uczą się szybciej, gdy zapewni się im swobodę poznawczą, potwierdzone zostały rozwijającą się w ciągu ostatnich 15 lat naukami związanymi z poznawaniem pracy mózgu, zwanymi ogólnie <b>Neuronaukami</b>, wśród których bardzo ważne miejsce zajmuje <b>Neurodydaktyka</b>.
        </p>
        <p>
            Żywioł jest <b>przestrzenią edukacyjną wolną od oceniania</b>. Nie tracimy czasu na robienie klasówek, wystawianie ocen, sprawdzanie listy obecności i prac domowych. Zamiast tego elastycznie dostosowujemy się do potrzeb dzieci.
        </p>
        <p>
            U młodszych uczniów (klasy 0-2) wprowadzamy <b>ogólnorozwojową edukację</b> nastawioną na umiejętności związane z językiem polskim (zaciekawienie dziecięcą literaturą jako podstawa nauki czytania i pisania), angielskim (nauka komunikacji poprzez kontakt z gośćmi z zagranicy), matematyką (w oparciu o naturalne poznawanie wyobrażeniowe – np. metodę Montessori), przyrodę (głównie jako kontakt i poznawanie otaczającego nas świata poza szkołą), plastykę (poprzez swobodne wyrażanie swoich pomysłów różnorodnymi metodami plastycznymi).
        </p>
        <p>
            U starszych dzieci wprowadzamy <b>metodę projektową</b>, co oznacza, że badamy bardzo szerokie spektrum danego zagadnienia, włączając w to wiele klasycznych przedmiotów szkolnych i akademickich. Jeden z przykładów wykorzystania metody projektowej dla hasła woda można zobaczyć poniżej.
        </p>
        <p>
            <Image src="/img/projekt-woda-autorska-szkola-zywiol.jpg" rounded/>
        </p>
    </Panel>
    <br/>
    <Panel header="Miejsce dziecka w szkole" eventKey="2">
        <Well>
            <b>SWOBODA</b> – brak przymusu uczestnictwa w zajęciach i papierek lakmusowy mówiący nam, czy dany nauczyciel sprawdza się w swojej roli.
        </Well>
        <Well>
            <b>DBANIE O RÓŻNE ZDOLNOŚCI</b> – zauważamy, że dzieci są różne i że w różnych rzeczach są dobre. Korzystamy z tych zdolności i rozwijamy je.
        </Well>
        <Well>
            <b>ROZUMIENIE ZRÓŻNICOWANYCH CHARAKTERÓW</b> – dzieci to całe spektrum od ekstrawertyzmu do introwertyzmu. Nie jest to skala jakości – introwertycy mogą wnieść do zespołu wartości, które dla ekstrawertyków będą nieosiągalne i odwrotnie.
        </Well>
        <Well>
            <b>BRAK SZTYWNEGO PODZIAŁU NA GRUPY WIEKOWE</b> – nie porównujemy dzieci wg. daty produkcji, uczymy się od siebie
        </Well>
        <Well>
            <b>KRYTYCZNE, SAMODZIELNE MYŚLENIE</b>
        </Well>
    </Panel>
    <br/>
    <Panel header="W trakcie zajęć" eventKey="3">
        <Well><b>INTERDYSCYPLINARNOŚĆ</b> – zajęcia łączą przedmioty.</Well>
        <Well><b>KORZYSTANIE ZE WSZYSTKICH ZMYSŁÓW, NAUKA PRZEZ RUCH, DUŻA AKTYWNOŚĆ FIZYCZNA</b>.</Well>
        <Well><b>UCZENIE SIĘ NA PRZYKŁADACH</b> – stawiamy na to, że nie trzeba bezmyślnie uczyć się na pamięć definicji, żeby poznać istotę otaczającej nas rzeczywistości.</Well>
        <Well><b>UCZENIE SIĘ W PRAKTYCE</b> – np. matematyka przy obliczaniu zapotrzebowania na drewno do wykonania budki dla ptaków.</Well>
        <Well><b>PRACA W GRUPACH</b> – z wykorzystaniem różnorodnych zdolności dzieci.</Well>
        <Well><b>BRAK OCEN</b> – w szczególności ocen wartościujących.</Well>
        <Well><b>BRAK DZWONKÓW</b>.</Well>
        <Well><b>BRAK PRAC DOMOWYCH</b> – chyba że dzieci same sobie coś zaplanują.</Well>
        <Well><b>BRAK KLASÓWEK</b> – „trawa nie rośnie szybciej gdy się ją mierzy”.</Well>
    </Panel>
    <br/>
    <Panel header="Dobór zajęć" eventKey="4">
<Well><b>ELASTYCZNOŚĆ</b> – zmiana programu zajęć może nastąpić nawet w ich trakcie.</Well>
<Well><b>DBANIE O PODSTAWĘ PROGRAMOWĄ</b> – tak, aby dzieci nie miały problemu z egzaminami.</Well>
<Well><b>PROJEKTY</b> – przy współpracy z dziećmi i rodzicami.</Well>
<Well><b>DOŁADOWANIE ANGIELSKIEGO</b> – aby późniejsze zajęcia (np. przyrodnicze) można było przeprowadzać po angielsku.</Well>
    </Panel>
    <br/>
    <Panel header="Samodzielność, odpowiedzialność" eventKey="5">
<Well><b>ZDROWE ŻYWIENIE</b></Well>
<Well><b>WSPÓLNE PRZYGOTOWYWANIE POSIŁKÓW</b></Well>
<Well><b>WSPÓLNE SPRZĄTANIE</b> – branie odpowiedzialności za swoją przestrzeń</Well>
    </Panel>
    <br/>
    <Panel header="Ucząca się społeczność" eventKey="6">
<Well><b>DOSZKALANIE SIĘ NAUCZYCIELI</b></Well>
<Well><b>DOSZKALANIE SIĘ RODZICÓW</b></Well>
<Well><b>NAUCZYCIEL JAKO PRZEWODNIK (TUTOR), NIE DAWCA WIEDZY</b></Well>
<Well><b>WYKORZYSTYWANIE DOŚWIADCZEŃ I UMIEJĘTNOŚCI RODZICÓW</b></Well>
    </Panel>
</Accordion>
</p>
<br/>
<p>
Edukacja realizowana będzie w ramach realizacji obowiązku szkolnego poza szkołą (potocznie zwanej edukacją domową) z godnie art.16 ust. 8 i następne Ustawy o systemie oświaty.
Oznacza to, że dziecko zapisane jest do szkoły publicznej (lub niepublicznej na prawach publicznej) i w niej dostaje legitymację oraz świadectwo.
Ta szkoła macierzysta co roku organizuje egzamin z podstawy programowej (od 1 klasy - w zerówce egzamin nie obowiązuje).
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Zespol(props) {
    return (
        <div>
            <h3>Nasz zespół</h3>
            <br/>
            <Media>
                <Media.Left>
                    <img width={256} height={256} src="/img/zywiol-Borys_Binkowski.jpg" alt="Borys Bińkowski"/>
                </Media.Left>
                <Media.Body>
                    <p>
Starsza grupa prowadzona będzie przez <b>Borysa Bińkowskiego</b>, doktora geografii Uniwersytetu Wrocławskiego i absolwenta Międzywydziałowych Studiów Matematyczno-Przyrodniczych na Uniwersytecie Warszawskim. Od lat prowadzi zajęcia z różnych zagadnień (prahistoria, ekonomia, geografia świata, zajęcia z biegów na orientację, warsztaty gitarowe i wiele innych) dla różnych grup wiekowych – od 8 do 80 lat. Od 4 lat prowadzi również edukację domową dla dwóch swoich synów, aktywnie poznając nowoczesne i skuteczne metody edukacyjne. Pasjonuje się sportami związanymi z przyrodą – biegami przełajowymi, górskimi i na orientację czy wspinaczką. Jest fanem krytycznego i racjonalnego patrzenia na rzeczywistość i stosowania metody naukowej w każdej dziedzinie życia. Zarówno wykształcenie, jak i doświadczenie akademickie i dydaktyczne, sprawiają że jest on wszechstronnie przygotowany do prowadzenia interdyscyplinarnych zajęć projektowych.
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left>
                    <img width={256} height={180} src="/img/zywiol-Ewelina_Mikolajczyk.jpg" alt="Ewelina Mikołajczyk"/>
                </Media.Left>
                <Media.Body>
                    <p class="rowno">
<b>Ewelina Mikołajczyk</b> będzie opiekunką młodszej grupy. Ukończyła ochronę środowiska i biologię na Uniwersytecie Wrocławskim oraz podyplomowe studia pedagogiczne. Ma doświadczenie pracy zarówno z dziećmi jak i dorosłymi. Bliskie jej są pedagogika Montessorii oraz edukacja przygodowa. Płynie z nurtem porozumienia bez przemocy. Za priorytet uważa rozbudzanie ciekawości poznawczej i kreatywności dzieci. Prywatnie mama 2 chłopców i gromadki nietoperzy, fascynatka nauki, przyrody, miłośniczka gór, jaskiń i rowerów.
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left>
                    <img width={256} height={300} src="/img/zywiol-Magdalena_Sekalska.jpg" alt="Magdalena Sękalska"/>
                </Media.Left>
                <Media.Body>
                    <p class="rowno">
<b>Magdalena Sękalska</b> - ciepła i sympatyczna osoba. W Żywiole będzie wspomagać młodszą grupę. Absolwentka studiów na kierunku pedagogika specjalna na Uniwersytecie Wrocławskim. Wciąż poszerza swoją wiedzę. Obserwacja rozwoju dzieci jest jej pasją, a kontakt z najmłodszymi źródłem radości. Posiada spore doświadczenie w opiece nad dziećmi. Bliskie jest jej poznanie wielozmysłowe i sensoplastyka. Jako dyplomowana animatorka zabaw dla dzieci prowadzi m.in. kreatywny kącik dla dzieci. Jej zainteresowania sięgają od Klubu Miłośników Starej Motoryzacji, po górskie szczyty.
                    </p>
                </Media.Body>
            </Media>
            <Media>
                <Media.Left>
                    <img width={256} height={300} src="/img/zywiol-Agata_Kaminska.jpg" alt="Agata Kamińska"/>
                </Media.Left>
                <Media.Body>
                    <p class="rowno">
<b>Agata Kamińska</b>, która będzie u nas prowadzić zajęcia z Taekwondo, jest nie tylko specjalistą od sztuk walki, ale również od innych sztuk, w tym sztuki pracy z dziećmi. Jest świeżo upieczonym magistrem Arteterapii. Ukończyła studia pedagogiczne na kierunku Edukacja Wczesnoszkolna i Wychowanie Przedszkolne. Docenia sztukę tworzenia w każdym jej aspekcie, poczynając od twórczych zabaw w błocie, poprzez rysowanie muzyki, land art, na sztukach walki skończywszy. Jej największą pasją jest koreańska sztuka walki - Taekwondo. Współpracuje z Obornickim Klubem Taekwondo "Namu", gdzie oprócz poszerzania swojej własnej wiedzy, prowadzi zajęcia w grupie dzieci 3-6 lat. Swoje zamiłowanie do sportu przekłada na różne dziedziny. Na co dzień pracuje z dziećmi w wieku 3-4 lata w Przedszkolu Publicznym w Pęgowie.
                    </p>
                </Media.Body>
            </Media>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Wyzywienie(props) {
    return (
        <div>
            <h3>Wyżywienie</h3>
            <br/>
<p>
Dbamy o to aby posiłki spożywane w szkole były pełnowartościowe, sezonowe, w miarę możliwości ekologiczne.
</p>
<p>
Zapewniamy możliwość wykupienia obiadów, oraz czas na spożycie śniadań i podwieczorków przyniesionych z domu.
</p>
<p>
W dni, które sami nie będziemy gotować, odwiedzać będziemy słynną <a href="https://pl-pl.facebook.com/DeguStacjaObornikiSlaskie/">Degustację</a>, gdzie czekać będzie specjalnie przygotowane dla nas danie. 
</p>
<p>
Kuchnię uważamy za fascynujące laboratorium, a czas posiłków jest idealny na nowe doznania, naukę i rozwój socjalny. Dlatego z radością chcemy zaoferować dzieciom warsztaty kulinarne.
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function InspiracjeKsiazki(props) {
    return (
        <div>
                <h3>Książki</h3>
                <br/>
<p>
    <ul>
        <li><cite>"Uchwycić Żywioł. O tym, jak znalezienie pasji zmienia wszystko"</cite> <a href="http://sirkenrobinson.com">Ken Robinson</a> (ISBN: 978-83-929719-2-4)</li>
        <li><cite>"Jak uczy się mózg"</cite> <a href="https://de.wikipedia.org/wiki/Manfred_Spitzer">Manfred Spitzner</a> (ISBN: 978-83-01-15261-1)</li>
        <li><cite>"Neurodydaktyka. Nauczanie i uczenie się przyjazne mózgowi"</cite> <a href="http://www.budzacasieszkola.pl">Marzena Żylińska</a> (ISBN: 978-83-231-3092-5)</li>
        <li><cite>"Dziecko z bliska idzie w świat"</cite> <a href="http://agnieszkastein.pl">Agnieszka Stein</a> (ISBN: 978-83-93-90190-6)</li>
        <li><cite>"Porozumienie bez przemocy"</cite> <a href="https://www.cnvc.org/about/marshall-rosenberg.html">Marshall B. Rosenberg</a> (ISBN: 978-83-88875-44-1)</li>
        <li><cite>"Kryzys szkoły"</cite> <a href="http://www.jesperjuul.com">Jesper Juul</a> (ISBN: 978-83-62445-50-9)</li>
        <li><cite>"Ostatnie dziecko lasu"</cite> <a href="http://richardlouv.com">Richard Louv</a> (ISBN: 978-83-65-08759-1)</li>
        <li><cite>"Kim jesteśmy, a kim moglibyśmy być"</cite> <a href="http://www.gerald-huether.de">Gerald Hüther</a> (ISBN: 978-83-64184-19-2)</li>
        <li><cite>"Jak mówić, żeby dzieci nas słuchały. Jak słuchać, żeby dzieci do nas mówiły"</cite> <a href="http://www.fabermazlish.com">Faber Adele, Mazlish Elaine</a> (ISBN: 978-83-7278-501-5)</li>
        <li><cite>"Odkrycie dziecka"</cite> <a href="https://pl.wikipedia.org/wiki/Maria_Montessori">Maria Montessori</a> (ISBN: 978-83-935122-9-4)</li>
    </ul>
</p>
        </div>
    );
}

function InspiracjeLinki(props) {
    return (
        <div>
                <h3>Linki</h3>
                <br/>
<p>
    <ul>
        <li><a href="http://innowacyjnaedukacja.blogspot.com">http://innowacyjnaedukacja.blogspot.com</a></li>
        <li><a href="http://www.budzacasieszkola.pl">http://www.budzacasieszkola.pl</a></li>
        <li><a href="http://dziecisawazne.pl">http://dziecisawazne.pl</a></li>
    </ul>
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function Kontakt(props) {
    return (
        <div>
            <h3>Kontakt</h3>
            <br/>
<p>
mail: <a href="mailto:kontakt@zywiol.edu.pl">kontakt@zywiol.edu.pl</a><br/>
tel: <a href="tel:+48 503 373 185">+48 503 373 185</a>
</p>
<p>
Organ prowadzący:<br/> <b>Fundacja Drzewo</b><br/>
ul. Kazimierza Jagiellończyka 16<br/>
55-120 Oborniki Śląskie<br/>
KRS: 0000689222<br/>
NIP: 9151804439<br/>
REGON: 36794131000000<br/>
<br/>
Nr konta bankowego:<br/>
Bank Zachodni WBK<br/>
97 1090 2457 0000 0001 3492 5834 <br/>
</p>
        </div>
    );
}

//-------------------------------------------------------------------------------

function FAQ(props) {
    return (
      <div>
        <Accordion>
            <Panel header="Czy to będzie prawdziwa szkoła?" eventKey="1">
<p>
    I tak, i nie. Żywioł formalnie nie jest szkołą, nie pobiera pieniędzy z subwencji, a dzieci do nas zapisane wypełniają tzw. obowiązek szkolny poza szkołą.
    Oznacza to, że formalnie dzieci muszą być zapisane do szkoły macierzystej, z którą współpracujemy. My jesteśmy odpowiedzialni za opiekę i zajęcia edukacyjne,
    natomiast szkoła macierzysta jest zobowiązana do przeprowadzenia raz do roku egzaminu, oraz do wydawania świadectw.
    Egzamin ma na celu sprawdzenie wypełnienia podstawy programowej. Egzamin będzie przeprowadzony w naszym budynku, będzie miał możliwie swobodną formę,
    a egzaminatorzy będą znani dzieciom z zajęć wyjazdowych odbywających się w szkole macierzystej.
</p>
<p>
    Z drugiej strony, w przeciwieństwie do większości szkół, nie będzie u nas ławek, dzwonków, ocen, klasówek, prac domowych i odpytywania.
    Będziemy pracować na powietrzu, często gdzieś wyjeżdżać, ruszać się nawet w czasie prac czysto intelektualnych.
    W porozumieniu z rodzicami i dziećmi możemy nawet dowolnie manipulować dniami wolnymi przesuwając np. czas wakacji.
</p>
<p>
    Jednocześnie dążymy do tego aby spełnić wymogi finansowania ministerialnego i stać się szkołą w pełnym tego słowa znaczeniu, nie zmieniając formy pracy.
</p>
            </Panel>
            <Panel header="Kto będzie ponosił odpowiedzialność za dzieci?" eventKey="2">
<p>
    Odpowiedzialność za dzieci ponosić będzie szkoła, która zabezpieczona jest odpowiednim ubezpieczeniem.
    Ważniejsze od odpowiedzialności prawnej jest dla nas bezpieczeństwo dzieci, w tym rzeczy, których nie da się ubezpieczyć,
    takie jak swoboda wypowiedzi, wolność od destruktywnego oceniania, czy prosty kręgosłup.
</p>

            </Panel>
            <Panel header="Czy rodzice będą musieli po szkole przygotowywać dzieci do egzaminów?" eventKey="3">
<p>
    Nie, zajmuje się tym szkoła. Raz w roku dzieci będą zdawały egzamin ze zdobytej wiedzy (nie obowiązuje to zerówek).
    Będzie to jedyna „klasówka”, która będzie obowiązywać w ciągu roku. We współpracy ze szkołą macierzystą, egzamin będzie odbywał się w
    Żywiole i będzie miał formę możliwie swobodną, tak żeby poznać faktyczne umiejętności i wiedzę, bez filtra stresu.
</p>
            </Panel>
            <Panel header="Czy rodzic musi być wolontariuszem nawet jak nie ma czasu lub nie potrafi?" eventKey="4">
<p>
    Rodzic może, ale nie musi angażować się aktywnie w życie szkoły. Dajemy możliwość zamiany części czesnego na pracę np. w formie opiekuna wspierającego.
    Co prawda oczekujemy od rodziców stałej współpracy dla dobra ich dzieci, ale do większego zaangażowania zachęcamy tylko tych, którzy czują się na siłach i mają na to czas.
</p>
            </Panel>
            <Panel header="Czy szkoła będzie promowała którąś z religii?" eventKey="5">
<p>
    Szkoła będzie miejscem świeckim. W planie zajęć nie znajduje się religia. Jednocześnie będziemy promowali szacunek i tolerancję wobec wszystkich ludzi,
    niezależnie od ich przekonań religijnych.
</p>
            </Panel>
            <Panel header="Czy będziemy promować wegetarianizm i weganizm?" eventKey="6">
<p>
    Dzieci będą miały zapewnioną możliwość wykupienia pełnowartościowych obiadów. Jesteśmy otwarci na możliwość dostosowania się do konkretnej diety,
    czy to związanej z poglądami, czy np. alergiami pokarmowymi.
</p>
            </Panel>
            <Panel header="Czy starsze dzieci nie stracą mając zajęcia razem z młodszymi?" eventKey="7">
<p>
    Chcemy, aby rozwój dzieci prowadzony był bardzo indywidualnie. Aby możliwe było wsparcie nauczyciela dla każdego ucznia w wystarczającym stopniu
    zajęcia dydaktyczne prowadzić będziemy w niewielkich grupach (max. 14 osób). Sprzyja temu też zawsze obecny drugi opiekun – wolontariusz anglojęzyczny, lub rodzic.
    Tworzymy 2 grupy wiekowe, jednak rzeczywisty podział w trakcie różnych zajęć będzie dostosowany do umiejętności i zainteresowań dzieci.
    Jednocześnie starsze (lub biegłe w jakimś temacie) dzieci mogą stać się nauczycielami młodszych, co, jak dowodzą badania poświęcone procesom nauczania, sprzyja zarówno jednym jak i drugim.
</p>
            </Panel>
            <Panel header="Czy przyjmujecie dzieci z niepełnosprawnością?" eventKey="8">
<p>
    Nie dzielimy ludzi na pełno i niepełnosprawnych. Każdy jest inny. I choć nie mamy przystosowań w tym kierunku jesteśmy otwarci na zmiany.
    Dla dzieci kontakt z różnymi ludźmi, również tymi, którym trzeba poświęcić więcej uwagi i cierpliwości, jest cennym doświadczeniem,
    a proponowane przez nas metody nauczania sprawdzają się znacznie lepiej u dzieci np. z zespołem Aspergera czy ADHD, niż klasyczna szkoła publiczna.
</p>
            </Panel>
            <Panel header="Czy dni wyjazdowe są dodatkowo płatne?" eventKey="9">
<p>
    Czy planowane są wyjazdy, które mogą generować dodatkowe wysokie koszty np. wyjazd do Warszawy, czy choćby wrocławskiego ZOO, będą uzgadnianie z rodzicami lub zaplanowane z góry,
    czy to będzie zależne od pomysłów i potrzeb dzieci?
</p>
<p>
    W czasie wyjazdów bezpłatna będzie opieka i dydaktyka dzieci. Osobno płatne będą koszty dodatkowe, czyli wynajęcie autobusu, czy bilety wstępu.
    Część dni wyjazdowych planujemy prowadzić w bezpośredniej okolicy i będą one zakładać np. rowerową wyprawę po okolicy i wówczas
    całe przedsięwzięcie będzie bezpłatne. Planowane koszty dodatkowe nie powinny przewyższyć 80 zł miesięcznie i zależeć będą w dużej mierze od uzgodnień z rodzicami.
    W praktyce oznacza to, że jeśli będziemy chcieli zachęcić rodziców do udziału ich dzieci w fantastycznym, lecz drogim przedsięwzięciu,
    zawsze wcześniej zapytamy ich o zdanie. Koszty wyjazdów mogą być znacznie zmniejszone dzięki naszej współpracy ze szkołą macierzystą.
    Oznacza to, że dla dzieci zapisanych do polecanej szkoły macierzystej koszt udziału w niektórych wydarzeniach będzie bezpłatny.
</p>
            </Panel>
            <Panel header="Żywioł i co dalej?" eventKey="10">
<p>
    Żywioł w pierwszym roku obejmuje dzieci od 0 do 5 klasy. Mamy jednak zamiar umożliwić naszym uczniom kontynuowanie u nas nauki na całym etapie kształcenia podstawowego.
    Będziemy rozwijać się wraz z dziećmi. Nasi absolwenci będą otrzymywali świadectwa uprawniające do kontynuacji nauki na poziomie szkoły średniej, w naszej lub innej placówce.
</p>
            </Panel>
            <Panel header="Czy uczeń zmuszony do zmiany szkoły da sobie radę w tradycyjnej szkole?" eventKey="11">
<p>
    W przypadku konieczności zmiany szkoły oferujemy swoją pomoc w przygotowaniu dziecka do zmiany. Jesteśmy spokojni o to, czy dziecko sobie poradzi,
    jednak każda zmiana środowiska jest zawsze trudna dla dziecka i życzylibyśmy sobie, aby przebiegła możliwie łagodnie.
    Z formalnego punktu widzenia jesteśmy zobligowani do wypełniania podstawy programowej MEN, podobnie jak szkoły tradycyjne,
    w związku z tym dziecko otrzymuje wszelkie dokumenty uprawniające do kontynuacji nauki na danym poziomie.
</p>
            </Panel>
            <Panel header="Co jeśli dziecko nie zda egzaminu?" eventKey="12">
<p>
    Żywioł bazuje na indywidualnym podejściu i pobudzaniu wewnętrznej motywacji ucznia. Dzieci są ciekawe świata i chętnie się uczą.
    Przyswajają nowości z pasją o ile nie zniszczy jej przymus i ocenianie. Z perspektywy dorosłego człowieka mniej ważne jest to w jakim wieku zaczęliśmy
    czytać, czy opanowaliśmy tabliczkę mnożenia, niż to, czy ktoś potrafił pobudzić w nas pasję. Jesteśmy jednak zobligowani do wypełniania podstawy programowej.
    Rolą nauczyciela jest podanie materiału w sposób interesujący dla dziecka. I jest to absolutnie możliwe. Egzamin jest więc sprawdzianem bardziej nauczyciela niż ucznia.
    Nauczyciel ma możliwość dostosowania materiału do potrzeb i zainteresowań ucznia, a forma egzaminu będzie swobodna, daleka od stresu i zostanie dobrana z uwagą na potrzeby i możliwości dzieci.
</p>
            </Panel>
        </Accordion>
        <div>
            Zapraszamy do zapoznania się z <a href="https://men.gov.pl/zycie-szkoly/ksztalcenie-ogolne/podstawa-programowa/podstawa-programowa-materialy-dla-nauczycieli.html">podstawą programową</a>
        </div>
        <div>
            <span>Jeśli odpowiedzi nie są dla Ciebie wyczerpujące, zapraszamy do kontaktu.</span>
        </div>
      </div>
    );
}

//-------------------------------------------------------------------------------

const mainMenu = (
  <Tab.Container id="main_menu" defaultActiveKey="start">
    <Row className="clearfix">
      <Col>
        <Nav bsStyle="tabs">
          <NavItem eventKey="start">Start</NavItem>
          <NavItem title="Rejestracja on-line" eventKey="warsztaty"><b>Warsztaty</b></NavItem>
          <NavDropdown eventKey="rodzice" title="Dla rodziców">
            <MenuItem eventKey="rodzice.zapisy">Zapisy</MenuItem>
            <MenuItem eventKey="rodzice.cennik">Cennik</MenuItem>
            <MenuItem eventKey="rodzice.angaz">Zaangażuj się</MenuItem>
            <MenuItem eventKey="rodzice.pliki">Pliki do pobrania</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="rodzice.faq">FAQ</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey="szkola" title="O szkole">
            <MenuItem eventKey="szkola.dzien">Plan dnia</MenuItem>
            <MenuItem eventKey="szkola.aktualnosci">Aktualności</MenuItem>
            <MenuItem eventKey="szkola.miejsce">Miejsce</MenuItem>
            <MenuItem eventKey="szkola.metody">Metody edukacyjne</MenuItem>
            <MenuItem eventKey="szkola.zespol">Nasz zespół</MenuItem>
            <MenuItem eventKey="szkola.wyzywienie">Wyżywienie</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey="inspiracje" title="Inspiracje">
            <MenuItem eventKey="inspiracje.ksiazki">Książki</MenuItem>
            <MenuItem eventKey="inspiracje.linki">Linki</MenuItem>
          </NavDropdown>
          <NavItem eventKey="kontakt">Kontakt</NavItem>
        </Nav>
      </Col>
      <Col>
        <Tab.Content animation>
          <Tab.Pane eventKey="start">
            <br/><Start/>
          </Tab.Pane>
          <Tab.Pane eventKey="warsztaty">
            <br/><Warsztaty/>
          </Tab.Pane>
          <Tab.Pane eventKey="rodzice.zapisy">
            <br/><Zapisy/>
          </Tab.Pane>
          <Tab.Pane eventKey="rodzice.cennik">
            <br/><Cennik/>
          </Tab.Pane>
          <Tab.Pane eventKey="rodzice.angaz">
            <br/><HelpUs/>
          </Tab.Pane>
          <Tab.Pane eventKey="rodzice.pliki">
            <br/><Downloads/>
          </Tab.Pane>
          <Tab.Pane eventKey="rodzice.faq">
            <br/><FAQ/>
          </Tab.Pane>
          <Tab.Pane eventKey="szkola.dzien">
            <br/><PlanDnia/>
          </Tab.Pane>
          <Tab.Pane eventKey="szkola.aktualnosci">
            <br/><Aktualnosci/>
          </Tab.Pane>
          <Tab.Pane eventKey="szkola.miejsce">
            <br/><Miejsce/>
          </Tab.Pane>
          <Tab.Pane eventKey="szkola.metody">
            <br/><MetodyEdukacyjne/>
          </Tab.Pane>
          <Tab.Pane eventKey="szkola.zespol">
            <br/><Zespol/>
          </Tab.Pane>
          <Tab.Pane eventKey="szkola.wyzywienie">
            <br/><Wyzywienie/>
          </Tab.Pane>
          <Tab.Pane eventKey="inspiracje.ksiazki">
            <br/><InspiracjeKsiazki/>
          </Tab.Pane>
          <Tab.Pane eventKey="inspiracje.linki">
            <br/><InspiracjeLinki/>
          </Tab.Pane>
          <Tab.Pane eventKey="kontakt">
            <br/><Kontakt/>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

//-------------------------------------------------------------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <Grid>
          <Row>
            <Col sm={6} md={3}><Image src="/img/zywiol_logo.png" responsive/></Col>
            <Col md={3} xsOffset={4}><SocialProfiles/></Col>
          </Row>
          <Row>
            <Col sm={6} md={3}></Col>
            <Col>{mainMenu}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
