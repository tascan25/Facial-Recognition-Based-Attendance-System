import { createContext,useEffect,useState,useRef } from "react";
export const StudentDataContext = createContext()

function StudentDataConetxtProvider({children}){
    const [students, setStudents] = useState([]);
    const [enable,setEnable] = useState(false)
    const [loading,setLoading] = useState(false)
    const [open,setOpen] = useState(false)
    const hasFetchedData = useRef(false); 
    function handelOpenTrue(){
      console.log('open true is clicked')
      setOpen(true)
    }
    function handelOpenFalse(){
      console.log('open false is clicked')
      setOpen(false)
    }
    useEffect(() => {
      const fetchStudentData = async () => {
        setLoading(true)
        try {
          const resp = await fetch('https://facial-attendance-system-75cbe-default-rtdb.firebaseio.com/Students.json');
          const data = await resp.json();
          // Convert the object to an array of student objects
          const studentArray = Object.values(data);
          setStudents(studentArray);
        } catch (error) {
          console.error('Unable to fetch the students details:', error);
        }
        setLoading(false)
      };
  
      if (!hasFetchedData.current) {
        fetchStudentData();
        hasFetchedData.current = true; // Set the ref to true after fetching data
      }
    }, []);

    
  return (
    <StudentDataContext.Provider value={{students,enable,setEnable,loading,handelOpenFalse,handelOpenTrue,open}}>
        {children}
    </StudentDataContext.Provider>
  )
    
}

export default StudentDataConetxtProvider