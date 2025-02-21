import './App.css';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Greetings from './components/Greetings';
import BoxColor from './components/BoxColor';
import Laranjas from './components/Laranjas';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      {/* Iteration 1 | Component: IdCard  

      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      */}
      {/* Iteration 2 | Component: Greetings 
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      */}
      {/* Iteration 3 | Component: Random

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      */}
      {/* Iteration 4 | Component: Box Color

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      */}
      {/*  Iteration 5 | Component: CreditCard  

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
     
      {/* 

      <Laranjas/>
      <Laranjas/>
      <Laranjas/>
      <Laranjas/>
      <Laranjas/>

       */}
      {/* Iteration 8 | State: LikeButton

      <LikeButton />

       */}
      {/*Iteration 9: State: ClickablePicture

      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      */}
      <Dice />
      dddddd
    </div>
  );
}

export default App;
