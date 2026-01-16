
function SocialMediaLinks() {
  return (
    <div className="socialMediaArticle">
      <div className="container">
        <div className="row">
          <p className="socialMediaP">Ikke lei helt enda? </p>
          <h2 className="socialMediaTitle">Besøk oss på Instagram!</h2>
        </div>
        <div className="row socialMediaContainer">
          <div className="col-12">
          <a
            href="https://www.instagram.com/haslalokkeberg/"
            target="_blank"
            rel="noreferrer"
            className="linkToSoMe"
          >
          @haslalokkeberg
          </a>
          </div>
        
       <div className="col-12">
       <a
          href="https://www.instagram.com/stinehasla/"
          rel="noreferrer"
          target="_blank"
          className="linkToSoMe"
        >
          @stinehasla
          </a>
       </div>
  
         
          </div>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
