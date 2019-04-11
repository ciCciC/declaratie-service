import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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

@Component ({
  selector: 'app-declaration-table',
  templateUrl: './declaration-table.component.html',
  styleUrls: ['./declaration-table.component.css']
})
export class DeclarationTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IDeclaration>();
  pageSizeOptions = [5, 10, 15];
  private notAcceptableStatus = [StatusEnum.INPROGRESS, StatusEnum.APPROVED];
  actionValue = 'action';
  colNames: string[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private declarationService: DeclarationService, private errorService: ErrorHandlerService,
              private dialog: MatDialog, private router: Router) { }

  getDeclarationsList() {
    this.declarationService.getDeclarations().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  checkStatus(statusToCheck: StatusEnum) {
    return !this.notAcceptableStatus.some( status => status === statusToCheck);
  }

  initTableColumnNames() {
    this.colNames = ['beschrijving', 'bedrag', 'datum', 'status'];
    this.displayedColumns = Declaration.getPropertyNamesForTableComponent();
    this.displayedColumns.push('action');
  }

  createClick() {
    this.router.navigateByUrl('/declarationcreate');
    // this.router.navigate(['/declarationcreate']);
  }

  toDelete(declaration: Declaration) {

    if (declaration.status === StatusEnum.INPROGRESS) {
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
    const dialogRefUpdate = this.dialog.open(DeclarationUpdateComponent, {data: selected});
    dialogRefUpdate.afterClosed().subscribe(resultOfUpdate => {
      this.getDeclarationsList();
    });
  }

  private deleteDeclaration(declaration: Declaration) {
    this.declarationService.deleteDeclaration(declaration.id).subscribe(data => {
      this.getDeclarationsList();
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  // private declarationListFilter(declaration: Declaration) {
  //   this.dataSource.data = this.dataSource.data.filter(u => u !== declaration);
  // }

  ngOnInit() {
    // this.paginator._intl.itemsPerPageLabel = 'Items per pagina:';
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.initTableColumnNames();
    this.getDeclarationsList();
  }

  ngOnDestroy(): void {
  }

}
