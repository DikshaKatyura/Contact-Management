import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Root from './pages/Root';
import ContactsPage from './pages/ContactsPage';
import NewContact from './pages/NewContact';
import ContactsRoot from './pages/ContactsRoot';
import ContactDetails from './pages/ContactDetails';
import EditContact from './pages/EditContact';

const routes = createBrowserRouter([
  {path : '/', element: <Root/>,children:[
    {path : 'contacts', element :<ContactsRoot />, children :[
      {index : true, element : <ContactsPage />},
      {path : ':contactId',children:[
        {index : true, element : <ContactDetails />},
        {path : 'edit',element : <EditContact/>},
      ]},
      {path :'new',element:<NewContact />},
    ]}
  ]},
])

function App() {
  return (
    <Provider store = {store}>
      <RouterProvider router={routes} />
    </Provider>
      
  );
}

export default App;
