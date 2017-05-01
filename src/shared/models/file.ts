export class File {
  fileName: string;
  fileSize: number;
  fileExt: string;
  fileType: string;
  userId: string;
  //link to access in the file repository
  privateLink: string;
  publicLink: string;
  //controle attribute
  active: boolean;
  created_at: Date;
  updated_at: Date;
}
