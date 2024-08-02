import { Component } from "react";
import './style.css'
class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="container">
                    <nav className="navbar navbar-expand-lg  bg-blue">
                        <div className="container-fluid">
                            <a className="navbar-brand " href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam, rerum ad soluta dicta suscipit, sapiente ullam maxime deserunt voluptates, fugit est aspernatur quas. Amet ducimus veritatis optio autem earum?
                    Similique commodi sed amet velit tenetur hic autem consequatur consequuntur saepe voluptate. Reprehenderit vitae esse voluptatum nisi tenetur quae enim error cum magnam nihil, ut cupiditate, odio in deserunt animi.
                    Quia corporis ea minus deleniti nisi id, eligendi quo sed facilis cum maxime quasi? Eius perferendis maxime iste blanditiis ratione maiores corporis eum repudiandae repellendus, eligendi repellat quasi, asperiores ad.
                    Aspernatur omnis quae iste eveniet ab nobis commodi accusantium maiores iusto veritatis, assumenda ipsa reprehenderit sint velit neque, expedita corrupti pariatur nihil possimus libero! Inventore quidem consectetur sunt ipsam accusamus.
                    Cupiditate corporis reiciendis modi et fuga repellat, asperiores earum sit eum facere recusandae ratione. Molestias praesentium eaque expedita dolorem itaque ab, necessitatibus dicta nulla, obcaecati suscipit, quae error provident reprehenderit!</p>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <form action="/action_page.php">
                    <label htmlfor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" defaultvalue="John" /><br />
                    <label htmlfor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" defaultvalue="Doe" /><br /><br />
                    <input type="submit" defaultvalue="Submit" />
                </form>
            </div>
        )
    }
}

export { Home, About, Contact }