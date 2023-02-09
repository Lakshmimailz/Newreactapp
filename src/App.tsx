import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Playerinfo } from './components/player-info';
import { PlayerUpdateForm } from './components/updateinfo';



const queryClient = new QueryClient();

// Sometimes you will find components with a convention endining in provider
// Your components are wrapped in between the provder tag
// that provider component will inject some functionality into every wrapped component

function App() {

  //query client provider will allow us to use custom hooks provided by react query
  return <>
  <QueryClientProvider client={queryClient}>

    <Playerinfo/> 
    <PlayerUpdateForm/>

  </QueryClientProvider>
  </>
}
export default App;