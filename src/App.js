import React, { Suspense } from 'react';
import { Loader } from './Loader';
import './styles.css';

const Details = React.lazy(() => {
  // Artificially making loadind the <Details> component take 1 second
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(import('./Details')), 1000);
  });
});

export const App = () => {
  return (
    <>
      <div className='container'>
        <h1 style={{textAlign: "center", paddingTop: "1em", fontFamily: "monospace", fontWeight: "bold", fontSize: "3em", color: "white"}}>React Optimization: Suspense and React.lazy</h1>
        <div className='e7-container' style={{width: "50%", margin: "auto", paddingTop: "2%"}}>
          <div className='e7-content-container'>
            <img src={require('./logo.png')} alt='Restaurant logo' />
            <h1>Your reservation is confirmed.</h1>
          </div>
          <Suspense fallback={<Loader />}>
            <Details />
          </Suspense>
        </div>
      </div>
      <footer style={{textAlign: "center", paddingTop: "2em", paddingBottom: "2em", fontFamily: "monospace", fontWeight: "bold", fontSize: "2em", color: "white"}}>Bucheli Web © 2023</footer>
    </>
  );
};

export default App