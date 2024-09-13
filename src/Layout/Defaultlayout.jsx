import { 
   Outlet,
 } from 'react-router-dom'
function DefaultLayout(){
    return(
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Student Manager</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse pull-right" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/students">Students</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  
        <div className='container'>
          <Outlet/>
        </div>
      </>
    )
  }

  export default DefaultLayout