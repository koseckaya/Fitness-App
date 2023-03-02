import { useRouteError } from "react-router-dom";
import { Container } from "../components/Container";
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/Button";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ErrorSvg } from "../components/Icons";


export function Error() {
  const error: any = useRouteError();
  console.error(error);

   const navigate = useNavigate();
    
    function handlePrograms() {
        navigate("/programs");
    }
    function handleVideos() {
        navigate("/videos");
    }
    function handleRecipes() {
        navigate("/recipes/alcohol-free");
    }
    function handleStore() {
        navigate("/about");
    }

    return (
    <>
      <Header />
        <Container>
          <div className='error' >
            <div className="error-icon" ><ErrorSvg /></div>
            <div className='error-message' >
              <span className='error-404'>404 • </span>
              <span className='error-text'>The page you're looking for can't be found. Please check out one of these pages instead</span>
            </div>
            <div className='error-btns'>
                <Button content="Workout Programs" type={Button.TYPES.DEFAULT} onClick={handlePrograms}/>
                <Button content="Workout Videos" type={Button.TYPES.DEFAULT} onClick={handleVideos}/>
                <Button content="Recipes" type={Button.TYPES.DEFAULT} onClick={handleRecipes}/>
                <Button content="About" type={Button.TYPES.DEFAULT} onClick={handleStore}/>
            </div>
            </div>
           
        </Container>
      <Footer />  
    </>
  );
}