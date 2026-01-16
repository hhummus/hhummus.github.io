import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/wedding.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

function WeddingText() {

  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div className="col col-lg-8"> 
        <h2 className="prices-info-text-title">Gratulerer med forlovelse og planlegging av den store dagen deres!</h2>
    <p>Det å få forevige bryllup er kanskje den største tillitserklæringen en fotograf kan få.</p>
    <p>Det er mye som skjer på mange plan og ikke minst er det ofte en anledning til å samle nære og kjære som kanskje ikke ser hverandre så ofte. Med andre ord er det viktig at dagen blir skikkelig bra!
      Vi vil gjerne gjøre vårt for å senke stressnivået, få brudepar og gjester til å føle seg vel og ikke minst få dokumentert små og store begivenheter gjennom hele dagen. 
      Vi tar alltid et møte med dere i forkant for å bli bedre kjent og sammen finne ut hvordan vi kan hjelpe dere med den store begivenheten på best mulig måte.
        <span id="readMoreWedding" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <span>   <FontAwesomeIcon icon={faAngleUp} size='xs'/></span> : <span id="readMoreWedding"> ...Les mer <FontAwesomeIcon icon={faAngleDown} size='xs'/> </span> }
        </span>
      </p>
    {isVisible &&(
    <div>
    <p>En av våre fordeler er at vi er to.
      Det gjør at vi kan få dokumentert på flere hold samtidig, noe som er spesielt fint i de øyeblikkene dere selv ikke får vært til stede, men da likevel kan få ta del i gjennom bildene
      etterkant.</p>
    <p>Eksempelvis pleier den ene av oss å være med brudeparet under forberedelsene før vielsen, mens den andre får dokumentert når gjestene ankommer og hilser på hverandre (dette er ofte fryktelig hyggelige øyeblikk!) og mingler før kalaset starter</p>
    <p>Videre fokuserer den ene av oss på brudeparet under vielsen og resepsjon, mens den andre får   fokusert på gjester, omgivelsene og detaljer. Det samme gjelder for parfotografering, da gjestene ofte mingler og koser seg.</p>
    <p>Videre blir det fokus på gruppefotografering, middag, taler, kakeoppskjæring, dans og all moro som følger med i ett bryllup. Vi er alltid lydhøre for dere og gjestenes ønsker underveis og har ofte fått høre at vi blender inn på en veldig god måte.</p>
    <p>Vi tar hovedsakelig bilder med analoge kamera, men om dere ønsker så kan vi også tilby noe digitalt. Dere vil få tilsendt de fineste bildene ferdig etterarbeidet innen 2-5 dager etter bryllupet.</p>
    <p>Alle bilder leveres digitalt via lenke for nedlastning til pc og mobil. Vi pakker og sender også negativene med posten, dette gjør at dere står helt fritt til å velge mellom absolutt alle! bildene fra dagen deres om hvilke som skal blåses opp og henges på veggen i hjemmet. </p>
    <p>Vårt mål er få fanget flest mulig ekte øyeblikk. Stemningsbilder dere blir glad, og muligens litt rørt, av å se på i etterkant.</p>
    </div> 
    )}

    <p className="contactUsWedding"><Link to="/kontakt-oss">Kontakt oss her for en uforpliktende prat</Link></p>
    <p className="pricesWedding">Ikke helt sikker enda? <br/> 
    <Link to="/prislister">Ta en titt på pristilbudene våre her</Link></p>
    </div>
  );
};

export default WeddingText;
