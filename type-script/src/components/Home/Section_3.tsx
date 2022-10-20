import Title from "../Title";
const SignatureSmall = require( '../../asets/Signature.png')
const SignatureLarge = require( '../../asets/Signature@2x.png')
const PeopleSmall = require( '../../asets/People.png')
const PeopleLarge = require( '../../asets/People@2x.png')


const Section_3 = () => {
    return (
        <section className="wrapper wrapper--section-3">
            <aside className="section-3__leftContainer">
                <div className="section-3__mainText">
                    <Title text={['o nas']}
                           classContainer={''}
                           classH2={''}
                           classUnderline={'section-3__decoration'}/>
                    <p className="section-3__p" id='whoWeHelp'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis minima quia ullam unde?
                        Aliquid blanditiis ea esse hic libero, nobis nostrum quod reiciendis.
                    </p>
                    <img src={SignatureSmall}
                         alt='Podpis'
                         className="section-3__signatureSmall"/>
                    <img src={SignatureLarge}
                         alt='Podpis'
                         className="section-3__signatureLarge"/>
                </div>
            </aside>

            <img src={PeopleSmall}
                 alt='Grupa ludzi'
                 className='section-3__peopleSmall'/>
            <img src={PeopleLarge}
                 alt='Grupa ludzi'
                 className='section-3__peopleLarge'/>
        </section>
    );
};

export default Section_3;