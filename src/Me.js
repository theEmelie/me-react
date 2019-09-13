import React, { Component } from 'react';

import max from './images/max.jpg';
import emelie from './images/emelie.jpg';

class Me extends Component {
  render() {
    return (
      <main>
        <h1>Min me-app</h1>
        <img src={max} alt="Max" />
        <p>Mitt namn är Emelie Åslund. Jag är 25år gammal. Född och uppvuxen i Ekerö, Stockholm. Jag gick på NTI-Gymnasiet där jag studerade spelprogrammering. För tillfället studerar jag samtidigt som jag jobbar på Lidl, där jag har jobbat sen 2013.</p>
        <p>Jag valde att jobba efter gymnasiet då jag behövde en paus från att plugga, sen blev det lite längre än planerat. Jag har varit intresserad utav programmering sen ung ålder.</p>
        <img className="me" src={emelie} alt="Me" />
        <p>Kan ha att göra med att jag älskar datorer. Spenderar många timmar vid datorn och spelar spel för det mesta. Förutom datorer så är ett stort intresse för mig hundar och scrapbooking.</p>
        <p>I januari 2019 köpte jag mig äntligen en liten vovve som heter Max. Han är extremt efterlängtad efter att jag förlorade mina tidigare hundar för flera år sedan.
            Han är en blandras utav Siberian Husky, Finsk Lapphund, Samoyed och Norbottenspets! Otroligt söt med mycket energi! Han älskar även att krypa under min säng och sova, och hur han ens lyckas ta sig under nuförtiden vet jag inte riktigt.</p>
      </main>
    );
  }
}

export default Me;
