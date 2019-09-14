import { Injectable } from '@angular/core';
import {Complaint} from './complaint.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  formData: Complaint;
  complaintsList: Complaint[] = [];
  baseUrl = 'https://localhost:5001/api/';
  tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
  constructor(private http: HttpClient) { }

  getComplaintList() {
    this.http.get<Complaint[]>(this.baseUrl + 'Complaints', {headers: this.tokenHeader}).toPromise().then(
      res => {
        this.complaintsList = res;
      }
    );
  }

  getComplaints(): Subject<Complaint[]> {
    const subject = new Subject<Complaint[]>();

    this.http.get<Complaint[]>(this.baseUrl + 'Complaints', {headers: this.tokenHeader}).subscribe(
      complaints => subject.next(complaints),
      err => {
        subject.error(err);
      }
      ,
      () => subject.complete()
    );
    return subject;
  }

  saveComplaint(complaint: Complaint) {
    return this.http.post(this.baseUrl + 'Complaints', complaint);
  }

  updateComplaint(id: number, complaint: Complaint) {
    return this.http.put(this.baseUrl + 'Complaints/' + id, complaint, {headers: this.tokenHeader});
  }

  findComplaint(id: number) {
    return this.complaintsList.filter(c => c.ComplaintId === id)[0];
  }
}
