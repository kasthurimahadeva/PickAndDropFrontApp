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
  constructor(private http: HttpClient) { }

  getComplaintList() {
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    this.http.get<Complaint[]>(this.baseUrl + 'Complaints', {headers: tokenHeader}).toPromise().then(
      res => {
        this.complaintsList = res;
      }
    );
  }

  getComplaints(): Subject<Complaint[]> {
    const subject = new Subject<Complaint[]>();
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    this.http.get<Complaint[]>(this.baseUrl + 'Complaints', {headers: tokenHeader}).subscribe(
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
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.baseUrl + 'Complaints/' + id, complaint, {headers: tokenHeader});
  }

  findComplaint(id: number) {
    return this.complaintsList.filter(c => c.ComplaintId === id)[0];
  }
}
