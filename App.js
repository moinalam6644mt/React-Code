// import "./App.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Demo from './Components/Routing/Demo';
// import Menu from './Components/Routing/Menu';
// import Demo2 from './Components/Routing/Demo2';
// import Getid from './Components/Routing/Getid';
// import Getdata from './Components/Routing/Getdata'
// import Buttonnav from './Components/Routing/Buttonnav'
// import Courses from './nested/Courses'
// import Home from './nested/Home'
// import List from './nested/List'
// import Search from './nested/Search'
// import Api1 from "./Components/axios/Api1";



// function App() {

//     //     const [isSignedIn, setIsSignedIn] = useState(null);

//     //     const signin = () => {
//     //         setIsSignedIn(true);
//     //     }
//     //     const signout = () => {
//     //         setIsSignedIn(false);
//     //     }
//     //     return (
//     //         <div>
//     //             <BrowserRouter>
//     //                 <Routes>
//     //                     <Route path="/" element={<Menu />}></Route>
//     //                     <Route path="/Demo1" element={
//     //                         <>
//     //                             <Menu />
//     //                             <Demo />
//     //                         </>
//     //                     } />
//     //                     <Route path="/Demo2" element={
//     //                         <>
//     //                             <Menu />
//     //                             <Demo2 />
//     //                         </>
//     //                     } />
//     //                     <Route path="/Getid/:eid" element={
//     //                         <>
//     //                             <Menu />
//     //                             <Getid />
//     //                         </>
//     //                     } />
//     //                     <Route path="/Demo4" element={<><Menu /><Getdata /></>} />
//     //                     <Route path="/nav" element={<><Menu /> <Buttonnav /></>} />
//     //                 </Routes>
//     //             </BrowserRouter>
//     //         </div>
//     //     )
//     // }

//     // export default App
// } return (

//     <div>
//         <BrowserRouter>
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/courses">Courses</Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/courses" element={<Courses />}>
//                     <Route path="search" element={<Search />} />
//                     <Route path="list" element={<List />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </div>
// )


// export default App

// // <div>
// //   <div>
// //     <h2>reactm protected Routes Example</h2>
// //     <BrowserRouter>
// //       <MenuBar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />

// //         <Route
// //           path="/dashboard"
// //           element={
// //             <Protected isSignedIn={isSignedIn}>
// //               <Dashboard />
// //             </Protected>
// //           }
// //         />

// //         <Route
// //           path="/product"
// //           element={
// //             <Protected isSignedIn={isSignedIn}>
// //               <Product />
// //             </Protected>
// //           }
// //         />
// //       </Routes>

// //       {isSignedIn ? (
// //         <div>
// //           <button onClick={signout}>sign Out</button>
// //         </div>
// //       ) : (
// //         <div>
// //           <button onClick={signin}>Sign In</button>
// //         </div>
// //       )}

// //     </BrowserRouter>

// //   );
// // export default App;


// // import React from 'react'
// // // import FoodRecipes from './Components/Test/AddApi'
// // import Tablelist from './Components/Class Component/Tablelist'
// // import Hooksnew2 from './Components/Functional Component/Hooksnew2'

// // const App = () => {

// //     return (
// //         <div>
// {/* <Api3 /> */ }
// {/* <Api5 /> */ }
// {/* <DataApi /> */ }
// {/* <Product /> */ }
// {/* <Login /> */ }
// {/* <Form2 /> */ }
// {/* <FetchApi /> */ }
// {/* <Suspense fallback={
//                 <h2>hello dear plz wait</h2>
//             }>
//                 <FetchApi2 />
//             </Suspense> */}
// {/* <Lazy /> */ }
// {/* <Store /> */ }
// {/* <Test1 /> */ }
// {/* <Data /> */ }
// {/* <Items /> */ }
// {/* <DataApi /> */ }
// {/* <FoodRecipes /> */ }
// {/* <Tablelist /> */ }
// //             <Hooksnew2 />




// //         </div>
// //     )
// // }

// // export default App

// // import logo from './logo.svg';
// // import './App.css';
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// // import { useState } from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Home from './Private/Home';
// // import Products from './Private/Product';
// // import Dashboard from './Private/Dashboard';
// // import MenuBar from './Private/MenuBar';
// // import Protected from './Private/Protected';

// // function App() {

// //     const [isSignedIn, setIsSignedIn] = useState(null);

// //     const signin = () => {
// //         setIsSignedIn(true)
// //     }

// //     const signout = () => {
// //         setIsSignedIn(false)
// //     }

// //     return (
// //         <>

// //             <BrowserRouter>
// //                 <MenuBar />
// //                 <Routes>
// //                     <Route path="/" element={<Home />} />
// //                     <Route
// //                         path="/dashboard"
// //                         element={
// //                             <Protected isSignedIn={isSignedIn}>
// //                                 <Dashboard />
// //                             </Protected>
// //                         }
// //                     />
// //                     <Route
// //                         path="/products"
// //                         element={
// //                             <Protected isSignedIn={isSignedIn}>
// //                                 <Products />
// //                             </Protected>
// //                         }
// //                     />
// //                 </Routes>

// //                 {isSignedIn ? (
// //                     <div className="d-grid mt-5">
// //                         <button className="btn-danger" onClick={signout}>
// //                             Sign out
// //                         </button>
// //                     </div>
// //                 ) : (
// //                     <div className="d-grid mt-5">
// //                         <button className="btn-dark" onClick={signin}>
// //                             Sign in
// //                         </button>
// //                     </div>
// //                 )}
// //             </BrowserRouter>
// //         </ >
// //     )
// // }

// // export default App;


import "./App.css";

import Apiex4 from "./Components/axios/Api5";

function App() {
    return (
        <div>
            <Apiex4 />
        </div>
    );
}

export default App;

