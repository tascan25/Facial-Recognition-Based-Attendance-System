
import StudentCardCont from './StudentCardCont';
import AnimationComp from './AnimationCompHome';
import Header from './Header';
import FaceAnalyzercont from './FaceAnalyzercont';
import StudentAdditionCont from './StudentAdditionCont';
import Footer from './Footer';
import ModalForm from './ModalForm';

function Home() {

    return (
      <div className='flex flex-col h-[100vh]'>
        <Header />
        <main >
          <div className='bg-[#101010] flex flex-col justify-center items-center gap-5 pb-10'>
            <ModalForm />
            <AnimationComp />
            <FaceAnalyzercont />
            <StudentCardCont />
            <StudentAdditionCont />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Home;
  