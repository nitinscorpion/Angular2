import {Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import {  FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {LoginModel} from './Login/LoginModel'
import { Router } from '@angular/router';
 
@Component({
 
    selector: 'winbeat-web',
    //templateUrl: 'Login.html',  
    templateUrl: 'app.html',
    providers: [FormBuilder]
})


//this.form = fb.group({
//    "userName": ["", Validators.required],
//    "password": ["", Validators.required]
//}
export class AppComponent implements OnInit {
    form: FormGroup;
    loginObj: LoginModel;
    //userName = new FormControl("", Validators.required);
    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.buildForm();
    }
    submitted = false;
    onSubmit() {
        if (!this.form.valid) {

            alert("not validd")
            for (var v in this.form.value) // for acts as a foreach
            { 
                this.onValueChanged();
            }


        }
        debugger;
        localStorage.setItem('currentUser', JSON.stringify({ username: "ebix", token: "123" }));

        this.submitted = true;
        var ab = this.form;
        this.router.navigate(["dashboard"]);

    }

    buildForm(): void {
        this.form = this.fb.group({
            'userName': ["", [Validators.required]],
            'password': ["", [Validators.required]],
        }); 
        this.form.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }
    
    onValueChanged(data?: any) {
        if (!this.form) { return; }
        const form = this.form;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'userName': '',
        'password': ''
    };

    validationMessages = {
        'userName': {
            'required': 'userName is required.',
            //'minlength': 'Name must be at least 4 characters long.',
            //'maxlength': 'Name cannot be more than 24 characters long.',
            //'forbiddenName': 'Someone named "Bob" cannot be a hero.'
        },
        'password': {
            'required': 'password is required.'
        }
    };
}