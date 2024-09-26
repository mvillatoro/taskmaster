// import Image from "next/image";
// import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Name } from "./userTypes";

import {
  createClient,
  // QueryResult,
  // QueryData,
  // QueryError,
} from "@supabase/supabase-js";
const supabaseUrl = "https://ivjghlocpshzvwrcizrm.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2amdobG9jcHNoenZ3cmNpenJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczMDQ5MjksImV4cCI6MjA0Mjg4MDkyOX0.j3mWvtWWrmMK6MMtzU62H6RXPCgxkr6yI6ulBoSrzyQ"; //process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface HomeProps {
  names: Name[];
}

export default async function Home() {
  const { data: names, error } = await supabase
    .from("users")
    .select(
      `id, username, role, password, salt, taskCount, taskStreak, created_at`
    );

  if (error) {
    console.error("Error fetching names:", error);
    return <p>Error loading names</p>;
  }

  console.log(names);

  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {names?.map((name: Name) => (
          <li key={name.id}>{name.username}</li>
        ))}
      </ul>
    </div>
    // <div className="container mt-5">
    //   <div className="row d-flex justify-content-center">
    //     <div className="col-3 mt-5">
    //       {/* <!-- Pills navs <!-- */}
    //       <ul
    //         className="nav nav-pills nav-justified mb-3"
    //         id="ex1"
    //         role="tablist"
    //       >
    //         <li className="nav-item" role="presentation">
    //           <a
    //             className="nav-link active"
    //             id="tab-login"
    //             data-mdb-pill-init
    //             href="#pills-login"
    //             role="tab"
    //             aria-controls="pills-login"
    //             aria-selected="true"
    //           >
    //             Login
    //           </a>
    //         </li>
    //         <li className="nav-item" role="presentation">
    //           <a
    //             className="nav-link"
    //             id="tab-register"
    //             data-mdb-pill-init
    //             href="#pills-register"
    //             role="tab"
    //             aria-controls="pills-register"
    //             aria-selected="false"
    //           >
    //             Register
    //           </a>
    //         </li>
    //       </ul>
    //       {/* <!-- Pills navs <!-- */}
    //       {/* <!-- Pills content <!-- */}
    //       <div className="tab-content ">
    //         <div
    //           className="tab-pane fade show active"
    //           id="pills-login"
    //           role="tabpanel"
    //           aria-labelledby="tab-login"
    //         >
    //           <form className="mt-5">
    //             {/* <div className="text-center mb-3">
    //               <p>Sign in with:</p>
    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-facebook-f"></i>
    //               </button>

    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-google"></i>
    //               </button>

    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-twitter"></i>
    //               </button>

    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-github"></i>
    //               </button>
    //             </div>
    //             <p className="text-center">or:</p> */}
    //             {/* <!-- Email input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input type="email" id="loginName" className="form-control" />
    //               <label className="form-label" htmlFor="loginName">
    //                 Email or username
    //               </label>
    //             </div>
    //             {/* <!-- Password input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input
    //                 type="password"
    //                 id="loginPassword"
    //                 className="form-control"
    //               />
    //               <label className="form-label" htmlFor="loginPassword">
    //                 Password
    //               </label>
    //             </div>
    //             {/* <!-- 2 column grid layout <!-- */}
    //             <div className="row mb-4">
    //               <div className="col-md-6 d-flex justify-content-center">
    //                 {/* <!-- Checkbox <!-- */}
    //                 <div className="form-check mb-3 mb-md-0">
    //                   <input
    //                     className="form-check-input"
    //                     type="checkbox"
    //                     value=""
    //                     id="loginCheck"
    //                     checked
    //                   />
    //                   <label className="form-check-label" htmlFor="loginCheck">
    //                     {" "}
    //                     Remember me{" "}
    //                   </label>
    //                 </div>
    //               </div>

    //               <div className="col-md-6 d-flex justify-content-center">
    //                 {/* <!-- Simple link <!-- */}
    //                 <a href="#!">Forgot password?</a>
    //               </div>
    //             </div>
    //             {/* <!-- Submit button <!-- */}

    //             <div className="d-flex justify-content-center">
    //               <button
    //                 type="submit"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-primary btn-block mb-4"
    //               >
    //                 Sign in
    //               </button>
    //             </div>

    //             {/* <!-- Register buttons <!-- */}
    //             <div className="text-center">
    //               <p>
    //                 Not a member? <a href="#!">Register</a>
    //               </p>
    //             </div>
    //           </form>
    //         </div>
    //         <div
    //           className="tab-pane fade"
    //           id="pills-register"
    //           role="tabpanel"
    //           aria-labelledby="tab-register"
    //         >
    //           <form>
    //             <div className="text-center mb-3">
    //               <p>Sign up with:</p>
    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-facebook-f"></i>
    //               </button>

    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-google"></i>
    //               </button>

    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-twitter"></i>
    //               </button>

    //               <button
    //                 type="button"
    //                 data-mdb-button-init
    //                 data-mdb-ripple-init
    //                 className="btn btn-link btn-floating mx-1"
    //               >
    //                 <i className="fab fa-github"></i>
    //               </button>
    //             </div>
    //             <p className="text-center">or:</p>
    //             {/* <!-- Name input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="registerName"
    //                 className="form-control"
    //               />
    //               <label className="form-label" htmlFor="registerName">
    //                 Name
    //               </label>
    //             </div>
    //             {/* <!-- Username input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="registerUsername"
    //                 className="form-control"
    //               />
    //               <label className="form-label" htmlFor="registerUsername">
    //                 Username
    //               </label>
    //             </div>
    //             {/* <!-- Email input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input
    //                 type="email"
    //                 id="registerEmail"
    //                 className="form-control"
    //               />
    //               <label className="form-label" htmlFor="registerEmail">
    //                 Email
    //               </label>
    //             </div>
    //             {/* <!-- Password input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input
    //                 type="password"
    //                 id="registerPassword"
    //                 className="form-control"
    //               />
    //               <label className="form-label" htmlFor="registerPassword">
    //                 Password
    //               </label>
    //             </div>
    //             {/* <!-- Repeat Password input <!-- */}
    //             <div data-mdb-input-init className="form-outline mb-4">
    //               <input
    //                 type="password"
    //                 id="registerRepeatPassword"
    //                 className="form-control"
    //               />
    //               <label
    //                 className="form-label"
    //                 htmlFor="registerRepeatPassword"
    //               >
    //                 Repeat password
    //               </label>
    //             </div>
    //             {/* <!-- Checkbox <!-- */}
    //             <div className="form-check d-flex justify-content-center mb-4">
    //               <input
    //                 className="form-check-input me-2"
    //                 type="checkbox"
    //                 value=""
    //                 id="registerCheck"
    //                 checked
    //                 aria-describedby="registerCheckHelpText"
    //               />
    //               <label className="form-check-label" htmlFor="registerCheck">
    //                 I have read and agree to the terms
    //               </label>
    //             </div>
    //             {/* <!-- Submit button <!-- */}
    //             <button
    //               type="submit"
    //               data-mdb-button-init
    //               data-mdb-ripple-init
    //               className="btn btn-primary btn-block mb-3"
    //             >
    //               Sign in
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //       {/* <!-- Pills content <!-- */}
    //     </div>
    //   </div>
    // </div>
  );
}
