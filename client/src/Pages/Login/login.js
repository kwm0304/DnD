var attempt = 3;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "dungeons" && password == "dragons1") {
        alert("Login successfully");
        window.location = "loggedin.html";
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");

        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
return (
    <html>

        <head>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
            <link href="./style.css" rel="stylesheet"></link>
        </head>

        <body>

            <nav id="navbar">
                <a class="nav-lins" href="#home">Login</a>
                <a class="nav-lins" href="#dashboard">Dashboard</a>
                <a class="nav-lins" href="#logout">Logout</a>
            </nav>

            <div class="sidenav">
                <div class="login-main-text">
                    <h2>Logo Pic<br></br> Login form</h2>
                    <p>Login or register for access</p>
                </div>
            </div>
            <div class="main">
                <div class="col-md-6 col-sm-12">
                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" placeholder="User Name"></input>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password"></input>
                            </div>
                            <button type="submit" class="btn btn-black">Login</button>
                            <button type="submit" class="btn btn-secondary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </body>

    </html>
)