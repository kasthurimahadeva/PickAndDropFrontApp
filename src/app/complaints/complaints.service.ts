import { Injectable } from '@angular/core';
import {Complaint} from './complaint.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  complaintsList: Complaint[] = [];
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getComplaintList() {
    this.http.get<Complaint[]>(this.baseUrl + 'Complaints').toPromise().then(
      res => {
        this.complaintsList = res;
      }
    );
  }

  getComplaints(): Subject<Complaint[]> {
    const subject = new Subject<Complaint[]>();

    this.http.get<Complaint[]>(this.baseUrl + 'Complaints').subscribe(
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
    return this.http.put(this.baseUrl + 'Complaints/' + id, complaint);
  }

  findComplaint(id: number) {
    return this.complaintsList.filter(c => c.ComplaintId === id)[0];
  }
}
