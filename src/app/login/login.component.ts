import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  isSubmitted = false;
  isValidLogin;
  usersList = [];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.userService.getUsers().subscribe(value => {
      console.log('For demo users list', value);
      this.usersList = [...value];
    });
    this.formGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    });
    this.formGroup.valueChanges.subscribe(value => {
      this.isSubmitted = false;
    });
  }

  login() {
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      const id = parseInt(this.formGroup.get('id').value);
      const username = this.formGroup.get('username').value;
      const validCredential = this.usersList.find((user) => user.id === id && user.username === username );
      if (validCredential) {
        localStorage.setItem('token', 'jsonToken');
        this.router.navigate(['dashboard']);
      } else {
        this.isValidLogin = false;
        this.router.navigate(['login']);
      }
    }
  }

}
