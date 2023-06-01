import {ColorModeContext, useMode} from './theme.js';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route} from 'react-router-dom';
import Dashboard from "./scenes/dashboard";
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar.jsx';

import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Contractors from "./scenes/contractors"
import ClientInvoice from './scenes/client_invoice';

import Form from "./scenes/forms/form/index.jsx";
import EventForm from "./scenes/forms/event form/index.jsx";
import ContractorForm from "./scenes/forms/contractor form/index.jsx";
import ClientInvoiceForm from "./scenes/forms/client_invoice/index.jsx";
import EomForm from "./scenes/forms/eom form";
import HardwareForm from "./scenes/forms/hardware form/index.jsx"
import HardwareRequestForm from "./scenes/forms/hardware_request form/index.jsx"

import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Events from './scenes/events/index.jsx';
import Todo from './scenes/todo/personal_todo/index.jsx'

import EventProfile from './scenes/profiles/event_profile/index.jsx';
import ToDoProfile from './scenes/profiles/todo_profile/index.jsx';
import Hardware from './scenes/hardware/index.jsx';
import HardwareRequest from './scenes/hardware_request/index.jsx';
import PersonalToDo from './scenes/todo/personal_todo/index.jsx';
import EventToDo from './scenes/todo/event_todo/index.jsx';


/** 
import Contacts from "./scenes/contacts";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
*/



function App() {
  const [theme, colorMode] = useMode();


  
  return ( 
  
  <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>

      <div className="app">
        <Sidebar/>
        <main className = 'content'>
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
            <Route path="/client_invoices" element={<ClientInvoice/>}/>
            <Route path="/hardware" element={<Hardware/>}/>
            <Route path="/hardware_request" element={<HardwareRequest/>}/>

            <Route path="/form" element={<Form/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/contractors" element={<Contractors/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/event_todo" element={<PersonalToDo/>}/>
            <Route path="/personal_todo" element={<EventToDo/>}/>

            <Route path="/eventform" element={<EventForm/>}/>
            <Route path="/contractorform" element={<ContractorForm/>}/>
            <Route path="/eomform" element={<EomForm/>}/>
            <Route path="/hardwareform" element={<HardwareForm/>}/>
            <Route path="/client_invoiceform" element={<ClientInvoiceForm/>}/>
            <Route path="/hardware_requestform" element={<HardwareRequestForm/>}/>

            <Route path="/event_profile/:id" element={<EventProfile/>}/>
            <Route path="/todo_profile/:id" element={<ToDoProfile/>}/>
          
          
          {/**
          <Route path="/line" element={<Line/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/geography" element={<Geography/>}/>
         */}


          </Routes>
         

         
        </main>
      </div>

    </ThemeProvider>
 

  </ColorModeContext.Provider>
   
  );
}

export default App;
