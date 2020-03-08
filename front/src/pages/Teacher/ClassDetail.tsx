import React, {useState} from "react";
import { RouteComponentProps } from "react-router-dom";
import "./class-detail.css";
import { Chart } from "chart.js";

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonBackButton,
  IonContent,
  IonSearchbar
} from "@ionic/react";

interface ClassDetailPageProps extends RouteComponentProps<{}> {}


const students = [
  {
    _id: "5e64714a826b95825695ac21",
    index: 0,
    guid: "024c5a92-3423-40b5-938f-eacad6163925",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 23,
    eyeColor: "brown",
    name: {
      first: "Jennings",
      last: "Hamilton"
    },
    email: "jennings.hamilton@undefined.biz",
    phone: "+1 (925) 500-3788",
    address: "191 Richards Street, Tuskahoma, Virginia, 5430",
    about:
      "Consectetur est adipisicing pariatur nisi pariatur proident minim sunt cupidatat amet tempor laborum nostrud. Consequat velit cupidatat qui labore consequat proident nisi exercitation commodo laboris reprehenderit ut do Lorem. Magna labore anim occaecat incididunt eu reprehenderit aute ad minim in dolor aliquip excepteur cupidatat. Voluptate do minim eiusmod laborum ea.",
    registered: "Friday, September 9, 2016 12:22 AM"
  },
  {
    _id: "5e64714a556d49384f040400",
    index: 1,
    guid: "0e9c1a23-7d0d-4007-8cee-34287f8f00a0",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: {
      first: "Elsa",
      last: "Ellis"
    },
    email: "elsa.ellis@undefined.org",
    phone: "+1 (841) 577-2748",
    address: "952 Union Avenue, Sehili, Rhode Island, 871",
    about:
      "Consectetur excepteur fugiat pariatur sint aliqua proident. Ullamco anim tempor laboris tempor et magna ullamco nulla elit aliqua laboris ut sint velit. Nulla do et laboris consectetur mollit est eu non laborum pariatur ipsum ea proident. Consectetur nulla ea aliqua eu nisi id sint exercitation id fugiat.",
    registered: "Sunday, July 29, 2018 10:14 PM"
  },
  {
    _id: "5e64714af5de2053fa8071d4",
    index: 2,
    guid: "a4d30e87-386f-4fcc-9de1-3f1644c7c583",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 23,
    eyeColor: "blue",
    name: {
      first: "Gilda",
      last: "Wong"
    },
    email: "gilda.wong@undefined.co.uk",
    phone: "+1 (911) 562-3460",
    address: "299 Underhill Avenue, Longbranch, Nevada, 7794",
    about:
      "Magna qui irure ad Lorem aliquip ex enim. Incididunt exercitation velit cillum amet. Velit deserunt eu minim laborum occaecat sint. Deserunt cupidatat exercitation pariatur reprehenderit elit sint dolore velit dolore eu. Officia proident Lorem nostrud culpa consectetur aliquip minim officia consequat consequat et. Nulla consectetur dolor laborum est anim labore do ipsum fugiat dolore magna. Duis quis et est nostrud ex laboris nisi.",
    registered: "Thursday, July 11, 2019 4:26 AM"
  },
  {
    _id: "5e64714a9716098cee931c9b",
    index: 3,
    guid: "ef5515d5-1a3a-423b-816e-af3f8e9fd283",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 36,
    eyeColor: "brown",
    name: {
      first: "Cochran",
      last: "Galloway"
    },
    email: "cochran.galloway@undefined.ca",
    phone: "+1 (995) 512-2903",
    address: "701 Montauk Avenue, Wells, New York, 4322",
    about:
      "Est magna fugiat enim sint mollit esse consequat nostrud. Incididunt ad tempor aliqua nisi adipisicing enim deserunt ad nulla culpa exercitation cillum. Consequat Lorem consequat non fugiat adipisicing cupidatat esse cillum labore excepteur nulla aliquip.",
    registered: "Friday, April 20, 2018 12:03 AM"
  },
  {
    _id: "5e64714a4709f2df31080b8f",
    index: 4,
    guid: "3e9d0286-c880-4374-bc71-8b3353679e6c",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "blue",
    name: {
      first: "Ashley",
      last: "Mcpherson"
    },
    email: "ashley.mcpherson@undefined.tv",
    phone: "+1 (978) 571-2084",
    address: "763 Livingston Street, Carrizo, Delaware, 736",
    about:
      "Eiusmod nisi aliqua irure proident cillum irure esse excepteur. Nulla in aliquip culpa mollit et pariatur irure. Aliqua est consequat duis nostrud qui eiusmod fugiat non dolor.",
    registered: "Tuesday, April 9, 2019 3:36 PM"
  },
  {
    _id: "5e64714a00d3e0b66ae0aa0f",
    index: 5,
    guid: "b1316dc0-a25a-4fbc-9e97-27d2b21b2d9c",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "blue",
    name: {
      first: "Mcpherson",
      last: "Joyner"
    },
    email: "mcpherson.joyner@undefined.us",
    phone: "+1 (846) 435-2231",
    address: "193 Strong Place, Cawood, Tennessee, 4149",
    about:
      "Nostrud et occaecat adipisicing anim elit nulla reprehenderit consectetur mollit nisi eiusmod. Ut quis commodo aute excepteur sit eu labore laboris nulla consectetur Lorem elit sint magna. Dolore dolor officia sint aute ad enim sint. Proident dolore sunt ea eiusmod in voluptate id sint ex tempor.",
    registered: "Wednesday, February 27, 2019 1:15 PM"
  },
  {
    _id: "5e64714ae9156e15c7e07590",
    index: 6,
    guid: "74025492-69cc-40bf-935b-d449ca951212",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: {
      first: "Alexandra",
      last: "Salas"
    },
    email: "alexandra.salas@undefined.info",
    phone: "+1 (868) 458-3779",
    address: "780 Ridgecrest Terrace, Woodlake, Missouri, 1305",
    about:
      "Magna in aliquip aute est ullamco cillum qui deserunt cillum laboris. Dolore veniam dolor id aliqua labore deserunt cillum. In irure amet est eiusmod. Nostrud minim ad eu veniam cillum aliquip tempor mollit excepteur est eu nostrud reprehenderit sit. Consequat incididunt proident officia nulla nostrud non sit et ut labore excepteur fugiat officia mollit. Officia labore Lorem deserunt eu mollit anim.",
    registered: "Saturday, November 30, 2019 12:20 AM"
  },
  {
    _id: "5e64714a4fab674bd6d660d0",
    index: 7,
    guid: "bfc05f7f-8dc9-4afd-91fc-4d05ea6540aa",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 36,
    eyeColor: "blue",
    name: {
      first: "Blanche",
      last: "Hancock"
    },
    email: "blanche.hancock@undefined.me",
    phone: "+1 (855) 590-3114",
    address: "391 Grafton Street, Haring, Maryland, 8114",
    about:
      "Duis ipsum mollit quis officia. Duis adipisicing nisi laboris minim eu aliqua magna tempor fugiat occaecat. Cupidatat anim aute duis officia do sit laboris. Proident esse dolore sunt duis Lorem commodo elit non consectetur. Reprehenderit esse ea tempor ipsum nostrud proident et elit sunt consectetur proident fugiat. Laborum mollit aliquip cillum qui ea culpa fugiat in.",
    registered: "Thursday, August 25, 2016 12:09 PM"
  },
  {
    _id: "5e64714a82450a327a413285",
    index: 8,
    guid: "d42d91e7-c5d9-46c3-bb55-3c9ffc0fe3b4",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 38,
    eyeColor: "green",
    name: {
      first: "Charlotte",
      last: "Holcomb"
    },
    email: "charlotte.holcomb@undefined.name",
    phone: "+1 (928) 446-3876",
    address: "397 Clay Street, Skyland, Indiana, 7446",
    about:
      "Reprehenderit sit labore enim consectetur irure incididunt labore quis. Veniam ad in consectetur magna magna. Est cillum amet excepteur Lorem veniam qui fugiat tempor nulla proident fugiat. Cupidatat fugiat reprehenderit qui pariatur. Elit sit sunt ullamco nisi veniam officia minim ea magna laborum. Esse ut labore irure veniam voluptate.",
    registered: "Thursday, December 22, 2016 10:29 AM"
  },
  {
    _id: "5e64714ad4a5a542c66cb56b",
    index: 9,
    guid: "3bf49cf8-cd57-4f92-93e9-0ee544b21c33",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 32,
    eyeColor: "green",
    name: {
      first: "Morton",
      last: "Page"
    },
    email: "morton.page@undefined.net",
    phone: "+1 (867) 469-3390",
    address: "856 Matthews Court, Herbster, Montana, 8034",
    about:
      "Anim incididunt eiusmod cupidatat et est adipisicing quis velit est sint. Voluptate veniam velit commodo labore cupidatat sint in elit pariatur in elit. Excepteur amet enim do commodo dolore Lorem aliqua. Amet anim dolore dolor laborum in fugiat ea nisi minim adipisicing ea deserunt. Proident aliqua nisi commodo ea veniam ea voluptate dolor. Et amet in do veniam anim non reprehenderit proident in elit et laborum.",
    registered: "Wednesday, November 7, 2018 4:36 PM"
  },
  {
    _id: "5e64714a6bcf158ec8326eda",
    index: 10,
    guid: "7a3b1f32-d148-413a-a7b4-7e96e1e1eaf4",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "green",
    name: {
      first: "Tamra",
      last: "Banks"
    },
    email: "tamra.banks@undefined.io",
    phone: "+1 (866) 424-3126",
    address: "260 Conway Street, Snyderville, Puerto Rico, 2865",
    about:
      "Magna minim irure reprehenderit pariatur ea officia id officia consectetur quis laborum. Laborum do occaecat reprehenderit cupidatat qui. Ad officia consequat consequat sint reprehenderit ex id velit deserunt velit. Do magna amet aliqua velit commodo irure labore cupidatat tempor labore in.",
    registered: "Sunday, February 19, 2017 7:31 AM"
  },
  {
    _id: "5e64714acab83c84237b780b",
    index: 11,
    guid: "ad9b01fb-c749-47b0-ab96-a55518fd7cb0",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "green",
    name: {
      first: "Penny",
      last: "Sandoval"
    },
    email: "penny.sandoval@undefined.biz",
    phone: "+1 (924) 454-3804",
    address: "279 Fillmore Avenue, Steinhatchee, Connecticut, 4170",
    about:
      "Exercitation mollit mollit sit consequat tempor do. Occaecat incididunt ea commodo sint ipsum ipsum ut aliqua sit pariatur ad aliqua exercitation cillum. Magna magna velit occaecat voluptate veniam consequat commodo commodo. Aute tempor qui sunt culpa consectetur exercitation est. Officia mollit id exercitation minim cupidatat et sit voluptate ullamco consequat. Fugiat ad magna laboris amet consequat cillum magna est officia tempor deserunt nisi.",
    registered: "Tuesday, November 24, 2015 4:54 AM"
  },
  {
    _id: "5e64714a9f789cc04f83c0ae",
    index: 12,
    guid: "468918f8-05a9-4731-96a3-1f4fc8a01eb1",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "green",
    name: {
      first: "Reynolds",
      last: "Riddle"
    },
    email: "reynolds.riddle@undefined.biz",
    phone: "+1 (953) 451-2056",
    address: "548 Eldert Street, Cressey, California, 8846",
    about:
      "Labore ad cillum culpa eu id non labore non exercitation amet est amet eiusmod ullamco. Reprehenderit nostrud non cupidatat eiusmod ea aliqua nisi sit. Minim ea anim in enim sit proident ea enim. Aute aliqua nostrud quis irure culpa proident sunt dolor cillum irure ullamco enim exercitation. Laborum labore deserunt veniam eiusmod. Mollit ea enim ad ullamco commodo irure sunt veniam irure.",
    registered: "Friday, November 18, 2016 4:05 AM"
  },
  {
    _id: "5e64714a737e8f2fc5383188",
    index: 13,
    guid: "5e81e4ee-7fd9-4308-aec5-7fa7a307de74",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "green",
    name: {
      first: "Beverley",
      last: "Bishop"
    },
    email: "beverley.bishop@undefined.org",
    phone: "+1 (801) 589-3008",
    address: "131 Bradford Street, Deseret, Massachusetts, 5466",
    about:
      "Irure exercitation ipsum proident amet. Esse sunt deserunt nulla dolore anim. Fugiat tempor labore labore ipsum elit nulla duis. Ad ullamco qui quis pariatur consectetur laboris sit mollit commodo do. In occaecat aute dolore consectetur irure cupidatat.",
    registered: "Wednesday, March 30, 2016 11:56 AM"
  },
  {
    _id: "5e64714ae97525944f62d031",
    index: 14,
    guid: "7498992a-b74f-4bba-ab96-8bf76c17a6a7",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "blue",
    name: {
      first: "Ida",
      last: "Myers"
    },
    email: "ida.myers@undefined.co.uk",
    phone: "+1 (985) 471-2172",
    address: "254 Miami Court, Brule, Federated States Of Micronesia, 4094",
    about:
      "Aute exercitation consequat enim ut ipsum nulla irure consectetur sunt cupidatat. Magna et ut aliquip amet. Ipsum non incididunt officia sunt non culpa cillum ea culpa in veniam. Commodo Lorem tempor aliqua mollit minim sint cillum occaecat reprehenderit ad.",
    registered: "Tuesday, February 19, 2019 8:45 AM"
  },
  {
    _id: "5e64714a664e79ec8de46e10",
    index: 15,
    guid: "667ab34c-4c51-41e7-8be2-562d6c3fb8cc",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 20,
    eyeColor: "green",
    name: {
      first: "Christa",
      last: "Carey"
    },
    email: "christa.carey@undefined.ca",
    phone: "+1 (844) 423-2383",
    address: "713 Bryant Street, Hillsboro, North Carolina, 4866",
    about:
      "Irure pariatur sit exercitation ut eu qui ipsum deserunt. Non tempor duis amet et ullamco. Labore sunt nulla tempor ea incididunt sunt.",
    registered: "Sunday, January 26, 2020 12:33 PM"
  },
  {
    _id: "5e64714a6caaf24b7f00d583",
    index: 16,
    guid: "6a74bc13-3539-4f76-8541-591a5a975352",
    isActive: true,
    picture: "http://placehold.it/32x32",
    age: 32,
    eyeColor: "brown",
    name: {
      first: "Perez",
      last: "Burt"
    },
    email: "perez.burt@undefined.tv",
    phone: "+1 (922) 566-2462",
    address: "930 Saratoga Avenue, Ogema, Wisconsin, 4049",
    about:
      "Ipsum dolor dolor sit proident officia aliqua nostrud mollit excepteur consectetur ullamco labore. Ut sint ullamco minim duis ipsum mollit voluptate minim in eu commodo. Dolor velit id deserunt sit eiusmod ullamco pariatur. Do aute ipsum non deserunt excepteur in. Do voluptate incididunt non ipsum fugiat. Sit nostrud culpa amet eiusmod quis veniam minim sit eiusmod mollit tempor eiusmod.",
    registered: "Tuesday, January 14, 2014 6:38 AM"
  }
];

const fetch = () => {

}

const ClassDetailPage: React.FC<ClassDetailPageProps> = ({ match }) => {

  const [data, setData] = useState(students);

  const search = (ev: any): void => {

    const val = ev.target.value;

    if (val && val.trim() != '') {
      const result = students.filter(item => {
        return (
          item.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.name.last.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });

      setData(result);
    } else {
      setData(students);
    }
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton
              icon="buttonIcon"
              defaultHref="/professor"
              text="Voltar"
            ></IonBackButton>
            <IonTitle>Detalhes da classe</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <iframe src="http://graphs-afro.s3-website-sa-east-1.amazonaws.com/graph3.html"></iframe>

        <IonSearchbar showCancelButton="always" onIonChange={search}></IonSearchbar>

        <IonList>
          {data.map(student => (
            <IonItem button key={Math.random()} routerLink="/classe/aluno">
              <IonLabel>
                {student.name.first} {student.name.last}
                <p>8 Ano A - Sala XPTO - Manhã</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        </IonContent>
    </IonPage>
  );
};

export default ClassDetailPage;