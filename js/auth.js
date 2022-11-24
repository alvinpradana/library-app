const login = {
    title: "Login",
    subtitle: "Welcome Back, Please Login <br> to your account."
}

const register = {
    title: "Register",
    subtitle: "Welcome Back, Please Register <br> to create account."
}

const loginContent = `
    <div class="shadow rounded-2 mb-3">
        <div class="form-floating">
            <input type="email" class="form-control focus-ring-0 rounded-0 rounded-top" id="email" placeholder="name@example.com" autofocus>
            <label for="email" class="color-primary">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control focus-ring-0 rounded-0 rounded-bottom border-top-0" id="password" placeholder="Password">
            <label for="password" class="color-primary">Password</label>
        </div>
    </div>
    <div class="row d-flex justify-content-between align-items-center mb-5">
        <div class="col-lg-6 col-md-12">
            <div class="form-check">
                <input type="checkbox" id="remember" class="form-check-input">
                <label for="remember" class="form-check-label"><small class="color-secondary">Remember me</small></label>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <p class="color-primary d-sm-none d-lg-block text-end mb-0">
                <small>Forgot password</small>
            </p>
            <p class="color-primary d-lg-none d-sm-block mb-0">
                <small>Forgot password</small>
            </p>
        </div>
    </div>
`

const registerContent = `
    <div class="shadow rounded-2 mb-5">
        <div class="form-floating">
            <input type="text" class="form-control focus-ring-0 rounded-0 rounded-top" id="username" placeholder="yourname" autofocus>
            <label for="username" class="color-primary">Username</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control focus-ring-0 rounded-0 border-top-0" id="fullname" placeholder="John Doe">
            <label for="fullname" class="color-primary">Full name</label>
        </div>
        <div class="form-floating">
            <input type="email" class="form-control focus-ring-0 rounded-0 border-top-0" id="email" placeholder="name@example.com">
            <label for="email" class="color-primary">Email</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control focus-ring-0 rounded-0 rounded-bottom border-top-0" id="password" placeholder="Password">
            <label for="password" class="color-primary">Password</label>
        </div>
    </div>
`

const elTitle = document.getElementById("title")
const elSubtitle = document.getElementById("subtitle")

const formContent = document.getElementById("formContent")

const btnSwitch = document.getElementById("btnSwitch")
btnSwitch.addEventListener("click", function() {
    if (btnSwitch.value == "register") {
        renderLogin()
    } else if (btnSwitch.value == "login") {
        renderRegister()
    }
})

const btnSubmit = document.getElementById("btnSubmit")

function renderLogin() {
    elTitle.innerHTML = login.title
    elSubtitle.innerHTML = login.subtitle
    formContent.innerHTML = loginContent
    btnSubmit.innerText = "Login"
    btnSwitch.innerText = "Sign up"
    btnSwitch.value = 'login'
    document.getElementById("email").focus()
}
renderLogin()

function renderRegister() {
    elTitle.innerHTML = register.title
    elSubtitle.innerHTML = register.subtitle
    formContent.innerHTML = registerContent
    btnSubmit.innerText = "Sign up"
    btnSwitch.innerText = "Login"
    btnSwitch.value = "register"
    document.getElementById("username").focus()
}