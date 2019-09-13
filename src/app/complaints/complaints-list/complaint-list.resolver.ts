import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Complaint} from '../complaint.model';
import {Injectable} from '@angular/core';
import {ComplaintsService} from '../complaints.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ComplaintListResolver implements Resolve<Complaint[]> {
  constructor(private complaintService: ComplaintsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Complaint[]> | Promise<Complaint[]>
    | Complaint[] {
    return this.complaintService.getComplaints().pipe(map(complaints => complaints));
  }
}
