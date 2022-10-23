import React, {useContext, FC} from "react";
import OddajHeader from "./oddajHeader/OddajHeader";
import OddajBelt from "./OddajBelt";
import OddajFormTop from "./oddajForms/OddajFormTop";
import OddajForm1 from "./oddajForms/OddajForm1";
import OddajForm2 from "./oddajForms/OddajForm2";
import OddajForm3 from "./oddajForms/OddajForm3";
import OddajForm4 from "./oddajForms/OddajForm4";
import OddajSummary from "./oddajForms/OddajSummary";
import OddajThanx from "./oddajForms/OddajThnx";
import Section_5 from "../Home/Section_5/Section_5";
import Footer from "../Home/Footer";
import {GlobalContext} from "./oddajContext/GlobalContextProv";

const OddajMain: FC = () => {

    const {counter} = useContext(GlobalContext)

    return (
        <>
            <OddajHeader counter={counter}/>

            {counter === 1 &&
                <>
                    <OddajBelt text='Uzupełnij szczegóły dotyczace
                       twoich rzeczy. Dzięki temu bedziemy wiedzieć
                       komu najlepiej je przekazać.'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 1/4', 'zaznacz co chcesz oddać:']}/>
                        <OddajForm1/>
                    </main>
                </>
            }

            {counter === 2 &&
                <>
                    <OddajBelt text='Wszytie rzeczy do oddania
                        zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować
                        rzczy znajdziesz TUTAJ '/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 2/4', 'podaj liczbę 60 l. worków,' +
                            ' w które spkowałeś/aś rzeczy:']}/>
                        <OddajForm2/>
                    </main>
                </>
            }

            {counter === 3 &&
                <>
                    <OddajBelt text='Jeśli wiesz komu chcesz pomóc,
                        możesz wpisać nazwę organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji
                        bądź celu ich pomocy'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 3/4', 'lokalizacja:']}/>
                        <OddajForm3/>
                    </main>
                </>
            }

            {counter === 4 &&
                <>
                    <OddajBelt text='Podaj adres oraz termin odbioru rzeczy'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 4/4', 'podaj adres oraz termin ' +
                            'odbioru rzeczy przez kuriera:']}/>
                        <OddajForm4/>
                    </main>
                </>
            }

            {counter === 5 &&
                <>
                    <main className="wrapper wrapper--oddajMain">
                        <div className="belt__empty"></div>
                        <OddajFormTop
                            text={['i', 'podsumowanie twojej darowizny']}/>
                        <OddajSummary/>
                    </main>
                </>
            }

            {counter === 6 &&
                <main className="wrapper wrapper--oddajMain">
                    <div className="belt__empty"></div>
                    <OddajFormTop
                        text={['i', '']}/>
                    <OddajThanx/>
                </main>
            }
            <Section_5/>
            <Footer/>
        </>
    );
}
export default OddajMain;