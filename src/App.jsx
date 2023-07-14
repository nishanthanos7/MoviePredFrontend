// import { useState } from "react";
// import JSONDATA from "./assets/MOCK_DATA.json";
// import "./App.css";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <>
//       <div className="App">
//         <input
//           type="text"
//           placeholder="search..."
//           onChange={(event) => setSearchTerm(event.target.value)}
//         />

//         {JSONDATA.filter((val) => {      //filter is used to filter out the items
//           if (searchTerm === "") {
//             return val;
//           } else if (
//              val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
//           ) {
//             return val;
//           }
//         }).map((val, key) => {          //map is used to display the list or names or content
//           return (
//             <div className="user" key={key}>
//               <p>{val.first_name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import "./App.css";
// import JSONDATA from "./assets/MOCK_DATA.json";
// function App() {
//   const [input, setInput] = useState("")

//   const filteredList = JSONDATA.filter((item) => {
//     return item.first_name.toLowerCase().includes(input.toLowerCase())
//   });

//   const toRenderData = filteredList.map(item => {
//     return <p> {item.first_name}</p>
//   })
//   return (
//     <>
//       to
//       <div className="App">
//         <input type="text" placeholder="search" onChange={e => setInput(e.target.value)} />
//         <div className="names">
//          {toRenderData}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handlePlus = () =>  setCount(count + 1)
//   const handleMinus = () =>  setCount(count - 1)

//   return (
//     <div>
//       <div className="counter">
//          <div className="display_count">
//           {count}
//          </div>

//         <button onClick={handleMinus}>-</button>
//         <button onClick={handlePlus}>+</button>

//       </div>
//     </div>
//   );
// }

// export default App;

//React code for disply

// import React, { useState } from "react";

// const App = () => {
//   const [showText, setShowText] = useState(false);
//   const handleClick = () => {
//     setShowText(!showText);
//   };

//   return (
//     <div>
//       {showText ? <h1>hello world</h1> : <p></p>}
//       <button onClick={handleClick}>show text</button>
//     </div>
//   );
// };

// export default App;

//build a accordion

// import React, { useState } from 'react';

// const FormValidationExample = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form is valid, submit the data or perform further actions
//       console.log('Form is valid:', formData);
//     } else {
//       // Form is invalid, display errors or handle accordingly
//       console.log('Form is invalid:', errors);
//     }
//   };

//   const validateForm = () => {
//     const errors = {};

//     // Validate name field
//     if (!formData.name.trim()) {
//       errors.name = 'Name is required';
//     }

//     // Validate email field
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!isValidEmail(formData.email)) {
//       errors.email = 'Invalid email format';
//     }

//     // Validate password field
//     if (!formData.password.trim()) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const isValidEmail = (email) => {
//     // Basic email validation regex pattern
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         {errors.name && <span className="error">{errors.name}</span>}
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidationExample;

// accordion in react

// import Accordion from "./Accordion";
// const App = () => {
//   return (
//     <div>
//       <h1>Accordion example</h1>
//       <Accordion title="section 1" content="content for section 1 " />
//       <Accordion title="hey open me" content="hello world  " />
//       <Accordion title="section 3" content="content for section 3 " />
//       <Accordion title="section 4" content="content for section 4 " />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////

// import React from 'react'

// const App = () => {
//   const list = [

//     {id:1 , name: "nishan"},
//     {id:1 , name: "poudel"},
//     {id:1 , name: "harry"}

//   ]
//   return (
//     <div>
//     {list.map((item => {
//       return <li key={item.id}>{item.name}</li>
//     }))}

//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//     const images = [
//       {link:'https://images.unsplash.com/photo-1648457259767-e3a7fea65a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'}
//     ]
//   return (
//     <div>
//     {images.map(image => {
//         return <img src={image.link} alt="" />
//     })}

//     </div>
//   )
// }

// export default App;
////////////////////////////////////////////

///////////////////////////

// const App = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => {

//     setIsOpen(true)

//   };

//   const handleMouseLeave = () => {

//     setIsOpen(false)

//   };

//   const options = ["option 1", 'option 2', 'option 3'];
//   return (
//     <div>
//       <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Dropdown</button>
//       <hr />
//       {isOpen && (
//         <div className='dropdown-content' >
//           {options.map((option, index) => {
//            return (
//             <>

//             <div key={index}>{option}</div>
//            <hr />
//             </>
//             )

//           })}
//         </div>
//       )}
//     </div>
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";
import MoviesSlider from "./MovieSlider";
import BannerSlider from "./assets/BannerSlider";
import axios from "axios";
import { useEffect } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movies/")
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);
  console.log(movieData);
  if (!movieData.length) {
    return <div>Loading...</div>;
  }

  

  return (
    <div>
      {movieData.map((movie) => (
        <MovieList key={movie.id} title={movie.title} id={movie.id}  />

      ))}

      <button>login</button>
      <button>registration</button>
    </div>
  );
};

export default App;

{
  /* <div className="header">
        <div>
          <div className="logo">
            <img
              src="https://img.sflix.to/xxrz/400x400/100/66/35/66356c25ce98cb12993249e21742b129/66356c25ce98cb12993249e21742b129.png"
              alt=""
            />
          </div>
        </div>

        <form action="submit">
          <div className="search-box">
            <input type="text" />
          </div>

          <button className="">Search</button>
        </form>
      </div>

      <hr />

      <div className="user-image">
        <img src="" alt="" />
      </div>

      <div className="image-banner">
        image banner
        <BannerSlider />
        <img src="" alt="" />
      </div>

      <hr />

      <div className="new-movies">
        new movies slider
        <MoviesSlider movies={movies} />
      </div>

      <hr />

      <div className="sentiment">
        positive or negative <br />
        display sentiment when searched
      </div> */
}
