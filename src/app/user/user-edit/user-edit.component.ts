import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  btn: string = "btn btn-primary";
  saveMsg: string = "Save";

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }

  ngOnInit(): void 
  {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        console.debug("User:", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    );
    
  }
    newChanges(): void
    {
      this.btn = "btn btn-primary";
      this.saveMsg = "Save";
    }

    saveChanges(): void
    {
      this.usersvc.edit(this.user).subscribe(
        res => {
          console.debug("Saved!");
          this.btn = "btn btn-success";
          this.saveMsg = "Saved!";
        },
        err => {
          console.error(err);
        }
      );
    }
}
