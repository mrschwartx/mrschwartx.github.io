import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
##     ## ######## 
###   ### ##       
#### #### ##       
## ### ## ######   
##     ## ##       
##     ## ##       
##     ## ########
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
##     ## ######## 
###   ### ##       
#### #### ##       
## ### ## ######   
##     ## ##       
##     ## ##       
##     ## ######## 
          `}
          </PreNameMobile>
        </PreWrapper>
        <Seperator>
          ==========================================================
        </Seperator>
        <div>
          Welcome to my portfolio, click to visit the other{" "}
          <Link href="https://github.com/mrschwartx" target="_blank">
            web
          </Link>
          .
        </div>
        <Seperator>
          ==========================================================
        </Seperator>
        <div>
          First you have to type `<Cmd>help</Cmd>`!
        </div>
        <br />
      </div>
    </HeroContainer>
  );
};

export default Welcome;
