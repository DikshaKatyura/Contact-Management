import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store/store";
import Root from "./pages/Root";
import ContactsPage from "./pages/ContactsPage";
import NewContact from "./pages/NewContact";
import ContactsRoot from "./pages/ContactsRoot";
import ContactDetails from "./pages/ContactDetails";
import EditContact from "./pages/EditContact";
import Dashboard from "./pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "contacts",
        element: <ContactsRoot />,
        children: [
          { index: true, element: <ContactsPage /> },
          {
            path: ":contactId",
            children: [
              { index: true, element: <ContactDetails /> },
              { path: "edit", element: <EditContact /> },
            ],
          },
          { path: "new", element: <NewContact /> },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
