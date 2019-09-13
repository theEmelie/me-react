import React, { Component } from 'react';
import react from '../images/react.png'

class WeekTwo extends Component {
    render() {
        return (
            <div className="weektwo">
            <h3><a href={"https://github.com/theEmelie/me-react"} className="github">{"GitHub Repo"}</a></h3>
            <div className="line"></div>
            <p>Inspirationen till mitt formulär är nog främst våran lärare Emil. Det är ett väldigt enkelt sätt att
               att göra en formulär validering. Jag kollade även runt på exempel, men dom flesta använder error text
               istället för färger. Och i mitt fall föredrar jag att det kommer fram grön eller röd färg. Men om du trycker
               på "registrera" knappen och ett fält inte är ifyllt så kommer en popup komma med ett error meddelande. Men
               annars när du skriver i ett fält så kommer rutan bli grön när det är godkänt. Samma sak gäller me datumen.
            </p>
            <img src={react} alt="react"/>
            <p>Inspirationen till min datetime picker har jag inte fått från något speciellt ställe. Jag ville skapa en
               någorlunda enkel 'kalender'. Jag har googlat på lite inspirationer och sett hur andra har gjort, i
               slutändan bestämde jag mig för att ha 3 olika dropdown menyer där man får välja år, månad och dag. Jag
               kom inte på något annat som jag kunde göra utan att använda reacts inbyggda datetime-picker. Men jag tycker
               ändå att det blev bra i slutändan!
            </p>
            </div>
        );
    }
}

export default WeekTwo;
