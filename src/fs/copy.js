import {copyFile, opendir, mkdir, readdir} from 'node:fs/promises';
import {dirname} from 'node:path';
import { fileURLToPath } from 'node:url';

const folderOriginPath = dirname(fileURLToPath(import.meta.url)) + "/files/"
const folderDestPath = dirname(fileURLToPath(import.meta.url)) + "/files_copy/"

export const copy = async () => {
    // Write your code here 
    try {
        await opendir (folderOriginPath);
        let newFolder = await mkdir(folderDestPath);
        let nestedFiles = await readdir(folderOriginPath, {withTypeFiles: true});
        nestedFiles.forEach ((file) => {
            copyFile(folderOriginPath + file, folderDestPath + file)
            // console.log(file);
        })
    } catch (err) {
        console.log ('something went wrong, error: \n', err);
        throw new Error ("FS operation failed");
    }
};
copy();
