import { error } from "console";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file, "file");
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg||jpg||png/;
    const extName = fileType.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileType.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
      }
    else {
        cb(new Error("Inly imges are allod"))
      }
  },
});
