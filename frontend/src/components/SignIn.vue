<template>
  <div>
    <Header />

    <div class="container">

    <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-upload" aria-selected="true">Log in</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-verify" aria-selected="false">Register</a>
        </li>
    </ul>

    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
            <div class="row">
                <div class="col-md-12">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="">Email:</label>
                            <input type="email" required class="form-control" placeholder="eg moyoa@bcx.co.za" v-model="model.email">
                        </div>
                        
                        <div class="form-group">
                            <label for="">Password:</label>
                            <input type="password" required class="form-control" placeholder="Enter Password" v-model="model.password">
                        </div>
                        
                        <div class="form-group">
                            <button class="btn btn-success btn-light btn-large" >Login</button>
                            {{ loading }}
                            {{ status }}
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
            <div class="row">
                <div class="col-md-12">
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="">FullName:</label>
                            <input type="text" required class="form-control" placeholder="eg Moyo" v-model="model.name">
                        </div>

                        <div class="form-group">
                            <label for="">Email:</label>
                            <input type="email" required class="form-control" placeholder="eg moyoa@bcx.co.za" v-model="model.email">
                        </div>
                        
                        <div class="form-group">
                            <label for="">Company Name:</label>
                            <input type="text" required class="form-control" placeholder="eg Minimax Studios" v-model="model.company_name">
                        </div>
                        <div class="form-group">
                            <label for="">Password:</label>
                            <input type="password" required class="form-control" placeholder="Enter new Password" v-model="model.password">
                        </div>
                        <div class="form-group">
                            <label for="">Confirm Password:</label>
                            <input type="password" required class="form-control" placeholder="Confirm new Passowrd" v-model="model.c_password">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary" >Register</button>
                            {{ loading }}
                            {{ status }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
    import Header from "./Header";
    import axios from "axios";

    export default {
        name: "SignIn",
        components: {
            Header
        },
        data() {
            return {
                model: {
                    name: "",
                    email: "",
                    password: "",
                    c_password: "",
                    company_name: ""
                },
                loading: "",
                status: ""
            };
        },
        methods: {
            validate() {
                // checks all the form params are set and the passwords match
                if (this.model.password != this.model.c_password) {
                    return false;
                }

                return true;
            },
            register() {
                const formData = new FormData();
                let valid = this.validate();
                if(valid) {
                    formData.append("name", this.model.name);
                    formData.append("email", this.model.email);
                    formData.append("company_name", this.model.company_name);
                    formData.append("password", this.model.password);

                    this.loading = "We are Registering you, please wait......................"
                    //posting to server
                    axios.posts("http://localhost:3122/register", formData)
                }
            }
        }
    }
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #fd6690;
}
</style>