import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Declaration} from '../../models/Declaration';
import {DeclarationViewComponent} from '../declaration-view/declaration-view.component';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {StatusEnum} from '../../models/StatusEnum';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {Router} from '@angular/router';
import {DeclarationUpdateComponent} from '../declaration-update/declaration-update.component';
import {RestEnum} from '../../models/RestEnum';
import {MessageCreator} from '../../models/MessageCreator';
import {NotificationService} from '../../services/notificationService/notification.service';

@Component ({
  selector: 'app-declaration-table',
  templateUrl: './declaration-table.component.html',
  styleUrls: ['./declaration-table.component.css']
})
export class DeclarationTableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IDeclaration>();
  pageSizeOptions = [5, 10, 15];
  private notAcceptableStatus = [StatusEnum.INPROGRESS, StatusEnum.APPROVED];
  actionValue = 'action';
  colNames: string[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private declarationService: DeclarationService, private errorService: ErrorHandlerService,
              private dialog: MatDialog, private router: Router, private notificationService: NotificationService) {
  }

  getDeclarationsList() {
    this.declarationService.getDeclarations().subscribe(data => {
      this.dataSource.data = data;
    }, (error) => {
      this.errorService.handleError(error);
    });

    // this.declarationService.getMocks().subscribe(data => {
    //   this.dataSource.data = data;
    // });
  }

  checkStatus(statusToCheck: StatusEnum) {
    return !this.notAcceptableStatus.some( status => status === statusToCheck);
  }

  initTableColumnNames() {
    this.colNames = ['beschrijving', 'bedrag', 'datum', 'status'];
    this.displayedColumns = Declaration.getPropertyNamesForTableComponent();
    this.displayedColumns.push('action');
  }

  createDeclaration() {
    this.router.navigateByUrl('/declarations/create');
    // this.router.navigateByUrl('/declarationcreate');
    // this.router.navigate(['/declarationcreate']);
  }

  // TODO
  pageClick(event: PageEvent) {
    // console.log(event.previousPageIndex);
    // console.log(event.pageSize);
    // console.log(event.pageIndex);
    //
    // const startVanaf = event.pageIndex * event.pageSize;
    // console.log('Start vanaf [i]: ' + startVanaf);
    //
    // const amount = (startVanaf + event.pageSize);
    //
    // if (amount < this.dataSource.data.length ) {
    //   console.log('Aantal: ' + event.pageSize);
    // } else {
    //   console.log('Aantal: ' + (this.dataSource.data.length - event.pageSize));
    // }
    //
    // const tot = event.pageSize;
    // console.log('Start vanaf [i]: ' + String(event.pageIndex * event.pageSize));
  }

  toDelete(declaration: Declaration) {
    this.dialog.closeAll();

    if (declaration.status === StatusEnum.INPROGRESS || declaration.status === StatusEnum.APPROVED) {
      this.errorService.unableToProcess(declaration.status);
    } else {

      const dialogRef = this.dialog.open(MessageDialogComponent, {data: MessageCreator.toDelete()});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteDeclaration(declaration);
        }
      });
    }
  }

  openDialog(selected: Declaration) {
    const dialogRefView = this.dialog.open(DeclarationViewComponent, {data: selected});
    dialogRefView.afterClosed().subscribe(result => {
      if (result === RestEnum.delete) {
        this.deleteDeclaration(selected);
      } else if (result === RestEnum.update) {
        this.openUpdateDialog(selected);
      }
    });
  }

  private openUpdateDialog(selected: Declaration) {
    const dialogRefUpdate = this.dialog.open(DeclarationUpdateComponent, {data: selected, disableClose: true});
    dialogRefUpdate.afterClosed().subscribe(resultOfUpdate => {
      setTimeout(() => {
        this.getDeclarationsList();
      }, 1000);
    });
  }

  private deleteDeclaration(declaration: Declaration) {
    this.declarationService.deleteDeclaration(declaration.id).subscribe(data => {
      this.notificationService.deleteConfirmation();
      this.getDeclarationsList();
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.initTableColumnNames();
    this.getDeclarationsList();
  }

}
