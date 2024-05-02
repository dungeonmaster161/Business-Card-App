import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (
      <>
        <header>
            <nav>
                <div><Link to={'/'}>Home</Link></div>
                <div className="all-cards"><Link to={'/allBusinessCards'} >All cards</Link></div>
            </nav>
        </header>
        <main>
            <div className="details">
                <Outlet />
            </div>
        </main>
      </>        
    );
  }