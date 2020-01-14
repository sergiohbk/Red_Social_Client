import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   fileToUpload: File = null;
//
//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
// }
//
// uploadFileToActivity() {
//     this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//       // do something, if upload success
//       }, error => {
//         console.log(error);
//       });
//   }
//
//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'url-servicio-node';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this.httpClient
//       .post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }

}
