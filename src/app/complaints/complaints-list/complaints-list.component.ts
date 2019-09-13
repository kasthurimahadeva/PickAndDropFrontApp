import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Complaint} from '../complaint.model';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {
  displayedColumns: string[] = ['ComplaintId', 'name', 'email', 'CreatedDateTime', 'Status'];
  dataSource: MatTableDataSource<Complaint>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  complaints: Complaint[] = [];
  status = ['All', 'Pending', 'Resolved', 'Move to High level'];

  constructor(private route: ActivatedRoute) {
    // this.complaints.push({
    //   ComplaintId: 1,
    //   ComplaintContent: 'xxxxx',
    //   CustomerName: 'xxx',
    //   EmailAddress: 'xxxx',
    //   CreatedDateTime: new Date(),
    //   Status: 'Pending'
    // });
    //
    // this.complaints.push({
    //   ComplaintId: 2,
    //   ComplaintContent: 'xxxxx',
    //   CustomerName: 'xxx',
    //   EmailAddress: 'xxxx',
    //   CreatedDateTime: new Date(),
    //   Status: 'Pending'
    // });
    //
    // this.complaints.push({
    //   ComplaintId: 3,
    //   ComplaintContent: 'xxxxx',
    //   CustomerName: 'xxx',
    //   EmailAddress: 'xxxx',
    //   CreatedDateTime: new Date(),
    //   Status: 'Pending'
    // });
    this.complaints = this.route.snapshot.data.complaints;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.complaints);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
