import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Complaint} from '../complaint.model';
import {ComplaintsService} from '../complaints.service';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {
  displayedColumns: string[] = ['No', 'name', 'email', 'CreatedDateTime', 'Status', 'open'];
  dataSource: MatTableDataSource<Complaint>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  complaints: Complaint[] = [];
  status = ['All', 'New', 'Pending', 'Resolved', 'Move to High level'];

  constructor(private route: ActivatedRoute,
              private complaintService: ComplaintsService) {
    this.complaints = this.route.snapshot.data.complaints;
    this.complaintService.complaintsList = this.complaints;
    this.complaints.reverse();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.complaints);
    // console.log(this.complaints.forEach((complaint) => complaint.CreatedDateTime));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // // tslint:disable-next-line:use-lifecycle-interface
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
}
