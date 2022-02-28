//Dynamically import the Smart.Scheduler component
const Scheduler = dynamic(() => import('smart-webcomponents-react/scheduler'), {
    ssr: false, //no server-side rendering 
    loading: () =>
      'Loading...'
  });
