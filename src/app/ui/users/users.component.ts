import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { HttpResponse } from '@angular/common/http';
import { IResponseListUsers } from 'src/app/domain/users/users.dto';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { HttpStatusCode } from 'src/app/core/constants/statusCode.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFields } from 'src/app/core/constants/authentication.fields';
import swal from 'sweetalert2';
import { userCreateSuccess } from '../../core/constants/sweetalert.config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userListData: any;
  formCreateUser!: FormGroup;

  constructor(private usersServices: UsersService, private router: Router, private localstorage: LocalStorageService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fetchUserData();
    this.formCreateUsers();
  }

  formCreateUsers() {
    this.formCreateUser = this.formBuilder.group(UserFields);
  }

  fetchUserData(): void {
    this.usersServices.getUsers().subscribe(
      (response: HttpResponse<IResponseListUsers>) => {
        this.userListData = response.body?.data
      }
    )
  }

  createUsersData() {
    this.usersServices.createUser(this.formCreateUser.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.Created) {
        swal.fire(userCreateSuccess);
      }
    })
  }

  logout() {
    this.localstorage.removeItem();
    this.router.navigateByUrl('/users/login')
  }
}
